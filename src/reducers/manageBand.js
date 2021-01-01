import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {

  // console.log(state)
  
  switch (action.type) {
    case 'ADD_BAND':
      // console.log('reducer received this action:', action)
      const bandObj = {
        id: uuid(),
        bandName: action.payload.bandName
      }
      return { ...state, bands: [...state.bands, bandObj] }

    case 'DELETE_BAND':
      // console.log(state.bands)
      // console.log(action.payload)
      return { bands: state.bands.filter( bandObj => bandObj.id !== action.payload)}

    default:
      return state;
  }
};
