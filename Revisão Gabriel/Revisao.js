/*atividade de revisão*/

/*
1)Uma biblioteca deseja gerenciar a ordem de chegada dos livros
devolvidos, utilizando um array chamado livrosDevolvidos:
*/

let livrosDevolvidos = ["Dom casmurro", "1984", "O pequeno Principe"]

/*
A) Um novo livro chamado "Capitaes de Areia" foi devolvido. Como
adicioná-lo ao final da lista? Escreva o código correspondente
*/

let livro = ["Dom casmurro", "1984", "O pequeno Principe"]
livro.push("Capitaes de Areia")
console.log(livro)

["Dom casmurro", "1984", "O pequeno Principe", "Capitaes de Areia"]


/*
B) O último livro devolvido foi danificado e precisa ser retirado do sistema. Que
método será usado? Como array ficara depois?
*/

let livro = ["Dom casmurro", "1984", "O pequeno Principe"]
livro.pop()
console.log(livro)

["Dom casmurro", "1984", "O pequeno Principe"]



/*
C) O bibliotecario quer saber se "1984" foi devolvido e, se sim, em qual posição
ele está. Qual método deve utilizar? O que ocorre se o livro procurado não estiver na lista?
*/

let livro = ["Dom casmurro", "1984", "O pequeno Principe"]
livro.indexOf("1984")

/*Caso ele não esteja na lista, ele volta*/ [-1]



/*
2)Uma unidade de saúde organiza pacientes em um array filaPrioritaria
para atendimento por ordem de chegada.
*/

let filaPrioritaria = ["Ana", "Bruno", "Clara"]

/*
A) Paciente chamado "Diego" chegou e deve ser o ultimo da fila. Qual
método usar?
*/

let filaPrioritaria = ["Ana", "Bruno", "Clara"]
filaPrioritaria.push("Diego")
console.log(filaPrioritaria)

["Ana", "Bruno", "Clara", "Diego"]


/*
B) Após o atendimento de Ana, ela deve ser removida. Qual método deve ser
usado? Mostre o array após isso.
*/

let filaPrioritaria = ["Ana", "Bruno", "Clara"]
filaPrioritaria.shift()
console.log(filaPrioritaria)

["Bruno", "Clara"]



/*
C) Um paciente chamado "Clara" precisou sair da fila por motivos pessoais.
Como localizá-la e removê-la da lista?
*/

let filaPrioritaria = ["Ana", "Bruno", "Clara"]
filaPrioritaria.pop()
console.log(filaPrioritaria)

["Ana", "Bruno"]

/*
3) Um aplicativo gerencia itens de compras em um array "compras"
*/

let compras = ["Leite", "Arroz", "Feijão"]
compras.pop()
compras.push("Macarrão")
compras.unshift("Ovos")

/*
A) Qual será o estado final do array "compras" após todas as operações?
*/

["Ovos","Leite", "Arroz", "Macarrão"]


/*
B) O que retorna o comando compras.indexOf("arroz")? E se buscarmos "café"?
*/

// [-1]
// [-1]


/*
C) Se pop() fosse substituido por shift(), qual item seria removido? Como isso mudaria a lógica da fila?
*/ 

/*
Ao substituir o pop() por shift() automaticamente removeria o item "Leite"
A fila ficaria na seguinte ordem:
["Ovos", "Arroz", "Macarrão"]
*/

/*
4) Uma empresa registra usuários que acessaram o sistema usando um array "usuariosLogados":
*/

let usuariosLogados = ["Lucas", "Beatriz", "Misael"]
usuariosLogados.push("Mariana")
usuariosLogados.splice(usuariosLogados.indexOf("Lucas"), 1)

/*
A) Explique as mudanças no array após cada operação acima.
*/

/*
O Splice foi usado para remover o item correspondente, e o indexOf("Lucas") foi usado
para localizar a posição do elemento "Lucas" que no caso a posição era 1.
*/

/*
B) Compare o uso de "Splice(indexOf())" com o método pop()


