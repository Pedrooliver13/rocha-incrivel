import { useEffect, useState } from 'react';

import Button from 'components/Button';
import SectionList from 'components/SectionList';
import CreditCard from 'components/CreditCard';
import { CardType } from 'types/Api/cards';

import { getAllCards } from 'services/cards';

const ListCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllCards().then(setCards);
  }, []);

  return (
    <SectionList
      title="Lista de Cartões"
      components={
        <Button href="/cards/new" isLink secondary>
          Incluir
        </Button>
      }
    >
      {cards.map((card: CardType, index) => (
        <CreditCard {...card} key={index} />
      ))}
    </SectionList>
  );
};

export default ListCards;
