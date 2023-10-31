const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

// state
const initialState = {
    value: 0
}

// create store
const store = Redux.createStore(reducerFunction)

function reducerFunction(state = initialState, action){
    if(action.type === 'increment'){
        return {...initialState, value: initialState.value += 1}
    }else if(action.type === 'decrement'){
        return {...initialState, value: initialState.value -= 1}
    }else{
        return {...state}
    }
}

function render(){
    const state = store.getState()
    counter.innerText = state.value;
}

store.subscribe(render)

incrementBtn.addEventListener('click', ()=>{
    store.dispatch({
        type: 'increment'
    })
})

decrementBtn.addEventListener('click', ()=> {
    store.dispatch({
        type: 'decrement'
    })
})