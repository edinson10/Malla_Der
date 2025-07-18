// =======================
// MALLA ACTUALIZADA SEGÚN NUEVA INFORMACIÓN
// =======================
const malla = {
  "Primer Año - Primer Semestre": [
    { nombre: "Instituciones Políticas y Derecho Constitucional Orgánico", abre: ["Derecho Internacional Público", "Derecho Administrativo I"] },
    { nombre: "Derecho Romano", abre: ["Seminario de Integración"] },
    { nombre: "Introducción al Derecho", abre: ["Seminario de Integración"] },
    { nombre: "Historia del Derecho", abre: ["Seminario de Integración"] },
    { nombre: "Habilidades Comunicativas", abre: ["Seminario de Doctrina y Jurisprudencia"] }
  ],

  "Primer Año - Segundo Semestre": [
    { nombre: "Teoría de los Derechos y Acciones Constitucionales", abre: ["Derechos Fundamentales"] },
    { nombre: "Fundamentos del Derecho Privado", abre: ["Negocio Jurídico y Teoría General de las Obligaciones"] },
    { nombre: "Interpretación y Argumentación", abre: ["Seminario de Integración"] },
    { nombre: "Nociones de Economía", abre: ["Seminario de Integración"] },
    { nombre: "Inglés I", abre: ["Inglés II"] }
  ],

  "Segundo Año - Tercer Semestre": [
    { nombre: "Derechos Fundamentales", abre: ["Seminario de Integración", "Derecho, Género e Inclusión", "Principios Fundamentales del Derecho Penal y de la Pena"] },
    { nombre: "Negocio Jurídico y Teoría General de las Obligaciones", abre: ["Derecho de los Bienes"] },
    { nombre: "Derecho Procesal Parte General", abre: ["Normas Comunes a Todo Procedimiento"] },
    { nombre: "Pensamiento Crítico", abre: ["Seminario de Integración"] },
    { nombre: "Inglés II", abre: ["Inglés III"] }
  ],

  "Segundo Año - Cuarto Semestre": [
    { nombre: "Derecho Internacional Público", abre: ["Seminario de Integración"] },
    { nombre: "Derecho de los Bienes", abre: ["Cumplimiento e Incumplimiento de las Obligaciones Contractuales", "Seminario de Integración"] },
    { nombre: "Normas Comunes a Todo Procedimiento", abre: ["Procedimientos Declarativos", "Seminario de Integración"] },
    { nombre: "Fundamentos del Derecho Comercial y Títulos de Crédito", abre: ["Seminario de Integración"] },
    { nombre: "Inglés III", abre: ["Inglés IV"] }
  ],

  "Tercer Año - Quinto Semestre": [
    { nombre: "Derecho Administrativo I", abre: ["Derecho Administrativo II"] },
    { nombre: "Cumplimiento e Incumplimiento de las Obligaciones Contractuales", abre: ["Responsabilidad Extracontractual", "Contratos"] },
    { nombre: "Procedimientos Declarativos", abre: ["Ejecución y Recursos"] },
    { nombre: "Principios Fundamentales del Derecho Penal y de la Pena", abre: ["Parte General del Derecho Penal"] },
    { nombre: "Seminario de Integración", abre: ["Seminario de Doctrina y Jurisprudencia"] },
    { nombre: "Inglés IV", abre: ["Seminario de Doctrina y Jurisprudencia"] }
  ],

  "Tercer Año - Sexto Semestre": [
    { nombre: "Derecho Administrativo II", abre: ["Destrezas de Asesoría Legal"] },
    { nombre: "Responsabilidad Extracontractual", abre: ["Seminario de Doctrina y Jurisprudencia"] },
    { nombre: "Ejecución y Recursos", abre: ["Redacción Forense", "Derecho Procesal Penal"] },
    { nombre: "Parte General del Derecho Penal", abre: ["Parte Especial del Derecho Penal"] },
    { nombre: "Derecho Societario", abre: ["Derecho Tributario", "Destrezas de Asesoría Legal"] },
    { nombre: "Derecho Laboral", abre: ["Seminario de Doctrina y Jurisprudencia"] }
  ],

  "Cuarto Año - Séptimo Semestre": [
    { nombre: "Derecho Tributario", abre: ["Seminario de Doctrina y Jurisprudencia"] },
    { nombre: "Contratos", abre: ["Derecho de Familia", "Negociación y Mediación", "Seminario de Doctrina y Jurisprudencia", "Redacción Forense"] },
    { nombre: "Derecho Procesal Penal", abre: ["Seminario de Doctrina y Jurisprudencia", "Litigación Oral"] },
    { nombre: "Parte Especial del Derecho Penal", abre: ["Seminario de Doctrina y Jurisprudencia", "Derecho, Género e Inclusión"] },
    { nombre: "Derecho, Innovación y Tecnología", abre: ["Seminario de Doctrina y Jurisprudencia"] },
    { nombre: "Destrezas de Asesoría Legal", abre: ["Redacción Forense", "Negociación y Mediación", "Litigación Oral", "Seminario de Doctrina y Jurisprudencia"] }
  ],

  "Cuarto Año - Octavo Semestre": [
    { nombre: "Ética Profesional", abre: ["Consultorio Jurídico I"] },
    { nombre: "Derecho de Familia", abre: ["Consultorio Jurídico I", "Derecho, Género e Inclusión", "Derecho Sucesorio"] },
    { nombre: "Redacción Forense", abre: ["Consultorio Jurídico I", "Electivo I"] },
    { nombre: "Negociación y Mediación", abre: ["Consultorio Jurídico I"] },
    { nombre: "Litigación Oral", abre: ["Consultorio Jurídico I"] },
    { nombre: "Seminario de Doctrina y Jurisprudencia", abre: ["Actividad Final de Graduación", "Consultorio Jurídico I", "Seminario de Investigación"] }
  ],

  "Quinto Año - Noveno Semestre": [
    { nombre: "Electivo I", abre: ["Electivo II", "Electivo III", "Electivo IV", "Actividad Final de Graduación"] },
    { nombre: "Derecho Sucesorio", abre: ["Actividad Final de Graduación"] },
    { nombre: "Seminario de Investigación", abre: ["Actividad Final de Graduación", "Consultorio Jurídico II"] },
    { nombre: "Derecho, Género e Inclusión", abre: ["Actividad Final de Graduación", "Consultorio Jurídico II"] },
    { nombre: "Consultorio Jurídico I", abre: ["Actividad Final de Graduación", "Consultorio Jurídico II"] }
  ],

  "Quinto Año - Décimo Semestre": [
    { nombre: "Electivo II", abre: [] },
    { nombre: "Electivo III", abre: [] },
    { nombre: "Electivo IV", abre: [] },
    { nombre: "Consultorio Jurídico II", abre: [] },
    { nombre: "Actividad Final de Graduación", abre: [] }
  ]
};

// =======================
// VARIABLES Y LOCALSTORAGE
// =======================
const contenedor = document.getElementById("malla");
let estados = localStorage.getItem("mallaEstados")
  ? JSON.parse(localStorage.getItem("mallaEstados"))
  : {};

// =======================
// FUNCIONES BASE
// =======================
function guardarProgreso() {
  localStorage.setItem("mallaEstados", JSON.stringify(estados));
}

function requisitosCumplidos(ramoNombre) {
  const requisitos = [];
  for (let semestre in malla) {
    malla[semestre].forEach(ramo => {
      if (ramo.abre.includes(ramoNombre)) requisitos.push(ramo.nombre);
    });
  }
  return requisitos.every(req => estados[req]);
}

function esInicial(nombre) {
  return !Object.values(malla).flat().some(r => r.abre.includes(nombre));
}

// ✅ Bloquea SOLO desde el ramo desmarcado hacia adelante en cadena
function bloquearEnCadena(ramoBase) {
  for (let semestre in malla) {
    malla[semestre].forEach(ramo => {
      if (ramo.abre.includes(ramoBase)) {
        if (!requisitosCumplidos(ramo.nombre)) {
          estados[ramo.nombre] = false;
          bloquearEnCadena(ramo.nombre);
        }
      }
    });
  }
}

function actualizarVisual() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    div.classList.remove("aprobado", "bloqueado");

    if (estados[nombre]) {
      div.classList.add("aprobado");
    } else if (!requisitosCumplidos(nombre) && !esInicial(nombre)) {
      div.classList.add("bloqueado");
    }
  });
}

// =======================
// RENDERIZADO Y EVENTOS
// =======================
for (let semestre in malla) {
  const divSemestre = document.createElement("div");
  divSemestre.className = "semestre";
  divSemestre.innerHTML = `<h2>${semestre}</h2>`;

  malla[semestre].forEach(ramo => {
    if (!(ramo.nombre in estados)) estados[ramo.nombre] = false;

    const divRamo = document.createElement("div");
    divRamo.className = "ramo bloqueado";
    divRamo.dataset.nombre = ramo.nombre;
    divRamo.textContent = ramo.nombre;

    divRamo.addEventListener("click", () => {
      if (divRamo.classList.contains("bloqueado") && !estados[ramo.nombre]) return;

      estados[ramo.nombre] = !estados[ramo.nombre];

      if (!estados[ramo.nombre]) {
        bloquearEnCadena(ramo.nombre);
      }

      actualizarVisual();
      guardarProgreso();
    });

    divSemestre.appendChild(divRamo);
  });

  contenedor.appendChild(divSemestre);
}

// =======================
// INICIALIZACIÓN
// =======================
function desbloquearIniciales() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    if (esInicial(nombre) && !estados[nombre]) {
      div.classList.remove("bloqueado");
    }
  });
}

desbloquearIniciales();
actualizarVisual();
