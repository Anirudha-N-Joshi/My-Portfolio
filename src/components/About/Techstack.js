import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import { BsBootstrap } from "react-icons/bs";
import { ImHtmlFive2 } from "react-icons/im";
import { RiCss3Line } from "react-icons/ri";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,

  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiPostgresql,
  SiMysql
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /> 
        
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <ImHtmlFive2 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiCss3Line />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsBootstrap />
      </Col>
      
    </Row>
  );
}

export default Techstack;
