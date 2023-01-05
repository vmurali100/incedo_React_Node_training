import { ADD_PRODUCT, DELETE_PRODUCT, GET_USER, UPDATE_PRODUCT } from "./actionsTypes"

export const addProductAction = (  product ) => {

    return {

        type:ADD_PRODUCT,
        payload:product,
    }
}

export const updateProductAction = (  product ) => {

    return {

        type:UPDATE_PRODUCT,
        payload:product,
    }
}
export const deleteProductAction = (  product ) => {

    return {

        type:DELETE_PRODUCT,
        payload:product,
    }
}

