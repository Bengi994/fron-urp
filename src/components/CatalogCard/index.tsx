import { Button, Card } from "react-bootstrap";
import { Catalog } from "../../types/Catalog";
import { User } from "../../types/User";
import ModalInscribir from "../BotonModal";
import { useState } from "react";
//@ts-ignore
function formatearFecha(fechaOriginal) {
  const fecha = new Date(fechaOriginal);
  const dia = fecha.getDate();
  const mes = fecha.toLocaleDateString('es-ES', { month: 'long' });
  const anio = fecha.getFullYear();

  return `${dia} de ${mes}`;
}

export const CatalogCard = ({
  catalog,
}: {
  catalog: Catalog;
}) => {
  // const { addProductToCart, cart } = useCart();
  // const { inventories } = useResponsivePageContext();
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [catalogElement, setCatalogElement] = useState<Catalog>();

  return (
    <Card key={`catalog-${catalog.id}`}>
      <div className="cont-img">
        <Card.Img
          variant="top"
          src="http://localhost:1338/uploads/SERVICIO_DIGITAL_MARKETING_CONSULTING_127a33d433.jpg"
        />
        {/*@ts-ignore*/}
        <p className="expositor-card card-fecha"><img src="\calendario-icon.svg" alt="fecha" />{formatearFecha(catalog.fecha)} - {catalog.hora === null ? "" : catalog.hora.slice(0, 5)}</p>
        <p className="expositor-card card-salon"><img src="\salon-icon.svg" alt="salon" />{catalog.salon}</p>
        <p className="card-dirigido">{catalog.dirigido}</p>
      </div>

      <Card.Body>
        <Card.Title>{catalog.tema_conferencia}</Card.Title>
        <p className="nombre-expositor">Dirigido por: {catalog.expositor}</p>

        <p className="descripcion-card">{catalog.descripcion}</p>
      </Card.Body>
      <div>
        {catalog.miconf === true ? (
          <div>
            <Button
                      className="btnInscribir"
                    >
                      Inscrito
                    </Button>
          </div>
        ) : (
          <div>
            <Button
                      className="btnInscribir"
                      onClick={() => {
                        cambiarEstadoModal(!estadoModal);
                        setCatalogElement(catalog);
                      }}
                    >
                      Inscribirse
                    </Button>
          </div>
        )}
      </div>
      <ModalInscribir estado={estadoModal}
          cambiarEstado={cambiarEstadoModal}
          catalogo={catalog} 
          setCatalogo={setCatalogElement}
          />
    </Card>
  );
};
