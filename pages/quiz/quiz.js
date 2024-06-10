import { trocarTema, verificarTema} from "../../helpers/temahelper.js"

const botaoTema = document.querySelector(".tema button")

const body = document.querySelector("body")

const assunto = localStorage.getItem("assunto")

let quiz = {}
let pontos = 0
let pergunta = 1
botaoTema.addEventListener ("click", () => {
    trocarTema(body, botaoTema)
})

verificarTema(body, botaoTema)


function alterarAssunto () {
    const divIcone = document.querySelector(".assunto-icone ")
    const iconeImg = document.querySelector(".assunto-icone img")
    const assuntoTitulo = documnet.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase())
    iconeImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    iconeImg.setAttribute("alt", `ícone de ${assunto}`)
    assuntoTitulo.innerText = assunto
}

alterarAssunto()

async function buscarPerguntas(){
    const urlDados = "../../data.json"

    await fetch(urlDados).then(resposta=> resposta.json()).then(dados =>{
        dados.quizzes.forEach(dado =>{
            if (dado.tittle === assunto) {
                quiz= dado
            }
        })
    })
}

function montarPergunta() {
    const main = document.querySelector("main")

    main.innerHTML = `        <section class="perguntas">
            <p>Questão ${pergunta} de 10</p>
            <h2>${alterarSinais(quiz.questions[pergunta-1].question)} Qual o significado de HTML?</h2>
            <div class="barra_progresso">
                <div style="width:${pergunta * 10}%"></div>
            </div>
        </section>

        <section class="alternativas">
            <form action="">
                <label for="alternativa_a" id="correta">
                    <input type="radio" id="alternativa_a" name="alternativa">

                    <div>
                        <span>A</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[0])}
                    </div>
                </label>

                <label for="alternativa_b" id="errada">
                    <input type="radio" id="alternativa_b" name="alternativa">
                    <div>
                        <span>B</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[0])}
                    </div>
                </label>

                <label for="alternativa_c">
                    <input type="radio" id="alternativa_c" name="alternativa">
                    <div>
                        <span>C</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[0])}
                    </div>
                </label>

                <label for="alternativa_d">
                    <input type="radio" id="alternativa_d" name="alternativa">
                    <div>
                        <span>D</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[0])}
                    </div>
                </label>
            </form>
            <button>Enviar</button>

        </section>
        <a href="../../pages/resultados/resultado.html">resultados</a>`
}

function alterarSinais(texto) {
    return texto.replace(/</g, "&lt;").replace(/>/g,"&lt;")
}

async function iniciar() {
    alterarAssunto()
    await buscarPerguntas()
    montarPergunta()
}

iniciar()