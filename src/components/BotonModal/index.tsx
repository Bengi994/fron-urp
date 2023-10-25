import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Catalog } from "../../types/Catalog";
import { useCatalog } from "../../hooks/catalog/useCatalog";
import ModalQR from '../ModalQR';
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {useResponsivePageContext} from "../ResponsivePage/context";

const ModalInscribir = ({ catalog }: { catalog: Catalog }) => {
    const { user } = useResponsivePageContext();
    const { register, handleSubmit, formState: { errors } } = useForm<Catalog>();
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const { updateCatalog } = useCatalog(); // Asegúrate de importar la función updateCatalog correctamente.
  
    const handleOnSubmit = async (data: any) => {
      const nuevoAlumno = {
        nombre: user?.nombre,
        apellido: user?.apellido,
      };
  
      // Obtén la lista de objetos actual del campo JSON
      const listaDeAlumnos = catalog.inscripciones || [];
  
      // Agrega el nuevo alumno a la lista de objetos
      listaDeAlumnos.push(nuevoAlumno);
  
      // Actualiza el campo JSON del catálogo con la lista actualizada
      const updatedCatalog = {
        ...catalog,
        inscripciones: listaDeAlumnos,
      };
  
      // Llama a la función updateCatalog para actualizar el catálogo con la nueva lista de objetos.
      const response = await updateCatalog(catalog.id, updatedCatalog);
  
      if (response) {
        console.log("Nuevo alumno registrado con éxito:", response);
        // Realiza cualquier otra acción necesaria después de la actualización.
      } else {
        console.error("Error al registrar al nuevo alumno.");
      }
    };
  return (
    <>
      <button className="btnInscribir" onClick={handleShow}>Inscríbete</button>{' '}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="lblinscribNow">ACTUALIZAR TEMA DE CONFERENCIA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="registrar-nuevo-alumno-form" onSubmit={handleSubmit(handleOnSubmit)}>
            <Button type='submit' variant='success'>REGISTRAR</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btnCerrarModal btnBoton btn-conf-alum" onClick={handleClose}>Cerrar</button>
          <ModalQR />
        </Modal.Footer>
      </Modal>
    </>
  )
};
export default ModalInscribir;
