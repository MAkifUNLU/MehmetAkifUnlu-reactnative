export const CATEGORY_FETCH = 'CATEGORY_FETCH';

const initialstate = {
    categories: [],
}

type Action = {
    type: string,
    payload?: {
        id: number;
        name: string;
    }
}

export default (state: any = initialstate, action: Action) => {
    switch (action.type) {
        case CATEGORY_FETCH: 
        return {
            categories: action.payload
        };
        default:
        return state;
    }
};
