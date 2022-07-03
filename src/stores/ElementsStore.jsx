import { autorun, makeAutoObservable } from "mobx";
import { fetchElements } from "../fetchers/fetchElements";

export class ElementsStore {
  elements = [];
  constructor() {
    makeAutoObservable(this);
    autorun(() => {
      this.fetchElements();
    });
  }

  *fetchElements() {
    this.characters = yield fetchElements();
  }
}
