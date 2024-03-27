import { useState, useEffect } from "react";

import CartMealVisible from "../CartMealVisible";

import "./shoppingCart.css";

// destructure the width and height of window
function getWindowSize() {
	const { innerWidth, innerHeight } = window;
	return { innerWidth, innerHeight };
}

const ShoppingCart = ({ cart, setCart }) => {
	// BOOLEAN -> check if the cart is expend or not -> mobile layout only
	const [isCart, setIsCart] = useState(false);
	// OBJECT -> retreive the width and height of the window
	const [windowSize, setWindowSize] = useState(getWindowSize());

	const { checkout, mealsCart } = cart;

	const mediaQuery = 768;
	const deliveryCost = 2.5;

	// to assign the total quantity of meal when the cart is not expend
	// mobile mode only
	let totalMeals = 0.0;

	// Hook to check at any time the windows size
	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	// if there is meals in cart
	// add all the meals quantities when the cart is not expend
	// mobile mode only
	if (mealsCart.length > 0) {
		mealsCart.map((meal) => {
			return (totalMeals += meal.quantity);
		});
	}

	return (
		<>
			<div id="cart">
				{/* check if ther is at least one meal in cart
				if not display line 117 and after */}
				{mealsCart.length > 0 ? (
					// if the cart is not expend
					// if the window is in "mobile" width size
					// display a button to expend the cart
					windowSize.innerWidth > mediaQuery ? (
						(isCart && setIsCart(false),
						(
							<CartMealVisible
								deliveryCost={deliveryCost}
								mealsCart={mealsCart}
								checkout={checkout}
								setCart={setCart}
								setIsCart={setIsCart}
							/>
						))
					) : // if the cart is expend
					isCart ? (
						<CartMealVisible
							deliveryCost={deliveryCost}
							mealsCart={mealsCart}
							checkout={checkout}
							setCart={setCart}
							setIsCart={setIsCart}
						/>
					) : (
						<>
							<div id="item-in-cart">
								<button onClick={() => setIsCart(true)}>
									<div id="cart-resume">
										<p>{totalMeals}</p>
										<p>Voir le panier</p>
										<p>{checkout} €</p>
									</div>
								</button>
							</div>
						</>
					)
				) : (
					// if there is no meals in cart
					<>
						<div id="cart-hidden">
							<div id="empty-cart">
								<p>Panier vide</p>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default ShoppingCart;
