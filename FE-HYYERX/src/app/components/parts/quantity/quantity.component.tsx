import { FunctionComponent, useEffect, useState } from 'react'
interface QuantityComponentProps {
    setQuantity(value: number): void
    quantity: number | string
    listQuantityRemain: any
}
const QuantityComponent: FunctionComponent<QuantityComponentProps> = (
    {
        setQuantity,
        listQuantityRemain,
        quantity,
    }) => {
        const [quantityCodition, setQuantityCodition] = useState<any>()
        useEffect(()=> {
            if(listQuantityRemain){
                if(quantity > listQuantityRemain.quantity){
                    setQuantity(listQuantityRemain.quantity)
                }setQuantityCodition(listQuantityRemain)
            }
            else{
                setQuantityCodition(0)
            }
        },[listQuantityRemain])

        const handleDecreament = () =>{
            setQuantity(Number(quantity) == 1 ? 1 : Number(quantity) -1)
        }

        const handleIncreament =() =>{
            if(quantity < listQuantityRemain.quantity ){
                setQuantity(Number(quantity) + 1)
            }
            if(quantity == listQuantityRemain.quantity){
                setQuantity(listQuantityRemain.quantity)
            }
        }

        const handleChangeInput = (event: any) => {
            if(event.target.value.match('^[0-9]*$')){
                if(event.target.value.trim() !== '' && Number(event.target.value.trim())<1){
                    setQuantity(1)
                }
                else {
                    if(Number(event.target.value)>listQuantityRemain.quantity ){
                        setQuantity(listQuantityRemain.quantity)
                    }
                    else {
                        setQuantity(event.target.value)
                    }
                }
            }
        }

    return (
        <div>

            <div className='flex border border-solid border-gray-300 max-w-max rounded-lg'>
                <div
                    className='px-4 py-3 border-r border-solid border-gray-300 cursor-pointer hover:bg-red-200'
                    onClick={handleDecreament}
                >
                    -
                </div>
                <input
                    type='text'
                    value={quantity}
                    className='outline-none w-[40px] text-center focus:border-red-400'
                    onChange={handleChangeInput}

                />
                <div
                    className='px-4 py-3 border-l border-solid border-gray-300 cursor-pointer hover:bg-red-200 '
                    onClick={handleIncreament}                    
                >
                    +
                </div>
            </div>
        </div>
    )
}

export default QuantityComponent