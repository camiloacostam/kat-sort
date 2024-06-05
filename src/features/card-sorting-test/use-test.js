import { useState } from 'react'

export default function useTest() {
  const [questions, setQuestions] = useState([])
  const [cards, setCards] = useState([])
  const [columns, setColumns] = useState([])

  const addQuestion = (question) => {
    setQuestions([...questions, question])
  }

  const updateQuestion = (index, newQuestion) => {
    const updatedQuestions = questions.map((q, i) =>
      i === index ? newQuestion : q
    )
    setQuestions(updatedQuestions)
  }

  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index)
    setQuestions(updatedQuestions)
  }

  const addCard = (card) => {
    setCards([...cards, card])
  }

  const removeCard = (cardId) => {
    setCards(cards.filter((c, index) => index !== cardId))
  }

  const updateCard = (index, newCard) => {
    const updatedCard = cards.map((q, i) => (i === index ? newCard : q))
    setCards(updatedCard)
  }

  const addColumn = (column) => {
    setColumns([...columns, column])
  }

  const removeColumn = (index) => {
    const updatedColumn = columns.filter((_, i) => i !== index)
    setColumns(updatedColumn)
  }

  const updateColumn = (index, newColumn) => {
    const updatedColumn = columns.map((q, i) => (i === index ? newColumn : q))
    setColumns(updatedColumn)
  }

  return {
    questions,
    addQuestion,
    updateQuestion,
    setQuestions,
    removeQuestion,
    cards,
    addCard,
    updateCard,
    setCards,
    removeCard,
    columns,
    addColumn,
    setColumns,
    removeColumn,
    updateColumn
  }
}
