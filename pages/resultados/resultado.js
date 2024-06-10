import { trocarTema, verificarTema} from "../../helpers/temahelper.js"

const botaoTema = document.querySelector(".tema button")

const body = document.querySelector("body")

botaoTema.addEventListener ("click", () => {
    trocarTema(body, botaoTema)
})

verificarTema(body, botaoTema)