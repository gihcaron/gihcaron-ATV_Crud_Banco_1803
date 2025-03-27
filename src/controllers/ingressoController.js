const ingressoModel = require("../models/ingressoModel");

const getAllIngressos = async (req, res) => {
    try {
        const ingressos = await ingressoModel.getAllIngressos();
        res.json(ingressos);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar Ingressos." });
    }
};

const getIngressoById= async (req, res) => {
    try {
        const ingresso = await ingressoModel.getIngressoById(req.params.id);
        if (!ingresso) {
            return res.status(404).json({ message: "Ingresso não encontrado." });
        }
        res.json(ingresso);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar ingresso." });
    }
};

const createIngresso = async (req, res) => {
    try {
        const { evento, localizacao, data_evento, categoria, preco, quantidade_disponivel } = req.body;
        if (!evento || !localizacao || !data_evento || !categoria || !preco || !quantidade_disponivel) {
            return res.status(400).json({ message: "Todos os campos devem ser preenchidos." });
        }

        const newIngresso = await ingressoModel.createIngresso(evento, localizacao, data_evento, categoria, preco, quantidade_disponivel);
        res.status(201).json(newIngresso);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao criar ingresso." });
    }
};

const updateIngresso = async (req, res) => {
    try {
        const { evento, localizacao, data_evento, categoria, preco, quantidade_disponivel } = req.body;
        const updatedIngresso = await ingressoModel.updateIngresso(req.params.id, evento, localizacao, data_evento, categoria, preco, quantidade_disponivel);
        if (!updatedIngresso) {
            return res.status(404).json({ message: "Ingresso não encontrado." });
        }
        res.json(updatedIngresso);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar ingresso." });
    }
};

const deleteIngresso = async (req, res) => {
    try {
        const message = await ingressoModel.deleteIngresso(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar Ingresso." });
    }
};

const createVenda = async (req, res) => {
    try {
        const { id, quantidade } = req.body;
        if (!id || !quantidade || quantidade <= 0) {
            return res.status(400).json({ message: "Todos os campos devem ser preenchidos e a quantidade deve ser maior que zero." });
        }

        const ingresso = await ingressoModel.getIngressoById(id);
        if (!ingresso) {
            return res.status(404).json({message: "Ingresso não encontrado ou inexistente."})
        }
        
        if (ingresso.quantidade_disponivel < quantidade) {
            return res.status(400).json({ message: "Quantidade solicitada maior que a disponível. Não foi possível concluir sua compra." });
        }
        ingresso.quantidade_disponivel -= quantidade;
        if (ingresso.quantidade_disponivel < 0) {
            ingresso.quantidade_disponivel = 0;
        }
        await ingressoModel.updateIngresso(ingresso.id, ingresso.evento, ingresso.localizacao, ingresso.data_evento, ingresso.categoria, ingresso.preco, ingresso.quantidade_disponivel);   
        const newVenda = await ingressoModel.createVenda(req.params.id, id, quantidade);  
        res.status(201).json(newVenda);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Erro ao criar venda."})
        }    
}

//  module.exports = { getAllIngressos, getIngressoById, createIngresso, updateIngresso, deleteIngresso, createVenda };

module.exports = { getAllIngressos, getIngressoById, createIngresso, updateIngresso, createVenda, deleteIngresso};