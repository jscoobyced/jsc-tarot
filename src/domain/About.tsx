import "./About.css";
import Title from "./Title";

const About = () => {
  return (
    <>
      <Title text="About Sawan.io"></Title>
      <div className="div--cards-container">
        <div className="div--cards-border list-left">
          <p>Sawan.io is a website that provides free information for the users, on a few topics:</p>
          <ul>
            <li>Fortune telling with tarat card reading</li>
            <li>Magic 8 ball (coming soon)</li>
            <li>More topics coming soon</li>
          </ul>
          <p>Please don't hesitate to suggest more topics you would like to see.</p>
        </div>
      </div>
    </>
  );
};

export default About;
