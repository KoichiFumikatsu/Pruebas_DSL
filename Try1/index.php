<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encuesta Legal para Empresas</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="poster-container">
        <!-- Background decorations -->
        <div class="bg-decoration"></div>
        <div class="bg-decoration"></div>
        
        <!-- Header -->
        <header>
            <div class="logo">
                <div class="logo-icon">
                    <i class="material-icons">balance</i>
                </div>
                <div class="logo-text">LegalSurvey</div>
            </div>
            <nav>
                <ul>
                    <li><a href="#" class="active"><i class="material-icons">assignment</i>Encuesta</a></li>
                    <li><a href="ideas.php"><i class="material-icons">lightbulb</i>Ideas</a></li>
                    <li><a href="#"><i class="material-icons">contact_mail</i>Contáctanos</a></li>
                </ul>
            </nav>
            <div class="user-area">
                <div class="notification">
                    <i class="material-icons">notifications</i>
                    <div class="notification-badge">3</div>
                </div>
                <div class="user-avatar">JD</div>
            </div>
        </header>
        
        <!-- Main Content -->
        <main>
            <div class="progress-container">
                <div class="progress-text">Pregunta 1 de 8</div>
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
            </div>
            
            <div class="question-card">
                <div class="question-number">Pregunta 1</div>
                <div class="question-text">¿Su empresa cuenta con políticas actualizadas de protección de datos personales conforme a la normativa vigente?</div>
                
                <div class="options-container">
                    <div class="option">
                        <div class="option-radio"></div>
                        <div class="option-text">Sí, contamos con políticas actualizadas y las aplicamos regularmente</div>
                    </div>
                    <div class="option">
                        <div class="option-radio"></div>
                        <div class="option-text">Sí, pero necesitan ser actualizadas</div>
                    </div>
                    <div class="option">
                        <div class="option-radio"></div>
                        <div class="option-text">No contamos con políticas específicas</div>
                    </div>
                    <div class="option">
                        <div class="option-radio"></div>
                        <div class="option-text">No estoy seguro/a</div>
                    </div>
                </div>
                
                <div class="explanation">
                    <div class="explanation-title">Explicación de la pregunta</div>
                    <div class="explanation-text">La protección de datos personales es un aspecto fundamental en el cumplimiento normativo para las empresas. Las políticas deben estar actualizadas conforme a la legislación vigente y ser aplicadas de manera efectiva en todos los procesos de la empresa.</div>
                </div>
            </div>
            
            <div class="navigation">
                <button class="nav-button back" disabled>
                    <i class="material-icons">arrow_back</i>
                    Anterior
                </button>
                <button class="nav-button next">
                    Siguiente
                    <i class="material-icons">arrow_forward</i>
                </button>
            </div>
        </main>
    </div>
    
    <script src="script.js"></script>
</body>
</html>