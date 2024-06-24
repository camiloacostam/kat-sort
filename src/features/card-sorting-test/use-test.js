import { useState } from "react";
import { createTestApi } from "./test-api";

export default function useTest() {
  const [testSummary, setTestSummary] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return { testSummary, setTestSummary, createTest, loading, error };
}
