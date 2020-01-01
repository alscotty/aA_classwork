import React from 'react'

class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.pokemonId!==prevProps.match.params.pokemonId){
    this.props.requestAPokemon(this.props.match.params.pokemonId)
    }
  }

  render(){
    const {id,name,attack,defense,poke_type,moves}=this.props
    console.log(this.props);
    return(
      <div>
        <h1>{id}akafjkf</h1>
        <h1>{name}</h1>
        <h1>{attack}</h1>
      </div>
    )
  }

}

export default PokemonDetail;