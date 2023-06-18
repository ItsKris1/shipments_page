import { useEffect, useRef } from "react";
import "./Modal.css";

// import {ModalFooter, Modal} from

// export function Modal({ children, onModalClose }) {
//   const childrenRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (childrenRef.current && !childrenRef.current.contains(e.target)) {
//         onModalClose();
//         console.log("Closing modal");
//       }
//     }

//     window.addEventListener("click", handleClickOutside);

//     return () => window.removeEventListener("click", handleClickOutside);
//   }, [onModalClose]);

//   return (
//     <div className="Modal">
//       <div className="ModalContent" ref={childrenRef}>
//         {children}
//       </div>
//     </div>
//   );
}
// export function MyModal({ onModalClose }) {
//   const childrenRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (childrenRef.current && !childrenRef.current.contains(e.target)) {
//         onModalClose();
//         console.log("Closing modal");
//       }
//     }

//     window.addEventListener("click", handleClickOutside);

//     return () => window.removeEventListener("click", handleClickOutside);
//   }, [onModalClose]);

//   return (
//     <Modal isOpen={this.state.modalDemo} toggle={this.toggleModalDemo}>
//       <div className="modal-header">
//         <h5 className="modal-title" id="exampleModalLabel">
//           Modal title
//         </h5>
//         <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={this.toggleModalDemo}>
//           <i className="tim-icons icon-simple-remove" />
//         </button>
//       </div>
//       <ModalBody>
//         <p>Woohoo, you're reading this text in a modal!</p>
//       </ModalBody>
//       <ModalFooter>
//         <Button color="secondary" onClick={this.toggleModalDemo}>
//           Close
//         </Button>
//         <Button color="primary">Save changes</Button>
//       </ModalFooter>
//     </Modal>
//   );
// }
