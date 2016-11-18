import React from 'react';
import ColorButton from './ColorButton';
import ColorField from './ColorField';

class ColorApp extends React.Component {
  constructor(props) {
    super(props);
    this.addColorField = this.addColorField.bind(this);
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
        <ColorField />
      </div>
    )
  }
}

export default ColorApp;
