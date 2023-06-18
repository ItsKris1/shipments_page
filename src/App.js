import "./App.css";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { EditOrderForm } from "./EditOrder";
import { useDispatch, useSelector } from "react-redux";
import { fetchShipments, getShipments, selectAllOrders, shipmentViewed } from "./features/shipments/shipmentsSlice";
import shipments from "./shipments.json";

function App() {
  const [showModal, setShowModal] = useState(false);
  // const [viewingOrder, setViewingOrder] = useState(null);
  // const [viewingOrderIndex, setViewingOrderIndex] = useState(0);
  const dispatch = useDispatch();

  const status = useSelector((state) => state.shipments.status);
  let data = useSelector((state) => state.shipments.orders);
  const error = useSelector((state) => state.shipments.error);
  const viewingShipment = useSelector((state) => state.shipments.viewingShipment);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchShipments());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  } else if (status === "failed") {
    console.log("Failed requesting data. Error: ", error);
    data = shipments;
  }

  // function deleteOrder(orderNo) {
  //   setData(data.filter((order) => order.orderNo !== orderNo));
  // }

  function createTableData(data, index) {
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
                setShowModal(true);
                // setViewingOrder(data);
                // setViewingOrderIndex(index);

                dispatch(shipmentViewed({ data, index }));
              }}
            >
              View
            </button>
            {/* <button onClick={() => deleteOrder(data.orderNo)}>Delete</button> */}
          </div>
        </td>
      </tr>
    );
  }

  return (
    <div className="App">
      {showModal ? (
        <Modal onModalClose={() => setShowModal(false)}>
          <EditOrderForm></EditOrderForm>
        </Modal>
      ) : (
        ""
      )}

      <table>
        <tbody>
          <tr>
            <td>ORDERNO</td>
            <td>DELIVERYDATE</td>
            <td>CUSTOMER</td>
            <td>TRACKINGNO</td>
            <td>STATUS</td>
            <td>CONSIGNEE</td>
            <td></td>
          </tr>

          {data?.map((order, index) => createTableData(order, index))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
