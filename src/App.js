import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  render() {
    console.log(this.props);
    const { age, AgeUp, AgeDown } = this.props;
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
                    <Button className="mr-5" onClick={AgeUp}>
                      เพิ่มอายุ
                    </Button>
                    <br />
                    <Button onClick={AgeDown}>ลดอายุ</Button>
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

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AgeUp: () => dispatch({ type: 'AGE_UP' }),
    AgeDown: () => dispatch({ type: 'AGE_DOWN' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
