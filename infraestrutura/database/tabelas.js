class Tabelas {
    init(conexao) {
        this.conexao = conexao;

        this.criarAtendimentos();
        this.criarPets();
    }

    criarAtendimentos() {
        const sql = `CREATE TABLE IF NOT EXISTS Atendimentos (id int not null AUTO_INCREMENT, 
            cliente varchar(11) not null, pet varchar(20), servico varchar(20) not null, data
            datetime not null, dataCriacao datetime not null,  
            status varchar(20) not null, observacoes text, PRIMARY KEY(id))`

        this.conexao.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Criada com sucesso');
            }
        });
    }

    criarPets () {
        const query = `CREATE TABLE IF NOT EXISTS Pets (id int not null AUTO_INCREMENT, 
            nome varchar(50), imagem varchar(200),
            primary key (id))`;

        this.conexao.query(query, err => {
            if (err) {
                console.log(err);
            } else {
                console.log('Tabela Pets foi criada com sucesso');
            }
        })
    }
}

module.exports = new Tabelas