const calendar = require('../models').calendar_model;
const db = require('../models');

module.exports = {

  listFull(req, res) {     return calendar      .findAll({ })
     .then((project) => res.status(200).send(project))
      .catch((error) => { res.status(400).send(error);      }); },

    getById(req, res) {
        console.log(req.params.id);
        return calendar
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'calendar Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req);
        return calendar.create({
            competition_id: req.body.competition_id,
            local_id: req.body.local_id,
            visitor_id: req.body.visitor_id,
            Jornada: req.body.Jornada,
            edition_id: req.body.edition_id
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {
    
        return calendar
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'calendar Not Found',
                    });
                }
                return project
                    .update({
                        competition_id: req.body.competition_id || project.competition_id,
                        local_id: req.body.local_id || project.local_id,
                        visitor_id: req.body.visitor_id || project.visitor_id,
                        Jornada: req.body.Jornada || project.Jornada,
                        edition_id: req.body.edition_id || project.edition_id
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return calendar
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'calendar Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM calendar")
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