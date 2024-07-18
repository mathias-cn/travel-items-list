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
        <div className="bg-green-300 py-10 text-center text-orange-950">
            {totalItens === 0 && (
                <p className="text-2xl font-semibold">🚀 Start adding some items to your packing list</p>
            )}

            {totalItens > 0 && totalItens !== itemsPacked && (
                <p className="text-2xl font-semibold">💼 You have {totalItens} item(s) on your list, and you already packed {itemsPacked} ({percentagePacked}%)</p>
            )}

            {totalItens > 0 && totalItens === itemsPacked && (
                <p className="text-2xl font-semibold">🚀 Everything packed and ready to go!</p>
            )}
        </div>
    )
}