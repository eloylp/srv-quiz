'use strict';

module.exports = class IndexController {

    getIndex(req, res) {
        res.json({title: 'Express'});
    }
}

