const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ['Ola', 'Denis', 'Kristina', 'Ivan']
// "Math.random()" - da nam znaczenia od 0 do n.999
// "Math.floor()" - zaokrągla nam znaczenia


const nameGenerator = () => {
    const index = Math.floor(Math.random() * names.length);
    div.textContent = `Najlepsze imię dla dziecka będzie: ${names[index]}`
}

btn.addEventListener('click', nameGenerator);
