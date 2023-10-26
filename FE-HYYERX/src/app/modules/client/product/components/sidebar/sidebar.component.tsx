import { css } from "@emotion/react"
import { usePCategoryRedux } from "../../../redux/hook/useCategoryReducer"
import { FC, useEffect } from "react"

interface ISaidBarComponent {
    selectedCategory?: any
    onSelectCategory?: any
    onSelectPriceRange?: any
    selectedPriceRange?: any
}

const SidebarComponent: FC<ISaidBarComponent> = ({selectedCategory, onSelectCategory,onSelectPriceRange, selectedPriceRange}) => {
    const {
        data: { categorys },
        actions
    } = usePCategoryRedux()
    useEffect(() => {
        actions.getAllCategorys()
    }, [])
    const handelSelectCategory = (dataId: any) => {
        onSelectCategory(dataId)
    }
    const handleShowAll = () => {
        onSelectCategory(null);
    };

    const handleSelectPriceRange = (priceRange: any) => {
        onSelectPriceRange(priceRange);
    };
  return (
    <div css={cssSaidbar}>
            <div>
                <h3 className="bg-[#ededed] py-2 font-semibold px-3 text-center">Category</h3>
                <div className="mt-2 text-center">
                    <p onClick={handleShowAll}>Show all</p>
                    {categorys?.map((item: any, index: any) => (
                        <p key={index + 1} onClick={()=>handelSelectCategory(item._id)}>
                            {item?.name}
                        </p>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="bg-[#ededed] py-2 font-semibold px-3 mt-2 text-center">price filter</h3>
                <div className="text-center">
                    <p onClick={() => handleSelectPriceRange("1-10")}>1$ to 10$</p>
                    <p onClick={() => handleSelectPriceRange("11-20")}>11$ to 20$</p>
                </div>
            </div>
        </div>
  )
}

export default SidebarComponent 

const cssSaidbar = css`
p{
    padding:5px 7px;
    font-size:15px;
}
p:hover{
    color:#BF0000;
    background:#ededed;
}
`