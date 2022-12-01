import Card, { CardProps } from "../components/Card";
import BrandRecognition from "../assets/svgs/icon-brand-recognition.svg";
import DetailedRecords from "../assets/svgs/icon-detailed-records.svg";
import FullyCustom from "../assets/svgs/icon-fully-customizable.svg";

const cards: CardProps[] = [
  {
    header: "Brand Recognition",
    content:
      "Boost your brand recognition with each click. Generic links don`t mean a thing. Branded links help instil confidence in your content.",
    image: BrandRecognition,
    index: 0,
  },
  {
    header: "Detailed Records",
    content:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    image: DetailedRecords,
    index: 1,
  },
  {
    header: "Fully Customizable",
    content:
      "Improve brand awareness and content discoverability through customizable links. supercharging audience engagement.",
    image: FullyCustom,
    index: 2,
  },
];

const CardsSection = () => {
  return (
    <div className="cardsSection">
      <h1>Advanced Statistics</h1>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="cardsContainer">
        {cards.map((card) => (
          <Card
            header={card.header}
            content={card.content}
            image={card.image}
            index={card.index}
            key={card.index}
          />
        ))}
        <div className="line" />
      </div>
    </div>
  );
};

export default CardsSection;
