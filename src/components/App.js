import { useEffect, useState } from "react";
import { EditShipmentForm } from "./EditShipmentForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchShipments } from "../features/shipments/shipmentsSlice";
import { Shipment } from "./Shipment";

import { Table, Modal, ModalBody } from "reactstrap";

import "assets/scss/black-dashboard-react.scss";
import "assets/css/nucleo-icons.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const status = useSelector((state) => state.shipments.status);
  const shipments = useSelector((state) => state.shipments.orders);
  const error = useSelector((state) => state.shipments.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchShipments());
    }

    if (status === "failed") {
      console.error("Failed to get data from API: ", error);
    }
  }, [dispatch, status, error]);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="App">
      {showModal && (
        <Modal isOpen={showModal} toggle={toggleModal} size="lg" className="modalForm">
          <div className="modal-header">
            <h4 className="modal-title" id="exampleModalLabel">
              Shipment details
            </h4>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={toggleModal}>
              <i className="tim-icons icon-simple-remove" />
            </button>
          </div>

          <ModalBody>
            <EditShipmentForm onSubmit={toggleModal}></EditShipmentForm>
          </ModalBody>
        </Modal>
      )}

      <Table responsive>
        <thead>
          <tr className="text-center">
            <th>ORDERNO</th>
            <th>DELIVERYDATE</th>
            <th>CUSTOMER</th>
            <th>TRACKINGNO</th>
            <th>STATUS</th>
            <th>CONSIGNEE</th>
          </tr>
        </thead>
        <tbody>
          {shipments?.map((shipment, index) => (
            <Shipment data={shipment} key={shipment.orderNo} index={index} onEdit={toggleModal}></Shipment>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
