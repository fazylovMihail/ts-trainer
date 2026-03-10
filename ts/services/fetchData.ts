export default async function  fetchData<T>(): Promise<T[]> {
  const response = await fetch('./data/formuls.json');
  if(!response.ok) throw new Error(`Ошибка HTTP ${response.status}`);

  return await response.json();
}