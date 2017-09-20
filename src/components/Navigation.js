import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import classnames from 'classnames';
import { Switch, Route } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';
import Header from './Header';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  handleClickOutside = evt => {
    this.setState({
      isOpen: false
    });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    let styler = classnames('');
    return (
      <div>
      <Navbar fixed={`top`} inverse toggleable className={"navfix bg-brown"} >
          <NavbarToggler right onClick={this.toggle} className=""/>
          <NavbarBrand href="/" className={'mx-auto'}><br /><div className="text-center logo">
            <img className="logoImg" src={process.env.PUBLIC_URL + "/pictures/brand/brand.png"} alt="B54 Cafe, Bistro & Bakery"/>
          </div></NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar className={"toggler "}>
            <Nav className="ml-auto" navbar>
              <div className="static">
                <NavItem>
                  <NavLink to={'/'} exact activeClassName="active" tag={RRNavLink}>Homepage</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={'/about'} className={styler} activeClassName="active" tag={RRNavLink}>About</NavLink>
                </NavItem>
              </div>
              {Object.keys(this.props.meals).map((types, index) =>
                <NavItem key={types+index}>
                  <NavLink
                    to={'/'+types.normalize('NFD').replace(/[\u0300-\u036f]/g, "")} className={styler} activeClassName="active" tag={RRNavLink}>
                    {types}
                  </NavLink>
                </NavItem>
                )
              }
            </Nav>
          </Collapse>
        </Navbar>
        <div className="navline"></div>
        <div className="navfix">
          <Switch>
  					<Route exact path="/" component={ Header } />
  					<Route path="/about" component={ Header } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default onClickOutside(Navigation);
