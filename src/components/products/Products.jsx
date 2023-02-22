import Product from '../product/Product'
import './Products.css'
import { useState } from 'react'
import Cart from '../cart/Cart';


const Products = () => {
  const [items, setItems] = useState([]);

  const addToCart = (item) => {
    console.log('tikrinu, kokia preke ateina paspausta', item)
    // jei tokios prekes dar nera, tai sukurti  savybe "kiekis" ir lygus 1.
    //jei preke jau tokia prekes yra, didinti kieki +1
    // jei prekes likucio uztenka
    //papildomai : likucio koregavimas

    let newChart = [...items]

    let prod = newChart.find(x => x.name === item.name)
    console.log("tikrinu, ar tokia preke yra krepselyje", prod);

    if (prod === undefined && item.countInStock > 0) {
      prod = {
        ...item,
        quantity: 1
      } 
        newChart.push(prod);
    }
      else if (prod && prod.quantity < item.countInStock) {
        prod.quantity++
      } else {
        alert("Prekes kiekis nepakankamas")
      }
    
    console.log("tikrinu po push metodo",prod);

    setItems(newChart);

  }

  return (
    <div className='products_father'>
      <h2>Product List</h2>
      <Product addToCart={addToCart} />
      <Cart items={items}/>
    </div>
  )
}

export default Products