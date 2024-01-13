import { useForm } from 'react-hook-form'
import Accordin from '../../components/Accordin/Accordin'
import Breadcrumb from '../../components/Breadcrumb'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import Radio from '../../components/Radio'
import RadioGroup from '../../components/RadioGroup'
import { useEffect, useState } from 'react'
import CartDetail from './CartDetail'
import { getProduct } from '../../services/productService'
import { getCartByUser, getProductsByCart } from '../../services/cartService'
import CartPayment from './CartPayment'

const Cart = () => {
    const [totalCost, setTotalCost] = useState(0);
    const [products, setProducts] = useState([])
    

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getCartByUser(1)
            if (result) {
                let listProductCart = []
                const listProduct = result[0].arrayProduct
                const products = await getProductsByCart(
                    listProduct.map((item) => item.product_id)
                )

                for (let i = 0; i < products.length; i++) {
                    const title = products[i].title
                    const category = products[i].category
                    const linkImage = products[i].linkImage
                    const price =
                        products[i].options[listProduct[i].optionIndex].price
                    const weight =
                        products[i].options[listProduct[i].optionIndex].weight
                    const quantity = listProduct[i].quantity

                    listProductCart.push({
                        title: title,
                        category: category,
                        linkImage: linkImage,
                        weight: weight,
                        price: price,
                        quantity: quantity,
                    })
                }
                setProducts(listProductCart)
                const total = products.reduce((total, item) => {
                    const price = item.price * item.quantity;
                    return total + price;
                }, 0)
                setTotalCost(total);
            }
        }
        fetchApi();
    }, [])

    return (
        <>
            <div className="page-header">
                <Breadcrumb targetFormat="snake"></Breadcrumb>
                <div className="page-header__title">Cart</div>
            </div>

            <div className="section-cart">
                <div className="section-cart__wrap">
                    <div className="section-cart__col-1">
                        <CartDetail />
                    </div>
                    <div className="section-cart__col-2">
                        <CartPayment total={totalCost}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
