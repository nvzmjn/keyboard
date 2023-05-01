let keyboard = [
    { label: '`', code: 'Backquote' },
    { label: '1', code: 'Digit1' },
    { label: '2', code: 'Digit2' },
    { label: '3', code: 'Digit3' },
    { label: '4', code: 'Digit4' },
    { label: '5', code: 'Digit5' },
    { label: '6', code: 'Digit6' },
    { label: '7', code: 'Digit7' },
    { label: '8', code: 'Digit8' },
    { label: '9', code: 'Digit9' },
    { label: '0', code: 'Digit0' },
    { label: '-', code: 'Minus' },
    { label: '=', code: 'Equal' },
    { label: 'Backspace', code: 'Backspace' },
    { label: 'Tab', code: 'Tab' },
    { label: 'q', code: 'KeyQ' },
    { label: 'w', code: 'KeyW' },
    { label: 'e', code: 'KeyE' },
    { label: 'r', code: 'KeyR' },
    { label: 't', code: 'KeyT' },
    { label: 'y', code: 'KeyY' },
    { label: 'u', code: 'KeyU' },
    { label: 'i', code: 'KeyI' },
    { label: 'o', code: 'KeyO' },
    { label: 'p', code: 'KeyP' },
    { label: '[', code: 'BracketLeft' },
    { label: ']', code: 'BracketRight' },
    { label: "\\", code: 'Backslash' },
    { label: 'Del', code: 'Delete' },
    { label: 'Caps Lock', code: 'Capslock' },
    { label: 'a', code: 'KeyA' },
    { label: 's', code: 'KeyS' },
    { label: 'd', code: 'KeyD' },
    { label: 'f', code: 'KeyF' },
    { label: 'g', code: 'KeyG' },
    { label: 'h', code: 'KeyH' },
    { label: 'j', code: 'KeyJ' },
    { label: 'k', code: 'KeyK' },
    { label: 'l', code: 'KeyL' },
    { label: ';', code: 'Semicolon' },
    { label: "'", code: 'Quote' },
    { label: 'Enter', code: 'Enter' },
    { label: 'Shift', code: 'ShiftLeft' },
    { label: 'z', code: 'KeyZ' },
    { label: 'x', code: 'KeyX' },
    { label: 'c', code: 'KeyC' },
    { label: 'v', code: 'KeyV' },
    { label: 'b', code: 'KeyB' },
    { label: 'n', code: 'KeyN' },
    { label: 'm', code: 'KeyM' },
    { label: ',', code: 'Comma' },
    { label: '.', code: 'Period' },
    { label: '/', code: 'Slash' },
    { label: 'Shift', code: 'ShiftRight' },
    { label: 'Ctrl', code: 'ControlLeft' },
    { label: 'Win', code: 'MetaLeft' },
    { label: 'Alt', code: 'AltLeft' },
    { label: '', code: 'Space' },
    { label: 'Alt', code: 'AltRight' },
    { label: '←', code: 'ArrowLeft' },
    { label: '↑', code: 'ArrowUp' },
    { label: '↓', code: 'ArrowDown' },
    { label: '→', code: 'ArrowRight' },
    { label: 'Ctrl', code: 'ControlRight' },
]



document.addEventListener("DOMContentLoaded", function (event) {

    createStyleLink()

    let textArea = document.createElement('textarea')
    textArea.classList.add('text')
    textArea.cols = 127
    textArea.rows = 20
    document.body.appendChild(textArea)


    let divContainer = document.createElement('div')
    divContainer.classList.add('keyboard')
    document.body.appendChild(divContainer)


    keyboard.forEach(key => {
        let keyDiv = document.createElement('div')
        keyDiv.classList.add('key')
        keyDiv.classList.add(key.code)
        keyDiv.dataset.code = key.code
        keyDiv.textContent = key.label
        keyDiv.addEventListener('click', () => {
            textArea.value += key.label
        })
        keyDiv.addEventListener('keydown', () => {
            textArea.value += key.label
        })

        keyDiv.addEventListener('mousedown', () => {
            keyDiv.classList.add('active');
            document.dispatchEvent(new KeyboardEvent('onkeydown', { keyCode: key.code }));
        });

        keyDiv.addEventListener('mouseup', () => {
            keyDiv.classList.remove('active'); 
            document.dispatchEvent(new KeyboardEvent('onkeyup', { keyCode: key.code }));
        });

        divContainer.appendChild(keyDiv)
    })

    document.onkeydown = function (e) {
        document.querySelector('.key[data-code="' + e.code + '"]').classList.add('active')
    }

    document.onkeyup = function (up) {
        document.querySelector('.key[data-code="' + up.code + '"]').classList.remove('active')
    }


});


function createStyleLink() {
    let styleLink = document.createElement('link')
    styleLink.rel = 'stylesheet'
    styleLink.href = 'style.css'
    document.head.appendChild(styleLink)

}


