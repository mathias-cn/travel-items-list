interface Item {
    qty: string
    name: string
    packed: boolean
}

interface PackedCountProps {
    items: Item[]
}

export function PackedCount({ items }: PackedCountProps) {
    const totalItens = items.length
    const itemsPacked = items.filter(i => i.packed === true).length
    const percentagePacked = ((itemsPacked / totalItens) * 100).toFixed(0)

    return (
        <div className="bg-green-300 py-10 text-center text-orange-950 font-semibold text-lg px-2 md:text-2xl">
            {totalItens === 0 && (
                <p>🚀 Start adding some items to your packing list</p>
            )}

            {totalItens > 0 && totalItens !== itemsPacked && (
                <p>💼 You have {totalItens} item(s) on your list, and you already packed {itemsPacked} ({percentagePacked}%)</p>
            )}

            {totalItens > 0 && totalItens === itemsPacked && (
                <p>🚀 Everything packed and ready to go!</p>
            )}
        </div>
    )
}