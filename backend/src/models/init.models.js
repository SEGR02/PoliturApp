const Users = require("./user.models");
const Clients = require("./clients.model");
const Activities = require("./activities.models");
const ScheduledActivities = require("./scheduledActivities.models");
const Orders = require("./orders.models");
const ScheduledActivitiesAndPaymentsInOrders = require("./scheduledActivitiesAndPaymentsInOrders.models");
const Payments = require("./payments.model");

const initModels = () => {
  Users;
  Clients;
  Activities;
  ScheduledActivities;
  Orders;
  ScheduledActivitiesAndPaymentsInOrders;
  Payments;
};

module.exports = initModels;
