import React from 'react';
import ColorButton from './ColorButton';
import ColorField from './ColorField';

class ColorApp extends React.Component {
  render() {
    return (
      <div>
        <ColorButton />
        <ColorField />
      </div>
    )
  }
}

export default ColorApp;
