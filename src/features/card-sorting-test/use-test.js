import { useState } from "react";
import { createTestApi, getUserTestsApi, getTestDetailApi } from "./test-api";

export default function useTest() {
  const [testSummary, setTestSummary] = useState({});
  const [testDetail, setTestDetail] = useState({});
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

  const getTestDetail = async (testId) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getTestDetailApi(testId);
      setTestDetail(data);
      return data;
    } catch (err) {
      setError(err.response ? err.response.data : "Error desconocido");
      return err;
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
    getTestDetail,
    testDetail,
    loading,
    error,
  };
}
