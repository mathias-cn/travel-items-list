import { FormEvent } from "react";
import { Input } from "./input";

interface FormProps {
    addItemToList: (event: FormEvent<HTMLFormElement>) => void
}

export function Form({ addItemToList }: FormProps) {
    return (
        <div className="py-10 flex flex-wrap items-center justify-center gap-4 bg-orange-500 text-orange-950 font-semibold">
            <p className="text-2xl">What do you need for your trip?</p>

            <form className="flex gap-2" onSubmit={addItemToList}>
                <Input 
                    type="select"
                    name="quantity"
                    id="quantity" 
                    options={Array.from({ length: 10 }, (_, index) => ({
                        value: (index + 1).toString(),
                        text: (index + 1).toString(),
                    }))} 
                />

                <Input 
                    type="text"
                    name="item"
                    id="item"
                    placeholder="Item..."    
                />

                <Input type="submit" placeholder="ADD" name="add" id="add" />
            </form>
        </div>
    )
}