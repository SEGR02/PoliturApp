const Users = require("./user.models");
const Clients = require("./clients.model");
const Activities = require("./activities.models");
const ScheduledActivities = require("./scheduledActivities.models");
const Orders = require("./orders.models");
const ScheduledActivitiesAndPaymentsInOrders = require("./scheduledActivitiesAndPaymentsInOrders.models");
const Payments = require("./payments.model");
const PassengersInScheduledActivities = require("./passengersInScheduledActivities.models");
const StockInScheduledActivities = require("./stockInScheduledActivities.models");
const StockManagment = require("./stockManagment.models");
const SchedulesInActivities = require("./schedulesInActivities.models");

const initModels = () => {
  Users;
  Clients;
  Activities;
  ScheduledActivities;
  Orders;
  ScheduledActivitiesAndPaymentsInOrders;
  Payments;
  PassengersInScheduledActivities;
  StockInScheduledActivities;
  StockManagment;
  SchedulesInActivities;
};

module.exports = initModels;
