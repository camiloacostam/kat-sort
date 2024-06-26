import { useState } from "react";
import { createTestApi, getUserTestsApi } from "./test-api";

export default function useTest() {
  const [testSummary, setTestSummary] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tests, setTests] = useState([]);

  const createTest = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await createTestApi(testSummary);

      return result;
    } catch (err) {
      setError(err.response ? err.response.data : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  const getUserTest = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUserTestsApi();
      setTests(data);
    } catch (err) {
      setError(err.response ? err.response.data : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return {
    tests,
    testSummary,
    getUserTest,
    setTestSummary,
    createTest,
    loading,
    error,
  };
}
