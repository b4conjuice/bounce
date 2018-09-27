const BACKEND = 'http://sandbox.nutritionexpress.com:5000/';

export async function callApi(api) {
  const response = await fetch(`${BACKEND}${api}`);
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
}
