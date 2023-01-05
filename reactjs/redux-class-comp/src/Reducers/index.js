import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../Actions/actionsTypes";

const defaultState = {

    products: [ 

        {

            id :"1",
            name:"Macbook",
            price: "10",

        },
    ],
}



export const productReducer = (  state = defaultState , action ) => {

    switch( action.type) {

        case ADD_PRODUCT : 

                            let newProductArr = [ ... state.products ];
                            newProductArr.push(action.payload);

                            return { ...state , products: newProductArr}

        case UPDATE_PRODUCT :
                                
                                    let newArr = [...state.products];
                                    newArr.forEach( ( prod , i) => { 

                                        if( prod.id === action.payload.id )
                                        {
                                            newArr[i] = action.payload;
                                        }
                                    })

                                    return { ...state , products: newArr }

        case DELETE_PRODUCT : 

                                
                                  return {...state, products: state.products.filter( ( p ) =>  p.id !== action.payload ) };

        default: 
                        return state;

    }
 }


