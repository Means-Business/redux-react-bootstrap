import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

export default function Footer() {
  return (
    <Navbar fixed="bottom">
      <Nav className="justify-content-center mx-auto">
        <Nav.Item>
          <p>
            สร้างด้วย{' '}
            <span role="img" aria-label="footer">
              ❤️
            </span>{' '}
            จาก ภูเก็ต
          </p>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
