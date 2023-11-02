import { useCatalogs } from "../../hooks/catalog/useCatalogs";
import { Catalog } from "../../types/Catalog";
import { PythonShell } from "python-shell";
import { ResponsivePage } from "../../components/ResponsivePage";

const VerCatalogo = ({ catalog }: { catalog: Catalog }) => {
  const { catalogs } = useCatalogs();



  return (

    <ResponsivePage>
      
      <button>escanear</button>
      <div id="your-qr-result"></div>
      <div className="my-qr-reader-cont">
        <div id="my-qr-reader" className="my-qr-reader"></div>
      </div>
      <script src="./escaneo.js"></script>
        <script src="sweetalert2.min.js"></script>
        <link rel="stylesheet" href="sweetalert2.min.css" />
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="https://unpkg.com/html5-qrcode"></script>
        
    </ResponsivePage>

   
  );
};

export default VerCatalogo;
