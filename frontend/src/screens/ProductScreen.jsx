import React, { useState, useEffect } from 'react';
import {
	Button,
	Card,
	Col,
	Container,
	ListGroup,
	Row,
	Image,
	ListGroupItem,
	FormControl,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import Error404 from './Error404';

import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

// The action to get the product details
import { listProductDetails } from '../actions/productActions.js';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = ({ match }) => {
	const navigate = useNavigate();

	const [qty, setQty] = useState(1);
	const params = useParams();
	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		// Get the product
		dispatch(listProductDetails(params.id));
	}, [dispatch, match]);

	// Handlers
	const addToCartHandler = () => {
		navigate(`/cart/${params.id}?qty=${qty}`);
	};

	// const product = [];

	return (
		<>
			<Container>
				<h1>{product.name}</h1>

				{/* <Link onClick={() => navigate(-1)} className='btn btn-dark my-3'> */}
				<Link to='/' className='btn btn-dark my-3'>
					Go Back
				</Link>

				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<Row>
						<Col md={6}>
							<Image src={product.image} alt={product.alt} fluid />
						</Col>

						<Col md={3}>
							<ListGroup variant='flush'>
								<ListGroupItem>
									<h3>{product.name}</h3>
								</ListGroupItem>
								<ListGroupItem>
									{product && product.rating ? (
										<Rating
											value={product.rating}
											text={`${product.numReviews} reviews`}
										/>
									) : (
										''
									)}
								</ListGroupItem>

								<ListGroupItem>Price: ${product.price}</ListGroupItem>
								<ListGroupItem>
									Description: {product.description}
								</ListGroupItem>
							</ListGroup>
						</Col>

						<Col md={3}>
							<Card>
								<ListGroup variant='flush'>
									<ListGroupItem>
										<Row>
											<Col> Price:</Col>
											<Col>
												<strong>{product.price}</strong>
											</Col>
										</Row>
									</ListGroupItem>
									<ListGroupItem>
										<Row>
											<Col> Status:</Col>
											<Col>
												<strong>
													{product.countInStock > 0
														? 'In Stock'
														: 'Out of Stock'}
												</strong>
											</Col>
										</Row>
									</ListGroupItem>

									{product.countInStock > 0 && (
										<ListGroupItem>
											<Row>
												<Col>Qty</Col>
												<Col>
													<FormControl
														as='select'
														value={qty}
														onChange={(e) => setQty(e.target.value)}>
														{[...Array(product.countInStock).keys()].map((x) =>
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
											</Row>
										</ListGroupItem>
									)}

									<ListGroupItem>
										<Button
											className='btn-block'
											type='button'
											onClick={addToCartHandler}
											disabled={product.countInStock === 0}>
											Add to Cart
										</Button>
									</ListGroupItem>
								</ListGroup>
							</Card>
						</Col>
					</Row>
				)}
			</Container>
		</>
	);
};

export default ProductScreen;
