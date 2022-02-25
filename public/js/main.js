alert('Works')
document.querySelector('button').addEventListener('click', getPokemon)

async function getPokemon () {
    try {
    const res = await fetch('http://localhost:8000/api/squirtle')
    const data = await res.json()
    console.log(data)
    } catch(err) {
        console.log(err)
    }
}