const Clients = require("../models/clients.model");
const PassengersInScheduledActivities = require("../models/passengersInScheduledActivities.models");

class ClientServices {
  static async createClient(data) {
    try {
      const newClient = data;
      const result = await Clients.create(newClient);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllClients() {
    try {
      const result = await Clients.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getClientsByScheduledActivity(id) {
    try {
      const result = await PassengersInScheduledActivities.findAll({
        where: {
          scheduled_activity_id: id,
        },
      });
      const result2 = [];
      for (const element of result) {
        const aux = await Clients.findAll({ where: { id: element.clientId } });
        result2.push(...aux);
      }
      return result2;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ClientServices;
