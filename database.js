/**
 * Modulo de conexão com o banco de dados
 * Uso do framework mongoose
 */

// Importação do mongoose
const mongoose = require("mongoose")

// configuração do acesso do banco de dados
// ip/link - Authenticação
// OBS: Atlas(obter via compass)
// Para criar um banco de dados personalizado basta escolher um nome no final da string da url (exemplo dbclientes)
const url = "mongodb+srv://senac:123senac@projetonode.a2ojd.mongodb.net/dbclientes"

// Criar uma variavel de acordo para validação
let conectado = false

// método para conectar o banco de dados
const conectar = async () => {
    // Validação (Se não estiver conectado, conectar)
    if (!conectado) {
        // Conectar com o banco
        try {
            await mongoose.connect(url)
            conectado = true //setar a variavel
            console.log("MongoDB Conectado!")
        } catch (error) {
            // mensgem de erro
            if (error.code = 8000) {
                console.log("Erro de authenticação")
            }else {
                console.log(error)
            }
        }
    }
}

// método para desconectar o banco de dados
const desconectar = async () => {
    // Validação (Se estiver conectado, desconectar)
    if (conectado) {
        // Desconectar com o banco
        try {
            await mongoose.disconnect(url)
            conectado = false //setar a variavel
            console.log("MongoDB Desconectado!")
        } catch (error) {
            console.log(error)
        }
    }
}

// Reportar para o main os estados conectar, desconectar
module.exports = {conectar, desconectar}