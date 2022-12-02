import { CardProps } from "../assets/types/CardProps";

const Card = ({ header, content, image, index }: CardProps) => (
  <div className={`card card-${index}`}>
    <div className="ImageContainer flex align-center">
      <img src={image} alt={header} />
    </div>
    <h2>{header}</h2>
    <p>{content}</p>
  </div>
);

export default Card;
