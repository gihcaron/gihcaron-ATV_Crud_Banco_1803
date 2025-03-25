const pool = require("../config/database");

const getAllIngressos = async () => {
    const result = await pool.query("SELECT * FROM ingressos");
    return result.rows;
};

const getIngressoById = async (id) => {
    const result = await pool.query("SELECT * FROM ingressos WHERE id = $1", [id]);
    return result.rows[0];
};

const createIngresso = async (evento, localizacao, data_evento, categoria, preco, quantidade_disponivel) => {
    try {
        if (categoria === "Pista" && preco < 100) {
            return { error: "O preço mínimo para a categoria Pista é R$100,00." };
        } else if (categoria === "VIP" && preco < 200) {
            return { error: "O preço mínimo para a categoria VIP é R$200,00." };
        } else if (categoria === "Camarote" && preco < 300) {
            return { error: "O preço mínimo para a categoria Camarote é R$300,00." };
        } else if (categoria === "Arquibancada" && preco < 80) {
            return { error: "O preço mínimo para a categoria Arquibancada é R$80,00." };
        }

        const result = await pool.query(
            "INSERT INTO ingressos (evento, localizacao, data_evento, categoria, preco, quantidade_disponivel) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [evento, localizacao, data_evento, categoria, preco, quantidade_disponivel]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Erro ao criar ingresso:", error);
        throw error;
    }
};

// const createVenda = async (id_venda, id, quantidade, evento) => {
//     const result = await pool.query("SELECT * FROM ingressos WHERE id = $1", [id]);  
//     let quantidade_disponivel = result.rows[0].quantidade_disponivel;
//     if (quantidade_disponivel < quantidade) {
//         return { error: "Quantidade indisponível." };
//     }

//     quantidade_disponivel -= quantidade;
//     const updatedIngresso = await pool.query(
//         "UPDATE ingressos SET quantidade_disponivel = $2 WHERE id = $1 RETURNING *",
//         [quantidade_disponivel, id]
//     );

//     return {message: "Venda realizada com sucesso.", id_venda, id, quantidade, evento};
// }

// const updatedIngresso = await pool.query(
//     "UPDATE ingressos SET quantidade_disponivel = $2 WHERE id = $1 RETURNING *",
//     [id, quantidade_disponivel] 
// );

// const deleteIngresso = async (id) => {
//     const result = await pool.query("DELETE FROM ingressos WHERE id = $1 RETURNING *", [id]);

//     if (result.rowCount === 0) {
//         return { error: "Ingresso não encontrado." };
//     }

//     return { message: "Ingresso deletado com sucesso." };
// };

// module.exports = { createVenda, getAllIngressos, getIngressoById, createIngresso, updateIngresso, deleteIngresso };

module.exports = { getAllIngressos, getIngressoById, createIngresso };
