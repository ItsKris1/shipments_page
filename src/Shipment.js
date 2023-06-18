import { useDispatch } from "react-redux";
import { shipmentViewed, shipmentDeleted } from "./features/shipments/shipmentsSlice";

import { Table, Button } from "reactstrap";
export function Shipment({ data, index, onShowModal }) {
  const dispatch = useDispatch();

  return (
    // <tr key={data.orderNo}>
    //     <td>{data.orderNo}</td>
    //     <td>{data.date}</td>
    //     <td>{data.customer}</td>
    //     <td>{data.trackingNo}</td>
    //     <td>{data.status}</td>
    //     <td>{data.consignee}</td>
    //     <td>
    //         <div>
    //             <button
    //                 onClick={(e) => {
    //                     e.stopPropagation();
    //                     onShowModal();
    //                     dispatch(shipmentViewed({ data, index }));
    //                 }}
    //             >
    //                 View
    //             </button>
    //             <button onClick={() => dispatch(shipmentDeleted({ index }))}>Delete</button>
    //         </div>
    //     </td>
    // </tr>

    <tr key={data.orderNo} className="text-center">
      <td>{data.orderNo}</td>
      <td>{data.date}</td>
      <td>{data.customer}</td>
      <td>{data.trackingNo}</td>
      <td>{data.status}</td>
      <td>{data.consignee}</td>
      <td>
        {` `}
        <Button
          className="btn-icon"
          onClick={(e) => {
            e.stopPropagation();
            onShowModal();
            dispatch(shipmentViewed({ data, index }));
          }}
          color="success"
          size="m"
        >
          <i className="fa fa-edit"></i>
        </Button>
        {` `}
        <Button className="btn-icon" onClick={() => dispatch(shipmentDeleted({ index }))} color="danger" size="m">
          <i className="fa fa-times" />
        </Button>
      </td>
    </tr>
  );
}
