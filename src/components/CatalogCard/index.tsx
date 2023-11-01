import { Card } from "react-bootstrap";
import { Catalog } from "../../types/Catalog";
import { User } from "../../types/User";
import ModalInscribir from "../BotonModal";

export const CatalogCard = ({
  catalog,
}: {
  catalog: Catalog;
}) => {
  // const { addProductToCart, cart } = useCart();
  // const { inventories } = useResponsivePageContext();
  return (
    <Card key={`catalog-${catalog.id}`}>
      <div className="cont-img">
        <Card.Img
          variant="top"
          src="http://localhost:1338/uploads/SERVICIO_DIGITAL_MARKETING_CONSULTING_127a33d433.jpg"
        />
        {/*//@ts-ignore*/}
        <p className="expositor-card card-fecha"><img src="\calendario-icon.svg" alt="fecha" />{catalog.fecha}</p>
        <p className="expositor-card card-salon"><img src="\salon-icon.svg" alt="salon" />{catalog.salon}</p>
        <p className="card-dirigido">{catalog.dirigido}</p>
      </div>

      <Card.Body>
        <Card.Title>{catalog.tema_conferencia}</Card.Title>
        <p className="nombre-expositor">Dirigido por: {catalog.expositor}</p>

        <p className="descripcion-card">{catalog.descripcion}</p>
      </Card.Body>
      <ModalInscribir catalog={catalog} />
    </Card>
  );
};
