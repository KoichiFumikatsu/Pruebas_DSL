(() => {
  /**
   * app.js - Lógica del wizard de encuesta (frontend)
   * ------------------------------------------------------------
   * Responsabilidades:
   * - Renderizar la pregunta actual (texto + radios)
   * - Controlar navegación Prev/Next
   * - Persistir respuestas en localStorage (demo)
   * - Mostrar modales (sin alert())
   * - Accesibilidad: manejo básico de focus al abrir/cerrar modal
   */

  // ---------------------------
  // Config / Estado
  // ---------------------------

  /** Dataset desde PHP */
  const data = Array.isArray(window.SURVEY_DATA) ? window.SURVEY_DATA : [];

  /**
   * totalDisplay permite mostrar un total fijo (como "8") aunque el dataset sea menor.
   * Si no se define, usa data.length (o 1 para evitar división por 0).
   */
  const totalDisplay = Number(window.SURVEY_TOTAL_DISPLAY || data.length || 1);

  /** Clave de persistencia (localStorage) */
  const STORAGE_KEY = "legalsurvey_answers_v1";

  /**
   * Estado de la UI (en memoria):
   * - index: pregunta actual (0-based)
   * - answers: respuestas por índice
   */
  const state = {
    index: 0,
    answers: loadAnswers(),
  };

  // ---------------------------
  // Cache de elementos DOM
  // ---------------------------
  const els = {
    progressText: document.getElementById("progressText"),
    progressBar: document.getElementById("progressBar"),
    qTitle: document.getElementById("qTitle"),
    qQuestion: document.getElementById("qQuestion"),
    qExplainTitle: document.getElementById("qExplainTitle"),
    qExplain: document.getElementById("qExplain"),
    form: document.getElementById("surveyForm"),
    btnPrev: document.getElementById("btnPrev"),
    btnNext: document.getElementById("btnNext"),

    // Modal
    modal: document.getElementById("appModal"),
    modalTitle: document.getElementById("modalTitle"),
    modalBody: document.getElementById("modalBody"),
    modalFooter: document.getElementById("modalFooter"),
  };

  // ---------------------------
  // Utilidades: storage
  // ---------------------------

  /**
   * Carga respuestas desde localStorage.
   * @returns {Record<string, string>} Mapa index->respuesta
   */
  function loadAnswers() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  /**
   * Guarda el estado de respuestas en localStorage.
   */
  function saveAnswers() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.answers));
    } catch {
      // Si el navegador bloquea storage, simplemente no persistimos (modo demo).
    }
  }

  // ---------------------------
  // Modal (sin alert)
  // ---------------------------

  /**
   * Memoriza el elemento que tenía foco antes de abrir el modal,
   * para devolver el foco al cerrar (accesibilidad).
   */
  let lastActiveElement = null;

  /**
   * Crea un botón para el footer del modal.
   * @param {string} text - Texto del botón
   * @param {string} variant - "primary" | "ghost"
   * @param {Function} onClick - Handler del click
   * @returns {HTMLButtonElement}
   */
  function createModalButton(text, variant, onClick) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = variant === "primary" ? "btn btn--primary" : "btn btn--ghost";
    btn.textContent = text;
    btn.addEventListener("click", onClick);
    return btn;
  }

  /**
   * Abre el modal global con contenido dinámico.
   * @param {Object} params
   * @param {string} params.title - Título del modal
   * @param {string} params.body - Texto/HTML simple del cuerpo
   * @param {Array<{text:string, variant?:string, onClick?:Function}>} params.actions - botones del footer
   */
  function openModal({ title, body, actions = [] }) {
    lastActiveElement = document.activeElement;

    els.modalTitle.textContent = title || "Aviso";
    // body puede ser texto o HTML simple; si prefieres 100% texto, usa textContent.
    els.modalBody.textContent = body || "";

    // Limpia footer y crea botones
    els.modalFooter.innerHTML = "";
    if (!actions.length) {
      // Por defecto: botón OK que cierra
      els.modalFooter.appendChild(
        createModalButton("OK", "primary", closeModal)
      );
    } else {
      actions.forEach(a => {
        els.modalFooter.appendChild(
          createModalButton(
            a.text || "OK",
            a.variant || "primary",
            () => (a.onClick ? a.onClick() : closeModal())
          )
        );
      });
    }

    // Mostrar modal (clases + aria)
    els.modal.classList.add("is-open");
    els.modal.setAttribute("aria-hidden", "false");

    // Focus al primer botón del footer
    const firstBtn = els.modalFooter.querySelector("button");
    if (firstBtn) firstBtn.focus();
  }

  /**
   * Cierra el modal global y devuelve foco al elemento anterior.
   */
  function closeModal() {
    els.modal.classList.remove("is-open");
    els.modal.setAttribute("aria-hidden", "true");

    if (lastActiveElement && typeof lastActiveElement.focus === "function") {
      lastActiveElement.focus();
    }
    lastActiveElement = null;
  }

  /**
   * Vincula cierres del modal:
   * - click overlay
   * - click botón "X"
   * - tecla Escape
   */
  function bindModalEvents() {
    // Click en cualquier elemento con data-modal-close cierra
    els.modal.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.hasAttribute("data-modal-close")) {
        closeModal();
      }
    });

    // Escape para cerrar
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && els.modal.classList.contains("is-open")) {
        closeModal();
      }
    });
  }

  // ---------------------------
  // Render UI
  // ---------------------------

  /**
   * Actualiza el texto "Pregunta X de Y" y el porcentaje de la barra de progreso.
   * @param {number} i - índice actual (0-based)
   */
  function setProgress(i) {
    const current = i + 1;
    els.progressText.textContent = `Pregunta ${current} de ${totalDisplay}`;

    const pct = Math.round((current / totalDisplay) * 100);
    els.progressBar.style.width = `${pct}%`;

    // aria-valuenow actualizado para accesibilidad
    const pb = els.progressBar.parentElement;
    if (pb) pb.setAttribute("aria-valuenow", String(pct));
  }

  /**
   * Renderiza las opciones tipo radio para una pregunta.
   * @param {Object} q - pregunta actual
   * @param {string|null} selectedValue - valor seleccionado previamente
   */
  function renderOptions(q, selectedValue) {
    els.form.innerHTML = "";

    q.options.forEach((label, idx) => {
      const id = `opt_${state.index}_${idx}`;

      // wrapper label: permite click en toda la caja
      const wrapper = document.createElement("label");
      wrapper.className = "choice";
      wrapper.setAttribute("for", id);

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.id = id;
      input.value = label;
      input.checked = selectedValue === label;

      const text = document.createElement("div");
      text.className = "choice__text";
      text.textContent = label;

      wrapper.appendChild(input);
      wrapper.appendChild(text);
      els.form.appendChild(wrapper);

      // Estilo seleccionado
      if (input.checked) wrapper.classList.add("is-selected");

      // Al cambiar radio: marca visual y guarda
      input.addEventListener("change", () => {
        document.querySelectorAll(".choice").forEach(el => el.classList.remove("is-selected"));
        wrapper.classList.add("is-selected");

        state.answers[state.index] = input.value;
        saveAnswers();
      });
    });
  }

  /**
   * Renderiza la vista completa de la pregunta actual.
   */
  function render() {
    const q = data[state.index];
    if (!q) return;

    setProgress(state.index);

    els.qTitle.textContent = q.title || `Pregunta ${state.index + 1}`;
    els.qQuestion.textContent = q.question || "";
    els.qExplainTitle.textContent = q.explanation_title || "Explicación de la pregunta";
    els.qExplain.textContent = q.explanation || "";

    const selected = state.answers[state.index] || null;
    renderOptions(q, selected);

    // Botones
    els.btnPrev.disabled = state.index === 0;
    els.btnNext.textContent = (state.index === data.length - 1) ? "Finalizar →" : "Siguiente →";
  }

  /**
   * Devuelve la opción seleccionada. Si no hay selección, abre modal.
   * @returns {string|null}
   */
  function requireSelection() {
    const picked = document.querySelector('input[name="answer"]:checked');
    if (!picked) {
      openModal({
        title: "Acción requerida",
        body: "Selecciona una opción para continuar.",
        actions: [{ text: "Entendido", variant: "primary", onClick: closeModal }]
      });
      return null;
    }
    return picked.value;
  }

  /**
   * Maneja el click en "Anterior".
   */
  function handlePrev() {
    if (state.index > 0) {
      state.index -= 1;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  /**
   * Maneja el click en "Siguiente" / "Finalizar".
   */
  function handleNext() {
    const currentValue = requireSelection();
    if (!currentValue) return;

    state.answers[state.index] = currentValue;
    saveAnswers();

    // Si todavía hay preguntas, avanza
    if (state.index < data.length - 1) {
      state.index += 1;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Finalización (demo): modal de confirmación en vez de alert
    openModal({
      title: "Encuesta finalizada",
      body: "Respuestas guardadas en el navegador (demo). Revisa la consola para ver el objeto completo.",
      actions: [
        {
          text: "Ver en consola",
          variant: "ghost",
          onClick: () => {
            console.log("Respuestas:", state.answers);
            closeModal();
          }
        },
        { text: "Cerrar", variant: "primary", onClick: closeModal }
      ]
    });
  }

  /**
   * Inicializa listeners y render inicial.
   */
  function init() {
    bindModalEvents();

    els.btnPrev.addEventListener("click", handlePrev);
    els.btnNext.addEventListener("click", handleNext);

    render();
  }

  // init
  init();
})();
