const error = require("../middlewares/error.middleware");
const authRoutes = require("./auth.router");
const clientsRoutes = require("../routes/clients.router");
const activitiesRoutes = require("../routes/activities.router");
const ordersRoutes = require("../routes/orders.router");
const paymentsRoutes = require("../routes/payments.router");
const stockRoutes = require("./stock.router");
const schedulesRoutes = require("./schedules.router");
const usersRoutes = require("./users.router");
const operatorsRoutes = require("./operators.router");
const managmentPaymentsRoutes = require("./managmentPayments.router");

const routerApi = (app) => {
  app.use("/api/v1/auth", authRoutes, error);
  app.use("/api/v1/clients", clientsRoutes, error);
  app.use("/api/v1/activities", activitiesRoutes, error);
  app.use("/api/v1/orders", ordersRoutes, error);
  app.use("/api/v1/payments", paymentsRoutes, error);
  app.use("/api/v1/stock", stockRoutes, error);
  app.use("/api/v1/schedules", schedulesRoutes, error);
  app.use("/api/v1/users", usersRoutes, error);
  app.use("/api/v1/operators", operatorsRoutes, error);
  app.use("/api/v1/managmentPayments", managmentPaymentsRoutes, error);
};

module.exports = routerApi;
