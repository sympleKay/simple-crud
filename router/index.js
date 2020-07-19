const express = require('express');
const router = express.Router();
const bodyParser = require ('body-parser');
const mongojs = require('mongojs');
const db = mongojs('simpleHostel', ['tenant']);
const urlencoded = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();


router.get('/', (req, res) => {
    res.render('index', {title: "Add"})
})

router.get('/view', (req, res) => {
    db.tenant.find().sort({ room_no: 1 }, (err, docs) => {
        if (err) {
            console.log(err);
        } else {
            res.render('view_tenants', {title: "View", tenant: docs})
        }
    })
})

router.get('/edit/:id', (req, res) => {
    db.tenant.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, docs) => {
        if (err) {
            console.log(err);
        } else {
            res.render('edit_tenant', {title: "Edit", tenant:docs})
        }
    })
})


router.get('/delete/:id', (req, res) => {
    db.tenant.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, docs) => {
        if (err) {
            console.log(err);
        } else {
            res.render('delete_tenant', {title: "Delete", tenant:docs})
        }
    })
})


router.post('/add', urlencoded, (req, res) => {
    let newTenant = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        room_no: req.body.room_no,
        tenancy: req.body.tenancy,
        occupation: req.body.occupation,
        gender: req.body.gender,
        phone_no: req.body.phone_no
    }
    db.tenant.insert(newTenant, (docs, error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(docs);
        }
        res.redirect('/view')
    })
})


router.post ('/edit/:id', urlencoded, (req, res) => {
    let editTenant = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        room_no: req.body.room_no,
        tenancy: req.body.tenancy,
        occupation: req.body.occupation,
        gender: req.body.gender,
        phone_no: req.body.phone_no
    }
    db.tenant.update( {_id: mongojs.ObjectId(req.params.id) }, {$set: editTenant}, (err, result) => {
        if (err) {
            console.log (err)
        } else {
            res.redirect('/view')
        }
    })
})

router.post('/delete/:id', urlencoded, (req, res) => {
    let id = req.params.id;
    db.tenant.remove ({_id: mongojs.ObjectId(id)}, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/view');
        }
    })
})




module.exports = router;