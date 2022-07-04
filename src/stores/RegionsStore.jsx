import {autorun, makeAutoObservable} from 'mobx'
import {fetchNations} from "../fetchers/fetchNations";
import {regionImages} from "../mockData/regionsData";

export class RegionsStore {
    regions = []
    constructor() {
        makeAutoObservable(this)
        autorun( ()=>{
            this.fetchNations()
        })
    }

    *fetchNations() {
        this.regions = yield fetchNations().then((res)=>res.reverse().map((item, index) => ({
            ...item,
            img: regionImages[index].img.main,
            emblem: regionImages[index].img.emblem,
            linkedImage: regionImages[index].img.linkedImage,
        })))
    }




}