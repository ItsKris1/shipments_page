import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shipmentChanged } from "./features/shipments/shipmentsSlice";

export function EditOrderForm({ closeModal }) {
  const viewingOrder = useSelector(state => state.shipments.viewingShipment.data);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    orderNo: viewingOrder.orderNo,
    date: viewingOrder.date,
    customer: viewingOrder.customer,
    trackingNo: viewingOrder.trackingNo,
    consignee: viewingOrder.consignee,
    status: viewingOrder.status,
  });

  console.log("Viewing order: ", formData);

  function handleChange(e) {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(shipmentChanged(formData))
        closeModal();
      }}
    >
      <label>
        orderNo
        <input type="text" name="orderNo" onChange={handleChange} defaultValue={formData.orderNo}></input>
      </label>
      <label>
        date
        <input type="text" name="date" onChange={handleChange} defaultValue={formData.date}></input>
      </label>
      <label>
        customer
        <input type="text" name="customer" onChange={handleChange} defaultValue={formData.customer}></input>
      </label>
      <label>
        trackingNo
        <input type="text" name="trackingNo" onChange={handleChange} defaultValue={formData.trackingNo}></input>
      </label>
      <label>
        status
        <input type="text" name="status" onChange={handleChange} defaultValue={formData.status}></input>
      </label>
      <label>
        consignee
        <input type="text" name="consignee" onChange={handleChange} defaultValue={formData.consignee}></input>
      </label>

      <button>Save changes</button>
    </form>
  );
}
