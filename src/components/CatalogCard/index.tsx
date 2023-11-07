import { Button, Card } from "react-bootstrap";
import { Catalog } from "../../types/Catalog";
import { User } from "../../types/User";
import ModalInscribir from "../BotonModal";
import { useState,useEffect } from "react";
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

  useEffect(()=>{
    console.log(catalog);
  },[])

        return (
          <Card key={`catalog-${catalog.id}`}>
            <div className="cont-img">
              <Card.Img
                variant="top"
                src={"https://shrieking-web-97943-0c89be05ca8d.herokuapp.com/uploads/mobile_app_design_fundamentals_the_difference_between_UI_and_UX_2f1b573866.webp"}
              />
              {/*@ts-ignore*/}
              <p className="expositor-card card-fecha"><img src="\calendario-icon.svg" alt="fecha" />{formatearFecha(catalog.fecha)} - {catalog.hora === null ? "" : catalog.hora.slice(0, 5)}</p>
        <p className="expositor-card card-salon"><img src="\salon-icon.svg" alt="salon" />{catalog.salons.data[0].attributes.nombre}</p>
              <p className="card-dirigido">{catalog.dirigido}</p>
            </div>
      
            <Card.Body>
              <Card.Title>{catalog.tema_conferencia}</Card.Title>
              <p className="nombre-expositor">Dirigido por: {catalog.expositor}</p>
      
              <p className="descripcion-card">{catalog.descripcion}</p>
              <ModalInscribir catalog={catalog} />
            </Card.Body>
          </Card>
        );
};
