const Payments = require("../models/payments.model");
const ScheduledActivitiesAndPaymentsInOrders = require("../models/scheduledActivitiesAndPaymentsInOrders.models");

class PaymentServices {
  static async createPayments(newPayment) {
    try {
      const result = await Payments.create(newPayment);
      const result2 = await ScheduledActivitiesAndPaymentsInOrders.create({
        orderId: newPayment.orderId,
        paymentsId: result.id,
      });
      return { result, result2 };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PaymentServices;
