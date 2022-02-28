import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions.js';

import Product from '../components/Product';

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
			{loading ? (
				// show loading
				<h1>Loading....</h1>
			) : error ? (
				// show error
				<h3>{error}</h3>
			) : (
				// else
				<Row>
					{products.map((product) => (
						<Col sm={12} md={6} lg={4} xl={3} key={product._id}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
}

export default HomeScreen;
