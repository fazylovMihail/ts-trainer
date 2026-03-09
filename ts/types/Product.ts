interface IProduct {
  readonly id: string | number,
  name: string,
  desc: string,
  getCardEl(): HTMLElement
}

export { IProduct }