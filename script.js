const resultado = document.getElementById('Resultado')
const campoBusca = document.getElementById('campoBusca')
const btnBuscar = document.getElementById('btnBuscar')

const btnAnterior = document.getElementById('btnAnterior')
const btnProximo = document.getElementById('btnProximo')

let pokemonAtual = 1;
buscarPokemon(1)

async function buscarPokemon(termo) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + termo

    const Resposta = await fetch(url)
    const pokemon = await Resposta.json()

    pokemonAtual = pokemon.id

    resultado.innerHTML = `
        <img src="${pokemon.sprites.front_default}"/>
        <p>#${pokemon.id}</p>
        <h2>${pokemon.name}</h2>
    `
}

btnBuscar.addEventListener('click', () => {
    console.log("Fui clicado buscando pokemon " + campoBusca.value)
    buscarPokemon(campoBusca.value)
})

btnAnterior.addEventListener('click', () => {
    if (pokemonAtual > 1) {
        pokemonAtual--
        buscarPokemon(pokemonAtual)
    }
})

btnProximo.addEventListener('click', () => {
    pokemonAtual++
    buscarPokemon(pokemonAtual)
})
