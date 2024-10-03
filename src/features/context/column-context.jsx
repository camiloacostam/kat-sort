import { createContext, useContext, useState } from 'react'
// next UI imports
import { useDisclosure } from '@nextui-org/react'

const ColumnContext = createContext()

export const useColumns = () => useContext(ColumnContext)

export const ColumnProvider = ({ children }) => {
  const [columns, setColumns] = useState([])
  const [selectedColumn, setSelectedColumn] = useState(null)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const addColumns = (newCategory) => {
    const { category } = newCategory
    const newColumns = [
      ...columns,
      {
        id: `column-${columns.length + 1}`,
        category: category,
        cards: [],
        comment: null,
        isErasable: true
      }
    ]
    setColumns(newColumns)
  }

  const addCommentToColumn = (comment) => {
    const categoryToCommentIndex = columns.findIndex(
      (column) => column.id === selectedColumn.id
    )
    const newColumns = [...columns]
    newColumns[categoryToCommentIndex].comment = comment
    setColumns(newColumns)
    setSelectedColumn(null)
    return newColumns
  }

  const deleteColumn = (columnId) => {
    const newColumns = columns.filter((column) => column.id !== columnId)
    setColumns(newColumns)
  }

  return (
    <ColumnContext.Provider
      value={{
        isCommentModalOpen: isOpen,
        onOpenCommentModal: onOpen,
        onOpenCommentModalChange: onOpenChange,
        columns,
        setColumns,
        selectedColumn,
        setSelectedColumn,
        addColumns,
        deleteColumn,
        addCommentToColumn
      }}
    >
      {children}
    </ColumnContext.Provider>
  )
}
