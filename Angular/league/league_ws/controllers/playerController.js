const player = require('../models').player_model;
const db = require('../models');

module.exports = {

  listFull(req, res) {     return player      .findAll({ })
     .then((project) => res.status(200).send(project))
      .catch((error) => { res.status(400).send(error);      }); },

    getById(req, res) {
        console.log(req.params.id);
        return player
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'player Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req);
        return player.create({
            id: req.body.id,
            person_id: req.body.person_id,
            club_id: req.body.club_id,
            age: req.body.age,
            position_id: req.body.position_id
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {
    
        return player
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'player Not Found',
                    });
                }
                return project
                    .update({
                        id: req.body.id || project.id,
                        person_id: req.body.person_id || project.person_id,
                        club_id: req.body.club_id || project.club_id,
                        age: req.body.age || project.age,
                        position_id: req.body.position_id || project.position_id
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return player
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'player Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM player")
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