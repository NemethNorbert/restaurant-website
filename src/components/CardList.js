import React from 'react';
import ProductCard from './Card';
import { CSSTransitionGroup } from 'react-transition-group';

class CardList extends React.PureComponent {

  render() {

    let card = null;
    if(this.props.search){
      card = this.props.search
    } else {
      card = this.props.listedMeals
    }
    return (
      <div className="cardWrapper">
        <CSSTransitionGroup
          transitionName="card"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
      {Object.values(card).map((meals) =>
          <ProductCard
            key={meals.id}
            meals={meals}
          />
          )
        }
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default CardList;
