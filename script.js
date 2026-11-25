/*parte 1*/
let btnEnergia = document.querySelector("#btn-energia")
let body = document.body


btnEnergia.addEventListener('click', () => {
    body.classList.toggle("energia-restaurada")
    if (body.classList.contains("energia-restaurada")) {
        btnEnergia.textContent = "Energia Estavel"
        btnEnergia.style.background = "green"
    } else {
        btnEnergia.textContent = "Restaurar energia"
        btnEnergia.style.background = "#e94560"
    }
})


/*Parte 2*/
const areaRastreio = document.querySelector("#area-rastreio")
let spanX = document.querySelector("#coord-x")
let spanY = document.querySelector("#coord-y")


areaRastreio.addEventListener('mousemove', (evento) => {
    spanX.textContent = evento.offsetX;
    spanY.textContent = evento.offsetY;

})
areaRastreio.addEventListener('mouseleave', () => {
    spanX.textContent = "0"
    spanY.textContent = "0"
})


/*Parte 3*/

let imgEscudo = document.querySelector("#img-escudo")
let botoesALertas = document.querySelectorAll(".btn-alerta")

botoesALertas.forEach((botao) => {
    botao.addEventListener('click', () => {

        const cor = botao.getAttribute("data-cor")
        const status = botao.getAttribute("data-status")

        imgEscudo.setAttribute('src', `https://placehold.co/150x150/${cor}/white?text=${status}`)
        imgEscudo.setAttribute('alt', `Escudo em modo ${status}`)

    })
})


// parte 4 

const inputTarefa = document.getElementById("input-tarefa");
const btnAddTarefa = document.getElementById("btn-add-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");

btnAddTarefa.addEventListener("click", () => {
  const textoTarefa = inputTarefa.value.trim();
  
    if(textoTarefa == ""){
        alert("digite algo")

    }else{
    
    const li = document.createElement("li");
    li.textContent = textoTarefa;

    li.addEventListener("click", () => {
      li.classList.toggle("concluida");
    });

    listaTarefas.appendChild(li);

    inputTarefa.value = "";
    inputTarefa.focus();
  }
});

// parte 5

const mensagem = document.querySelector("#input-mensagem")
const transmissor = document.querySelector("#visor-transmissao")

mensagem.addEventListener('input', (event) => {
    transmissor.textContent = event.target.value
})

// parte 6

const select =  document.querySelector("#select-destino")
let painel = document.querySelector(".painel")

select.addEventListener('change' , () => {
    painel.style.backgroundColor = select.value
})

// parte 7

const senha = document.querySelector("#input-senha")
const autenticar = document.querySelector("#btn-autenticar")
const acesso = document.querySelector("#msg-acesso")

const senhaCerta = "123"

autenticar.addEventListener('click', () => {
    if(senha.value == senhaCerta){
        acesso.className = "status-sucesso"
        acesso.textContent = "Acesso concedido Comandante"
    }
    else{
        acesso.textContent = "Acesso negado intruso detectado"
        acesso.className = "status-erro"
    }
})

// parte 8
const display = document.querySelector("#display-temperatura")
const valorTemp = document.querySelector("#valor-temp")
const btnAquecer = document.querySelector("#btn-aquecer")
const btnResfriar = document.querySelector("#btn-resfriar")


let temperatura = 20;
let contador
btnAquecer.addEventListener('click' , ()=> {

    btnAquecer.disabled = true

    contador = setInterval( () => {
        valorTemp.textContent = temperatura
        temperatura += 5
    
        if (temperatura >= 80){
    
            display.classList.add("perigo-critico")
           
        }
        if (temperatura >= 100) {
            clearInterval(contador)
            valorTemp.textContent =  temperatura + "Explosão Iminente°C" 
            btnResfriar.disabled = false   
        }
    },500)

})

btnResfriar.addEventListener('click',() => {

contador = setInterval(() => {
    temperatura -= 5
    valorTemp.textContent = temperatura
    if(temperatura == 20){
        clearInterval(contador)
        valorTemp.textContent = temperatura
        display.classList.remove('perigo-critico')
        btnAquecer.disabled = false
    }
    },500)

btnResfriar.disabled = true

})

