import { makeAutoObservable } from 'mobx'

import { CharactersStore } from './CharactersStore'

export class RootStore {
    characterStore = new CharactersStore()

    constructor() {
        makeAutoObservable(this)
    }

}
