export function shipment({ basic }) {
  shipment = 0.0;
  if (basic < 100.0) {
    shipment = 20.0;
  } else if (basic < 200) {
    shipment = 12.0;
  }
  return shipment;
}
