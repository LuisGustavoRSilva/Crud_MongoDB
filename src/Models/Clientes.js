/**
 * modelo de dados para as coleções ( tabelas)
 */

// importação do srecursos do framework mongoose
const {model, Schema, version} = require('mongoose')

// Criação da estrutura d acoleção clientes
const clientesSchema = new Schema({
    nomeCliente: {
        type: String
    },
    foneCliente: {
        type: String
    },
    cpf: {
        type: String,
        unique:true,
        index: true
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
},{versionKey: false}) // não vercionar os dados armazenados

// exportar para o main o modelo de dados

module.exports = model('Contatos', clientesSchema)