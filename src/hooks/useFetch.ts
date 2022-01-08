import { useState, useEffect } from 'react';

const useFetch = ({ query }: any) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    if (!query) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const response = await query();
      setError(null);
      setData(response);
    } catch (err: any) {
      setError(err?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    error,
    data,
    refetch: fetchData,
  };
};

export default useFetch;
