import React from 'react';


class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.listColor = this.listColor.bind(this);
  }

  listColor(e) {
    e.preventDefault();
    console.log('Button ran')
    let color = this.refs.btn.value
    this.props.addColorField(color)

  }

  render() {
    return (
      <button ref='btn' onClick={this.listColor}>Red</button>
    )
  }
}

export default ColorButton;
