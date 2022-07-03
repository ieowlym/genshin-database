import { makeAutoObservable } from "mobx";
import { CharactersStore } from "./CharactersStore";
import { ElementsStore } from "./ElementsStore";
import { WeaponsStore } from "./WeaponsStore";

export class RootStore {
  characterStore = new CharactersStore();
  weaponStore = new WeaponsStore();
  elementStore = new ElementsStore();
  constructor() {
    makeAutoObservable(this);
  }
}
