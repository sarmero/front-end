const person = require('../models').person_model;
const users = require('../models').users_model;
const rolle = require('../models').rolle_model;
const db = require('../models');

module.exports = {

    listFull(req, res) {
        return person
            .findAll({
                attributes: [],
                include: [
                    {
                        model: users,
                    },
                    {
                        model: rolle,
                        attributes: ['rolle']
                    }
                ]
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    obtainPerson(req, res) {
        console.log(req.params);
        return person
            .findAll({
                attributes: [],
                include: [
                    {
                        attributes: ['id', 'usrname'],
                        model: users,
                        where: {
                            id: req.params.usr
                        }
                    },
                    {
                        attributes: ['id','rolle'],
                        model: rolle
                    }],
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => {
                res.status(400).send(error);
            });
    },

    getById(req, res) {
        console.log(req.params.id);
        return person
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'person Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req.body);
        return person
            .create({
            fist_name: req.body.fist_name,
            last_name: req.body.last_name,
            rolle_id: req.body.rolle_id,
            cedula: req.body.cedula
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {

        return person
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'person Not Found',
                    });
                }
                return project
                    .update({
                        fist_name: req.body.fist_name || project.fist_name,
                        last_name: req.body.last_name || project.last_name,
                        rolle_id: req.body.rolle_id || project.rolle_id,
                        cedula: req.body.cedula || project.cedula
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return person
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'person Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM person")
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