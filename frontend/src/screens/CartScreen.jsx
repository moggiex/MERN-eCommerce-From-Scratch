import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
	Row,
	Col,
	ListGroup,
	Image,
	Form,
	Button,
	Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';

const CartScreen = ({ match, location }) => {
	const navigate = useNavigate();
	const { search } = useLocation(); // to get params from the url
	const params = useParams();

	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	console.log('cartItems', cartItems);

	// State
	// const [qty, setQty] = useState(1);

	const productId = params.id;
	const qty = Number(
		new URLSearchParams(search).get('qty')
			? new URLSearchParams(search).get('qty')
			: 1
	);
	// console.log(qty);

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, [dispatch, productId, qty]);

	return (
		<>
			<div>some text</div>
		</>
	);
};

export default CartScreen;
