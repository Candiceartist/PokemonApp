const React = require('react')


 class Show extends React.Component {
  render() {
    const {pokemon} = this.props;
    return (
      <div>
        <h1>Gotta Catch them All!</h1>
        <h2>{pokemon.name}</h2>
       
      
      </div>
    )
  }
}

module.exports = Show;