import React, {useState} from 'react';

//Styles
import {Col, Container, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Typography} from "antd"

//Components
import BaseCurrency from './components/BaseCurrency';
import TargetCurrency from './components/TargetCurrency';
import AmountAndResults from './components/AmountAndResults';

const {Title} = Typography;

const App = () => {

    const [baseCurrency, setBaseCurrency] = useState();
    const [targetCurrency, setTargetCurrency] = useState()

    return (
        <>
            <Container className="mt-3" >
                <Title>Currency Converter</Title>
                <Row>
                    <Col md sm={true}>
                        <BaseCurrency baseCurrency={baseCurrency} setBaseCurrency={setBaseCurrency}/>
                    </Col>
                    <Col md sm={true}>
                        <TargetCurrency  targetCurrency={targetCurrency} setTargetCurrency={setTargetCurrency}/>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col sm={6}>
                        <AmountAndResults baseCurrency={baseCurrency} targetCurrency={targetCurrency}/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}

export default App
