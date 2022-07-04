import {autorun, makeAutoObservable} from 'mobx'
import {fetchNations} from "../fetchers/fetchNations";
import {regionImages} from "../mockData/regionsData";

export class RegionsStore {
    userInfo = {}
    constructor() {
        makeAutoObservable(this)
    }

}