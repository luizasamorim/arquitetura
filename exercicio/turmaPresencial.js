const turma = require('./turma')

class turmaPresencial extends turma{
    constructor(codigo, nota, frequencia){
       super(codigo,nota)
       this.frequencia = frequencia
    }

    aprovado() {
        return this.nota >= 6 && this.frequencia > 75
    }
}

module.exports = turmaPresencial