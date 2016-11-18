import React from 'react';
import ColorButton from './ColorButton';
import ColorField from './ColorField';

class ColorApp extends React.Component {
  constructor(props) {
    super(props);
    this.addColorField = this.addColorField.bind(this);
    this.showColors = this.showColors.bind(this);

    this.state = { colors: [], id: 0 }
  }

  showColors() {
    return( this.state.colors)
  }

  addColorField(name) {
    let id = ++this.state.id;
    this.setState({
      colors: [
        { name, id },
        ...this.state.colors
      ],
      id
    });
  }


  render() {
    return (
      <div>
        <ColorButton addColorField={this.addColorField} />
        <ColorField colors={this.showColors()}/>
      </div>
    )
  }
}

export default ColorApp;
