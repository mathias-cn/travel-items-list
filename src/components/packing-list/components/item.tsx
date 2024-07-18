import { MouseEvent } from "react"

interface Item {
    qty: string
    name: string
    packed: boolean
}

interface ItemProps {
    qty: string
    name: string
    packed: boolean
    removeItemFromList: (event: MouseEvent<HTMLButtonElement>) => void
    changePackedStatus: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Item({ qty, name, packed, removeItemFromList, changePackedStatus, ...props }: ItemProps) {
    if(packed) {
        return (
            <div {...props} className="text-orange-200 flex gap-2 items-center" data-name={name}>
                <input type="checkbox" checked onChange={changePackedStatus} />
                <p className="line-through">{qty} {name}</p>
                <button type="button" className="text-red-500 font-bold"  onClick={removeItemFromList}>X</button>
            </div>
        )
    }

    return (
        <div {...props} className="text-orange-200 flex gap-2 items-center" data-name={name}>
            <input type="checkbox" onChange={changePackedStatus} />
            <p>{qty} {name}</p>
            <button type="button" className="text-red-500 font-bold" onClick={removeItemFromList}>X</button>
        </div>
    )
}