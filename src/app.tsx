import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { Form } from "./components/form";
import { Logo } from "./components/logo";
import { PackedCount } from "./components/packed-count";
import { PackingList } from "./components/packing-list";
import { ClearListModal } from "./components/clear-list-modal";

interface Item {
  qty: string
  name: string
  packed: boolean
}


export function App() {
  const [items, setItems] = useState<Item[]>([])
  const [orderItems, setOrderItems] = useState("default")
  const [isConfirmClearModalOpen, setIsConfirmClearModalOpen] = useState(false)

  function addItemToList(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  
    const data = new FormData(event.currentTarget)
    const name = data.get('item')?.toString() ?? ""
    const qty = data.get('quantity')?.toString() ?? ""

    if(!data.get('item')) {
      return
    }

    const names = items.map(i => i.name)
    if(names.includes(name)) {
      alert(`O item ${name} já está adcionado`)
      return
    }

    setItems([
      ...items,
      { qty, name, packed: false}
    ])

    event.currentTarget.reset()
  }
  function removeItemFromList(event: MouseEvent<HTMLButtonElement>) {
    const targetEl = event.target as HTMLButtonElement
    const targetElement = targetEl.parentElement as HTMLElement
    const targetName = targetElement.dataset.name
    const newItemList = items.filter(i => i.name !== targetName)

    setItems(newItemList)
  }
  function changePackedStatus(event: React.ChangeEvent<HTMLInputElement>) {
    const checkbox = event.target;
    const targetName = checkbox.dataset.name;
  
    if (!targetName) {
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.name === targetName
          ? { ...item, packed: checkbox.checked }
          : item
      )
    );
  }
  function clearList() {
    closeConfirmClearModal()
    setItems([])
  }

  function changeOrderList(event: ChangeEvent<HTMLSelectElement>) {
    const targetValue = event.currentTarget.value

    setOrderItems(targetValue)
  }

  function openConfirmClearModal() {
    setIsConfirmClearModalOpen(true)
  }
  function closeConfirmClearModal() {
    setIsConfirmClearModalOpen(false)
  }
  

  return (
    <div className="flex flex-col h-screen">
      {isConfirmClearModalOpen && (
        <ClearListModal 
          closeConfirmClearModal={closeConfirmClearModal}
          clearList={clearList}
        />
      )}
      <Logo />
      <Form addItemToList={addItemToList} />
      <PackingList 
        items={items}
        removeItemFromList={removeItemFromList} 
        changePackedStatus={changePackedStatus} 
        openConfirmClearModal={openConfirmClearModal} 
        changeOrderList={changeOrderList}
        orderItems={orderItems}
      />
      <PackedCount items={items} />
    </div>
  )
}
