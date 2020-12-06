const jokeEl = document.getElementById('joke');
const btnEl = document.getElementById('btn')

generateJoke();

btnEl.addEventListener('click', generateJoke)

function generateJoke() {

    const config = {
        headers: {
          Accept: 'application/json',
        }
    }            
    fetch('https://icanhazdadjoke.com', config)
    .then(response => response.json())
    .then(data => {
        jokeEl.innerText = data.joke;
    })
}