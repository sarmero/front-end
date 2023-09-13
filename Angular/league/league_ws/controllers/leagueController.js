const league = require('../models').league_model;
const db = require('../models');

module.exports = {

    listFull(req, res) {
        return league
            .findAll({
                
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    
    leegueUser(req, res) {
        console.log("------------------ ",req.params);
        return league
            .findAll({
                where: {
                    user_id: req.params.usr
                }
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },


    getById(req, res) {
        console.log(req.params.id);
        return league
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'league Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req.body);
        return league
            .create({
            name: req.body.name,
            logo: req.body.logo,
            cup: req.body.cup,
            user_id: req.body.user_id
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {

        return league
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'league Not Found',
                    });
                }
                return project
                    .update({
                        id: req.body.id || project.id,
                        name: req.body.name || project.name,
                        logo: req.body.logo || project.logo,
                        cup: req.body.cup || project.cup,
                        user_id: req.body.user_id || project.user_id
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return league
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'league Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM league")
            .then((result) => {
                console.log(result); if (!result) {
                    return res.status(404).send({
                        message: 'result Not Found',
                    });
                } return res.status(200).send(result[0]);
            })
            .catch((error) => res.status(400).send(error));
    },
};