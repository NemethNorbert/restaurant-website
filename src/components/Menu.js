import React from 'react';
import pickBy from 'lodash.pickby';
import debounce from 'lodash.debounce';
import { Switch, Route } from 'react-router-dom';
import { Input } from 'reactstrap';

import MenuNav from './MenuNav';
import FullMenuList from './FullMenuList';
import SpecCardList from './SpecCardList';
import MenuHeader from './MenuHeader';

let fullMeal = {};
let meal = {};
class Menu extends React.PureComponent {
  state = {
      searchTerm: '',
      search: '',
      meal: {},
      fullMeal: {},
      current: '',
    }

  componentWillMount(){
    if(Object.keys(this.state.meal).length === 0){

      meal= {};
      fullMeal= {};
      let georgeYung = Object.keys(this.props.meals);
      for(let i = 0; i< georgeYung.length; i++){
        let actual = georgeYung[i];
        actual = actual.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        if(window.location.href.indexOf(actual.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) > -1) {
          this.setState({current: actual})
          fullMeal = Object.values(this.props.meals)[i];
        }
      }

      this.getCategories = (arrayOfObj) => {
        for(let i = 0; i < arrayOfObj.length; i++) {
          return arrayOfObj.map(obj => obj.category);
        }
      }

      const types= [...new Set(this.getCategories(fullMeal))];

      this.fillCategories = (arrOfTypes, fromObj, toObj) => {
        for(let i = 0; i < arrOfTypes.length; i++) {
          toObj[arrOfTypes[i]] =
          pickBy(fromObj, (value) => {
            return value.category.match(arrOfTypes[i])
          });
        };
      };

      this.fillCategories(types,fullMeal,meal);

      this.setState({
        meal,
        fullMeal,
      })
    }
  }
  doSearch = debounce(() => {
    this.setState({search : this.state.searchTerm})
  }, 300)
  handleSearch = (event) => {
    this.setState({typeSearch: ''});
    this.setState({ searchTerm: event.target.value }, ()=> {
      this.doSearch()
    });
  };

  render() {
    // let card = null;
    // let georgeYung = Object.keys(this.props.meals);
    // for(let i = 0; i< georgeYung.length; i++){
    //   let actual = georgeYung[i];
    //   debugger;
    //   if(window.location.href.indexOf(actual.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) > -1) {
    //     debugger;
    //     card = Object.values(this.props.meals)[i];
    //   }
    // }


    const searchRE = new RegExp(this.state.search, 'i');
    let listedMeals;
    let searchMeals= {};
    if (this.state.search) {
      // pickBy is used to filter an object(instead of array), recives value and key(not used here)
      listedMeals = pickBy( this.state.fullMeal, (value) => {
        return value.name.match(searchRE)
          || value.body.match(searchRE)
          || value.contain.join(' ').match(searchRE);
      });
      let tempTypes= [...new Set(this.getCategories(Object
        .values(listedMeals)))];
      this.fillCategories(tempTypes,listedMeals,searchMeals);

    }

    const specCardList = () => {
      return(
        <SpecCardList
          listedMeals={this.state.meal}
          search={listedMeals}
          fullMeals={this.state.fullMeal}
        />
      );
    };
    const fullList = () => {
      return(
        <FullMenuList
          meals={this.state.meal}
          search={searchMeals}
          searchTerm={this.state.search}
        />
      );
    };
    return (
      <div>
        <MenuHeader current={this.state.current}/>
        <div className="container">
            <Input
              type={"search"}
              placeholder={"Enter search term"}
              value={this.state.searchTerm}
              onChange={this.handleSearch}
              className={"float-left maR bg-grey search"}
            />
            <MenuNav
              handleClick={this.handleClick}
              meal={this.state.meal}
              current={this.state.current}
            />
          <div className="clearfix"></div>
            <Switch>
              <Route exact path={'/'+this.state.current} component={fullList} />
              {Object.keys(this.state.meal).map((types, index) =>
                  <Route
                    key={types}
                    path={'/'+this.state.current+'/'+types.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}
                    component={specCardList}
                    />
                )
              }
            </Switch>

        </div>
      </div>
    );
  }
}

export default Menu;
