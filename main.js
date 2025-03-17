/**
 * Processo principal
 * Estudo do banco de dados mongoDB (Crud)
 * @author Luis Gustavo Rodrigues Da Silva
 */

// Importação do modulo de conexão
const { conectar, desconectar } = require('./database.js')

// Importação do modelo de dados do Cliente
const clientemodel = require('./src/Models/Clientes.js')

// Função para poder cadastrar o cliente
// Atenção para trabalhar com banco de dados usar sempre async-await-try-catch
const salvarcliente = async (nomeCli, foneCli, cpfCli,dataCad) => {
    try {
        // setar a estrutura de dados com o valores
        // OBS: usar os mesmos nomes da estrutura
        const novocliente = new clientemodel({
            nomeCliente: nomeCli,
            foneCliente: foneCli,
            cpf: cpfCli,
            dataCadastro: dataCad
        })
        // a linha abaixo salva os dados no banco de dados
        await novocliente.save()
        console.log("Cliente Adicionado com Sucesso")
    } catch (error) {
        console.log(error)
    }
}

// -------------------------------------------------------------------------------------------------------
const iniciarsistema = async () => {
    console.clear()
    console.log("Estudo do MongoDB")
    console.log("----------------------------------------------")
    await conectar()
    // CRUD Create (inserção no banco de dados)
    await salvarcliente("Carlos José", "987137-0984", "81521481568")
    await desconectar()
}

iniciarsistema()