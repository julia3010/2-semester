const values = [10, 20, 30];
const URLs = [
  'https://kodaktor.ru/api/m/',
  'https://kodaktor.ru/api/MS2/',
  'https://kodaktor.ru/api/MS3/',
];

(async (a, b) => {
  let next = 0;
  for (let i = 0; i < a.length; i++ ) {

    let r = await fetch((b[i] + a[i] + '/' + next), {
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    console.log(b[i] + a[i] + '/' + next);
    next = r.result;

    document.body.innerHTML = `<h1>${next}</h1>`
  }
})(values, URLs);
