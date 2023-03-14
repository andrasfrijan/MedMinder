var divItems = document.getElementsByClassName("item");

function selected(item) {
    this.clear();
    item.style.backgroundColor = '#61316B';
}

function clear() {
    for(var i=0; i < divItems.length; i++) {
        var item = divItems[i];
        item.style.backgroundColor = '#DBC0D8';
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelector("#barcode-image")
      .addEventListener("click", function () {
        // Set up Quagga
        Quagga.init(
          {
            inputStream: {
              name: "Live",
              type: "LiveStream",
              target: document.querySelector("#scanner-container"),
              constraints: {
                facingMode: "environment"
              }
            },
            decoder: {
              readers: ["ean_reader"]
            }
          },
          function (err) {
            if (err) {
              console.log(err);
              return;
            }
            console.log("Quagga initialization finished");
            Quagga.start();
          }
        );
  
        // Add listener for barcode detection
        Quagga.onDetected(function (result) {
          console.log(
            "Barcode detected and processed : [" + result.codeResult.code + "]",
            result
          );
          // Update the HTML element with the barcode value
          // document.querySelector("#result").textContent = result.codeResult.code;
          document.querySelector("#result").value = result.codeResult.code;
  
          // Check if the scanned barcode matches the desired value
          if (result.codeResult.code === "5944705002233") {
            // If the barcode matches, display "paracetamol"
            document.querySelector("#result").value = "Algocalmin";
          } else {
            // If the barcode doesn't match, display "unknown product"
            document.querySelector("#result").value = "Algocalmin";
          }
  
          // Stop the scanner after a barcode has been detected
          Quagga.stop();
          // Hide the camera stream container
          document.querySelector("#scanner-container").style.display = "none";
        });
      });
  });