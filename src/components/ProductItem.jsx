import React, { useState, useContext } from 'react';
import '@styles/ProductItem.scss'; 
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg'
import addToCartDone from '@icons/bt_added_to_cart.svg'

const ProductItem = ({product}) => {
	const {addToCart, removeFromCart} = useContext(AppContext);
	
	const [addItem, setAddItem] = useState(false);


	const handleClick =(item) => {
		addItem ? removeFromCart(item) : addToCart(item);
		setAddItem(!addItem)
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick (product)}>
					{addItem ? <img src={addToCartDone} alt="" /> : <img src={addToCartImage} alt="" /> }
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
