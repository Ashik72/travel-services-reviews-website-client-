const express = require("express");
const servicesControllers = require("../controllers/services.controller");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Services found");
// });
// router.post("/", (req, res) => {
//   res.send("Services added");
// });

router
  .route("/")
  /**
   * @api {get} /tools All tools
   * @apiDescription Get all the tools
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the tools.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(servicesControllers.getAllServices)
  .post(servicesControllers.saveAService);

module.exports = router;
