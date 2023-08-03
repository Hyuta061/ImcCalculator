const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");
  // event.target dá informações d elemento que tá causando a ação o evento

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value); // Erro meu não ter transformado os val em number

  if (!peso) {
    //caso o valor for algum FALSY
    addResp("Peso invlálido (digite um valor numérico ou substitua (,) por .)", false);
    return; //tem que colocar se n vai parar , quando retornar a função para (no caso a função addEventListner)
  }
  if (!altura) {
    addResp("Altura Invlálida (digite um valor numérico ou substitua (,) por (.) )", false);
    return;
  }
  const imc = imcCalc(peso, altura);

  const nivelImc = getNivelImc(imc);
  
  const msg = `Seu imc é igual á ${imc} (${nivelImc})`
  addResp(msg,true)
});

const getNivelImc = (imc) => {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  if (imc > 39.9) return nivel[5];

  if (imc > 34.9) return nivel[4];

  if (imc > 29.9) return nivel[3];

  if (imc > 24.9) return nivel[2];

  if (imc > 18.5) return nivel[1];

  if (imc < 18.5) return nivel[0];
};

const imcCalc = (peso, altura) => {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
};

function criarP() {
  const p = document.createElement("p");
  return p;
}

function addResp(msg, isValid) {
  const res = document.querySelector(".res");
  res.innerHTML = "";
  const pa = criarP();
  pa.innerHTML = msg;
  if (isValid == false) {
    pa.classList.add("preserro");
  } else {
    pa.classList.add("pres");
  }
  res.appendChild(pa);
}
