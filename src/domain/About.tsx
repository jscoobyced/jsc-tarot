import "./About.css";

const About = () => {
  return (
    <>
      <h2 className="mb-20">Frequently Asked Questions</h2>
      <div className="div--cards-container">
        <div className="div--cards-border">
          <ul className="faq">
            <li>
              How many Tarot fortune telling mode is there on this site?
              <ul>
                <li>
                  There are 2 types of fortune telling:
                  <ul>
                    <li>1 card fortune for a simple answer</li>
                    <li>4 cards fortune for a more thorough prediction</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              How do I get my prediction?
              <ul>
                <li>
                  To get your prediction:
                  <ol>
                    <li>Chose your prediction style: 1 or 4 cards</li>
                    <li>
                      Relax, breath and focus on the question you want answered
                    </li>
                    <li>Click the &quot;Draw your card&quot; button</li>
                    <li>
                      Click on each card in sequence and read the prediction
                    </li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>
              How much does it cost?
              <ul>
                <li>
                  I don't charge anything for this service. I give it to people
                  as a contributioin to the world
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
