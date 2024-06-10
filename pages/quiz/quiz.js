import { trocarTema, verificarTema} from "../../helpers/temahelper.js"

const botaoTema = document.querySelector(".tema button")

const body = document.querySelector("body")

const assunto = localStorage.getItem("assunto")

let quiz = {}
let pontos = 0
let pergunta = 1
let resposta = ""
let idInputRespostas = ""
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
                    <input type="radio" id="alternativa_a" name="alternativa" value="${alterarSinais(quiz.questionss[pergunta-1].options[0])}>

                    <div>
                        <span>A</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[0])}
                    </div>
                </label>

                <label for="alternativa_b" id="errada">
                    <input type="radio" id="alternativa_b" name="alternativa" value="${alterarSinais(quiz.questionss[pergunta-1].options[0])}">
                    <div>
                        <span>B</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[0])}
                    </div>
                </label>

                <label for="alternativa_c">
                    <input type="radio" id="alternativa_c" name="alternativa" value="${alterarSinais(quiz.questionss[pergunta-1].options[0])}>
                    <div>
                        <span>C</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[0])}
                    </div>
                </label>

                <label for="alternativa_d">
                    <input type="radio" id="alternativa_d" name="alternativa" value="${alterarSinais(quiz.questionss[pergunta-1].options[0])}>
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

function guardarResposta(evento) {
    resposta = evento.target.valueidInputRespostas = evento.target.id
    const botaoEnviar = document.querySelector(".alternativasbutton")
    botaoEnviar.addEventListener("click", validarResposta)
}

function validarResposta() {
    if(resposta === quiz.questions[pergunta-1].answer
        
    ) { document.querySelector(`label[for'${idInputRespostas}']`).setAttribute("id", "correta")
    pontos = pontos+1
    } else{
        document.querySelector(`label[for'${idInputRespostas}']`).setAttribute("id", "errada")
        document.querySelector(`label[for'${idInputRespostas}']`).setAttribute("id", "correta")
    }
}

async function iniciar() {
    alterarAssunto()
    await buscarPerguntas()
    montarPergunta()
}

const inputResposta = document.querySelector(".alternativas input")
idInputRespostas.forEach(input=> {
    input.addEventListener("click", guardarResposta)
    if (input.value === quiz.questions[pergunta-1].answer){
        respostaCorretaId = input.id
    }
})


iniciar()