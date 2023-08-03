import * as shippingService from "./shipping-service.js";

export function total(order) {
  const shipmentValue = shippingService.shipment(order);
  const discount = (order.basic / 100) * order.discount;
  return order.basic - discount + shipmentValue;
}
