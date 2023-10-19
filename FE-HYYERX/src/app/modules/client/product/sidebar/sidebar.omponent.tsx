import { css } from "@emotion/react"
import { usePCategoryRedux } from "../../redux/hook/useCategoryReducer"
import { useEffect } from "react"

const SidebarComponent = () => {
    const {
        data: { categorys },
        actions
    } = usePCategoryRedux()
    useEffect(() => {
        actions.getAllCategorys()
    }, [])
  return (
    <div css={cssSaidbar}>
            <div>
                <h3 className="bg-[#ededed] py-2 font-semibold px-3 ">Category</h3>
                <div>
                    {categorys?.map((item: any, index: any) => (
                        <p key={index + 1}>
                            {item?.name}
                        </p>
                    ))}


                </div>
            </div>

            <div>
                <h3 className="bg-[#ededed] py-2 font-semibold px-3 mt-2">price filter</h3>
                <div>
                    <p>1$ to 10$</p>
                    <p>11$ to 20$</p>
                    <p>21$ to 30$</p>
                    <p>31$ to 40$</p>
                    <p>41$ to 50$</p>
                    <p>51$ to 60$</p>
                    <p>61$ to 70$</p>
                    <p>71$ to 80$</p>
                    <p>81$ to 90$</p>
                    <p>over 90$</p>
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