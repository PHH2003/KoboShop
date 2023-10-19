import { useProductRedux } from "../../redux/hook/useProductReducer"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Itemproduct from '~/app/components/parts/item-product/item-product.component';

const MainProductComponent = () => {
    const {
        data: { products },
        actions
    } = useProductRedux() 
    useEffect(()=> {
        actions.getAllProducts()
    },[])
  return (
    <div>
        <div className="grid grid-cols-5 gap-10">
        {products?.map((item:any, index: any)=>( 
                <Link to={`/detail/${item._id}`}>
                    <Itemproduct itemproduct={item} key={index +1}/>
                </Link>        
        ))}
        </div>
    </div>
  )
}

export default MainProductComponent