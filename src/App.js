import { useEffect, useState } from "react";
import { EditOrderForm } from "./EditOrder";
import { useDispatch, useSelector } from "react-redux";
import { fetchShipments } from "./features/shipments/shipmentsSlice";
import { Shipment } from "./Shipment";

import { Table, Button, Modal, ModalBody, Card, CardBody } from "reactstrap";

import "assets/scss/black-dashboard-react.scss";
import "assets/css/nucleo-icons.css";

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

  function toggleModal() {
    setShowModal(!showModal);
  }

  // else if (status === "failed") {
  //   console.error("Failed to get data from API", error);
  // }

  return (
    <div className="App">
      {showModal && (
        // <Modal onModalClose={() => setShowModal(false)}>
        //   <EditOrderForm closeModal={() => setShowModal(false)}></EditOrderForm>
        // </Modal>

        <Modal isOpen={showModal} toggle={toggleModal}>
          <div className="modal-header">
            <h4 className="modal-title" id="exampleModalLabel">
              Shipment details
            </h4>
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={toggleModal}>
              <i className="tim-icons icon-simple-remove" />
            </button>
          </div>

          <ModalBody>
            {/* <Card>
              <CardBody>
                <EditOrderForm></EditOrderForm>
              </CardBody>
            </Card> */}

            <EditOrderForm></EditOrderForm>
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
            <Shipment data={shipment} index={index} onShowModal={() => setShowModal(true)}></Shipment>
          ))}
        </tbody>
      </Table>

      {/* <table>
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

          {shipments?.map((shipment, index) => (
            <Shipment data={shipment} index={index} onShowModal={() => setShowModal(true)}></Shipment>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
