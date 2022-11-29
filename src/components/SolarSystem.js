import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="planets-list">
          {planets.map((planeta) => {
            const { name, image } = planeta;
            return (
              <PlanetCard
                key={ name }
                planetName={ name }
                planetImage={ image }
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
