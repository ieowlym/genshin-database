import {autorun, makeAutoObservable} from 'mobx'
import {fetchNations} from "../fetchers/fetchNations";
import {regionImages} from "../mockData";

export class RegionsStore {
    userInfo = {}
    constructor() {
        makeAutoObservable(this)
    }

}