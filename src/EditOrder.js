import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shipmentChanged } from "./features/shipments/shipmentsSlice";
import { Card, CardBody, FormGroup, Input, Label, FormText, Button } from "reactstrap";

export function EditOrderForm({ closeModal }) {
  const viewingOrder = useSelector((state) => state.shipments.viewingShipment.data);

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
    <form className="editOrderForm">
      {/* <FormGroup>
        <Label for="exampleEmail">Email address</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" autoComplete="off" />
      </FormGroup> */}

      <FormGroup>
        <Label for="orderNo">orderNo</Label>
        <Input type="text" name="orderNo" id="orderNo" onChange={handleChange} defaultValue={formData.orderNo}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="date">date</Label>
        <Input type="text" name="date" id="date" onChange={handleChange} defaultValue={formData.date}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="customer">customer</Label>
        <Input
          type="text"
          name="customer"
          id="customer"
          onChange={handleChange}
          defaultValue={formData.customer}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label for="trackingNo">trackingNo</Label>
        <Input
          type="text"
          name="trackingNo"
          id="trackingNo"
          onChange={handleChange}
          defaultValue={formData.trackingNo}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label for="status">status</Label>
        <Input type="text" name="status" id="status" onChange={handleChange} defaultValue={formData.status}></Input>
      </FormGroup>
      <FormGroup>
        <Label for="consignee">consignee</Label>
        <Input
          type="text"
          name="consignee"
          id="consignee"
          onChange={handleChange}
          defaultValue={formData.consignee}
        ></Input>
      </FormGroup>

      <Button color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}

/* <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(shipmentChanged(formData));
          closeModal();
        }}
      >
        <label>
          orderNo
          <input type="text" name="orderNo" onChange={handleChange} defaultValue={formData.orderNo}></input>
          <FormGroup>
            <Label for=""></Label>
            <Input type="text" name="" id="" onChange={handleChange} defaultValue={formData.orderNo}></Input>
          </FormGroup>
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
      </form> */
