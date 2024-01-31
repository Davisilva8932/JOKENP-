
const resutado = document.querySelector(".resultado")
const pontuacaoUsuario = document.querySelector(".Usuario")
const pontacaoDaAlexa = document.querySelector(".Alexa")

let pontoUsuario = 0
let pontoAlexa = 0


const usuario = (jogadadoUsuario) => {

    vamosJogar(jogadadoUsuario, Alexa())

}

const Alexa = () => {
    const jogadaAleatoria = ["pedra", "papel", "tesoura"]
    const jogadaAlexa = Math.floor(Math.random() * 3)

    return jogadaAleatoria[jogadaAlexa]

}

const vamosJogar = (humano, maquina) => {
    console.log(humano, maquina)

    if (humano === maquina) {
        resutado.innerHTML = "Deu empate!"

    } else if ((humano === "pedra" && maquina === "tesoura") ||
        (humano === "papel" && maquina === "pedra") ||
        (humano === "tesoura" && maquina === "papel")
    ) {
        pontoUsuario++
        pontuacaoUsuario.innerHTML = pontoUsuario
        resutado.innerHTML = "Você ganhou!"
    
    } else {
        pontoAlexa++
        pontacaoDaAlexa.innerHTML = pontoAlexa

        resutado.innerHTML = "Você perdeu!"
    }


}