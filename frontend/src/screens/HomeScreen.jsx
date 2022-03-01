import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions.js';

// Components
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';

// Sample data
// import products from '../products';

function HomeScreen() {
	const dispatch = useDispatch();

	// Ask for the productList from our productListReducer
	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;

	useEffect(() => {
		// Get the products
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<>
			<h1>Latest Products</h1>
			{error ? console.log('error:', error) : ''}
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
					<Row>
						{products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
				</>
			)}
		</>
	);
}

export default HomeScreen;
