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
import products from '../products';
import Error404 from './Error404';

const ProductScreen = () => {
	const params = useParams();
	const navigate = useNavigate();

	// if (!params.id) {
	// 	return <Error404 />;
	// }

	const product = products.find((p) => p._id === params.id);

	console.log(product);

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
								<Rating
									value={product.rating}
									text={`${product.numReviews} reviews`}
								/>
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
											<stronng>{product.price}</stronng>
										</Col>
									</Row>
								</ListGroupItem>
								<ListGroupItem>
									<Row>
										<Col> Status:</Col>
										<Col>
											<stronng>
												{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
											</stronng>
										</Col>
									</Row>
								</ListGroupItem>
								<ListGroupItem>
									<Button
										className='btn-block'
										type='button'
										disabled={product.countInStock == 0}>
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
