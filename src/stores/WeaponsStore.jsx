import {autorun, makeAutoObservable} from 'mobx'
import {fetchWeapons} from "../fetchers/fetchWeapons";

export class WeaponsStore {
    weapons = []
    constructor() {
        makeAutoObservable(this)
        autorun( ()=>{
            this.fetchWeapons()
        })
    }

    *fetchWeapons() {
        this.weapons = yield fetchWeapons()
    }



}