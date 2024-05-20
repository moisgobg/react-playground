import { useState, useEffect, useCallback } from "react";

export const useFetch = <T>(
  fetchFunction: () => Promise<T>
): { data: T | null; loading: boolean; error: Error | null } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(
    async () => {
      setLoading(true);
      try {
        const result = await fetchFunction();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    },
    [fetchFunction]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};