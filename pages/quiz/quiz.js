import { trocarTema, verificarTema} from "../../helpers/temahelper.js"

const botaoTema = document.querySelector(".tema button")

const body = document.querySelector("body")

botaoTema.addEventListener ("click", () => {
    trocarTema(body, botaoTema)
})

verificarTema(body, botaoTema)

const assunto = localStorage.getItem("assunto")

function alterarAssunto () {
    const divIcone = document.querySelector(".assunto-icone ")
    const iconeImg = document.querySelector(".assunto-icone img")
    const assuntoTitulo = documnet.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase())
    iconeImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    iconeImg.setAttribute("alt", `ícone de ${assunto}`)
    assuntoTitulo.innerText = assunto
}
4
alterarAssunto()