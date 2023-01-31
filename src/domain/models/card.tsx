import "./card.css";

const Card = (props: {
  index: number;
  size: "full_size" | "mid_size";
  card: string;
  cardShortText: string;
  cardText: string;
  cardName: string;
  isReversed: boolean;
  title: string;
  canClick: boolean;
  click: (cardIndex: number) => void;
  isVisible: boolean;
}) => {
  const card = `images/cards/${props.size}/${props.card}.jpg`;
  const hidden = `images/cards/${props.size}/00.png`;
  const cards = [hidden, card];
  const cardAltText = ["Tarot card background", "Tarot card revealed"];
  const cardName = props.cardName + (props.isReversed ? " - Reversed" : "");
  const cardTitle = ["Click to reveal your card", `Your ${props.title} card is ${cardName}`];

  const handleClick = () => {
    if (!props.isVisible && props.canClick) {
      props.click(props.index);
    }
  };

  return (
    <div className="div--card">
      {props.card !== "" ? (
        <>
          <span className="span--card-title">{props.title}</span>
          <img
            src={cards[props.isVisible ? 1 : 0]}
            alt={cardAltText[props.isVisible ? 1 : 0]}
            title={cardTitle[props.isVisible ? 1 : 0]}
            onClick={handleClick}
            className={`img--card img--card${props.isReversed ? "-reversed" : ""}`}
          />
          {props.isVisible ? (
            <>
              <span className="span--card-name">{cardName}</span>
              <span className="span--card-text">{props.cardText}</span>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Card;
