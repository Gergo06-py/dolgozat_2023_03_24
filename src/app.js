const doc = {
  megmunkaltHossz: document.querySelector("#megmunkaltHossz"),
  fordulatonkentiElotolas: document.querySelector("#fordulatonkentiElotolas"),
  foorsoFordulatszam: document.querySelector("#foorsoFordulatszam"),
  megmunkalasiIdo: document.querySelector("#megmunkalasiIdo"),
};

function startCalc() {
  let hossz = Number(doc.megmunkaltHossz.value);
  let elotolas = Number(doc.fordulatonkentiElotolas.value);
  let fordulatszam = Number(doc.foorsoFordulatszam.value);
  doc.megmunkalasiIdo.value = calcResult(hossz, elotolas, fordulatszam);
}

function calcResult(hossz, elotolas, fordulatszam) {
    return hossz / (elotolas * fordulatszam);
}
