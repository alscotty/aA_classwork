import { connect } from 'react-redux'
import PokemonDetail from './pokemon_detail'

const mapStateToProps = (state,ownProps) => {
  // debugger
  return({poke: state.entities.pokemon[ownProps.match.params.pokemonId]})
}

const mapDispatchToProps = dispatch => ({
  requestAPokemon: (poke) => (dispatch(requestAPokemon(poke)))// dispatch requestAPokemon action.
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);