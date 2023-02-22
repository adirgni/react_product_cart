import './Product.css'
import data from '../../data/data';
import { useState } from 'react';

const Product = ({ addToCart }) => {

    const [likes, setLikes] = useState(0);
    const incrementLikes = () => { setLikes(likes + 1) }
    const decrementLikes = () => { setLikes(likes - 1) }

    return (
        <div className='list_of_products'>
            {
                data.map((item, index) => (
                    <div key={index} className='one_product'>
                        <h4 className='item_title'>{item.name}</h4>
                        <div>
                            <button className='btn-like' onClick={incrementLikes}>Like</button>
                            <button className='btn-like' onClick={decrementLikes}>Unlike</button>
                            <span className='like-text' > Like rating: {likes}</span>
                        </div>
                        <img src={item.imageUrl} alt="product photo" />
                        <div className='item_description_div'>
                            <p className='item_description'>{item.description}</p>
                        </div>
                        <p className='item_price'>Price : {item.price}$</p>

                        <button className='btn_add' onClick={() => addToCart(item)} >ADD to cart</button>

                    </div>
                ))
            }
        </div>
    )
}
export default Product