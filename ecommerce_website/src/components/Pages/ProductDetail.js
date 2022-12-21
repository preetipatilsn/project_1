import React from "react";
import { useContext } from "react";
import CartContext from "../Cart/CartContext";
const ProductDetail = props =>
{
    const crtCtx = useContext(CartContext)
    return(
        <section>
        <div>This is Products details Page</div>
            <p>{props.product.title}</p>
            <img src={props.product.imageUrl} alt=" "></img> 
            <p>Rs {props.product.price}</p>
            <button
              onClick={() =>
                crtCtx.addItem({
                  title: props.product.title,
                  price: props.product.price,
                  imageUrl: props.product.imageUrl,
                  quantity:1,
                })
              }
              className="listButton"
              style={{
                flex: "1.2",
                backgroundColor: "skyblue",
                borderColor: "skyblue",
                color: "White",
                fontFamily: "verdana",
                fontSize:'large',
                borderRadius:'5px',
                marginLeft:'30px'
              }}
            >
              Add To Cart
        </button>
        <h1>Reviews</h1>
        <p>Good one!</p>
        </section>
    )
};
export default ProductDetail;