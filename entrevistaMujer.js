window.onload = function () {
    cargaPregunta();
};

//Variables globales
var num_preguntas = 7;
var preguntaAleatoria;
var maxNumPreguntas = 9; // Número máximo de preguntas que hay contando el 0. (Se van restando para que no se dupliquen)

// Preguntas sexistas
var preguntasMujer = [
    ['¿Le gustaría tener hijos a corto plazo?', 'Si'],
    ['Necesitaríamos que viniese con falda y tacones, ¿le crearía algún inconveniente?', 'Si'],
    ['¿Le importaría adaptarse a un ambiente muy masculino?', 'No'],
    ['¿Te sientes cómoda trabajando con hombres?', 'No'],
    ['¿Alguna vez ha estado de baja?', 'Si'],
    ['Necesitamos un hombre con fuerza física para realizar el trabajo. ¿Usted cree que daría la talla?', 'Si'],
    ['¿Está casada?', 'Si'],
    ['¿Está interesada en la guardería que tenemos en la empresa?', 'Si'],
    ['¿Tiene amplia disponibilidad para viajar?', 'No'],
    ['¿Le importaría coquetear con los clientes para cerrar una venta?', 'Si']
];

// Preguntas normales
var preguntasHombre = [
 ['¿Reaccionas bien al cambio?', 'Si'],
    ['¿Eres emprendedor?', 'Si'],
    ['¿Sabría desarrollar una web?', 'Si'],
    ['¿Gestionas bien el estrés?', 'Si'],
    ['¿Se te da bien trabajar en equipo?', 'Si'],
    ['¿Estás actualmente en otros procesos de selección?', 'No'],
    ['¿Conoce el lenguaje de programación Haskell?', 'No'],
    ['¿Cree que podría aportar algo positivo a la empresa?', 'Si'],
    ['¿Tiene conocimientos de HTML?', 'Si'],
    ['¿Estarías dispuesto a trabajar horas extras?', 'Si']
];

const userAnswers = [
    ['Si'],
    ['No']
];

const botAnswers = [
    ['Si'],
    ['No']
];


//----------------------------

function cargaPregunta() {
    const maindivUser = document.getElementById("maindivUser");
    const maindivBot = document.getElementById("maindivBot");
    pintaPregunta(maindivUser, maindivBot);
    // Restamos en uno el numero de preguntas restantes
    num_preguntas -= 1;

    // Creamos los botones y esperamos respuesta
    creaBotones(maindivUser, maindivBot);
}

function pintaPregunta(maindivUser, maindivBot) {
    preguntaAleatoria = Math.floor(Math.random() * maxNumPreguntas);   // de 0 a 9

    // Escribimos pregunta en chat de user
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.innerHTML = preguntasMujer[preguntaAleatoria][0];
    maindivUser.appendChild(userDiv);

    // Escribimos pregunta en chat del bot
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = preguntasHombre[preguntaAleatoria][0];
    maindivBot.appendChild(botDiv);
}

function creaBotones(maindivUser, maindivBot) {

    var answerContainerUser = document.createElement("div");
    answerContainerUser.classList.add('answerContainer');

    maindivUser.appendChild(answerContainerUser);

    var noButton = document.createElement("button");
    noButton.classList.add('botonRespuesta');
    noButton.innerHTML = userAnswers[1];
    answerContainerUser.appendChild(noButton);

    var yesButton = document.createElement("button");
    yesButton.classList.add('botonRespuesta');
    yesButton.innerHTML = userAnswers[0];
    answerContainerUser.appendChild(yesButton);

    // Añadimos la respuesta del bot
    let botDivAnswer = document.createElement("div");
    botDivAnswer.id = "botAnswer";
    botDivAnswer.innerHTML = preguntasHombre[preguntaAleatoria][1];
    maindivBot.appendChild(botDivAnswer);
    maindivBot.scrollTop = maindivBot.scrollHeight;

    esperaRespuesta(noButton, yesButton, answerContainerUser);
}

function esperaRespuesta(noButton, yesButton, answerContainerUser) {

    // 3. Add event handler
    noButton.addEventListener("click", function () {

        // Añadimos la respuesta del usuario
        const maindivUser = document.getElementById("maindivUser");
        let userDivAnswer = document.createElement("div");
        userDivAnswer.id = "userAnswer";
        userDivAnswer.innerHTML = userAnswers[1];
        maindivUser.appendChild(userDivAnswer);

        answerContainerUser.remove();
        noButton.remove();
        yesButton.remove();

        // Si quedan preguntas sacamos otra
        if (num_preguntas > 0) {
            cargaPregunta();
            maindivUser.scrollTop = maindivUser.scrollHeight;
        } else {
            var element = document.querySelector(".mensaje");
            element.classList.add("visible");
        }
    });

    yesButton.addEventListener("click", function () {

        // Añadimos la respuesta del usuario
        const maindivUser = document.getElementById("maindivUser");
        let userDivAnswer = document.createElement("div");
        userDivAnswer.id = "userAnswer";
        userDivAnswer.innerHTML = userAnswers[0];
        maindivUser.appendChild(userDivAnswer);

        answerContainerUser.remove();
        noButton.remove();
        yesButton.remove();

        // Si quedan preguntas sacamos otra
        if (num_preguntas > 0) {
            cargaPregunta();
            maindivUser.scrollTop = maindivUser.scrollHeight;
        } else {
            var element = document.querySelector(".mensaje");
            element.classList.add("visible");
        }
    });

    preguntasHombre.splice(preguntaAleatoria, 1); // 1 es la cantidad de elemento a eliminar
    preguntasMujer.splice(preguntaAleatoria, 1); // 1 es la cantidad de elemento a eliminar
    maxNumPreguntas--;
}






