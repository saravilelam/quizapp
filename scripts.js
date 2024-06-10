
import {trocarTema, verificarTema} from "./helpers/tema-helper"

const botaoTema = document.querySelector(".temabutton")

const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocarTema(body,botaoTema)
})

verificarTema(body, botaoTema)

const botoesAssunto = document.querySelector(".assuntos button")
botoesAssunto.forEach(botao => {
    botao.botao.addEventListener("click", selecionarAssunto)
})
    
function selecionarAssunto(evento) {
    const assunto = evento.target.innerText
    localStorage.setItem("assunto", assunto)
    window.location.href = "./pages/quiz/quiz.html"
}