import { useEffect, useState } from 'react';

import SectionList from 'components/SectionList';
import CreditCard from 'components/CreditCard';
import { Props } from 'types/components/creditCard';

import { getAllCards } from 'services/cards';

const ListCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllCards().then(setCards);
  }, []);

  return (
    <SectionList title="Lista de Cartões">
      {cards.map((card: Props, index) => (
        <CreditCard {...card} key={index} />
      ))}
    </SectionList>
  );
};

export default ListCards;
