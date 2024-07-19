import { ChangeEvent } from "react"

interface Option {
    value: string
    text: string
}

interface InputProps {
    type: string
    name: string
    id: string
    placeholder?: string
    options?: Option[]
    changeOrderList?: (event: ChangeEvent<HTMLSelectElement>) => void
}

export function Input({ type, name, id, placeholder, options, changeOrderList }: InputProps) {
    if(type === "select") {
        return (
            <select onChange={changeOrderList} name={name} id={id} className="outline-none h-11 py-2 px-4 rounded-full bg-orange-200">
                {options?.map(({ value, text }) => {
                    return(
                        <option key={value} value={value}>{text}</option>
                    )
                })}
            </select>
        )
    }
    if(type === "submit") {
        return (
            <button type="submit" className="outline-none h-11 py-2 px-4 rounded-full bg-green-300">{placeholder}</button>
        )
    }
    return (
        <input type={type} name={name} id={id} placeholder={placeholder} className="outline-none h-11 py-2 px-4 rounded-full bg-orange-200 placeholder-gray-500" />
    )
}