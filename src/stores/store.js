import { makeAutoObservable } from 'mobx'
import { CharactersStore } from './CharactersStore'
import { WeaponsStore } from "./WeaponsStore";

export class RootStore {
    characterStore = new CharactersStore()
    weaponStore = new WeaponsStore()
    constructor() {
        makeAutoObservable(this)
    }

}
