import {useEffect, useState} from 'react';
import axios from 'axios';

export const useRequest = ({url, method, body = null, headers = null}) => {
  const [data, setdata] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url,
          method,
          data: body,
          headers
        });
        setdata(response.data);

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },[url, method, body, headers]);

  return {data, error, loading};
};
