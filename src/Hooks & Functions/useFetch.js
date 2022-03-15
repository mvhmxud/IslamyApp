import  { useEffect, useState } from "react";
import axios from "axios";
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHandler=()=>{
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);

      })
      .finally(() => {
        setLoading(false);
      });
      console.log(data)

  }

  return {data , loading , error ,fetchHandler }
}

export default useFetch;
