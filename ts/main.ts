import { IProduct } from "@/types";
import { fetchData, resizeItem } from "@/services";
import { Product } from "@/models";
import { el, setChildren } from "redom";

const ELEMENTS = {
  appList: document.querySelector('.app__list') as HTMLUListElement
}

try {
  const rawData: readonly IProduct[] = await fetchData();

  rawData.forEach(data => {
    if (!Product.isUser(data)) {
      throw new Error('Объект не соответсвует интерфейсу IProduct');
    }
  });

  const productArr: IProduct[] = rawData.map(product => {
    return new Product(product.id, product.name, product.desc);
  });

  productArr.forEach(product => {
    const appListItemEl = el('li.app__list-item') as HTMLLIElement;

    setChildren(appListItemEl, [product.getCardEl()]);
    ELEMENTS.appList.append(appListItemEl);

    requestAnimationFrame(() => {
      resizeItem(ELEMENTS.appList, appListItemEl);
    });
  });
} catch (error) {
  console.error(error);
}