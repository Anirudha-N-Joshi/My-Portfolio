import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bus Booking Website"
              description="This Bus Reservation System is a full-stack web application that allows users to search buses by source, destination, and date, view detailed bus info, select seats, and book tickets. It features login/signup authentication, seat availability, real-time booking, and admin-managed backend using React.js, Node.js, PostgreSQL, and JWT."
              ghLink="https://github.com/Anirudha-N-Joshi/Bus-Booking-System"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="LMS"
              description="Developed a robust Learning Management System (LMS) for file/notes sharing using ReactJS, NodeJS, ExpressJS, and PostgreSQL. Implemented JWT-based authentication with role-based access control for admins, teachers, and students. Integrated Cloudinary for scalable file storage, ensuring seamless uploads and retrievals. Designed an intuitive UI for enhanced user experience across different roles."
              ghLink="https://github.com/Anirudha-N-Joshi/LMS"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Smart IV bags Monitoring System"
              description="Developed a Smart IV Monitoring System using IoT, sensors, Node.js, Express.js, WebSocket, and MQTT for real-time IV fluid level tracking. Improved patient care by reducing manual monitoring efforts and enhancing efficiency. Enabled automated alerts for timely IV bag replacement, ensuring increased safety and seamless operation in healthcare facilities."
              ghLink="https://github.com/Anirudha-N-Joshi/Smart-IV-monitoring-system"
              demoLink=" "              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Online Collaborative Learning Platform"
              description="Developed an online collaborative learning platform with a scalable backend using Node.js, Express.js, and PostgreSQL. Integrated real-time chat, document collaboration, and interactive whiteboards for seamless learning. Designed an intuitive ReactJS frontend with role-based access control, ensuring secure access. Added notifications, progress tracking, and multimedia support for an engaging user experience."
              ghLink="https://github.com/Anirudha-N-Joshi/Collaborative-Online-Learning-Platform"
              demoLink=" "
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
