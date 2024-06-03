import { useState } from 'react'

export default function useTest() {
  const [questions, setQuestions] = useState([''])
  const [columns, setColumns] = useState([])
  const [cards, setCards] = useState([])

  const addQuestion = (question) => {
    setQuestions([...questions, question])
  }

  const updateQuestion = (index, newQuestion) => {
    const updatedQuestions = questions.map((q, i) =>
      i === index ? newQuestion : q
    )
    setQuestions(updatedQuestions)
  }

  const addColumn = (column) => {
    setColumns([...columns, column])
  }

  const addCard = (card) => {
    setCards([...cards, card])
  }

  const removeCard = (cardId) => {
    setCards(cards.filter((c, index) => index !== cardId))
  }

  const removeColumn = (columnId) => {
    setColumns(columns.filter((c, index) => index !== columnId))
  }

  const removeQuestion = (questionId) => {
    setQuestions(questions.filter((q, index) => index !== questionId))
  }

  return {
    questions,
    columns,
    cards,
    addQuestion,
    updateQuestion,
    setQuestions,
    addColumn,
    addCard,
    removeCard,
    removeColumn,
    removeQuestion
  }
}
