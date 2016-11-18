import React from 'react';

class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.listColor = this.listColor.bind(this);
  }

  listColor(e) {
    e.preventDefault();
    let color = this.refs.color.value;
  }

  render() {
    return (
      <button className="btn" onClick={this.listColor}></button>
    )
  }
}

export default ColorButton;
