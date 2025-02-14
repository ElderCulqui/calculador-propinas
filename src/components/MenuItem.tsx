import { MenuItem as Item } from '../types'

type Props = {
    item: Item,
    addItem: (item: Item) => void
}

function MenuItem({item, addItem}: Props) {
  return (
    <>
        <button 
            className="border-2 border-teal-400 hover:bg-teal-200 p-3 w-full flex justify-between"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    </>
  )
}

export default MenuItem