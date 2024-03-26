import "./cartMeal.css";

const CartMeal = ({ checkout, mealCart, setCart }) => {
	return (
		<>
			<div>
				<div>
					<button>-</button>
					<p>{mealCart.quantity}</p>
					<button>+</button>
				</div>
				<p>{mealCart.title}</p>
				<p>{mealCart.price * mealCart.quantity}</p>
			</div>
		</>
	);
};

export default CartMeal;
