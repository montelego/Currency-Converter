import {useEffect, useState} from 'react';

const CurrencyConverter () => {
const [currencies,setCurrencies] = useState([]);
const [amount, setAmount] = useState(1);

  // "api.frankfurter.app/currencies"
  //Currencies -> https://api.frankfurter.app/currencies

const fetchCurrencies =async () => {
  try {
    const res = await fetch("https://api.frankfurter.app/currencies")
    const data = await res.json()

    setCurrencies(data);
  }catch (error) {
    console.error("Error Fetching", error);
  }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  console.log(currencies);


  //Currencies -> https:api.frankfurter.app/latest?amount=1&from=USD$to=ZAR

  return (
    // A BOX STYLE AROUND A CURRENCY CONVERTER
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl font-semibold text-gray-700">
        Currency Converter
      </h2>

      <div>Dropdowns</div>

      {/* STYLING AMOUNT TEXT */}
      <div className="mt-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount:
        </label>

        {/* STYYLING THE BORDER INPUT FOR THE AMOUNT */}
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focu:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* STYLE FOR THE CONVERT BUTTON.*/}
      <div className="flex justify-end mt-6">
        <button className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focu:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Convert
        </button>
      </div>

      <div className="mt-4 text-lg font-medium text-right text-green-600">
        Converted Amount: 00 USD
      </div>
    </div>
  );
}

export default CurrencyConverter;
