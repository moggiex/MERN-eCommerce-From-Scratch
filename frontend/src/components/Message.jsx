import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
	return <Alert variant={variant}>{children}</Alert>;
};

// Set the default to a info alert
Message.defaultProps = {
	variant: 'info',
};

export default Message;
