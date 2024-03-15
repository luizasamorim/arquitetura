const aluno = require('./aluno')
const turma = require('./turma')
const turmaPresencial = require('./turmaPresencial')

const meuAluno = new aluno("luiza", "luiza.schons", "2144077")
console.log("aluno\n".concat("nome: ", meuAluno.nome, "\nlogin: ", meuAluno.login, "\nra: ", meuAluno.ra))

const minhaturma = new turma(1234, 8)
console.log(minhaturma.aprovado());

const minhaTurmaPresencial = new turmaPresencial(1234, 7, 78)
console.log(minhaTurmaPresencial.aprovado());