
import './style.css';
import { Card } from "../card"


export function CardList( {goods}) {
  return (
    <div className="cards content__cards">
      {goods.map(function(dataItem, index) {
        return <Card key={index} {...dataItem} />;
      })}
    </div>
  );
}
