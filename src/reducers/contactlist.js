export default function contactlist(state = [], action) {
    switch (action.type) {
        case "contactAdded":
            return [
                ...state, {
                    number: action.payload.number,
                    name: action.payload.name,

                }
            ]
     
    
    case "contactDeleted":
        return state.filter(({ id }) => id !== action.payload);




     
    case "contactEdited":
        return state.map((item)=> {
            if( item.id == action.payload.id) {
              return action.payload
            } else {
              return item;
            }
          });
        default:
            return state
    }

   
}