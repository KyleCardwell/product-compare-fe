import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

function ProductForm(props) {

  const [knifeSpecs, setKnifeSpecs] = useState([])
  const [knifeObj, setKnifeObj] = useState({})
  const [productUrls, setProductUrls] = useState([])

  const lookupURL = useRef(null)

  useEffect(() => {
    console.log(productUrls)
  }, [productUrls])


	const handleSubmit = async (e) => {
		e.preventDefault();
    console.log(lookupURL.current.value)
    await axios.post('http://localhost:3333/product', {urls: productUrls})
      .then(res => {
        console.log(res)
        props.setProducts(res.data.products)
        // setKnifeSpecs(res.data.product)
        // setKnifeObj(res.data.productObj)
      })
	};
  
  const handleClick = () => {
    setProductUrls([...productUrls, lookupURL.current.value])
    lookupURL.current.value = ""
  }


  const renderURLs = productUrls.map((url, index) => {
    return(<p key={index}>{`${url}`}</p>)
  })

  const renderSpecs = knifeSpecs.length > 0 ? knifeSpecs.map(spec => {
      return(<p key={spec}>{`${spec[0]}: ${spec[1]}`}</p>)
    }) : []


	return (
		<div className="product">
			<form onSubmit={handleSubmit}>
				<label name="productUrl">
					Product URL:
					<input 
            type="text"
            ref={lookupURL} 
          ></input>
				</label>
        <button type="button" onClick={handleClick}>Add</button>
        <label name="productUrls">
          {renderURLs}
        </label>
        <button type="submit">Compare</button>
			</form>
      <h2>{knifeObj.Brand ? knifeObj.Brand : ""} {knifeObj.Model ? knifeObj.Model : ""}</h2>
      {renderSpecs}
		</div>
	);
}

export default ProductForm;



// let myProduct = {
//   'Overall Length': '6.50"',
//   'Blade Length': '2.625"',
//   'Blade Width': '1.00"',
//   'Blade Thickness': '0.13"',
//   'Blade Material': '8Cr13MoV',
//   'Blade Style': 'Spear Point',
//   'Blade Grind': 'Flat',
//   Finish: 'Satin',
//   'Edge Type': 'Plain',
//   'Handle Length': '3.75"',
//   'Handle Width': '1.00"',
//   'Handle Thickness': '0.46"',
//   'Handle Material': 'GFN',
//   Color: 'Black',
//   'Frame/Liner': 'Steel',
//   Weight: '2.50 oz.',
//   User: 'Right Hand',
//   'Pocket Clip': 'Tip-Up, Tip-Down',
//   'Knife Type': 'Manual',
//   Opener: 'Thumb Hole',
//   'Lock Type': 'Liner Lock',
//   Brand: 'CRKT',
//   Model: 'Piet',
//   'Model Number': '5390',
//   Designer: 'Jesper Voxnaes',
//   'Country of Origin': 'China',
//   'Best Use': 'Everyday Carry',
//   'Product Type': 'Knife'
// }

// const myProductArr = [
//   [ 'Overall Length', '6.50"' ],
//   [ 'Blade Length', '2.625"' ],
//   [ 'Blade Width', '1.00"' ],
//   [ 'Blade Thickness', '0.13"' ],
//   [ 'Blade Material', '8Cr13MoV' ],
//   [ 'Blade Style', 'Spear Point' ],
//   [ 'Blade Grind', 'Flat' ],
//   [ 'Finish', 'Satin' ],
//   [ 'Edge Type', 'Plain' ],
//   [ 'Handle Length', '3.75"' ],
//   [ 'Handle Width', '1.00"' ],
//   [ 'Handle Thickness', '0.46"' ],
//   [ 'Handle Material', 'GFN' ],
//   [ 'Color', 'Black' ],
//   [ 'Frame/Liner', 'Steel' ],
//   [ 'Weight', '2.50 oz.' ],
//   [ 'User', 'Right Hand' ],
//   [ 'Pocket Clip', 'Tip-Up, Tip-Down' ],
//   [ 'Knife Type', 'Manual' ],
//   [ 'Opener', 'Thumb Hole' ],
//   [ 'Lock Type', 'Liner Lock' ],
//   [ 'Brand', 'CRKT' ],
//   [ 'Model', 'Piet' ],
//   [ 'Model Number', '5390' ],
//   [ 'Designer', 'Jesper Voxnaes' ],
//   [ 'Country of Origin', 'China' ],
//   [ 'Best Use', 'Everyday Carry' ],
//   [ 'Product Type', 'Knife' ]
// ]