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
      <Navbar color="inverse" fixed={`top`} inverse toggleable className={"navfix"} >
          <NavbarToggler right onClick={this.toggle}/>
          <NavbarBrand href="/" className={'mx-auto'}><br /><div className="text-center logo">
            <img className="logoImg" src={"../pictures/brand/brand.png"} />
          </div></NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to={'/'} exact className={styler} activeClassName="active" tag={RRNavLink}>Homepage</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to={'/about'} className={styler} activeClassName="active" tag={RRNavLink}>About</NavLink>
              </NavItem>
              {Object.keys(this.props.meals).map((types, index) =>
                <NavItem>
                  <NavLink
                    key={types}
                    to={'/'+types.normalize('NFD').replace(/[\u0300-\u036f]/g, "")} className={styler} activeClassName="active" tag={RRNavLink}>
                    {types}
                  </NavLink>
                </NavItem>
                )
              }
            </Nav>
          </Collapse>
        </Navbar>

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
