const pool = require("../config/database");

const getIngressos = async () => {
    const result = await pool.query("SELECT * FROM ingressos");
    return result.rows;
};

const getIngressoById = async (id) => {
    const result = await pool.query("SELECT * FROM ingressos WHERE id = $1", [id]);
    return result.rows[0];
};

const createIngresso = async (evento, localizacao, data_evento, categoria, preco, quantiedade_disponivel) => {
    const result = await pool.query(
        "INSERT INTO ingressos (evento, localizacao, data_evento, categoria, preco, quantiedade_disponivel) VALUES ($1, $2) RETURNING *",
        [evento, localizacao, data_evento, categoria, preco, quantiedade_disponivel]
    );
    return result.rows[0];
};

const createVenda = async (id_venda, id, quantidade) => {
    const result = await pool.query(
        "INSERT INTO vendas (id_venda, id, quantidade) VALUES ($1, $2, $3) RETURNING *",
        [id_venda, id, quantidade]
    );
    return result.rows[0];
}

const updateIngresso = async (id, evento, localizacao, data_evento, categoria, preco, quantiedade_disponivel) => {
    const result = await pool.query(
        "UPDATE ingressos SET evento = $1, localizacao = $2, data_evento = $3, categoria = $4, preco = $5, quantiedade_disponivel = $6 WHERE id = $7 RETURNING *",
        [evento, localizacao, data_evento, categoria, preco, quantiedade_disponivel, id]
    );
    return result.rows[0];
};

const deleteIngresso = async (id) => {
    const result = await pool.query("DELETE FROM ingressos WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Ingresso não encontrado." };
    }

    return { message: "Ingresso deletado com sucesso." };
};

module.exports = { createVenda, getIngressos, getIngressoById, createIngresso, updateIngresso, deleteIngresso };
