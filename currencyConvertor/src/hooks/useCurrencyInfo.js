import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  console.log(currency);
  const [data, setData] = useState({});

  useEffect(() => {

    fetch(
      `https://v6.exchangerate-api.com/v6/d906671dc2c8b98ada1a5da5/latest/${currency}`
    )
      .then((res) => res.json())
      .then((responseData) => {

        setData(responseData.conversion_rates);

        console.log(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
