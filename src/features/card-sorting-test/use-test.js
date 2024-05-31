import { useState } from 'react'

export default function useTest() {
  const [questions, setQuestions] = useState([])
  const [columns, setColumns] = useState([])
  const [cards, setCards] = useState([])

  const addQuestion = (question) => {
    setQuestions([...questions, question])
    console.log(questions)
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
    addColumn,
    addCard,
    removeCard,
    removeColumn,
    removeQuestion
  }
}
