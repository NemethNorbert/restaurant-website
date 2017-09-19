import React from 'react';
import data from '../headerData';


class MenuHeader extends React.PureComponent {
  render() {
    const tracker = Object.keys(data.menu);
    const values = Object.values(data.menu)
    let current;
    let currentPicture;
    for(let i=0; i < tracker.length; i++) {
      let curr= tracker[i];
      if(curr.normalize('NFD').replace(/[\u0300-\u036f]/g, "") === this.props.current) {
        current = curr;
        currentPicture = values[i];
      }
    }
    return(
      <div className="jumbotron" style={{backgroundImage:"url('./pictures/"+currentPicture+"')",height:"400px"}}>
      <div className="container bannerWrapper">
        <h1 className="display-3">{current}</h1>
      </div>
      </div>
    )
  }
}

export default MenuHeader;
