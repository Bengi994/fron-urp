import { useCatalogs } from "../../hooks/catalog/useCatalogs";
import { Catalog } from "../../types/Catalog";
//@ts-ignore
import { PythonShell } from "python-shell";
import { ResponsivePage } from "../../components/ResponsivePage";

const VerCatalogo = ({ catalog }: { catalog: Catalog }) => {
  const { catalogs } = useCatalogs();



  return (

    <ResponsivePage>
      
      <div id="your-qr-result"></div>
      <div className="my-qr-reader-cont">
        <div id="my-qr-reader" className="my-qr-reader"></div>
      </div>
        <script src="https://unpkg.com/html5-qrcode"></script>
        
    </ResponsivePage>

   
  );
};

export default VerCatalogo;
function domReady(fn: () => void): void {
  if (document.readyState === "complete" || document.readyState === "interactive") {
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}

domReady(() => {
  const myqr = document.getElementById('your-qr-result');
  let lastResult: string | undefined, countResults = 0;

  const onScanSuccess = (decodeText: string, decodeResult: any) => {
      if (decodeText !== lastResult) {
          ++countResults;
          lastResult = decodeText;
          alert("Su QR es: " + decodeText);
          
          if (myqr) {
              myqr.innerHTML = ` you scan ${countResults} : ${decodeText} `;
          }
      }
  }
//@ts-ignore
  const htmlscanner = new (Html5QrcodeScanner as any)(
      "my-qr-reader", { fps: 10, qrbox: 250 }
  );
  htmlscanner.render(onScanSuccess);
});
