

export const fetchAllPokemon = () => {
  return $.ajax({
    url: '/api/pokemon',
    method: "GET"
  })
}

export const fetchAPokemon=(poke)=>(
  $.ajax({
    url:`api/pokemon/${poke}`
  })
)



