import React from 'react';
import {
	Button,
	Card,
	Col,
	Container,
	ListGroup,
	Row,
	Image,
	ListGroupItem,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';

// Sample data
import { useState, useEffect } from 'react';

import Error404 from './Error404';
import axios from 'axios';

const ProductScreen = ({}) => {
	const params = useParams();
	const navigate = useNavigate();

	// if (!params.id) {
	// 	return <Error404 />;
	// }

	const [product, setProduct] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchProduct = async () => {
			setError(false);

			try {
				const { data } = await axios.get(`/api/products/${params.id}`);
				console.log('product', data);
				setProduct(data);
			} catch (error) {
				console.error(error.message);
				setError(true);
			}
		};

		fetchProduct();
	}, [params.id]);

	return (
		<>
			<Container>
				<h1>{product.name}</h1>

				<Button onClick={() => navigate(-1)} className='btn btn-dark my-3'>
					Go Back
				</Button>

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
							<ListGroupItem>Description: {product.description}</ListGroupItem>
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
												{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
											</strong>
										</Col>
									</Row>
								</ListGroupItem>
								<ListGroupItem>
									<Button
										className='btn-block'
										type='button'
										disabled={product.countInStock === 0}>
										Add to Cart
									</Button>
								</ListGroupItem>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ProductScreen;
