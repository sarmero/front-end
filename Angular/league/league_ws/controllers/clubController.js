const club = require('../models').club_model;
const league = require('../models').league_model;
const db = require('../models');

module.exports = {

    listFull(req, res) {
        return club.findAll({})
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },

    listClubLeague(req, res) {
        return club
            .findAll({
                attributes: ['id', 'name', 'logo'],
                where: {
                    league_id: req.params.liga
                },
                order: [['name', 'ASC']]
            })
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },


    getById(req, res) {
        console.log(req.params.id);
        return club
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'club Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req.body);
        return club.create({
            name: req.body.name,
            league_id: req.body.league_id,
            logo: req.body.logo
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {

        return club
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'club Not Found',
                    });
                }
                return project
                    .update({
                        name: req.body.name || project.name,
                        league_id: req.body.league_id || project.league_id,
                        logo: req.body.logo || project.logo
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return club
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'club Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM club")
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