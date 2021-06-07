// Implementing Redux Prototype Using Factory Function in Js

function store(initialState, reducer){



   const store = {};
	
	store.state = initialState;
	store.subscribers = [];

	store.subscribe = (listener) => {
	
	if(typeof listener === 'function') store.subscribers.push(listener);

	}
	
	store.getState() {
	return store.state;
	}

	store.dispatch = (action) => {
	
	store.state = reducer(store.state, action);
	store.subscriber.forEach(sub => sub());
	
	}

}


const reducer = (state, action) {

	switch(action.type) {

	case 'add': return state + 1;
	case 'sub': return state - 1;
	default: return state;

	}
}



	const store = store(reducer);

	store.subscribe(() => console.log(getSate());

	store.dispatch({type: 'add'});

