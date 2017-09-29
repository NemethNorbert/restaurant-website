import React from 'react';

class RightArrow extends React.PureComponent {
  render() {
    return (
      <div className={this.props.className}
      style={{...this.props.style, display: 'block'}}
      onClick={this.props.onClick}></div>
    );
  }
}

export default RightArrow;
