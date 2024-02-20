const menus = require('../../database/menus.json')

module.exports = (req,res) => {
    res.render("home", { menus });
}