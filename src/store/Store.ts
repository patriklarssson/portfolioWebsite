// import DomainStore from './domain/ChallengesStore'
// import ChallengesStore from './domain/ChallengesStore'


export class Store {
	domain = {
		// challenge: new ChallengesStore(this),
	}
	ui = {
		
	}

}

let store: Store = undefined
export const createStore = (): Store => {
	if (!store) {
		store = new Store()
	}
	return store
}