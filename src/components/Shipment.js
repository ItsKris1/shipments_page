import { useDispatch } from "react-redux";
import { shipmentViewed, shipmentDeleted } from "../features/shipments/shipmentsSlice";

import { Button, ButtonGroup } from "reactstrap";
export function Shipment({ data, index, onEdit }) {
  const dispatch = useDispatch();

  return (
    <tr className="text-center">
      <td>{data.orderNo}</td>
      <td>{data.date}</td>
      <td>{data.customer}</td>
      <td>{data.trackingNo}</td>
      <td>{data.status}</td>
      <td>{data.consignee}</td>
      <td>
        <ButtonGroup>
          <Button
            className="btn-icon"
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
              dispatch(shipmentViewed({ data, index }));
            }}
            color="success"
            size="m"
          >
            <i className="fa fa-edit"></i>
          </Button>
          <Button className="btn-icon" onClick={() => dispatch(shipmentDeleted({ index }))} color="danger" size="m">
            <i className="fa fa-times" />
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
}
