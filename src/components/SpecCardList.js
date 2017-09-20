import React from 'react';
import ProductCard from './Card';
import pickBy from 'lodash.pickby';

class SpecCardList extends React.PureComponent {

  render() {
    let card = null;
    let georgeYung = Object.keys(this.props.listedMeals);
    if(this.props.search){
      card = this.props.search
      }
      else {

        for(let i = 0; i< georgeYung.length; i++){
          let actual = Object.keys(this.props.listedMeals)[i];

          if(window.location.href.indexOf(actual.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) > -1) {
            card = pickBy( this.props.fullMeals, (value) => {
              return value.category.match(actual)
            });
          }
        }
      }
    return (
      <div className="marT">
        <div className="clearfix">
            <div className="cardWrapper">
            {Object.values(card).map((meals) =>

                <ProductCard
                  key={meals.id}
                  meals={meals}
                />
                )
              }
            </div>
          </div>
        </div>
    );
  }
}

export default SpecCardList;
