import React from "react";

function Product(props) {

  const {knife, knifeArr} = props.spec

  const renderSpecs = knifeArr.length > 0 ? knifeArr.map(spec => {
    return(<p key={spec}>{`${spec[0]}: ${spec[1]}`}</p>)
  }) : []

  return (
    <div>
      <h2>{knife.Brand ? knife.Brand : ""} {knife.Model ? knife.Model : ""}</h2>
      {renderSpecs}
    </div>
  )
}

export default Product;