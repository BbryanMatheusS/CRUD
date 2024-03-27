import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q , (err,data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};


export const addUser = (req, res) => {
    const q = "INSERT INTO ususarios(`name`,`email`,`fone`,`data_nascimento`) VALUES(?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q , [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuario criado com sucesso.");
    })
};


export const updadteUser = (req, res) => {
    const q = "UPDADTE usuarios SET `name` = ?, `email` = ?, `fone` = ?,`data_nascimento` = ? WHERE `id` = ?";

    const values = [
        req.body.name,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q , [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuario atualizado com sucesso.");
    })
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q ,[req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuarios deletadocom sucesso.");
    });
};