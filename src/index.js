// {
//     movieCount: 0
// }

// const ADD_TO_MOVIE_COUNT = 'ADD_TO_MOVIE_COUNT'
// {
//     type: ADD_TO_MOVIE_COUNT 
// }


// {
//     burritosEaten: 0
// }

// const ADD_TO_BURRITOS_EATEN = 'ADD_TO_BURRITOS_EATEN'
// {
//     type: ADD_TO_BURRITOS_EATEN
// }


// {
//     favoriteSong: "happy birthday"
// }

// const UPDATE_SONG = 'UPDATE_SONG'
// {
//     type: UPDATE_SONG,
//     payload: {
//         songName: 'unhappy birthday',
//         updateDate: '2020-02-11'
//     }
// }

// {
//     ageOfHappyBirthdaySong: 99999999
// }

// {
//     coffees: 0
// }

// const INCREMENT_COFFEE_COUNT = 'INCREMENT_COFFEE_COUNT';
// {
//     type: INCREMENT_COFFEE_COUNT
// }

import { 
    createStore,
    combineReducers
} from 'redux';


const UPDATE_LUNCH_ITEM = 'UPDATE_LUNCH_ITEM'
const UPDATE_DESSERT_ITEM = 'UPDATE_DESSERT_ITEM'
const INCREMENT_COFFEE_COUNT = 'INCREMENT_COFFEE_COUNT'

// example action that modifies lunch item
function actionUpdateLunch(itemName) {
    return {
        type: UPDATE_LUNCH_ITEM,
        payload: {
            itemName
        }
    }    
}
function actionUpdateDessert(itemName) {
    return {
        type: UPDATE_DESSERT_ITEM,
        payload: {
            itemName
        }
    }    
}
function actionIncrementCoffee() {
    return {
        type: INCREMENT_COFFEE_COUNT,
    }    
}



// example action provided by redux
// when it creates the store
// {
//     type: '@@INIT'
// }

const defaultLunchState = { lunch: ''} ;
function lunch(state=defaultLunchState, action) {
    const newState = { ...state };
    switch (action.type) {
        case UPDATE_LUNCH_ITEM:
            newState.lunch = action.payload.itemName;
            break;
        default:
            console.log('Did not match');
            break;
    }
    return newState;
}
const defaultDessertState = ''
function dessert(state=defaultDessertState, action) {
    let newState = state;
    switch (action.type) {
        case UPDATE_DESSERT_ITEM:
            newState = action.payload.itemName;
            break;
        default:
            console.log('Did not match');
            break;
    }
    return newState;
}

const defaultCoffeeState = 0;
function coffeeCount(state=defaultCoffeeState, action){
    let newState = state;
    switch (action.type) {
        case INCREMENT_COFFEE_COUNT:
            newState += 1;
            break;
        default:
            break;
    }
    return newState;
}


// const someOtherInitialState = {
//     lunch: 'coffee'
// };


const rootReducer = combineReducers({
    // part of tree : reducer function
    lunch: lunch,
    coffee: coffeeCount,
    dessert: dessert
});

const store = createStore(  rootReducer,                             
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
                        );
window.store = store;
window.actionUpdateLunch = actionUpdateLunch;
store.subscribe(() => {
    // just for debugging!
    console.table(store.getState());
});

store.dispatch(actionUpdateLunch('steak'));
store.dispatch(actionUpdateDessert('steak'));


// store.subscribe(() => {});
// store.subscribe(() => {});


