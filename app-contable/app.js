 let saldo = 0;
let totalDebe = 0;
let totalHaber = 0;
let codigo = 1;

function iniciarEmpresa() {
  const capital = Number(document.getElementById("capitalInput").value);
  if (capital <= 0) {
    alert("Ingresa un capital válido");
    return;
  }

  saldo = capital;
  totalDebe = capital;

  document.getElementById("tabla").innerHTML = `
    <tr>
      <td>${codigo++}</td>
      <td>Capital Inicial</td>
      <td>${capital.toFixed(2)}</td>
      <td>0.00</td>
    </tr>
  `;

  actualizar();
}

function registrar() {
  const concepto = document.getElementById("concepto").value;
  const debe = Number(document.getElementById("debe").value) || 0;
  const haber = Number(document.getElementById("haber").value) || 0;

  if (!concepto) {
    alert("Escribe un concepto");
    return;
  }

  saldo += debe - haber;
  totalDebe += debe;
  totalHaber += haber;

  document.getElementById("tabla").innerHTML += `
    <tr>
      <td>${codigo++}</td>
      <td>${concepto}</td>
      <td>${debe.toFixed(2)}</td>
      <td>${haber.toFixed(2)}</td>
    </tr>
  `;

  actualizar();

  document.getElementById("concepto").value = "";
  document.getElementById("debe").value = "";
  document.getElementById("haber").value = "";
}

function actualizar() {
  document.getElementById("saldo").innerText = saldo.toFixed(2);
  document.getElementById("totalDebe").innerText = `$${totalDebe.toFixed(2)}`;
  document.getElementById("totalHaber").innerText = `$${totalHaber.toFixed(2)}`;
}