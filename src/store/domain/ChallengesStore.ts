import { Store } from "../Store"
import { observable, computed, action, runInAction } from "mobx"


export default class ChallengesStore {
    constructor(store: Store) {
        this.store = store
    }
    store: Store

}


