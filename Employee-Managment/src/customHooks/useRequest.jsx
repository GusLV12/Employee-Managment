import { useState, useCallback } from 'react';
import axios from 'axios';

export const useRequest = ({ url, method }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const makeRequest = useCallback(
    async ({ body = null, headers = null } = {}) => {
      setLoading(true);
      try {
        const response = await axios({
          url,
          method,
          data: body,
          headers,
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [url, method]
  );

  return { data, error, loading, makeRequest };
};
