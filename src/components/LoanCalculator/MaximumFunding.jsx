
import React from 'react';
import { Card } from 'react-bootstrap';
const MaximumFunding = () => (
  <Card style={{ backgroundColor: '#2A2E37', padding: '16px', borderRadius: '16px', marginBottom: '24px', color: 'white' }}>
    <Card.Body>
      <p style={{ color: '#94A3B8', fontSize: '14px', marginBottom: '8px' }}>Maximum Funding</p>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>Rp 17,484,500</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p>Honda ADV 150 CBS</p>
          <p style={{ color: '#94A3B8', fontSize: '14px' }}>2022</p>
        </div>
        <div style={{ display: 'flex', gap: '2px' }}>
          {[...Array(3)].map((_, index) => (
            <div key={index} style={{ width: '4px', height: '16px', backgroundColor: '#22D3EE', borderRadius: '2px' }} />
          ))}
        </div>
      </div>
    </Card.Body>
  </Card>
);
export default MaximumFunding;
