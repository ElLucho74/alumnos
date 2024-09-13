/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import hombre from "hombre.png";
import mafe from "images/Fernanda_Santillan.jpg";
import lucho from "images/Castro.jpeg"
import adalid from  "images/Adalid Herrera Ruiz_.jpg"
import arturo from "images/ArturoGarcia.jpeg"
import davila from "images/dávila.jpeg"
import diego from "images/Elizalde Barboza Diego Efren.jpeg"
import joss from "images/Haro.jpg"
import etor from "images/Hector.png"
import Jare from "images/JaredFrias.jpg"
import kennya from "images/Kennya_prof.jpg"
import miguel from "images/miguelmoranv.jpg"
import uris from "images/urielgonzalez.jpeg"




// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.js";

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO ESTRELLA</p>
                      <CardTitle tag="p">CASTRO ITURBIDE LUIS ANTONIO</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div>
                  <img src={lucho} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 2</p>
                      <CardTitle tag="p">HERRERA RUIZ ADALID</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={adalid} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col> 
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 3</p>
                      <CardTitle tag="p">SANTILLAN LEDEZMA MARÍA FERNANDA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={mafe} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>  
                        
        </Row>
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 4</p>
                      <CardTitle tag="p">GARCÍA CERVANTES ARTURO</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div>
                  <img src={arturo} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 5</p>
                      <CardTitle tag="p">DAVILA BARRIOS DAVID</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={davila} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col> 
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 6</p>
                      <CardTitle tag="p">ELIZALDE BARBOSA DIEGO EFREN </CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={diego} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>  
                        
        </Row>
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 7</p>
                      <CardTitle tag="p">HARO SIERRA JOCELYNE</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div>
                  <img src={joss} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 8</p>
                      <CardTitle tag="p">GALARZA CARREÑO HECTOR FERNANDO</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={etor} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col> 
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 9</p>
                      <CardTitle tag="p">FRIAS JARED </CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={Jare} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>  
                        
        </Row>
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 10</p>
                      <CardTitle tag="p">ORONA CUMPLIDO KENNYA ALEXANDRA</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div>
                  <img src={kennya} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 11</p>
                      <CardTitle tag="p">MORAN VAZQUEZ MIGUEL ANGEL</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={miguel} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col> 
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">ALUMNO 12</p>
                      <CardTitle tag="p">GONZÁLEZ URRUTIA ANGEL URIEL</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={uris} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>  
                        
        </Row>
        <Row>
          
          
          
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
