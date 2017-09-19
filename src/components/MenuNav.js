import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

class MenuNav extends React.PureComponent {

  render() {
    let styler = classnames('btn','btn-secondary', 'marL');

    return (
      <div>
          {Object.keys(this.props.meal).map((types, index) =>
              <NavLink
                key={types}
                to={'/'+this.props.current+'/'+types.normalize('NFD').replace(/[\u0300-\u036f]/g, "")} className={styler} activeClassName="active">
                {types}
              </NavLink>
            )
          }

        </div>
    );
  }
}

export default MenuNav;
