import { FunctionComponent } from 'react'
interface QuantityComponentProps {
    setQuantity(value: number): void
    quantity: number | string
    listQuantityRemain: any
}
const QuantityCompoennt: FunctionComponent<QuantityComponentProps> = (
    {
        setQuantity,
        listQuantityRemain,
        quantity,
    }) => {
    return (
        <div>

            <div className='flex border border-solid border-gray-300 max-w-max rounded-lg'>
                <div
                    className='px-4 py-3 border-r border-solid border-gray-300 cursor-pointer hover:bg-red-200'
                >
                    -
                </div>
                <input
                    type='text'
                    value={quantity}
                    className='outline-none w-[40px] text-center focus:border-red-400'

                />
                <div
                    className={`px-4 py-3 border-l border-solid border-gray-300 cursor-pointer hover:bg-red-200 '
                        }`}
                >
                    +
                </div>
            </div>
        </div>
    )
}

export default QuantityCompoennt