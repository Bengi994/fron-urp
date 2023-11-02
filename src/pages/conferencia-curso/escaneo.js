const { Html } = require("next/document");

function domReady(fn){
    if(document.readyState === "complete" || document.readyState === "interactive"){
        setTimeout(fn,1)
    } else{
        document.addEventListener("DOMContentLoaded", fn)
    }
  }
  domReady(function(){
    var myqr = document.getElementById('your-qr-result')
    var lastResult,countResults = 0;

    function onScanSuccess(decodeText, decodeResult){
        if(decodeText !== lastResult){
            ++countResults;
            lastResult = decodeText;
            alert("Su QR es: " + decodeText, decodeResult)

            myqr.innerHTML = ` you scan ${countResults} : ${decodeText} `
        }
    }
    var htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader", {fps: 10, qrbox: 250}
    )
    htmlscanner.render(onScanSuccess)
  })