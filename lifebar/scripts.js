
function dibujar() {
    const fechaDeNacimiento = new Date(document.getElementById("fechaDeNacimiento").value);
    const hoy = new Date();
    
    const diff =
      (hoy.getTime() - fechaDeNacimiento.getTime()) / 1000 / 60 / 60 / 24 / 7;
    
    let html = "";
    for (let i = 0; i < 88; i++) {
      html += `<div>${fechaDeNacimiento.getUTCFullYear()+i} - ${("0" + i).slice(-2)} - `;
      for (let j = 0; j < 52; j++) {
        if (i * 52 + j < diff) {
          html += '<input type="checkbox" checked>';
        } else {
          html += '<input type="checkbox">';
        }
      }
      html += "<hr></div>";
    }
    const container = document.getElementById("container");
    container.innerHTML = html;
}
