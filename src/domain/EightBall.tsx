import { useState } from "react";
import "./EightBall.css";

const EightBall = () => {
  const [answer, setAnswer] = useState("");
  const [shake, setShake] = useState("");
  const answers = [
    "It is certain",
    "It is decidely so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, ask again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "Me reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  const shakeEightBall = () => {
    setShake("image--shake");
    setAnswer("");
    setTimeout(() => {
      const chosen = Math.floor(Math.random() * answers.length);
      setAnswer(answers[chosen]);
      setShake("");
    }, 2500);
  };

  return (
    <div className="container--8ball">
      <span className="text--8ball-info">
        Think about your question then shake the ball
      </span>
      <img
        className={shake + " img--8ball"}
        src={"images/8ball.svg"}
        alt="Magic 8 ball"
      />
      <span className="text--8ball-answer">{answer}</span>
      <button onClick={shakeEightBall}>Shake Me</button>
    </div>
  );
};

export default EightBall;
