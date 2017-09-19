import React from 'react';

class LeftArrow extends React.Component {
  render() {
    return (
      <div className={this.props.className}
      style={{...this.props.style, display: 'block', background: 'black'}}
      onClick={this.props.onClick}></div>
    );
  }
}

export default LeftArrow;
