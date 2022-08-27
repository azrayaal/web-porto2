import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import imgbesar from '../../img/Discussion-rafiki.png';
import imgkecilr from '../../img/Discussion-rafiki.png';

export default function Header() {
  return (
    <div class="home ">
      <Container class="container ">
        <Row class=" g-5 justify-content-sm-center">
          <Col xs={12} md={6} class="col caption py-5">
            <h1>Persiapan Menuju Dunia Industri Kreatif</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ab quos officiis nostrum ratione doloribus.</p>
            <span class="btn">
              <a href="">Get Started</a>
            </span>
          </Col>
          <Col xs={12} md={6} class="col img  pt-5">
            <img src={imgbesar} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
