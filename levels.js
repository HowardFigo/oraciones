var levels = [
  {
    name: 'Pregunta 1 - Adec. Funcional',
    image: 'competenciaFun.jpg',
    sentence: '? es el grado en el cual el conjunto de funcionalidades cubre todas las tareas y los objetivos del usuario especificados.',
    correct: 'Completitud funcional',
    wrong: ['Corrección funcional', 'Pertinencia funcional']
  },
  {
    name: 'Pregunta 2 - Adec. Funcional',
    image: 'pertinenciaFun.jpg',
    sentence: '? es la capacidad del producto software para proporcionar un conjunto apropiado de funciones para tareas y objetivos de usuario especificados.',
    correct: 'Pertinencia funcional',
    wrong: ['Completitud funcional', 'Correcion Funcional']
  },
  {
    name: 'Pregunta 3 - Efic. Desempeño',
    image: 'ComportaTemp.jpg',
    sentence: '? son los tiempos de respuesta y procesamiento y los ratios de throughput de un sistema cuando lleva a cabo sus funciones bajo condiciones determinadas en relación con un banco de pruebas (benchmark) establecido.',
    correct: 'Comportamiento temporal',
    wrong: ['Utilización de recursos', 'Capacidad']
  },
  {
    name: 'Pregunta 4 - Efic. Desempeño',
    image: 'UtilRecur.jpg',
    sentence: '? son las cantidades y tipos de recursos utilizados cuando el software lleva a cabo su función bajo condiciones determinadas.',
    correct: 'Utilización de recursos',
    wrong: ['Capacidad', 'Comportamiento temporal']
  },
  {
    name: 'Pregunta 5 - Compatibilidad',
    image: 'Coexistencia.jpg',
    sentence: '? es la capacidad del producto para coexistir con otro software independiente, en un entorno común, compartiendo recursos comunes sin detrimento.',
    correct: 'Coexistencia',
    wrong: ['Capacidad para ser usado.', 'Interoperabilidad', 'Accesibilidad']
  },
  {
    name: 'Pregunta 6 - Compatibilidad',
    image: 'Interoperabilidad.jpg',
    sentence: '? es la capacidad de dos o más sistemas o componentes para intercambiar información y utilizar la información intercambiada.',
    correct: 'Interoperabilidad',
    wrong: ['Capacidad para ser usado.', 'Accesibilidad']
  },
  {
    name: 'Pregunta 7 - Usabilidad',
    image: 'Aprendizaje.jpg',
    sentence: '? es la capacidad del producto que permite al usuario aprender su aplicación.',
    correct: 'Capacidad de aprendizaje',
    wrong: ['Accesibilidad', 'Capacidad para reconocer su adecuación', 'Capacidad para ser usado']
  },
  {
    name: 'Pregunta 8 - Usabilidad',
    image: 'Estetica.jpg',
    sentence: '? es la capacidad de la interfaz de usuario  de agradar y satisfacer la interacción con el usuario.',
    correct: 'Estética de la interfaz de usuario',
    wrong: ['Accesibilidad', 'Capacidad de aprendizaje', 'Capacidad para ser usado']
  },
  {
    name: 'Pregunta 9 - Fiabilidad',
    image: 'Accesibilidad.jpg',
    sentence: '? es la capacidad del producto que permite que sea utilizado por usuarios con determinadas características y discapacidades.',
    correct: 'Accesibilidad',
    wrong: ['Capacidad para reconocer su adecuación', 'Capacidad de aprendizaje', 'Capacidad para ser usado']
  },
  {
    name: 'Pregunta 10 - Fiabilidad',
    image: 'Tolerancia.jpg',
    sentence: '? es la capacidad del sistema o componente para operar según lo previsto en presencia de fallos hardware o software.',
    correct: 'Tolerancia a fallos',
    wrong: ['Madurez', 'Disponibilidad', 'Capacidad de recuperación']
  },
  {
    name: 'Pregunta 11 - Seguridad',
    image: 'Confidencialidad.jpg',
    sentence: '? es la capacidad de protección contra el acceso de datos e información no autorizados, ya sea accidental o deliberadamente.',
    correct: 'Confidencialidad',
    wrong: ['Integridad', 'No repudio', 'Responsabilidad']
  },
  {
    name: 'Pregunta 12 - Seguridad',
    image: 'Autenticidad.jpg',
    sentence: '? es la capacidad de demostrar la identidad de un sujeto o un recurso.',
    correct: 'Autenticidad',
    wrong: ['No repudio', 'Integridad', 'Confidencialidad']
  },
  {
    name: 'Pregunta 13 - Mantenibilidad',
    image: 'Reusabilidad.jpg',
    sentence: '? es la capacidad de un activo que permite que sea utilizado en más de un sistema software o en la construcción de otros activos.',
    correct: 'Reusabilidad',
    wrong: ['Modularidad', 'Analizabilidad', 'Capacidad para ser modificado', 'Capacidad para ser probado']
  },
  {
    name: 'Pregunta 14 - Mantenibilidad',
    image: 'Analizabilidad.jpg',
    sentence: '? es la facilidad con la que se puede evaluar el impacto de un determinado cambio sobre el resto del software, diagnosticar las deficiencias o causas de fallos en el software, o identificar las partes a modificar.',
    correct: 'Analizabilidad',
    wrong: ['Modularidad', 'Capacidad de aprendizaje', 'Capacidad para ser usado']
  },
  {
    name: 'Pregunta 15 - Portabilidad',
    image: 'Adaptabilidad.jpg',
    sentence: '? es la capacidad del producto que le permite ser adaptado de forma efectiva y eficiente a diferentes entornos determinados de hardware, software, operacionales o de uso.',
    correct: 'Adaptabilidad',
    wrong: ['Capacidad para ser instalado', 'Capacidad para ser reemplazado']
  },
  {
    name: 'Pregunta 16 - Portabilidad',
    image: 'instalado.jpg',
    sentence: '? es la facilidad con la que el producto se puede instalar y/o desinstalar de forma exitosa en un determinado entorno.',
    correct: 'Capacidad para ser instalado',
    wrong: ['Adaptabilidad', 'Capacidad para ser reemplazado']
  },
]
