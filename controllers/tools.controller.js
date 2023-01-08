const tools = [
  {id: 1, name: "Hammer1"},
  {id: 2, name: "Hammer2"},
  {id: 3, name: "Hammer3"},
]

module.exports.getAllTools = (req, res, next) => {
    const {limit, page} = req.query;
    console.log(limit, page);
    res.send("Send")
  }

module.exports.saveATool = (req, res, next) => {
    
  }

  module.exports.getToolDetail = (req, res, next) => {
    const {id, test} = req.params;
    console.log(id, test);
    res.send("Send")
  }

  module.exports.updateATool = (req, res, next) => {
    
  }
  module.exports.deleteATool = (req, res, next) => {

  }