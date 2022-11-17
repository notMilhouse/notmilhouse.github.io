const pix_btn = document.querySelector("#pix-btn");
const pix_code = document.querySelector("#codigo-pix");

pix_btn.onclick = function() {
  document.execCommand("copy");
}

pix_btn.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", pix_code.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});