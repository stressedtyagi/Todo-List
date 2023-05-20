var express = require("express");
var router = express.Router();
var helpers = require("../helpers/todos");

router.route("/").get(helpers.getTodos).post(helpers.makeTodo);

router
    .route("/:todoId")
    .get(helpers.getOneTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports = router;
