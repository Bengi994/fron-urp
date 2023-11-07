/*import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Catalog } from "../../types/Catalog";
import { useCatalog } from "../../hooks/catalog/useCatalog";
import ModalQR from '../ModalQR';
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {useResponsivePageContext} from "../ResponsivePage/context";
import { useCatalogs } from '../../hooks/catalog/useCatalogs';
//@ts-ignore
function formatearFecha(fechaOriginal) {
    const fecha = new Date(fechaOriginal);
    const dia = fecha.getDate();
    const mes = fecha.toLocaleDateString('es-ES', { month: 'long' });
    const anio = fecha.getFullYear();
  
    return `${dia} de ${mes}`;
  }
//@ts-ignore
const ModalInscribir = ({ estado, cambiarEstado, catalogo, setCatalogo}) => {
    const { user } = useResponsivePageContext();
    const { register, handleSubmit, formState: { errors } } = useForm<Catalog>();
  
    const { updateCatalog } = useCatalog(); // Asegúrate de importar la función updateCatalog correctamente.
  
    const { catalogs, myCatalog } = useCatalogs();

    const [estadoModal, cambiarEstadoModal] = useState(false);

    //al darle click al boton
    const handleOnSubmit = async (data: any) => {

    //pone el miconf de la conferencia en true
      const handleMyCatalog = async (catalogId: string) => {
        await myCatalog(catalogId);
        catalogo.miconf = true;
     };
      const nuevoAlumno = {
        nombre: user?.nombre,
        apellido: user?.apellido,
      };
      catalogo.miconf = true;
  
      // Obtén la lista de objetos actual del campo JSON
      const listaDeAlumnos = catalogo.inscripciones || [];
  
      // Agrega el nuevo alumno a la lista de objetos
      listaDeAlumnos.push(nuevoAlumno);
  
      // Actualiza el campo JSON del catálogo con la lista actualizada
      const updatedCatalog = {
        ...catalogo,
        inscripciones: listaDeAlumnos,
      };
  
      // Llama a la función updateCatalog para actualizar el catálogo con la nueva lista de objetos.
      const response = await updateCatalog(catalogo.id, updatedCatalog);

  
      if (response) {
        console.log("Nuevo alumno registrado con éxito:", response);
        // Realiza cualquier otra acción necesaria después de la actualización.
      } else {
        console.error("Error al registrar al nuevo alumno.");
      }
      cambiarEstadoModal(!estadoModal);
    };

    const fechaFormateada = formatearFecha(Date.parse(catalogo?.fecha));
  return (
    <>
            {estado && (
                <div className="overlay">
                <div className="contenido-modal">
                  <div className="encabezado-modal">
                    <h3>INSCRÍBETE AHORA</h3>
                  </div>
                  <button
                    className="boton-cerrar"
                    onClick={() => cambiarEstado(false)}
                  >
                    <img src="\close-solid.svg" alt="close" />
                  </button>
                  <div className="contenido">
                    <div className="seccion">
                      <h5>Conferencia: </h5>
                      <p>{catalogo.tema_conferencia}</p>
                    </div>
                    <div className="seccion">
                      <h5>Fecha y hora: </h5>
                      <p>{fechaFormateada === null ? "No establecida" : fechaFormateada} - {catalogo.hora === null ? "No establecida" : catalogo.hora.slice(0, 5)}</p>
                    </div>
                    <div className="seccion">
                      <h5>Salón: </h5>
                      <p>{catalogo.salon === null ? "No establecido" : catalogo.salon}</p>
                    </div>
                    <div className="seccion">
                      <h5>Dirigido a: </h5>
                      <p>{catalogo.dirigido === null ? "No establecido" : catalogo.dirigido}</p>
                    </div>
                    <div className="seccion-titulo-alumno">
                        <h3>Información del alumno</h3>
                    </div>
                    <div className="seccion">
                      <h5>Código: </h5>
                      <p>{user?.codigo}</p>
                    </div>
                    <div className="seccion">
                      <h5>Escuela: </h5>
                      <p>{user?.escuela}</p>
                    </div>
                    <div className="seccion">
                      <h5>Nombres: </h5>
                      <p>{user?.nombre}</p>
                    </div>
                    <div className="seccion">
                      <h5>Apellidos: </h5>
                      <p>{user?.apellido}</p>
                    </div>
                    <div className="seccion-botones">
                      <div className="botones-modal">
                        <button className="inscribirme-ahora" onClick={handleSubmit(handleOnSubmit)} >INSCRIBIRME AHORA</button>
                      </div>
                      <ModalQR
                      estado={estadoModal}
                      cambiarEstado={cambiarEstadoModal}/>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </>
  )
};
export default ModalInscribir;
*/

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Catalog } from "../../types/Catalog";
import { useCatalog } from "../../hooks/catalog/useCatalog";
import ModalQR from '../ModalQR';
import { useForm } from "react-hook-form";
import { useResponsivePageContext } from '../ResponsivePage/context';
import { useUsers } from '../../hooks/user/useUsers';


const ModalInscribir = ({ catalog }: { catalog: Catalog }) => {
    const  {user}  = useResponsivePageContext();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {updateUser} = useUsers();
    const {usuario, getUser} = useUsers();
    getUser(user?.id);
    // //hola(usuario) 

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Catalog>();

    const { updateCatalog } = useCatalog();
    const handleOnSubmit = () => {
      alert("¡Ingreso a la conferencia exitoso!")
      if (user?.conferencias?.includes(catalog)){
        //hola("El usuario ya se habia inscrito a esta conferencia");
      }
      else{
        if (user && !user.conferencias) {
          user.conferencias = [];
        }
        if (user) {
          user?.conferencias?.push(catalog);
          updateUser(user);
        }
      }
      //hola(user?.conferencias);
    }
    
  return (
    <>
            <button className="btnInscribir" onClick={handleShow}>Inscribirse</button>{' '}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="lblinscribNow">INSCRÍBETE AHORA</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="containergrupoLabelCaja">
                        <div className="grupoLabelCaja">
                            <label className="etiqCaja" htmlFor="textCaja">Conferencia:</label>
                            <input className="textCaja" type="text" readOnly disabled placeholder={catalog?.tema_conferencia}></input>
                        </div>
                        <div className="grupoLabelCaja">
                            <label className="etiqCaja" htmlFor="textCaja">Fecha y hora:</label>
                            <input className="textCaja" type="text" readOnly disabled placeholder={`${catalog?.fecha} - ${catalog?.hora}`}></input>
                        </div>
                        <div className="grupoLabelCaja">
                            <label className="etiqCaja" htmlFor="textCaja">Lugar:</label>
                            <input className="textCaja" type="text" readOnly disabled placeholder={catalog?.salons}></input>
                        </div>
                        <div className="grupoLabelCaja">
                            <label className="etiqCaja" htmlFor="textCaja">Dirigido:</label>
                            <input className="textCaja" type="text" readOnly disabled placeholder={catalog?.dirigido}></input>
                        </div>
                    </div>
                    <p className="etiqInfoAlumno">Información del alumno</p>
                    <div className="containergrupoLabelCaja">
                        <div className="grupoLabelCaja">
                            <label className="etiqCaja" htmlFor="textCaja">Código:</label>
                            <input className="textCaja" type="text" readOnly disabled placeholder={user?.codigo}></input>
                        </div>
                        <div className="grupoLabelCaja">
                            <label className="etiqCaja" htmlFor="textCaja">Nombres:</label>
                            <input className="textCaja" type="text" readOnly disabled placeholder={user?.nombre}></input>
                        <div className="grupoLabelCaja">
                        </div>
                        <div className="grupoLabelCaja">
                            <label className="etiqCaja" htmlFor="textCaja">Apellidos:</label>
                            <input className="textCaja" type="text" readOnly disabled placeholder={user?.apellido}></input>
                        </div>
                            <label className="etiqCaja" htmlFor="textCaja">Escuela:</label>
                            <input className="textCaja" type="text" readOnly disabled placeholder={user?.escuela}></input>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button className="btnCerrarModal btnBoton" onClick={handleClose}>Cerrar</button>
                    <button id="btnInscribirseConf" className="btnCerrarModal btnBoton" onClick={handleOnSubmit}>Inscribirse</button>
                    <ModalQR/>
                </Modal.Footer>
            </Modal>
        </>
  )
};
export default ModalInscribir;