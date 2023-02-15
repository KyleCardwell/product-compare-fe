import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductForm from './components/ProductForm'
import Product from './components/Product'
import CompTable from './components/CompTable'

function App() {

  const [products, setProducts] = useState([])

  // useEffect(() => {
  //   console.log('my Products', products)
  // }), [products]

  return (
    <div className="App">
      <ProductForm setProducts={setProducts}/>
      <CompTable products={products}/>
      <div>Products

        <div className='productsContainer'>
          {products.map((spec) => {
            return <Product spec={spec}/>
          })}
        </div>

      </div>
    </div>
  )
}

export default App
