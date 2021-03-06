import * as actions from '../actions/fridgeActions'

export const initialState = {
  value: "",
  products: [{}],
  // Items are the fridge contents from database
  productString: "",
  fridgeItems: [{}],
  user: null,
  loading: false,
  hasErrors: false,
  // userFridgeItems: [{}] 
}

export default function fridgeReducer(state = initialState, action) {
  switch (action.type) {

    case actions.CLEAR_PRODUCTS:
      return {
        ...state,
        products: initialState.products
      }
    //
    case actions.GET_FRIDGE:
      return { 
        ...state, 
        loading: true 
      }
    //
    case actions.GET_FRIDGE_SUCCESS:
      return { 
        ...state,
        fridgeItems: action.payload, 
        loading: false, 
        hasErrors: false,
      }
    //
    case actions.GET_FRIDGE_FAILURE:
      return { 
        ...state, 
        loading: false, 
        hasErrors: true 
      }
    case actions.AUTHORIZED_USER:
      return {
        ...state,
        user: action.payload
      }
      case actions.LOGOUT:
        return {
          ...state,
          user: initialState.user
        }
      case actions.GET_PRODUCTS:
        return {
          ...state,
          products: action.payload
        }
      case actions.ADD_ITEM_TO_FRIDGE:
        return {
          ...state,
          fridgeItems: action.payload,
        }
      // case actions.GET_USER_FRIDGE:
      //   return {
      //     ...state, 
      //     userFridgeItems: action.payload
      //   }
    //
    default:
      return state
  }
}