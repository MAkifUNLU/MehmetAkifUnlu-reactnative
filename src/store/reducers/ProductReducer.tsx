export const PRODUCT_FETCH = 'PRODUCT_FETCH';
export const PRODUCT_ADD = 'PRODUCT_ADD';

const initialstate = {
    products: [],
}

type Action = {
    type: string,
    payload?: {
        id: number;
        name: string;
        price: number;
        category: string;
        description: string;
        avatar: string;
        developerEmail: string;
    }
}

export default (state: any = initialstate, action: Action) => {
    switch (action.type) {
        case PRODUCT_FETCH:
            return {
                products: action.payload
            };
        case PRODUCT_ADD:
            return {
                products: [...state.products, action.payload],
            }
        default:
            return state;
    }
};
