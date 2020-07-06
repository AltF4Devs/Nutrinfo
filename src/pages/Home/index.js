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
//import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image';
//Components
import Button from '../../components/Button/Button';

export default function Home() {

    return (
        <>
            {/*<NavBar/>*/}
            
            <Container className="container-blue" fluid>
                <Row style={{ padding: '2vh 0vh' }}>
                    <Col id="nino" sm> 
                        <Image src={nino} fluid="true" className="d-none d-sm-block" />
                    </Col>

                    <Col id="center" sm>
                        <Row className="d-sm-none">
                            <Col>
                                <Image src={nino} fluid />
                            </Col>
                            <Col>
                                <Image src={nina} fluid />
                            </Col>
                        </Row>

                        <h1 className="ff-chicle-cursive" style={{ color: '#1B6DB9'  }}>LIVRO DE COLORIR DIGITAL</h1>
                        <h2 className="ff-chicle-cursive" style={{ color: '#F27838' }}>VAMOS COLORIR?</h2>
                        
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '5vh 0vh' }}>
                            <Button icon="download" style={{ marginRight: '4vh' }}>BAIXAR</Button>
                            <Button variant="yellow" icon="paint">COLORIR</Button>
                        </div>

                        <div id="stayHome">
                            <h3 className="ff-chicle-cursive" style={{ color: '#1B6DB9'  }}>FIQUE EM CASA</h3>
                            <h3 className="ff-chicle-cursive" style={{ color: '#1B6DB9'  }}>AJUDE A COMBATER O COVID-19</h3>
                        </div>    
                    </Col>

                    <Col id="nina"> 
                        <Image src={nina} fluid className="d-none d-sm-block"/>
                    </Col>
                </Row>
            </Container>


            {/*ABOUT*/}
            <Container className="container-white" id="container-about" fluid>
                <h1 className="section-title">Sobre</h1>
                <Row>
                    <Col xs="12" xl="5">
                        <p>
                            O Nutrinfo é um projeto de 
                            extensão do curso de Nutrição da 
                            Universidade Federal do Acre que 
                            visa difundir informações sobre 
                            alimentação saudável, nutrição e 
                            saúde.
                        </p>
                    </Col>

                    <Col xs="12" xl="2"> 
                        <Image src={logoNutrinfo} fluid className="nutri-info-logo" />
                    </Col>

                    <Col xs="12" xl="5">
                        <p>
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


            <Container className="container-blue" fluid>
                <h1 className="section-title">Videos</h1> 

                <Row className="row-videos">
                    <Col md="12" lg="4"><iframe title="video1" width="380" height="250" src="https://www.youtube.com/embed/7_CGP-12AE0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>
                    <Col md="12" lg="4"><iframe title="video2" width="380" height="250" src="https://www.youtube.com/embed/7_CGP-12AE0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>
                    <Col md="12" lg="4"><iframe title="video3" width="380" height="250" src="https://www.youtube.com/embed/7_CGP-12AE0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>
                </Row>

                <Row className="row-videos" >
                    <Col md="12" lg="4"><iframe title="video4" width="380" height="250" src="https://www.youtube.com/embed/7_CGP-12AE0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>
                    <Col md="12" lg="4"><iframe title="video5" width="380" height="250" src="https://www.youtube.com/embed/7_CGP-12AE0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>
                    <Col md="12" lg="4"><iframe title="video6" width="380" height="250" src="https://www.youtube.com/embed/7_CGP-12AE0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Col>
                </Row>
            </Container>

            <Container className="container-white" fluid>
                <h1 className="section-title">Equipe</h1> 

                <Row >
                    <Col sm="12" md="4">
                        <h3 className="section-title" style={{ color: '#1B86B9', fontSize: '1.5rem' }}>PROFESSORES</h3>

                        <div style={{ textAlign: 'center' }}>
                            <p> Alanderson Ramalho </p>
                            <p> Camyla Rocha </p>
                            <p> Eline Oliveira </p>
                            <p> Fernanda Martins </p> 
                            <p> Tatiane Dalamaria </p>   
                        </div>
                    </Col>

                    <Col sm="12" md="4">
                        <h3 className="section-title" style={{ color: '#1B86B9', fontSize: '1.5rem' }}>ESTUDANTES DE NUTRIÇÃO</h3>
                        
                        <div style={{ textAlign: 'center' }}>
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

                    <Col sm="12" md="4">
                        <h3 className="section-title" style={{ color: '#1B86B9', fontSize: '1.5rem' }}>ESTUDANTES DE OUTROS CURSOS</h3>
                       
                        <div style={{ textAlign: 'center' }}>
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

            <Container id="footer" style={{ backgroundColor: '#1B6DB9' }} fluid>
                
                <Row>
                    <Col xs={12} sm={4}>
                        <Image src={logoUfac} fluid />
                    </Col>        
                    
                    <Col xs={12} sm={4} style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>Contato</p>
                        <strong>contato@nutrinfo.com.br</strong>
                    </Col>
                    
            
                
                    <Col xs={12} sm={4} style={{ display: 'flex', flexDirection: 'column' }}>

                        <p>Redes Sociais</p>

                        <div style={{ display: 'flex', flexDirection: 'row', padding: '0vh 15vh' ,justifyContent: 'space-around' }}>
                            <a href=""> <Image src={instagram} style={{ paddingTop: '0vh' }} fluid /></a>
                            <a href=""> <Image src={facebook} style={{ paddingTop: '0vh' }} fluid /></a>
                            <a href=""> <Image src={youtube} style={{ paddingTop: '0vh' }} fluid /></a>
                        </div>
                
                    </Col>
                </Row>

            </Container>
            
        </>
    )
}