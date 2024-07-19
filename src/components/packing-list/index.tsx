import { ChangeEvent, MouseEvent } from "react"
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
    changeOrderList: (event: ChangeEvent<HTMLSelectElement>) => void
    openConfirmClearModal: () => void
    orderItems: string
}

export function PackingList({ items, removeItemFromList, changePackedStatus, openConfirmClearModal, changeOrderList, orderItems }: PackingListProps) {
    function checkBeforeModalOpen() {
        items.length == 0
        ? null
        : openConfirmClearModal()
    }

    function orderDisplayedItems(itemsArray: Item[]): Item[] {
        if (orderItems === "description") {
            return itemsArray.slice().sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
        }

        if (orderItems === "status") {
            return itemsArray.slice().sort((a, b) => {
                return a.packed === b.packed ? 0 : a.packed ? 1 : -1;
            });
        }

        return itemsArray;
    }

    return (
        <div className="bg-orange-950 p-12 flex-1 flex flex-col items-center justify-between">
            <div className="text-orange-200 text-xl flex flex-wrap items-start gap-8 md:gap-16 w-full max-w-5xl ">
                {items.length == 0 && (
                    <p>You don't have items in your list</p>
                )}

                {orderDisplayedItems(items).map(({ qty, name, packed }) => {
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
                        {value: "default", text: "SORT BY INPUT ORDER"},
                        {value: "description", text: "SORT BY DESCRIPTION"},
                        {value: "status", text: "SORT BY PACKED STATUS"},
                    ]}
                    changeOrderList={changeOrderList}
                />
                <button type="button" className="outline-none h-11 py-2 px-4 rounded-full bg-orange-200" onClick={checkBeforeModalOpen}>CLEAR LIST</button>
            </div>
        </div>
    )
}