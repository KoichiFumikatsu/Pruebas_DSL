<?php
/**
 * LegalSurvey - Página de encuesta (demo)
 * ------------------------------------------------------------
 * - Renderiza una UI tipo "wizard" (pregunta a pregunta)
 * - Inyecta preguntas desde PHP hacia JS (window.SURVEY_DATA)
 * - El frontend (JS) se encarga de:
 *   - pintar opciones
 *   - navegar (prev/next)
 *   - guardar respuestas en localStorage
 *   - mostrar modales (en vez de alert)
 */

// Dataset de ejemplo (puedes traerlo de BD, JSON, etc.)
$questions = [
  [
    "title" => "Pregunta 1",
    "question" => "¿Su empresa cuenta con políticas actualizadas de protección de datos personales conforme a la normativa vigente?",
    "options" => [
      "Sí, contamos con políticas actualizadas y las aplicamos regularmente",
      "Sí, pero necesitan ser actualizadas",
      "No contamos con políticas específicas",
      "No estoy seguro/a"
    ],
    "explanation_title" => "Explicación de la pregunta",
    "explanation" => "La protección de datos personales es un aspecto fundamental en el cumplimiento normativo para las empresas. Las políticas deben estar actualizadas conforme a la legislación vigente y ser aplicadas de manera efectiva en todos los procesos de la empresa."
  ],
  [
    "title" => "Pregunta 2",
    "question" => "¿La empresa tiene un responsable o área designada para la gestión de protección de datos?",
    "options" => [
      "Sí, existe un responsable/área formalmente designada",
      "Existe, pero no está formalizado",
      "No existe responsable/área",
      "No estoy seguro/a"
    ],
    "explanation_title" => "Explicación de la pregunta",
    "explanation" => "Definir responsables mejora el control y la trazabilidad de las obligaciones en protección de datos."
  ],
  [
    "title" => "Pregunta 3",
    "question" => "¿La empresa realiza capacitaciones periódicas al personal sobre protección de datos?",
    "options" => [
      "Sí, periódicamente",
      "Ocasionalmente",
      "No",
      "No estoy seguro/a"
    ],
    "explanation_title" => "Explicación de la pregunta",
    "explanation" => "La formación reduce incidentes y fortalece el cumplimiento interno."
  ],
];
?>
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <!--
    viewport para responsive:
    - width=device-width: adapta el layout al ancho real del dispositivo
    - initial-scale=1: zoom inicial neutral
  -->
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Diagnostico de Seguridad Legal</title>
  <link rel="stylesheet" href="assets/css/styles.css" />
  <!-- =========================================================
     Google Fonts – Montserrat
     Pesos usados: 400, 500, 600, 700, 800, 900
     ========================================================= -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

</head>
<body>

<!-- =========================================================
     TOP NAVBAR (minimal)
     - Solo logo + link Contáctanos
     - Look limpio (similar a la versión anterior)
     ========================================================= -->
<header class="topbar topbar--azc">
  <div class="topbar__inner topbar__inner--azc">
    <a class="brand brand--azc" href="#" aria-label="Inicio">
      <span class="brand__logo" aria-hidden="true">⚖️</span>
      <span class="brand__name">Diagnostico de Seguridad Legal</span>
    </a>

    <nav class="topnav topnav--azc" aria-label="Navegación principal">
      <a class="topnav__link topnav__link--azc" href="#contactanos">Contáctanos</a>
    </nav>
  </div>
</header>



  <!-- =========================================================
       MAIN CONTENT
       ========================================================= -->
  <main class="page">
    <section class="shell">
      <!-- Encabezado: "Pregunta X de Y" + barra -->
      <div class="surveyheader">
        <div class="surveyheader__text" id="progressText">Pregunta 1 de 8</div>

        <!-- progressbar accesible -->
        <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
          <div class="progress__bar" id="progressBar"></div>
        </div>
      </div>

      <!-- Card principal -->
      <article class="card">
        <div class="card__kicker" id="qTitle">Pregunta 1</div>
        <h1 class="card__title" id="qQuestion"></h1>

        <!-- Form para radios (se inyecta por JS). No hace submit (wizard). -->
        <form id="surveyForm" class="choices" autocomplete="off">
          <!-- opciones (radio) por JS -->
        </form>

        <!-- Bloque de explicación -->
        <div class="explain">
          <div class="explain__title" id="qExplainTitle">Explicación de la pregunta</div>
          <p class="explain__text" id="qExplain"></p>
        </div>
      </article>

      <!-- Botones -->
      <div class="actions">
        <button class="btn btn--ghost" id="btnPrev" type="button" disabled>← Anterior</button>
        <button class="btn btn--primary" id="btnNext" type="button">Siguiente →</button>
      </div>
    </section>
  </main>

  <!-- =========================================================
       MODAL GLOBAL (reusable)
       - Se muestra/oculta desde JS
       - Evita el uso de alert()
       ========================================================= -->
  <div class="modal" id="appModal" aria-hidden="true">
    <!-- Overlay: cierra el modal al click (JS) -->
    <div class="modal__overlay" data-modal-close tabindex="-1"></div>

    <!-- Dialog -->
    <div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modalTitle" aria-describedby="modalBody">
      <div class="modal__header">
        <div class="modal__title" id="modalTitle">Título</div>
        <button class="modal__x" type="button" aria-label="Cerrar" data-modal-close>✕</button>
      </div>

      <div class="modal__body" id="modalBody">
        Contenido del modal
      </div>

      <div class="modal__footer" id="modalFooter">
        <!-- Botones inyectados por JS -->
      </div>
    </div>
  </div>

  <!-- =========================================================
       DATA PARA JS
       ========================================================= -->
  <script>
    /**
     * SURVEY_DATA se consume desde app.js para renderizar preguntas.
     * SURVEY_TOTAL_DISPLAY te permite mostrar "Pregunta X de 8" aunque tengas menos preguntas en dataset (demo).
     */
    window.SURVEY_DATA = <?php echo json_encode($questions, JSON_UNESCAPED_UNICODE); ?>;
    window.SURVEY_TOTAL_DISPLAY = 8;
  </script>

  <script src="assets/js/app.js"></script>
</body>
</html>
