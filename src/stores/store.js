import { makeAutoObservable } from "mobx";
import { CharactersStore } from "./CharactersStore";
import { ElementsStore } from "./ElementsStore";
import { WeaponsStore } from "./WeaponsStore";
import { ElementsStore } from "./ElementsStore";
import { RegionsStore } from "./RegionsStore";


export class RootStore {

    characterStore = new CharactersStore()
    weaponStore = new WeaponsStore()
    elementStore = new ElementsStore()
    regionStore = new RegionsStore()

    constructor() {
        makeAutoObservable(this)
    }

}
