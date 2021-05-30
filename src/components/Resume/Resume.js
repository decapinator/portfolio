import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Edmond-bou-nasr.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="MERN Stack developer [Lebanese Customs]"
              date="February 2021 - Present"
              content={[
                "Design and implement efficient user interfaces for internet and intranet applications.",
                "Design and conduct code testing.",
                "Integrate applications with network systems, servers and databases.",
                "Troubleshoot problems with application development and use.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Blockchain developer [Freelancer]"
              content={[
                "Taking online courses in solidity.",
                "Developing, Deploying and Testing Smart Contracts",
              ]}
            />
            <Resumecontent
              title="[My portfolio]"
              content={[
                "Worked as a web developer on designing the front end of the website using Bootstrap, CSS, and Javascript.",
                "Worked on developing Rest APIs for updating and getting data using Express.js.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Masters 1 in Software Engineering [CNAM,Lebanon] "
              date="2010 - 2017"
              content={[`CGPA: 3.6`]}
            />
            <Resumecontent
              title="Full Stack Certificates [Hong Kong university of Science]"
              date="2020 - 2020"
              content={["Specialization"]}
            />
            <Resumecontent
              title="12TH BOARD [ST Charbel School,Lebanon] "
              date="1996 - 2009"
              content={["Precentage: 100%"]}
            />
            <h3 className="resume-title">Skills</h3>
            <Resumecontent
              title=""
              content={[
                `Strongest Areas: Algorithm, MERN Stack Development.`,
                `Languages: Javascript(basic), Css(basic), Nodejs(basic)`,
                "Database: MongoDB",
                "Platform: Heroku",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
