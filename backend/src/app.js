const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/init.models");
const { activities } = require("./seeders/seed");
const { schedules } = require("./seeders/seed");
const Activities = require("./models/activities.models");
const SchedulesInActivities = require("./models/schedulesInActivities.models");
const routerApi = require("./routes");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

initModels();
db.authenticate()
  .then(() => console.log("BD authenticate"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => {
    console.log("db synched");
    activities.forEach((activity) => Activities.create(activity));
    schedules.forEach((schedule) => SchedulesInActivities.create(schedule));
  })
  .catch((error) => console.log(error));

routerApi(app);

module.exports = app;
