import React from 'react';

//CSS
import "./styles.css";
import "./responsive.css";

//Imagens
import logoNutrinfo from "../../assets/logo-nutrinfo.png";
import logoUfac from "../../assets/logo-ufac.png";

import nino from "../../assets/nino.png";
import nina from "../../assets/nina.png";

import baixar from "../../assets/btn-baixar.png";
import colorir from "../../assets/btn-colorir.png";



import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";

//Bootstrap
import NavBar from '../../components/NavBar/index';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image';


export default function Home() {

    return (
        <>
            <NavBar/>
            
            <Container className="sectionInitial mh-25" fluid="true">
                <Row >
                    <Col id="nino" sm="true"> 
                        <Image src={nino} fluid="true" className="d-none d-sm-block" />
                    </Col>

                    <Col id="center" sm="true">  
                        <h1>LIVRO DE COLORIR DIGITAL</h1>
                        <h2>VAMOS COLORIR?</h2>

                        <Button variant="warning" id="bnt-baixar">BAIXAR</Button>{' '}
                        <Button variant="warning" id="bnt-colorir">COLORIR</Button>{' '}

                        <div id="stayHome" sm="true">
                            <h3>FIQUE EM CASA</h3>
                            <h3>AJUDE A COMBATER O COVID-19</h3>
                        </div>    
                    </Col>

                    <Col id="nina" sm="true"> 
                        <Image src={nina} fluid="true" className="d-none d-sm-block"/>
                    </Col>
                </Row>
            </Container>

            <Container className="sectionAbout mh-25" fluid="true">
                <h1>Sobre</h1>
                <Row >
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
                        <Image src={logoNutrinfo} fluid="true" className="logo1"/>
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
            </Container>

            <Container className="sectionVideo mh-25" fluid="true" >
                <h1>Videos</h1> 

                <Row className="videos d-flex pt-3 justify-content-around" >
                    <Col sm="true" md="true" xs="true" ><iframe width="340" height="250" src="https://www.youtube.com/embed/7_CGP-12AE0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>
                    <Col sm="true" md="true" xs="true" ><iframe width="340" height="250" src="https://www.youtube.com/embed/7_CGP-12AE0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>
                    <Col sm="true" md="true" xs="true" ><iframe width="340" height="250" src="https://www.youtube.com/embed/7_CGP-12AE0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>

                </Row>

                <Row className="videos d-flex pt-3 justify-content-around" >
                    <Col sm="true"  md="true" xs="true" ><iframe width="340" height="250" src="https://www.youtube.com/embed/7_CGP-12AE0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>
                    <Col sm="true"  md="true" xs="true" ><iframe width="340" height="250" src="https://www.youtube.com/embed/7_CGP-12AE0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>
                    <Col sm="true"  md="true" xs="true" ><iframe width="340" height="250" src="https://www.youtube.com/embed/7_CGP-12AE0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>

                </Row>

                
            </Container>

            <Container className="sectionTeam " fluid="true" >
                <h1>Equipe</h1> 

                <Row >
                    <Col sm="true" md>
                        <h3>PROFESSORES</h3>

                        <div id="professor">
                            <p> Alanderson Ramalho </p>
                            <p> Camyla Rocha </p>
                            <p> Eline Oliveira </p>
                            <p> Fernanda Martins </p> 
                            <p> Tatiane Dalamaria </p>   
                        </div>
                    </Col>

                    <Col sm="true" md>
                        <h3>ESTUDANTES DE NUTRIÇÃO</h3>
                        
                        <div id="nutricao">
                            <p> Alice Malveira </p>
                            <p> Andressa Cristini </p>
                            <p> Clarissa Castela </p> 
                            <p> Ellayne Cavalcante </p>
                            <p> Júlia Nóbrega </p>
                            <p> Letícia Vasconcelos </p>
                            <p> Norayra Lima </p> 
                            <p> Robson Fadell </p>
                        </div>    
                    </Col>

                    <Col sm="true" md>
                        <h3>ESTUDANTES DE OUTROS CURSOS</h3>
                       
                        <div id="outros">
                            <p>  Andrielle Lima (Sistemas de Informação) </p>
                            <p>  Bruno Trindade (Sistemas de Informação) </p>
                            <p>  Geovana Silva (Jornalismo) </p> 
                            <p>  Ítalo Oliveira (Sistemas de Informação) </p>
                            <p>  Jhonatan Patrocínio (Sistemas de Informação) </p>
                            <p>  Thalisson Bandeira (Sistemas de Informação)</p> 
                            <p>  Vinício Mendes (Sistemas de Informação) </p>
                        </div>   
                    </Col>
                </Row>
            </Container>

            <footer className="container col-12  d-flex justify-content-around" >
                <div id="ufac">
                    <Image src={logoUfac} fluid="true" />
                </div>                
                
                <div id="contact">
                    <p >Contato</p>
                    <strong>contato@nutrinfo.com.br</strong>
                </div>
                
        
            
                <div id="social" className="d-flex align-items-start ">
                    
                    <Col>
                        <Row>
                            <p>Redes Sociais</p>
                        </Row>
                        <Row>
                            <a href=""> <Image src={instagram} fluid="true" /></a>
                            <a href=""> <Image src={facebook} fluid="true" /></a>
                            <a href=""> <Image src={youtube} fluid="true" /></a>
                        </Row>  
                    </Col>
                                       
                </div>


            </footer>
        </>
    )
}