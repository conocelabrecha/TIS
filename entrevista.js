window.onload = function () {
    cargaPregunta();
};

//Variables globales
var num_preguntas = 7;
const Questions = [
    ['Pregunta 0'],
    ['Pregunta 1'],
    ['Pregunta 2'],
    ['Pregunta 3'],
    ['Pregunta 4'],
    ['Pregunta 5'],
    ['Pregunta 6'],
    ['Pregunta 7'],
    ['Pregunta 8'],
    ['Pregunta 9'],
];

const userAnswers = [
    ['Si'],
    ['No']
];

const BotAnswers = [
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
    let num = Math.floor(Math.random() * 10);   // de 0 a 9  

    // Escribimos pregunta en chat de user
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.innerHTML = Questions[num];
    maindivUser.appendChild(userDiv);

    // Escribimos pregunta en chat del bot
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = Questions[num];
    maindivBot.appendChild(botDiv);

}

function creaBotones(maindivUser, maindivBot) {
    var NoButton = document.createElement("button");
    NoButton.innerHTML = userAnswers[1];
    maindivUser.appendChild(NoButton);

    var YesButton = document.createElement("button");
    YesButton.innerHTML = userAnswers[0];
    maindivUser.appendChild(YesButton);

    esperaRespuesta(NoButton, YesButton);

}

function esperaRespuesta(NoButton, YesButton) {

    // 3. Add event handler
    NoButton.addEventListener("click", function () {

        //añadimos la respuesta del usuario
        const maindivUser = document.getElementById("maindivUser");
        let userDivAnswer = document.createElement("div");
        userDivAnswer.id = "userAnswer";
        userDivAnswer.innerHTML = userAnswers[1];
        maindivUser.appendChild(userDivAnswer);

        //añadimos la respuesta del bot
        const maindivBot = document.getElementById("maindivBot");
        let botDivAnswer = document.createElement("div");
        botDivAnswer.id = "botAnswer";
        botDivAnswer.innerHTML = BotAnswers[1];/////////////////////////////////////
        maindivBot.appendChild(botDivAnswer);

        NoButton.remove();
        YesButton.remove();

        // Si quedan preguntas sacamos otra
        if (num_preguntas > 0) {
            cargaPregunta();
        }
        else {
            alert("Te miro y te impacto");
        }


    });

    YesButton.addEventListener("click", function () {

        //añadimos la respuesta del usuario
        const maindivUser = document.getElementById("maindivUser");
        let userDivAnswer = document.createElement("div");
        userDivAnswer.id = "userAnswer";
        userDivAnswer.innerHTML = userAnswers[0];
        maindivUser.appendChild(userDivAnswer);

        //añadimos la respuesta del bot
        const maindivBot = document.getElementById("maindivBot");
        let botDivAnswer = document.createElement("div");
        botDivAnswer.id = "botAnswer";
        botDivAnswer.innerHTML = BotAnswers[0];///////////////////////////////////////
        maindivBot.appendChild(botDivAnswer);

        NoButton.remove();
        YesButton.remove();

        // Si quedan preguntas sacamos otra
        if (num_preguntas > 0) {
            cargaPregunta();
        }
    });
}






