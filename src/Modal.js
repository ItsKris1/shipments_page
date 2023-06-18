import { useEffect, useRef } from "react";
import "./Modal.css";

export function Modal({ children, onModalClose }) {
  const childrenRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (childrenRef.current && !childrenRef.current.contains(e.target)) {
        onModalClose();
        console.log("Closing modal");
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, [onModalClose]);

  return (
    <div className="Modal">
      <div className="ModalContent" ref={childrenRef}>
        {children}
      </div>
    </div>
  );
}
