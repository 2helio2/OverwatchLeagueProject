const axios = require('axios');
const config = require('../Config/Config');
const News = require('../Dominio/News');
const _ = require('underscore');

const fetchAll = async () => {
    return new Promise((resolve, reject) => {
        axios.get(`${config.apiUrl}/news`).then(data => resolve(data.data));
    });
};

const fetchElement = async (req) => {
    const params = req.params;
    return new Promise((resolve, reject) => {
        axios.get(`${config.apiUrl}/news/${params.id}`).then(data => resolve(data.data));
    });
};

const getAll = async (req, res, next) => {
    fetchAll().then((data) => {
        let promises = []; 

        res.collection = data;
        next();
    });
};

const getElement = async (req, res, next) => {
    fetchElement(req).then((data) => {
        let promises = [];

        res.collection = data;
        next();
    });
};

const controller = application => {
    application.createRoute('get', '/news', getAll, (req, res) => {
        return res.collection;
    });

    application.createRoute('get', '/news/:id', getElement, (req, res) => {
        return res.collection;
    });
}


module.exports = controller;


// TODO: Get each 
/*
const getAll = async (req, res, next) => {
    fetchAll().then((data) => {
        let promises = []; 

        _.each(data.results, data => {
            const content = new News(data.name, data.url);
            promises.push(content.getAttributes());
        });

        Promise.all(promises).then((result)=> {
            res.collection = result;
            next();
        }) 
    });
}; */