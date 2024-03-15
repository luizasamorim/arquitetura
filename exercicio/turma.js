class turma{
    constructor(codigo, nota){
        this.codigo = codigo
        this.nota = nota
    }

    aprovado() {
        return this.nota >= 6
    }
}

module.exports = turma