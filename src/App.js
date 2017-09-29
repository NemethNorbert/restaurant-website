import React from 'react';
import DocumentMeta from 'react-document-meta';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import Menu from './components/Menu';
import Homepage from './components/Homepage';
import data from './testData';
import Footer from './components/Footer';
import Galeria from './components/Galeria';
import Perf from 'react-addons-perf';
if (typeof window !== 'undefined') {

  window.Perf = Perf;
}

class App extends React.Component {
  state= {
    meals: {},

  }

  componentWillMount() {

    // fetch("http://localhost:3001/users")
    //   .then(res => res.json())
    //   .then(meals => this.setState({ meals }));


    // For Static Data
    this.setState({meals:data.data})

    // For Performance test
    setImmediate(() => {
      Perf.start();
    });
    setTimeout(() => {
      Perf.stop();
      Perf.printWasted();
    }, 5000);
  }


  render() {
    if(Object.keys(this.state.meals).length === 0){return null;}
    let { meals } = this.state;
    const meta = {
      title: 'Some Meta Title',
      description: 'I am a description, and I can create multiple tags',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',

        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    };
    const menu = () => {
      return(
        <Menu
          meals={meals}
        />
      );
    };

    return (
      <DocumentMeta {...meta}>
        <Navigation meals={meals}/>
        <Switch>
					<Route exact path={process.env.PUBLIC_URL+"/"} component={ Homepage } />
					<Route path={process.env.PUBLIC_URL+"/Rolunk"} component={ About } />
          <Route path={process.env.PUBLIC_URL+"/Galeria"} component={ Galeria } />
          {Object.keys(meals).map((types, index) =>
              <Route
                key={types}
                path={process.env.PUBLIC_URL+'/'+types.normalize('NFD').replace(/[\u0300-\u036f]/g, "")}
                component={menu}
                />
              )
            }
  			</Switch>
        <div className="clearfix">
        <Footer />
        </div>
      </DocumentMeta>
    );
  }
}

export default App;
