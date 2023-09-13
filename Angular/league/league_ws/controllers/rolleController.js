const rolle = require('../models').rolle_model;
const db = require('../models');

module.exports = {

  listFull(req, res) {     return rolle      .findAll({ })
     .then((project) => res.status(200).send(project))
      .catch((error) => { res.status(400).send(error);      }); },

    getById(req, res) {
        console.log(req.params.id);
        return rolle
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'rolle Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req);
        return rolle.create({
            rolle: req.body.rolle
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {
    
        return rolle
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'rolle Not Found',
                    });
                }
                return project
                    .update({
                        rolle: req.body.rolle || project.rolle
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return rolle
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'rolle Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM rolle")
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