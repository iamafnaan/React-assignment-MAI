
import React from 'react';

import React from 'react';
import { Card } from 'react-bootstrap';
const Card = ({ children }) => (
  <Card style={{ backgroundColor: '#2A2E37', padding: '16px', borderRadius: '16px', marginBottom: '24px', color: 'white' }}>
    <Card.Body>{children}</Card.Body>
  </Card>
);
export default Card;