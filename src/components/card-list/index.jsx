
import './style.css';
import { Card } from "../card"
import { UserContext } from '../../contexts/current-user-context';
import { CardsContext } from '../../contexts/card-context';
import { useContext } from 'react';


export function CardList() {
  const { cards: goods } = useContext(CardsContext);
  return (
    <div className="cards content__cards">
      {goods.map(function(dataItem, index) {
        return <Card key={index} {...dataItem} />;
      })}
    </div>
  );
}
