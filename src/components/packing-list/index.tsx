import { MouseEvent } from "react"
import { Input } from "../input"
import { Item } from "./components/item"

interface Item {
    qty: string
    name: string
    packed: boolean
}

interface PackingListProps {
    items: Item[]
    removeItemFromList: (event: MouseEvent<HTMLButtonElement>) => void
    changePackedStatus: (event: React.ChangeEvent<HTMLInputElement>) => void
    openConfirmClearModal: () => void
}

export function PackingList({ items, removeItemFromList, changePackedStatus, openConfirmClearModal }: PackingListProps) {
    function checkBeforeModalOpen() {
        items.length == 0
        ? null
        : openConfirmClearModal()
    }

    return (
        <div className="bg-orange-950 p-12 flex-1 flex flex-col items-center justify-between">
            <div className="text-orange-200 text-xl flex flex-wrap items-start gap-8 md:gap-16 w-full max-w-5xl ">
                {items.length == 0 && (
                    <p>You don't have items in your list</p>
                )}
                
                {items.map(({ qty, name, packed }) => {
                    return (
                        <Item qty={qty} name={name} packed={packed} key={name} removeItemFromList={removeItemFromList} changePackedStatus={changePackedStatus} />
                    )
                })}
            </div>

            <div className="flex flex-wrap gap-2 font-semibold">
                <Input 
                    type="select"
                    id="order"
                    name="order"
                    options={[
                        {value: "order", text: "SORT BY INPUT ORDER"},
                        {value: "description", text: "SORT BY DESCRIPTION"},
                        {value: "status", text: "SORT BY PACKED STATUS"},
                    ]}
                />
                <button type="button" className="outline-none h-11 py-2 px-4 rounded-full bg-orange-200" onClick={checkBeforeModalOpen}>CLEAR LIST</button>
            </div>
        </div>
    )
}