import "./About.css";
import Title from "./Title";

const About = () => {
  return (
    <>
      <Title text="About Sawan.io"></Title>
        <div className="about list-left">
          <p>Sawan.io is a website that provides free information for the users, on a few topics:</p>
          <ul>
            <li>Fortune telling with tarot card reading</li>
            <li>Magic 8 ball</li>
            <li>More topics coming soon!!!</li>
          </ul>
          <p>Please don't hesitate to suggest more topics you would like to see.</p>
        </div>
    </>
  );
};

export default About;
