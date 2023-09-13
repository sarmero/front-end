const result = require('../models').result_model;
const db = require('../models');

module.exports = {

  listFull(req, res) {     return result      .findAll({ })
     .then((project) => res.status(200).send(project))
      .catch((error) => { res.status(400).send(error);      }); },

    getById(req, res) {
        console.log(req.params.id);
        return result
            .findByPk(req.params.id)
            .then((project) => {
                console.log(project);
                if (!project) {
                    return res.status(400).send({
                        message: 'result Not Found',
                    });
                }
                return res.status(200).send(project);
            }).catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        console.log(req);
        return result.create({
            calendar_id: req.body.calendar_id,
            local: req.body.local,
            visitor: req.body.visitor
        })
            .then((project) => res.status(201).send(project))
            .catch((error) => res.status(500).send(error));
    },

    update(req, res) {
    
        return result
            .findByPk(req.params.id).then(project => {
                if (!project) {
                    return res.status(404).send({
                        message: 'result Not Found',
                    });
                }
                return project
                    .update({
                        calendar_id: req.body.calendar_id || project.calendar_id,
                        local: req.body.local || project.local,
                        visitor: req.body.visitor || project.visitor
                    })
                    .then(() => res.status(200).send(project))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return result
            .findByPk(req.params.id)
            .then(project => {
                if (!project) {
                    return res.status(400).send({
                        message: 'result Not Found',
                    });
                }
                return project
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            }).catch((error) => res.status(400).send(error));
    },

    getSQL(req, res) {
        return db.sequelize.query("SELECT * FROM result")
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