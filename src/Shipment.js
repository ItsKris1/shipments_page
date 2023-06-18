import { useDispatch } from "react-redux";
import { shipmentViewed, shipmentDeleted } from "./features/shipments/shipmentsSlice";


export function Shipment({ data, index, onShowModal }) {
    const dispatch = useDispatch();

    return (
        <tr key={data.orderNo}>
            <td>{data.orderNo}</td>
            <td>{data.date}</td>
            <td>{data.customer}</td>
            <td>{data.trackingNo}</td>
            <td>{data.status}</td>
            <td>{data.consignee}</td>
            <td>
                <div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onShowModal();
                            dispatch(shipmentViewed({ data, index }));
                        }}
                    >
                        View
                    </button>
                    <button onClick={() => dispatch(shipmentDeleted({ index }))}>Delete</button>
                </div>
            </td>
        </tr>
    );
}

