import * as ActionConstants from '../constants/ActionConstants';

const initialState = {
  catalog: [
    {
      "id": 1,
      "imageURL": "src/client/images/macbook.jpg",
      "name": "Apple Macbook",
      "type": "",
      "price": 2500,
      "currency": "$"
    },
    {
      "id": 2,
      "imageURL": "src/client/images/motog4.jpg",
      "name": "Moto G4 Plus",
      "type": "",
      "price": 850,
      "currency": "$"
    },
    {
      "id": 3,
      "imageURL": "src/client/images/lgtv.jpg",
      "name": "LG TV",
      "type": "",
      "price": 1000,
      "currency": "$"
    },
    {
      "id": 4,
      "imageURL": "src/client/images/samsung_refrigerator.jpg",
      "name": "Samsung Refrigerator",
      "type": "",
      "price": 500,
      "currency": "$"
    },
    {
      "id": 5,
      "imageURL": "src/client/images/voltas_cooler.jpg",
      "name": "Voltas Cooler",
      "type": "",
      "price": 100,
      "currency": "$"
    }
  ],
  basketList: [],
  total: 0,
  loading: false
};

export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case ActionConstants.ADD_TO_CART:
      return Object.assign({}, state, { basketList: [...state.basketList, action.item], total: state.total + action.item.price });
    case ActionConstants.REMOVE_FROM_CART:
      return Object.assign({}, state, { basketList: state.basketList.filter(item => item !== action.item), total: state.total - action.item.price });
    default:
      return state;
  }
};