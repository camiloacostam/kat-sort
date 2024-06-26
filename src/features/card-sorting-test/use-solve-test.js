import { useState } from "react";
import { getTestByAccessLinkApi } from "./test-api";
import { startTestApi } from "./solution-api";

export default function useSolveTest() {
  const [test, setTest] = useState({});
  const [solution, setSolution] = useState(null); // [1
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

  const startTest = async (testId, userId) => {
    setLoading(true);
    setError(null);

    try {
      const data = await startTestApi(testId, userId);
      setSolution(data?.solutionId);

      return data;
    } catch (err) {
      setError(err.response ? err.response.data : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return {
    test,
    solution,
    getTest,
    startTest,
    loading,
    error,
  };
}
