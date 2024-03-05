"use strict";

  const express = require("express"),
      app = express(),
      controller = require("./controllers/homeController.js");
  app.set("port", process.env.PORT || 3000);

  app.get("/mvc1", controller.renderIndex);

  app.listen(app.get("port"), () => {
      console.log(`Server running on http://localhost:${app.get("port")}`);
  });