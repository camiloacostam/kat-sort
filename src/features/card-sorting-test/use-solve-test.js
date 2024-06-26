import { useState } from "react";
import { getTestByAccessLinkApi } from "./test-api";

export default function useSolveTest() {
  const [test, setTest] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTest = async (accessLink) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getTestByAccessLinkApi(accessLink);
      setTest(data);
      return data;
    } catch (err) {
      setError(err.response ? err.response.data : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return {
    test,
    getTest,
    loading,
    error,
  };
}
