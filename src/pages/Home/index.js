import React from 'react';
import NavBar from '../../components/NavBar/index';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";
import Logo1 from "../../assets/logo1.png";
import Image from 'react-bootstrap/Image';

export default function Home() {

    return (
        <>
            <NavBar/>
            <Container fluid>
                <Row className="sectionSobre mh-25">
                    <Col md="4" className="d-flex align-items-center justify-content-center">
                        <p align="justify" className="align-middle">
                            O Nutrinfo é um projeto de 
                            extensão do curso de Nutrição da 
                            Universidade Federal do Acre que 
                            visa difundir informações sobre 
                            alimentação saudável, nutrição e 
                            saúde.
                        </p>
                    </Col>
                    <Col md="4" className="d-flex align-items-center justify-content-center">
                        <Image src={Logo1} fluid className="logo1"/>
                    </Col>
                    <Col md="4" className="d-flex align-items-center justify-content-center">
                        <p align="justify">
                            Neste momento de pandemia por 
                            Covid-19, o #NutrinfoUfac se une ao 
                            #UfacContraCoronavirus para disseminar, 
                            nas redes sociais, informações acerca de 
                            hábitos de higiene; alimentação e 
                            nutrição; e prevenção do coronavírus 
                            (COVID-19).
                        </p>
                    </Col>
                </Row>
                <hr className="divisorLine"/>
            </Container>
        </>
    )
}