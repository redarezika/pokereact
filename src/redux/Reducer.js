const InitialState = {
  listPokemon: [],
  limitedPokemon: []
}

const PokeReducer = (prevState = InitialState, action) => {

  if(action.type == 'LOAD_LIMITED_DATA') {
    return {
      ...prevState,
      limitedPokemon: action.payload
    }
  }
  
  return prevState;
}

export default PokeReducer;