import type { Product } from "../types/product.type"
import { useCartStore } from "../store/cart.store"
import { Trash2 } from "lucide-react"
import { useEffect, useState } from "react"

interface CartProductRowProps {
  products: Product[]
}

const CartProductRow = ({ products }: CartProductRowProps) => {
  return (
    <>
      {products.map((item) => (
        <CartProductRowItem key={item.id} item={item} />
      ))}
    </>
  )
}

function CartProductRowItem({ item }: { item: Product }) {
  const { 
    increaseCount, 
    decreaseCount, 
    removeFromCart,
    cart,
    setQuantity } =
  useCartStore()

  const cartItem = cart.find((c) => c.id === item.id)
  if (!cartItem) return null

  const quantity = cartItem.quantity
  const subtotal = item.price * quantity

  const [inputValue, setInputValue] = useState(String(quantity))

  useEffect(() => {
    setInputValue(String(quantity))
  }, [quantity])

  const handleChange = (raw: string) => {
    const digits = raw.replace(/\D/g, "")
    // allow empty while typing
    if (raw === "") {
      setInputValue("")
      return
    }
    setInputValue(digits)
  }

  const commit = () => {
    const val = inputValue.replace(/\D/g, "")
    if (!val || Number(val) < 1) {
      setQuantity(item.id, 1)
      setInputValue("1")
    } else {
      setQuantity(item.id, Number(val))
    }
  }

  return (
    <div className="grid grid-cols-4 items-center gap-6 rounded-sm bg-white px-6 py-5 shadow-sm mt-4">
      {/* Product */}
      <div className="flex items-center gap-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-16 w-16 rounded object-cover"
        />
        <div>
          <p className="text-sm font-medium">{item.title}</p>
          <p className="text-xs text-gray-500">{item.category}</p>
        </div>
      </div>

      {/* Price */}
      <div className="text-base font-semibold">${item.price.toFixed(2)}</div>

      {/* Quantity */}
      <div className="flex items-center border border-gray-300 rounded-sm overflow-hidden w-max">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={inputValue}
          className="w-10 text-center text-sm py-1 focus:outline-none"
          onChange={(e) => handleChange(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              commit()
            }
          }}
        />

        {/* Buttons */}
        <div className="flex flex-col">
          <button
            onClick={() => increaseCount(item.id)}
            className="px-2 py-0.5 text-xs hover:bg-gray-100 transition"
          >
            ▲
          </button>
          <button
            onClick={() => decreaseCount(item.id)}
            disabled={quantity <= 1}
            className="px-2 py-0.5 text-xs hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ▼
          </button>
        </div>
      </div>


      {/* Subtotal + Remove */}
      <div className="flex items-center justify-between">
        <span className="text-base font-semibold">${subtotal.toFixed(2)}</span>
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-2 text-gray-400 hover:text-red-500 transition"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  )
}

export default CartProductRow
