import {autorun, makeAutoObservable} from 'mobx'
import {fetchElements} from "../fetchers/fetchElements";

export class ElementsStore {
    elements = []
    chosenElement = {}

    constructor() {
        makeAutoObservable(this)
        autorun(() => {
            this.fetchElements()

        })
    }

    * fetchElements() {
        this.elements = yield fetchElements().then()
        if (Object.keys(this.chosenElement).length === 0) {
            this.chosenElement = yield this.elements[0]
        }
    }

    changeElement = (element) => {
        this.chosenElement = element
    }


}