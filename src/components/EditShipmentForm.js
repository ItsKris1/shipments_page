import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shipmentChanged } from "../features/shipments/shipmentsSlice";
import { FormGroup, Input, Label, Col, Row, Button } from "reactstrap";

export function EditShipmentForm({ onSubmit }) {
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

  function handleChange(e) {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }
  return (
    <form
      className="editOrderForm"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(shipmentChanged(formData));
        onSubmit();
      }}
    >
      <Row>
        <Col>
          <FormGroup>
            <Label for="orderNo">orderNo</Label>
            <Input
              type="text"
              name="orderNo"
              id="orderNo"
              onChange={handleChange}
              defaultValue={formData.orderNo}
            ></Input>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <Label for="date">date</Label>
            <Input type="text" name="date" id="date" onChange={handleChange} defaultValue={formData.date}></Input>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          {" "}
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
        </Col>
        <Col>
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
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <FormGroup>
            <Label for="status">status</Label>
            <Input type="text" name="status" id="status" onChange={handleChange} defaultValue={formData.status}></Input>
          </FormGroup>
        </Col>
        <Col>
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
        </Col>
      </Row>

      <Row className="justify-content-end">
        <Col className="col-auto">
          <Button color="primary" type="submit">
            Save changes
          </Button>
        </Col>
      </Row>
    </form>
  );
}
