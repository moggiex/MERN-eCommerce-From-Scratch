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
	ListGroupItem,
	FormControl,
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

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};
	const checkoutHandler = () => {
		// send to the login page and pass shipping just case they already are
		navigate('/login?redirect=shipping');
	};

	return (
		<>
			<Row>
				<Col md={8}>
					<h1> Shopping Cart</h1>
					{cartItems.length === 0 ? (
						<Message>
							Your cart is empty <Link to=''>Go Back</Link>
						</Message>
					) : (
						<ListGroup variant='flush'>
							{cartItems.map((item) => (
								<ListGroupItem key={item.product}>
									<Row>
										<Col md={2}>
											<Image src={item.image} fluid rounded />
										</Col>
										<Col md={3}>
											<Link to={`/product/${item.product}`}>{item.name}</Link>
										</Col>
										<Col md={2}>${item.price}</Col>
										<Col md={2}>
											<FormControl
												as='select'
												value={item.qty}
												onChange={(e) =>
													dispatch(
														addToCart(item.product, Number(e.target.value))
													)
												}>
												{[...Array(item.countInStock).keys()].map((x) =>
													x >= 5 ? (
														''
													) : (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													)
												)}
											</FormControl>
										</Col>
										<Col md={2}>
											<Button
												type='button'
												variant='light'
												onClick={() => removeFromCartHandler(item.product)}>
												<i className='fas fa-trash'></i>
											</Button>
										</Col>
									</Row>
								</ListGroupItem>
							))}
						</ListGroup>
					)}
				</Col>
				<Col md={4}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroupItem>
								<h4>
									Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
									)items
								</h4>
								$
								{cartItems
									.reduce((acc, item) => acc + item.qty * item.price, 0)
									.toFixed(2)}
							</ListGroupItem>

							<ListGroupItem>
								<Button
									type='button'
									className='btn-block'
									disabled={cartItems.length === 0}
									onClick={checkoutHandler}>
									Proceed to Checkout
								</Button>
							</ListGroupItem>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default CartScreen;
