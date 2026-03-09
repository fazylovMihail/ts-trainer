export default function resizeItem(list: HTMLUListElement | HTMLOListElement, item: HTMLLIElement): void {
  const styles = window.getComputedStyle(list);

  const rowHeight = parseInt(styles.getPropertyValue('grid-auto-rows'));
  const rowGap = parseInt(styles.getPropertyValue('column-gap'));

  const content = item.firstChild as HTMLDivElement | HTMLElement;
  const contentHeight = content.getBoundingClientRect().height;

  const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = `span ${rowSpan}`;
}