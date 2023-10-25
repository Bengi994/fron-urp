import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useResponsivePageContext } from "../ResponsivePage/context";
import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
//npm i react-qr-code
//npm i react-native-svg
const ModalQR = () => {
  const { user } = useResponsivePageContext();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className="btnInscribirModal btnBoton btn-conf-alum"
        onClick={handleShow}
      >
        Confirmar
      </button>{" "}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="lblinscribNow">INSCRIPCIÓN CORRECTA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="contenedorQR">
              <br /><br />
                <QRCode className="codigoQR" value={user?.codigo} viewBox={`0 0 256 256`} fgColor="black"/>
                <br /><br /><br />
            </div>
            <p className="textoQR">Se ha registrado correctamente a la conferencia, por favor, guarde su pase QR con el botón de abajo o con una captura de pantalla, será necesario para el ingreso a la conferencia.</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btnCerrarModal btnBoton"
            onClick={handleClose}
          >
            Cerrar
          </button>
          <button className="btnInscribirModal btnBoton">
            Descargar QR
          </button>
          <script>
            
          </script>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalQR;
