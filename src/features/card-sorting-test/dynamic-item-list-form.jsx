import { Input, Button } from '@nextui-org/react'

export default function DynamicItemListForm({
  items = [],
  onAddItem,
  onRemoveItem
}) {
  const handleAddItem = (event) => {
    event.preventDefault()
    onAddItem(event.target.cardTitle.value)
  }

  return (
    <form onSubmit={handleAddItem}>
      <div className="flex  space-y-1.5">
        <Input label="Titulo " id="title" />
        <Button color="primary" type="submit">
          Agregar
        </Button>
      </div>
      <div>
        <ul>
          {items &&
            items.map((item, index) => (
              <li key={index}>
                <div className="flex justify-center items-center gap-4">
                  <Input
                    id="item"
                    value={item}
                    label={`Carta ${index + 1}`}
                    type="text"
                  />
                  <Button color="error" onClick={() => onRemoveItem(index)}>
                    Eliminar
                  </Button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </form>
  )
}
