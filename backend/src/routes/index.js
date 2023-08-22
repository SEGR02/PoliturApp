const error = require("../middlewares/error.middleware");
const authRoutes = require("./auth.router");
const clientsRoutes = require("../routes/clients.router");
const activitiesRoutes = require("../routes/activities.router");
const ordersRoutes = require("../routes/orders.router");
const paymentsRoutes = require("../routes/payments.router");
const stockRoutes = require("./stock.router");
const schedulesRoutes = require("./schedules.router");

const routerApi = (app) => {
  app.use("/api/v1/auth", authRoutes, error);
  app.use("/api/v1/clients", clientsRoutes, error);
  app.use("/api/v1/activities", activitiesRoutes, error);
  app.use("/api/v1/orders", ordersRoutes, error);
  app.use("/api/v1/payments", paymentsRoutes, error);
  app.use("/api/v1/stock", stockRoutes, error);
  app.use("/api/v1/schedules", schedulesRoutes, error);
};

module.exports = routerApi;
