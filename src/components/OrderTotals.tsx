import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type Props = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

function OrderTotals({order, tip, placeOrder}: Props) {

    const subTotalAmount = useMemo(() => order.reduce((acc, item) => 
        acc + (item.price * item.quantity), 0), 
    [order])

    const tipAmount = useMemo(() => subTotalAmount * tip, [order, tip])

    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [subTotalAmount, tipAmount])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propinas:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-50"
                disabled={totalAmount === 0}
                onClick={placeOrder}
            >
                Guardar Orden
            </button>
        </>
    )
}

export default OrderTotals