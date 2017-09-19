import React from 'react';
import ProductCard from './Card';

class CardList extends React.PureComponent {

  render() {

    let card = null;
    if(this.props.search){
      card = this.props.search
    } else {
      card = this.props.listedMeals
    }

    return (
      <div className="">
      {Object.values(card).map((meals) =>
          <ProductCard
            key={meals.id}
            meals={meals}
          />
          )
        }
      </div>
    );
  }
}

export default CardList;
