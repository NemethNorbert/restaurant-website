import React from 'react';
import CardList from './CardList';


class FullMenuList extends React.Component {

  render() {

    let meals=null;
    if (this.props.searchTerm){
      meals = this.props.search;
    } else {
      meals = this.props.meals;
    }
    return (
      <div className="marT">
      {Object.values(meals).map((categories, index) =>
            <div key={index} className="pad">
            <h1 style={{color:"#f4f4f4", marginLeft:"20%"}}>{Object.values(categories)[0].category}</h1>
            <hr className="hr"/>
            <div className="clearfix">
              <CardList
                listedMeals={categories}
              />
            </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default FullMenuList;
