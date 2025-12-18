<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galería de Ideas - LegalSurvey</title>
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
                    <li><a href="index.php"><i class="material-icons">assignment</i>Encuesta</a></li>
                    <li><a href="#" class="active"><i class="material-icons">lightbulb</i>Ideas</a></li>
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
            <h1 class="page-title">Galería de Ideas</h1>
            <p class="page-subtitle">Explora nuestras ideas para mejorar la experiencia de encuestas legales y haz clic en cada una para ver más detalles.</p>
            
            <div class="ideas-grid">
                <div class="idea-card new">
                    <div class="idea-number">
                        <i class="material-icons">new_releases</i>
                        Idea 1
                    </div>
                    <h2 class="idea-title">Encuesta Legal para Empresas</h2>
                    <p class="idea-description">Interfaz de encuesta profesional similar a Quizix con paleta de colores corporativa, diseñada para recolectar información legal de empresas de manera eficiente.</p>
                    <div class="idea-meta">
                        <div class="idea-date">
                            <i class="material-icons">event</i>
                            19/12/2025
                        </div>
                        <div class="idea-status">
                            <i class="material-icons">check_circle</i>
                            Activa
                        </div>
                    </div>
                </div>
                
                <div class="idea-card">
                    <div class="idea-number">
                        <i class="material-icons">lightbulb</i>
                        Idea 2
                    </div>
                    <h2 class="idea-title">Panel de Análisis Legal</h2>
                    <p class="idea-description">Dashboard interactivo para visualizar resultados de encuestas legales con gráficos dinámicos y filtros personalizados para diferentes áreas legales.</p>
                    <div class="idea-meta">
                        <div class="idea-date">
                            <i class="material-icons">event</i>
                            Pendiente
                        </div>
                        <div class="idea-status">
                            <i class="material-icons">hourglass_empty</i>
                            En desarrollo
                        </div>
                    </div>
                </div>
                
                <div class="idea-card">
                    <div class="idea-number">
                        <i class="material-icons">lightbulb</i>
                        Idea 3
                    </div>
                    <h2 class="idea-title">Asistente Legal IA</h2>
                    <p class="idea-description">Sistema de inteligencia artificial que proporciona recomendaciones personalizadas basadas en las respuestas de las encuestas legales.</p>
                    <div class="idea-meta">
                        <div class="idea-date">
                            <i class="material-icons">event</i>
                            Pendiente
                        </div>
                        <div class="idea-status">
                            <i class="material-icons">hourglass_empty</i>
                            En desarrollo
                        </div>
                    </div>
                </div>
                
                <div class="idea-card">
                    <div class="idea-number">
                        <i class="material-icons">lightbulb</i>
                        Idea 4
                    </div>
                    <h2 class="idea-title">Generador de Documentos</h2>
                    <p class="idea-description">Herramienta que crea documentos legales personalizados automáticamente basándose en las respuestas de las encuestas.</p>
                    <div class="idea-meta">
                        <div class="idea-date">
                            <i class="material-icons">event</i>
                            Pendiente
                        </div>
                        <div class="idea-status">
                            <i class="material-icons">hourglass_empty</i>
                            En desarrollo
                        </div>
                    </div>
                </div>
                
                <div class="idea-card">
                    <div class="idea-number">
                        <i class="material-icons">lightbulb</i>
                        Idea 5
                    </div>
                    <h2 class="idea-title">Módulo de Cumplimiento</h2>
                    <p class="idea-description">Sistema para monitorear y gestionar el cumplimiento normativo con alertas personalizadas y recordatorios automáticos.</p>
                    <div class="idea-meta">
                        <div class="idea-date">
                            <i class="material-icons">event</i>
                            Pendiente
                        </div>
                        <div class="idea-status">
                            <i class="material-icons">hourglass_empty</i>
                            En desarrollo
                        </div>
                    </div>
                </div>
                
                <div class="idea-card">
                    <div class="idea-number">
                        <i class="material-icons">lightbulb</i>
                        Idea 6
                    </div>
                    <h2 class="idea-title">Portal de Clientes</h2>
                    <p class="idea-description">Área privada donde los clientes pueden acceder a sus encuestas, resultados y documentos legales de forma segura.</p>
                    <div class="idea-meta">
                        <div class="idea-date">
                            <i class="material-icons">event</i>
                            Pendiente
                        </div>
                        <div class="idea-status">
                            <i class="material-icons">hourglass_empty</i>
                            En desarrollo
                        </div>
                    </div>
                </div>
            </div>
            
            <button class="add-idea-btn">
                <i class="material-icons">add_circle</i>
                Agregar Nueva Idea
            </button>
        </main>
    </div>
    
    <script src="script.js"></script>
</body>
</html>