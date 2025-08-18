document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");

    const button = document.createElement("button");
    button.textContent = "Auswerten";
    button.type = "button";
    quizForm.appendChild(button);

    button.addEventListener("click", function () {
        // Frage 1: Radio
        const q1 = document.querySelector('input[name="question1"]:checked');
        const q1Value = q1 ? q1.value : null;

        // Frage 2: Radio
        const q2 = document.querySelector('input[name="question2"]:checked');
        const q2Value = q2 ? q2.value : null;

        // Frage 3: Textfeld
        const q3 = document.querySelector('input[name="question3"]');
        const q3Value = q3.value.trim().toLowerCase();

        // Richtige Antworten
        const correctAnswers = {
            question1: "b",
            question2: "b",
            question3: "photoshop"
        };

        // Vergleich und Ausgabe
        let score = 0;

        if (q1Value === correctAnswers.question1) score++;
        if (q2Value === correctAnswers.question2) score++;
        if (q3Value === correctAnswers.question3) score++;

        alert(`Du hast ${score} von 3 Punkten erreicht.`);
    });
});
