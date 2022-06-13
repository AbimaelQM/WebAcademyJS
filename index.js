/*console.log("hello world, javascript")

//variaveis

//variavel sem escopo
var x = 10

//varivavel com escopo
let y = ""

//varivael com escopo e imutavel
const z = ''

y = 20

console.log(y)

//se if for verdadeiro e vai ser pq 1 retorna true ele altera a variavel Y no escopo do bloco para 15 e escreve o valor no console
if(1){
   let y = 15
    console.log(y)
}

console.log(y)

//declara uma constante nome com valor "Abimael"
const nome = "Abimael"

console.log(nome)//escreve o valor que o nome tem no console
console.log(typeof nome)//verifica o tipo do nome

//declara uma constante idade com valor 21
const idade = 21

console.log(idade)//escreve o valor que o idade tem no console
console.log(typeof idade)//verifica o tipo de idade


const peso = 61.2

console.log(peso)
console.log(typeof peso)

*/

//null
//atribui o valor null, que em um condicional retorna false
const nada = null
console.log(nada)
console.log(typeof nada)
/*

//undefined

//atribui o valor undefined, que em um condicional retorna false
let indefinido
console.log(indefinido)
console.log(typeof indefinido)


//bool
//um boolean pode ser true ou false
const vouf = true
console.log(vouf)
console.log(typeof vouf)


//array
//declaração de um array com elementos de tipos variados, o array em si é um tipo Object
const vetor = ['java', 10, false]
console.log(vetor[1])
console.log(typeof vetor)
console.log(vetor.length)
*/

/*
//objeto literals
//declaração de um objeto com proriedade chave:valor com tipos strings e number e o objeto é um tipo array
const usuario = {
    email: 'abimaelqm@hotmail.com',
    senha: '51655165',
    nome: 'Abimael',
    idade: 21
}

console.log(usuario.nome)
console.log(typeof usuario)

const nome = 'Abimael'
//transforma a string nome em um vetor com os caracteres da string
const stringParaVetor = nome.split('')
console.log(stringParaVetor)
console.log(Object(nome))
console.log(Array(nome))
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

const nomeMaisculo = nome.toUpperCase()

console.log(nomeMaisculo)
console.log(nomeMaisculo[nomeMaisculo.length-1])

console.log(nomeMaisculo.slice(1,6))

//arry vetor lista
const lista = ['a','b','c','d','e','f','g']

//.length mostra o tamanho do array
// console.log(lista.length) 
// console.log(lista[1])
// console.log(typeof lista)
// console.log(lista)

//push adiciona no final array
// lista.push('bb')
// console.log(lista)
//pop retira o ultimo elemento do array
// lista.pop()
// console.log(lista)
//shift retira o primeiro elemento do array
// lista.shift()
// console.log(lista)
//unshift adiciona no final do array
// lista.unshift('bala')
// console.log(lista)

//object literals - estrutura que descreve entidade
//criação de um objeto literal que representa uma entidade, no caso um produto
const produto = {
    nome: 'Camisa',
    preco: 9.99,
    emEstoque: true,
    size: ['P','M','G'],
    'cor': 'vermelha'
}

console.log(produto.cor)
console.log(produto['cor'])

//destructuring - recurso de objetos para extrair variaveis de dentro dele

//para facilitar o uso de uma propriedade do obejto se usa a desistruturação, que deve usar variaveis com o mesmo nome da propriedade do objeto 
const { preco, emEstoque } = produto
console.log(preco, emEstoque)

//para facilitar o acesso aos dados do vetor se usa a desistruturação, mas diferente do objeto que tem propriedades, o do vetor pega os valores e poe na variavel pela ordem que estã no vetor
const [ char1, char2 ] = lista
console.log(char1)
console.log(char2)

//JSON JavaScript Object Notation

const doguinho = {
    nome: 'Scooby',
    idade: 10,
}

const json = JSON.stringify(doguinho)
console.log(json)
const json2 = JSON.parse(json)
console.log(json2)


const jsonErrado = JSON.stringify({"nome":"Scooby","idade":10})
console.log(jsonErrado)


//estruturas, metodos de lista, funções

const n = 10

if(n>10){
    console.log('Teste de entrada no if')
}

const texto = 0

if(texto == '0'){
    console.log('Os dados são iguais')
}else console.log('os dados não sao iguais')

//operador ternario

const resultado = n>20 ? true:false

console.log(resultado)
console.log(typeof resultado)


//Repetição: precisa de 3 partes - variavel de controle e a inicialização da variavel, condiçãp de parada e alteraçãodo valor da variavel de controle

let cont = 0
const listar = [1,2,3,4,5,6,7]
while(cont< listar.length) {
    console.log('O \'elemento da lista\' é '+listar[cont]+'.')
    cont++
}

const outraLista = ['a','jota', 'ana', 'ja']

for(let contador = 0; contador < outraLista.length; contador++){
    console.log(`O elemento da lista é ${outraLista[contador]}.`)
}


console.log(`\``==="`")

const a = 3, b = 5

console.log("Oito é "+ (a+b)+ "\ne não "+(2*a+b))
console.log(`Oito é ${a+b} 
e não ${2*a+b}`)

//metodos de listas arrays vetores
const nomes = ['Abimael', 'Cleyciane', 'Paulo', 'Victor']

nomes.forEach((nome)=> console.log(nome))


const nomesModificados = nomes.map((nome) => {
    if(nome === 'Paulo')
        return nome = 'O grande'
    else
        return nome
})

nomesModificados.forEach((nome)=> console.log(nome))


const numerosGrandes = ['4','9','44','66','55','99'].filter((numero) => numero>10)

console.log(numerosGrandes)

console.log(numerosGrandes.reduce((accumulator, number) => accumulator + number,0))

*/

//funções

function minhaFuncao(){
    console.log('Estou dentro da minha funcao')
}

minhaFuncao()

const funcao = function minhaFuncao(nome, sobrenome /*Na criação da função se chama parametros */){
    console.log(typeof nome)
    console.log(`o nome completo é ${nome} ${sobrenome}`)
    return (`${nome} ${sobrenome}`)
}

const nome = "Abimael"
const sobrenome = "Lima"


console.log(funcao(nome,sobrenome /*Na criação da função se chama parametros */))

//arrow functions

const soma = (a,b)=> a+b

soma()

const lista = ['Esse cara é maior','a','b','c','d']

console.log(lista.map( elemento => elemento.length))


let x = 10

const fora = () => (x= 3 ,() => x+5)()//função callback?????

// const fora = () => {
//     let x = 2
//     function somaMais5(){
//         return x+5
//     }
//     return somaMais5()
// }

console.log(fora())

//Orientação a objetos

class Produto {
    constructor(nome,preco){
        this.nome = nome
        this.preco = preco
    }


    detalhesDoProduto = () => `O preço do produto ${this.nome} é R$${this.preco}`

}

const oculos = new Produto("Óculos", 19.99)

console.log(oculos.detalhesDoProduto())
console.log(oculos)

const meia = new Produto("Meia", 2.55) 

console.log(meia.detalhesDoProduto())
console.log(meia)


//heranças 

class ProdutoComTamanho extends Produto {
    constructor(nome, preco, tamanho){
        super(nome,preco)
        this.tamanho = tamanho
    }

    outraMensagem = (adjetivo) => `O produto ${this.nome} é ${adjetivo} demais`

}

const camisa = new ProdutoComTamanho("Camisa", 253.56, "M")
console.log(camisa.detalhesDoProduto())
console.log(camisa.outraMensagem("Linda"))

//DOM - Document Object Model

//getElementById
const titulo = document.getElementById('titulo')
console.log(titulo)

//querySelector
const mesmoTitulo = document.querySelector('#titulo')
console.log(mesmoTitulo)

const paragrafos = document.querySelectorAll('.texto')
console.log(paragrafos)


paragrafos.forEach((texto) => console.log(texto.textContent.toUpperCase()))


//manipulação

const textoAleatorio = paragrafos[0].textContent

paragrafos[3].innerHTML = textoAleatorio
paragrafos[0].style.backgroundColor = 'red'

titulo.innerText = 'Proximo video'

paragrafos[2].remove()

const botao = document.querySelector('#botao')

botao.addEventListener('click', () => console.log("Testando o botao"))


