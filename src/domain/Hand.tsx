import { useEffect, useState } from "react";
import Card from "./models/card";
import descriptions from "./models/descriptions.json";
import names from "./models/names.json";
import "./Hand.css";

const Hand = (props: { title: string; cards: number; text: string[] }) => {
  const [buttonText, setButtonText] = useState(props.text[1]);
  const [text, setText] = useState(props.text[0]);
  const [canGetNewCards, setCanGetNewCards] = useState(true);
  const titles = ["Past", "Present", "Future", "Advice"];
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const [cardDescription, setCardDescription] = useState(["", "", "", ""]);
  const [cardNames, setCardNames] = useState(["", "", "", ""]);
  const [canClick, setCanClick] = useState([true, false, false, false]);
  const [cardIsVisible, setIsVisible] = useState([false, false, false, false]);
  const [cardIsReversed, setIsReversed] = useState([
    false,
    false,
    false,
    false,
  ]);

  const REVERSED_POSITION = 4;

  const findNextNumber = (picked: number[]): number => {
    const num = 1 + Math.floor(Math.random() * 78);
    if (picked.find((value) => value === num)) {
      return findNextNumber(picked);
    }
    return num;
  };

  const findIsReversed = () => {
    return Math.floor(Math.random() * 2) === 0;
  };

  const getReversedDescription = (card: number) => {
    if (
      descriptions.length > REVERSED_POSITION &&
      descriptions[REVERSED_POSITION].length > card
    )
      return descriptions[REVERSED_POSITION][card];
    return "[Description coming soon]";
  };

  const getCardDescription = (
    position: number,
    card: number,
    isReversed: boolean
  ): any => {
    if (descriptions.length > position && descriptions[position].length > card)
      return isReversed
        ? getReversedDescription(card)
        : descriptions[position][card];
    return "[Description coming soon]";
  };

  const getCardName = (card: number): any => {
    return names[card];
  };

  const generateCards = () => {
    const newCards = [];
    const newCardNames = [];
    const newCardDescriptions = [];
    const newCardReversed = [];
    const picked = [];

    for (let i = 0; i < 4; i++) {
      const num = findNextNumber(picked);
      const isReversed = findIsReversed();
      picked.push(num);
      newCardNames.push(getCardName(num - 1));
      newCardDescriptions.push(getCardDescription(i, num - 1, isReversed));
      newCardReversed.push(isReversed);
      const cardNumber = String(num).padStart(2, "0");
      newCards.push(cardNumber);
    }
    setCardNumbers(newCards);
    setCardDescription(newCardDescriptions);
    setCardNames(newCardNames);
    setIsReversed(newCardReversed);
    setText(
      "Click the card" +
        (props.cards === 1 ? "" : "s in sequence") +
        " to reveal your fortune."
    );
    setCanGetNewCards(false);
    setCanClick([true, false, false, false]);
    setIsVisible([false, false, false, false]);
    window.scrollTo(0, 0);
  };

  const clickCard = (cardIndex: number) => {
    if (cardIndex + 1 === titles.length || props.cards === 1) {
      setCanGetNewCards(true);
      setButtonText("Draw new card" + (props.cards === 1 ? "" : "s"));
    }
    const newCanClick = [false, false, false, false];
    newCanClick[cardIndex + 1] = true;
    setCanClick(newCanClick);
    const newIsVisible = cardIsVisible.slice();
    newIsVisible[cardIndex] = true;
    setIsVisible(newIsVisible);
    setText("");
  };

  useEffect(() => {
    setCardDescription(["", "", "", ""]);
    setCardNames(["", "", "", ""]);
    setCardNumbers(["", "", "", ""]);
    setCanClick([true, false, false, false]);
    setCanGetNewCards(true);
    setText(props.text[0]);
    setButtonText(props.text[1]);
  }, [props.cards, props.text]);

  return (
    <>
      <h1>{props.title}</h1>
      <div className="message">{text}</div>
      <div className="div--cards-container">
            <Card
              key={`card_0`}
              index={0}
              size="full_size"
              card={cardNumbers[0]}
              cardText={cardDescription[0]}
              cardName={cardNames[0]}
              isReversed={cardIsReversed[0]}
              cardShortText={""}
              title={props.cards === 1 ? titles[3] : titles[0]}
              click={clickCard}
              canClick={canClick[0]}
              isVisible={cardIsVisible[0]}
            ></Card>
            {props.cards > 1 ? (
              <>
                <Card
                  key={"card_1"}
                  index={1}
                  size="full_size"
                  card={cardNumbers[1]}
                  cardText={cardDescription[1]}
                  cardName={cardNames[1]}
                  isReversed={cardIsReversed[1]}
                  cardShortText={""}
                  title={titles[1]}
                  click={clickCard}
                  canClick={canClick[1]}
                  isVisible={cardIsVisible[1]}
                ></Card>
                {props.cards > 2 ? (
                  <>
                    <Card
                      key={"card_2"}
                      index={2}
                      size="full_size"
                      card={cardNumbers[2]}
                      cardText={cardDescription[2]}
                      cardName={cardNames[2]}
                      isReversed={cardIsReversed[2]}
                      cardShortText={""}
                      title={titles[2]}
                      click={clickCard}
                      canClick={canClick[2]}
                      isVisible={cardIsVisible[2]}
                    ></Card>
                    {props.cards > 3 ? (
                      <>
                        <Card
                          key={"card_3"}
                          index={3}
                          size="full_size"
                          card={cardNumbers[3]}
                          cardText={cardDescription[3]}
                          cardName={cardNames[3]}
                          isReversed={cardIsReversed[3]}
                          cardShortText={""}
                          title={titles[3]}
                          click={clickCard}
                          canClick={canClick[3]}
                          isVisible={cardIsVisible[3]}
                        ></Card>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
      <button disabled={!canGetNewCards} onClick={generateCards}>
        {buttonText}
      </button>
    </>
  );
};

export default Hand;
