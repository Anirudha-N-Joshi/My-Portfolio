import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h2>Hello, I'm <span className="purple" >Anirudha  Joshi </span> </h2>
          <p style={{ textAlign: "justify" }}>
            
            {/* from <span className="purple"> Dharwad, Karnataka, India.</span> */}
            {/* <br /> */}
            I’m a Software Developer who treats debugging like detective work—except the culprit is always my own code. 
            My greatest skill? Convincing myself that "It should work" is a valid debugging strategy.
            <br /> <br />
            
            My research strategy? A delicate mix of <span className="purple">Googling, trial-and-error. </span> If I don’t find the solution, at least I discover 10 unrelated things along the way.
            <br /> <br />

            I stay ahead of tech trends by <span className="purple"> watching tutorials </span> I’ll never follow and bookmarking articles I’ll never read.
            <br /> <br />

            In team discussions, I’ve mastered the art of strategic nodding—giving the illusion of deep insight while secretly running a mental <span className="purple"> Stack Overflow </span> search.
            <br />

            <span className="purple">At the end of the day, if it compiles, it ships. </span>
            
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anirudha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
