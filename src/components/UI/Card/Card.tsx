import "./Card.scss";
const Card = ({ children }: any) => {
  return (
    <div className="card">
      <div className="card-content">{children}</div>
    </div>
  );
};

export default Card;
