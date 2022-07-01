import {autorun, makeAutoObservable} from 'mobx'
import {fetchCharacters} from "../fetchers/fetchCharacters";

export class CharactersStore {
    characters = []
    constructor() {
        makeAutoObservable(this)
        autorun( ()=>{
            this.fetchCharacters()
        })
    }

    *fetchCharacters() {
        this.characters = yield fetchCharacters()
    }



}