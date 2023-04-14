// A diferença entre os dois é que o localStorage salva os dados independente se a janela foi fechada. Já o sessionStorage, salva até a sessão ser fechada.
// OBS: O valor salvo é uma string
// 1- inserir dado: localStorage.setItem(chave,valor)
localStorage.setItem('nome','Daniel')
// 2- pegar dado: localStorage.getItem(chave)
const nome = localStorage.getItem('nome')
// 3- remover dado: localStorage.removeItem(chave)

// 4- apagar todos os dados : localStorage.clear()


/* =================sessionStorage======================*/

sessionStorage.setItem('chave','valor')
sessionStorage.getItem('chave')

// Se eu quiser colocar um objeto no valor, seja em local ou session: Converter o objeto para JSON e depois em string = JSON.stringify

pessoa ={
    nome:'Daniel',
    idade:19,
    sexo:'Masculino'
}

sessionStorage.setItem('pessoa',JSON.stringify(pessoa))
// localStorage é a mesma coisa

// Para eu pegar o valor do objeto eu preciso passar um JSON.parse(obj)
const getPessoa = sessionStorage.getItem('pessoa')

const pessoaObj = JSON.parse(getPessoa)

console.log(pessoaObj.idade)