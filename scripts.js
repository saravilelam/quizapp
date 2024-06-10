
import {trocarTema, verificarTema} from "./helpers/tema-helper"

const botaoTema = document.querySelector(".temabutton")

const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocarTema(body,botaoTema)
})

verificarTema(body, botaoTema)
    