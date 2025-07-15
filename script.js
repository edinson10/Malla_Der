// ----- Definición de la Malla -----
const malla = {
  "Primer Año - Primer Semestre": [
    { nombre: "Instituciones Políticas y Derecho Constitucional Orgánico", abre: ["Teoría de los Derechos y Acciones Constitucionales"] },
    { nombre: "Derecho Romano", abre: ["Fundamentos del Derecho Privado"] },
    { nombre: "Introducción al Derecho", abre: ["Interpretación y Argumentación"] },
    { nombre: "Historia del Derecho", abre: ["Interpretación y Argumentación"] },
    { nombre: "Habilidades Comunicativas", abre: ["Pensamiento Crítico"] }
  ],
  "Primer Año - Segundo Semestre": [
    { nombre: "Teoría de los Derechos y Acciones Constitucionales", abre: ["Derechos Fundamentales"] },
    { nombre: "Fundamentos del Derecho Privado", abre: ["Negocio Jurídico y Teoría General de las Obligaciones"] },
    { nombre: "Interpretación y Argumentación", abre: ["Ética Profesional"] },
    { nombre: "Nociones de Economía", abre: ["Fundamentos del Derecho Comercial y Títulos de Crédito"] },
    { nombre: "Inglés I", abre: ["Inglés II"] }
  ],
  "Segundo Año - Tercer Semestre": [
    { nombre: "Derechos Fundamentales", abre: ["Derecho Internacional Público"] },
    { nombre: "Negocio Jurídico y Teoría General de las Obligaciones", abre: ["Derecho de los Bienes"] },
    { nombre: "Derecho Procesal Parte General", abre: ["Normas Comunes a Todo Procedimiento"] },
    { nombre: "Pensamiento Crítico", abre: [] },
    { nombre: "Inglés II", abre: ["Inglés III"] }
  ],
  "Segundo Año - Cuarto Semestre": [
    { nombre: "Derecho Internacional Público", abre: ["Derecho Administrativo I"] },
    { nombre: "Derecho de los Bienes", abre: ["Cumplimiento e Incumplimiento de las Obligaciones Contractuales"] },
    { nombre: "Normas Comunes a Todo Procedimiento", abre: ["Procedimientos Declarativos"] },
    { nombre: "Fundamentos del Derecho Comercial y Títulos de Crédito", abre: ["Principios Fundamentales del Derecho Penal y de la Pena"] },
    { nombre: "Inglés III", abre: ["Inglés IV"] }
  ],
  "Tercer Año - Quinto Semestre": [
    { nombre: "Derecho Administrativo I", abre: ["Derecho Administrativo II"] },
    { nombre: "Cumplimiento e Incumplimiento de las Obligaciones Contractuales", abre: ["Responsabilidad Extracontractual"] },
    { nombre: "Procedimientos Declarativos", abre: ["Ejecución y Recursos"] },
    { nombre: "Principios Fundamentales del Derecho Penal y de la Pena", abre: ["Parte General del Derecho Penal"] },
    { nombre: "Seminario de Integración", abre: ["Consultorio Jurídico II"] },
    { nombre: "Inglés IV", abre: [] }
  ],
  "Tercer Año - Sexto Semestre": [
    { nombre: "Derecho Administrativo II", abre: [] },
    { nombre: "Responsabilidad Extracontractual", abre: ["Contratos"] },
    { nombre: "Ejecución y Recursos", abre: ["Derecho Procesal Penal"] },
    { nombre: "Parte General del Derecho Penal", abre: ["Parte Especial del Derecho Penal"] },
    { nombre: "Derecho Societario", abre: ["Derecho, Innovación y Tecnología"] },
    { nombre: "Derecho Laboral", abre: ["Derecho, Innovación y Tecnología"] }
  ],
  "Cuarto Año - Séptimo Semestre": [
    { nombre: "Derecho Tributario", abre: [] },
    { nombre: "Contratos", abre: ["Derecho de Familia"] },
    { nombre: "Derecho Procesal Penal", abre: [] },
    { nombre: "Parte Especial del Derecho Penal", abre: [] },
    { nombre: "Derecho, Innovación y Tecnología", abre: [] },
    { nombre: "Destrezas de Asesoría Legal", abre: ["Redacción Forense", "Negociación y Mediación", "Litigación Oral"] }
  ],
  "Cuarto Año - Octavo Semestre": [
    { nombre: "Ética Profesional", abre: ["Seminario de Investigación", "Derecho, Género e Inclusión"] },
    { nombre: "Derecho de Familia", abre: ["Derecho Sucesorio"] },
    { nombre: "Redacción Forense", abre: ["Consultorio Jurídico I"] },
    { nombre: "Negociación y Mediación", abre: ["Consultorio Jurídico I"] },
    { nombre: "Litigación Oral", abre: ["Consultorio Jurídico I"] }
  ],
  "Quinto Año - Noveno Semestre": [
    { nombre: "Electivo I", abre: ["Electivo II", "Electivo III", "Electivo IV"] },
    { nombre: "Derecho Sucesorio", abre: [] },
    { nombre: "Seminario de Investigación", abre: [] },
    { nombre: "Derecho, Género e Inclusión", abre: [] },
    { nombre: "Consultorio Jurídico I", abre: [] }
  ],
  "Quinto Año - Décimo Semestre": [
    { nombre: "Electivo II", abre: [] },
    { nombre: "Electivo III", abre: [] },
    { nombre: "Electivo IV", abre: [] },
    { nombre: "Consultorio Jurídico II", abre: [] },
    { nombre: "Actividad Final de Graduación", abre: [] }
  ]
};

// ----- Renderizado de la Malla -----
const contenedor = document.getElementById("malla");
const estados = {}; // estado de cada ramo
const requisitosInversos = {}; // mapeo de "quién lo habilita"

// Generamos estructura visual
for (let semestre in malla) {
  const divSemestre = document.createElement("div");
  divSemestre.className = "semestre";
  divSemestre.innerHTML = `<h2>${semestre}</h2>`;

  malla[semestre].forEach(ramo => {
    estados[ramo.nombre] = false;

    // Guardar inversamente quién abre a quién
    ramo.abre.forEach(dep => {
      if (!requisitosInversos[dep]) requisitosInversos[dep] = [];
      requisitosInversos[dep].push(ramo.nombre);
    });

    const divRamo = document.createElement("div");
    divRamo.className = "ramo bloqueado";
    divRamo.dataset.nombre = ramo.nombre;
    divRamo.innerHTML = `
      <label>
        <input type="checkbox" disabled> ${ramo.nombre}
      </label>`;
    divSemestre.appendChild(divRamo);
  });

  contenedor.appendChild(divSemestre);
}

// Desbloquear los ramos iniciales (sin requisitos)
function desbloquearIniciales() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    const tieneRequisito = Object.values(malla).flat().some(r =>
      r.abre.includes(nombre)
    );
    if (!tieneRequisito) {
      div.classList.remove("bloqueado");
      div.querySelector("input").disabled = false;
    }
  });
}

// Verificar si un ramo puede desbloquearse
function puedeDesbloquear(ramo) {
  const requisitos = Object.keys(requisitosInversos).filter(req =>
    requisitosInversos[req].includes(ramo)
  );
  return requisitos.every(req => estados[req] === true);
}

// Actualizar estados y desbloquear dependientes
function actualizar() {
  document.querySelectorAll(".ramo input").forEach(input => {
    input.addEventListener("change", () => {
      const nombre = input.parentElement.parentElement.dataset.nombre;
      estados[nombre] = input.checked;

      if (input.checked) {
        input.parentElement.parentElement.classList.add("aprobado");
      }

      // Intentar desbloquear todos los ramos pendientes
      document.querySelectorAll(".ramo").forEach(div => {
        const nombreRamo = div.dataset.nombre;
        if (puedeDesbloquear(nombreRamo)) {
          div.classList.remove("bloqueado");
          div.querySelector("input").disabled = false;
        }
      });
    });
  });
}

desbloquearIniciales();
actualizar();
