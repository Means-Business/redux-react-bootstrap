import React, { Component } from 'react';
import './App.css';

import {
  Container,
  Button,
  ButtonToolbar,
  Row,
  Col,
  Jumbotron
} from 'react-bootstrap';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: 15
    };

    this.handleAgeUp = this.handleAgeUp.bind(this);
    this.handleAgeDown = this.handleAgeDown.bind(this);
  }

  handleAgeUp() {
    this.setState({
      ...this.state,
      age: ++this.state.age
    });
  }

  handleAgeDown() {
    this.setState({
      ...this.state,
      age: --this.state.age
    });
  }

  render() {
    const { age } = this.state;
    return (
      <>
        <div className="App">
          <Container>
            <Header />
          </Container>
        </div>
        <Jumbotron>
          <Container>
            <Row className="justify-content-center">
              <Col md={6}>
                <div className="alert alert-primary">
                  <h2 className="text-center mb-5">
                    อายุ: <span>{age}</span>
                  </h2>
                  <ButtonToolbar className="justify-content-center mb-2">
                    <Button className="mr-5" onClick={this.handleAgeUp}>
                      เพิ่มอายุ
                    </Button>
                    <br />
                    <Button onClick={this.handleAgeDown}>ลดอายุ</Button>
                  </ButtonToolbar>
                </div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Footer />
      </>
    );
  }
}

export default App;
