import React from 'react';
import Color from './Color';


class ColorField extends React.Component {
  render() {
      let colors = this.props.colors.map( color => {
        return(<Color key={color.id} {... color} />);
      });
      return(
      <div>
        <ul>
          {colors}
        </ul>
      </div>
    )
  }
}

export default ColorField;
