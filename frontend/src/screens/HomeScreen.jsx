import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

// Sample data
// import products from '../products';

function HomeScreen() {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchProducts = async () => {
			setError(false);

			try {
				const { data } = await axios.get('/api/products');
				console.log('products', data);
				setProducts(data);
			} catch (error) {
				console.error(error.message);
				setError(true);
			}
		};

		fetchProducts();
	}, []);

	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col sm={12} md={6} lg={4} xl={3} key={product._id}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
}

export default HomeScreen;
