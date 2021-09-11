let letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","z"];
let palavras = [
["m","a","c","a","c","o"],
["j","u","i","z"],
["l","a","r","a","n","j","a"],
["a","b","a","c","a","x","i"],
["a","g","u","a"],
["l","u","z"],
["c","u","r","i","t","i","b","a"],
["l","e","t","r","a"],
["t","o","m","a","t","e"],
["c","r","u","z"],
["j","o","i","a"],
["l","i","v","r","o"],
["t","e","n","i","s"],
["j","o","g","o"],
["b","o","l","a"],
["s","o","j","a"],
["a","r","o","z"],
["c","a","r","n","e"],
["g","a","s","o","l","i","n","a"],
["r","a","t","o"]
]
let palavra123 = [] ;
function selecionandoPalavras() {
    for (let i = true; i === true;) {
        for(let j = 0; j < 3; j++) {
            palavra123[j] = palavras[Math.floor(Math.random() * palavras.length)]
        }
        
        if (palavra123[0] !== palavra123[1] && palavra123[0] !== palavra123[2] && palavra123[1] !== palavra123[2]) {
                i = false
        }
        }
        console.log(palavra123)
    }

function criandoJogo() {
    for (let i = 0; i < 100; i++ ) {
        const tabuleiro = document.querySelector(".small-container");
        const caixa = document.createElement("div");
        caixa.classList.add("letras");
        const letra = document.createElement("span");
        letra.id = i
        letra.innerText = letras[Math.floor(Math.random() * letras.length)]
        caixa.appendChild(letra);
        tabuleiro.appendChild(caixa);
       
    }
    selecionandoPalavras();
    for (let j = 0; j < 3; j++) {
        for(let linha = true; linha === true;) {
            let l = document.getElementById(Math.floor(Math.random() * 100));
            for (let int = 0 ;int < palavra123[j].length;) {
                int = l.id;
                int = int.split("");
                int = 10 - Number(int[int.length - 1])
                if (int < palavra123[j].length ) {
                    l = document.getElementById(Math.floor(Math.random() * 100));
                }
            }
          
            for (let k = 0 ; k < palavra123[j].length ; k++) {
                let id = Number(l.id) + k
                const u = document.getElementById(id);
                console.log(u.parentNode.classList.length)
                if (u.parentNode.classList.length === 2) {
                    linha = true
                    break
                }
                else {
                    u.innerText = palavra123[j][k]
                    u.parentNode.classList.add("check");
                    linha = false
                }

        }

        }
}

}
function arrayEquals(a,b) {
    if (a.length !== b.length) {
        return false
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false
        }
    }
    return true
     
}

const container = document.querySelector(".small-container")
const iniciar = document.querySelector("button");
iniciar.addEventListener("click",function() {
    container.innerHTML = ""
    criandoJogo()

})

const small_container = document.getElementsByClassName("small-container")[0];
small_container.addEventListener("click", function(event){
    if (event.target.nodeName === "DIV") {
        event.target.classList.toggle("selecionado")
    }
    else {
        event.target.parentNode.classList.toggle("selecionado")
    }
    const selecioado = document.querySelectorAll(".selecionado");
    const check = document.querySelectorAll(".check")
    if (arrayEquals(selecioado , check) === true) {
        alert("Voce Ganhou!!")

    }
    

});

