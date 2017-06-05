import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return (
      <div>
      <p>{this.props.name}</p>
      <p>{this.props.producer}</p>
      <p>{this.props.color}</p>
      <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
};

function weights(){
  let weight = []
  for (var i = 80; i <= 300; i++){
    weight.push(i)
  }
  return weight
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weights()).isRequired
};


export default Product;
