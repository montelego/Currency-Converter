/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa6";

const CurrencyDropdown = ({
  currencies,
  currency,
  setCurrency,
  // favorites,
  handleFavorite,
  title = "",
}) => {
  // const isFavorite = curr => favorites.inCludes(curr)

  return (
    <div>
      <label
        htmlFor="{title}"
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>

      <div className="mt-1 relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {/* render favorites */}
          {favorites.map((currencies) => {
            return (
              <option className="bg-gray-200" value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
          <hr />
          {currencies?.map((currency) => {
            // currency.map is not a function
            return (
              <option value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
        </select>

        <button
          onClick={() => handleFavorite(currency)}
          className="absolute insert-y-0 pr-5 flex iterms-center text-sm leading-5"
        >
          {/* {isFavorite(currency)?
          } */}
          <FaRegStar /> {/*STAR ICON (FaRegstar) FROM react-icons */}
        </button>
      </div>
    </div>
  );
};

export default CurrencyDropdown;
