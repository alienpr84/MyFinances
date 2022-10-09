interface Action<T> {
	type: string;
	payload: T;
}

interface Reducer<S, A> {
	state: S;
	action: Action<A>;
}

export {
	type Action,
	type Reducer,
}