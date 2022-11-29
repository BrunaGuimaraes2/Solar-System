import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const num1 = 18;
    const num2 = 25;
    const planet = planetImage.slice(num1, num2).toLowerCase();
    return (
      <div data-testid="planet-card" className={ `planet-card ${planet}` }>
        <div><img src={ planetImage } alt={ `Planeta ${planetName}` } /></div>
        <h3 data-testid="planet-name">{planetName}</h3>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
