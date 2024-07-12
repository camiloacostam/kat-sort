import { useState } from "react";
import { getTestByAccessLinkApi } from "./test-api";
import { startTestApi, saveAnswersApi, completeTestApi } from "./solution-api";

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

  const startTest = async (testId, userEmail) => {
    setLoading(true);
    setError(null);

    try {
      const sort = [
        { id: "column-cards", category: "Cartas", cards: test?.cards },
        ...test.categories.map((category, index) => ({
          id: `column-${index}`,
          category,
          cards: [],
        })),
      ];

      const data = await startTestApi(testId, userEmail, sort);
      setSolution({ ...data?.solution });

      return data;
    } catch (err) {
      setError(err.response ? err.response.data : "Error desconocido");

      return err;
    } finally {
      setLoading(false);
    }
  };

  const saveAnswers = async (answers) => {
    if (!solution?._id) return false;

    setLoading(true);
    setError(null);

    try {
      const answersArray = Object.values(answers);
      const data = await saveAnswersApi(solution._id, answersArray);
      setSolution({ ...data?.solution });

      return data;
    } catch (err) {
      setError(err.response ? err.response.data : "Error desconocido");
      return err;
    } finally {
      setLoading(false);
    }
  };

  const completeTest = async (sort) => {
    if (!solution?._id) return false;

    setLoading(true);
    setError(null);

    try {
      const data = await completeTestApi(solution._id, sort);
      setSolution({ ...data?.solution });

      return data;
    } catch (err) {
      setError(err.response ? err.response.data : "Error desconocido");
      return err;
    } finally {
      setLoading(false);
    }
  };

  return {
    test,
    solution,
    getTest,
    startTest,
    saveAnswers,
    completeTest,
    loading,
    error,
  };
}
