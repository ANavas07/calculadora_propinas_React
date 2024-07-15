import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"
import { MenuItem } from "../types"


type OrderContentProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem["id"]) => void
}

export default function OrderContents({ order, removeItem }: OrderContentProps) {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>
            <div className="space-y-3 mt-10">
                {
                    order.map(orderItem => (
                        <div className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b" key={orderItem.id}>
                            <div className="">
                                <p className="text-lg">{orderItem.name} - {formatCurrency(orderItem.price * orderItem.quantity)}</p>
                                <p className="font-black">Cantidad:{orderItem.quantity}</p>
                            </div>

                            <button
                                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                                onClick={() => removeItem(orderItem.id)}>
                                X</button>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}