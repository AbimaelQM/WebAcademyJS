/*console.log("hello world, javascript")

//variaveis

var x = 10

let y = ""

const z = ''

y = 20

console.log(y)

if(1){
   let y = 15
    console.log(y)
}

console.log(y)

const nome = "Abimael"

console.log(nome)
console.log(typeof nome)

const idade = 21

console.log(idade)
console.log(typeof idade)


const peso = 61.2

console.log(peso)
console.log(typeof peso)

//null
const nada = null
console.log(nada)
console.log(typeof nada)


//undefined
let indefinido
console.log(indefinido)
console.log(typeof indefinido)


//bool
const vouf = true
console.log(vouf)
console.log(typeof vouf)


//array
const vetor = ['java', 10, false]
console.log(vetor[1])
console.log(typeof vetor)
console.log(vetor.length)
*/

/*
//objeto literals
const usuario = {
    email: 'abimaelqm@hotmail.com',
    senha: '51655165',
    nome: 'Abimael',
    idade: 21
}

console.log(usuario.nome)
console.log(typeof usuario)

const nome = 'Abimael'
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

// console.log(lista.length)
// console.log(lista[1])
// console.log(typeof lista)
// console.log(lista)

// lista.push('bb')
// console.log(lista)
// lista.pop()
// console.log(lista)
// lista.shift()
// console.log(lista)
// lista.unshift('bala')
// console.log(lista)

//object literals - estrutura que descreve entidade

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

const { preco, emEstoque } = produto
console.log(preco, emEstoque)

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

