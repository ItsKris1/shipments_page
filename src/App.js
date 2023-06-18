import "./App.css";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { EditOrderForm } from "./EditOrder";
import { useDispatch, useSelector } from "react-redux";
import { fetchShipments, } from "./features/shipments/shipmentsSlice";
import { Shipment } from "./Shipment";

function App() {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const status = useSelector((state) => state.shipments.status);
  const shipments = useSelector((state) => state.shipments.orders);
  // const error = useSelector((state) => state.shipments.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchShipments());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  // else if (status === "failed") {
  //   console.error("Failed to get data from API", error);
  // }


  return (
    <div className="App">
      {showModal && (
        <Modal onModalClose={() => setShowModal(false)}>
          <EditOrderForm closeModal={() => setShowModal(false)}></EditOrderForm>
        </Modal>
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

          {shipments?.map((shipment, index) => <Shipment data={shipment} index={index} onShowModal={() => setShowModal(true)}></Shipment>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
