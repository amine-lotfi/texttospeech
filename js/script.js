// https://github.com/amine-lotfi

const go_button = document.querySelector('button');
const text_input = document.querySelector('textarea');

let is_speaking = true;

const textToSpeech = () => {

    const synth = window.speechSynthesis;
    const text = text_input.value;

    if (!synth.speaking && text) {
        const utternace = new SpeechSynthesisUtterance(text);
        synth.speak(utternace);
    }

    if (text.length == 0) {
        alert("Please type some text first.")
    }

    else if (text.length > 50) {
        if (synth.speaking && is_speaking) {
            go_button.innerHTML = `<i class="bi bi-pause-fill"></i>`;
            synth.resume();
            is_speaking = false;
        } else {
            go_button.innerHTML = `<i class="bi bi-play-fill"></i>`;
            synth.pause();
            is_speaking = true;
        }
    } else {
        is_speaking = false;
        go_button.innerHTML = `<i class="bi bi-soundwave"></i>`;
    }

    setInterval(() => {
        if (!synth.speaking && !is_speaking) {
            is_speaking = true;
            go_button.innerHTML = `<i class="bi bi-robot me-2"></i>GO`;
        }
    });
};

go_button.addEventListener("click", textToSpeech);