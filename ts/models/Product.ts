import { IProduct } from "@/types";
import { el, setChildren } from "redom";

export default class Product implements IProduct {
  public readonly id: string | number;
  private _name: string = '';
  private _desc: string = '';

  constructor(id: string | number, name: string, desc: string) {
    this.id = id;
    this.name = name;
    this.desc = desc;
  }

  static isUser(data: any): data is Product {
    if (typeof data !== 'object' || data === null) return false;
    const requiredKeys: (keyof Product)[] = ['id', 'name', 'desc'];

    return requiredKeys.every(key => key in data);
  }

  getCardEl() {
    const cardEl = el('div.product-card');
    const cardTitleEl = el('span.product-card__title', this.name);
    const cardDescEl = el('p.product-card__desc', this.desc);

    setChildren(cardEl, [cardTitleEl, cardDescEl]);

    return cardEl;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set desc(value) {
    this._desc = value;
  }

  get desc() {
    return this._desc;
  }
}