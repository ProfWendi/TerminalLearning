const menu = require("../models/menu.json");

exports.renderMenu = (req, res) => {
    //get the value in the name parameter from request
    const paramDay = req.params.day;
    let paramMenu = menu[req.params.day];
    // respond with a view called 'index.ejs'
    // express knows that this is in the /views directory    
    res.render("index", { day: paramDay, menu: paramMenu});
   //res.render("index", {day: paramDay});
};