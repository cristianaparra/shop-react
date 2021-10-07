import Axios from "axios";
import React, { useState, useEffect } from "react";

function useGetProducts(API) {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const response = await Axios(API);
    setProducts(response.data);
  }, []);
  return products;
}

export default useGetProducts;
