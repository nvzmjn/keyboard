let keyboard = [
    { label: '`', ruLabel: 'ё', eng: '`' , ru: 'ё', code: 'Backquote' },
    { label: '1', ruLabel: '1', eng: '1', ru: '1', code: 'Digit1' },
    { label: '2', ruLabel: '2', eng: '2', ru: '2', code: 'Digit2' },
    { label: '3', ruLabel: '3', eng: '3', ru: '3', code: 'Digit3' },
    { label: '4', ruLabel: '4', eng: '4', ru: '4', code: 'Digit4' },
    { label: '5', ruLabel: '5', eng: '5', ru: '5', code: 'Digit5' },
    { label: '6', ruLabel: '6', eng: '6', ru: '6', code: 'Digit6' },
    { label: '7', ruLabel: '7', eng: '7', ru: '7', code: 'Digit7' },
    { label: '8', ruLabel: '8', eng: '8', ru: '8', code: 'Digit8' },
    { label: '9', ruLabel: '9', eng: '9', ru: '9', code: 'Digit9' },
    { label: '0', ruLabel: '0', eng: '0', ru: '0', code: 'Digit0' },
    { label: '-', ruLabel: '-', eng: '-', ru: '-', code: 'Minus' },
    { label: '=', ruLabel: '=', eng: '=', ru: '=', code: 'Equal' },
    { label: 'Backspace', ruLabel: 'Backspace', eng: ' ', ru: ' ', code: 'Backspace' },
    { label: 'Tab', ruLabel: 'Tab', eng: ' ', ru: ' ', code: 'Tab' },
    { label: 'q', ruLabel: 'й', eng: 'q', ru: 'й', code: 'KeyQ' },
    { label: 'w', ruLabel: 'ц', eng: 'w', ru: 'ц', code: 'KeyW' },
    { label: 'e', ruLabel: 'у', eng: 'e', ru: 'у', code: 'KeyE' },
    { label: 'r', ruLabel: 'к', eng: 'r', ru: 'к', code: 'KeyR' },
    { label: 't', ruLabel: 'е', eng: 't', ru: 'е', code: 'KeyT' },
    { label: 'y', ruLabel: 'н', eng: 'y', ru: 'н', code: 'KeyY' },
    { label: 'u', ruLabel: 'г', eng: 'u', ru: 'г', code: 'KeyU' },
    { label: 'i', ruLabel: 'ш', eng: 'i', ru: 'ш', code: 'KeyI' },
    { label: 'o', ruLabel: 'щ', eng: 'o', ru: 'щ', code: 'KeyO' },
    { label: 'p', ruLabel: 'з', eng: 'p', ru: 'з', code: 'KeyP' },
    { label: '[', ruLabel: 'х', eng: '[', ru: 'х', code: 'BracketLeft' },
    { label: ']', ruLabel: 'ъ', eng: ']', ru: 'ъ', code: 'BracketRight' },
    { label: "\\", ruLabel: '\\', eng: '\\', ru: '\\', code: 'Backslash' },
    { label: 'Del', ruLabel: 'Del', eng: ' ', ru: ' ', code: 'Delete' },
    { label: 'Caps Lock', ruLabel: 'Caps Lock', eng: ' ', ru: ' ', code: 'Capslock' },
    { label: 'a', ruLabel: 'ф', eng: 'a', ru: 'ф', code: 'KeyA' },
    { label: 's', ruLabel: 'ы', eng: 's', ru: 'ы', code: 'KeyS' },
    { label: 'd', ruLabel: 'в', eng: 'd', ru: 'в', code: 'KeyD' },
    { label: 'f', ruLabel: 'а', eng: 'f', ru: 'а', code: 'KeyF' },
    { label: 'g', ruLabel: 'п', eng: 'g', ru: 'п', code: 'KeyG' },
    { label: 'h', ruLabel: 'р', eng: 'h', ru: 'р', code: 'KeyH' },
    { label: 'j', ruLabel: 'о', eng: 'j', ru: 'о', code: 'KeyJ' },
    { label: 'l', ruLabel: 'л', eng: 'k', ru: 'л', code: 'KeyL' },
    { label: 'k', ruLabel: 'д', eng: 'l', ru: 'д', code: 'KeyK' },
    { label: ';', ruLabel: 'ж', eng: ';', ru: 'ж', code: 'Semicolon' },
    { label: "'", ruLabel: 'э', eng: "'", ru: 'э', code: 'Quote' },
    { label: 'Enter', ruLabel: 'Enter', eng: ' ' , ru: ' ', code: 'Enter' },
    { label: 'Shift', ruLabel: 'Shift', eng: ' ', ru: ' ', code: 'ShiftLeft' },
    { label: 'z', ruLabel: 'я', eng: 'z', ru: 'я', code: 'KeyZ' },
    { label: 'x', ruLabel: 'ч', eng: 'x', ru: 'ч', code: 'KeyX' },
    { label: 'c', ruLabel: 'с', eng: 'c', ru: 'с', code: 'KeyC' },
    { label: 'v', ruLabel: 'м', eng: 'v', ru: 'м', code: 'KeyV' },
    { label: 'b', ruLabel: 'и', eng: 'b', ru: 'и', code: 'KeyB' },
    { label: 'n', ruLabel: 'т', eng: 'n', ru: 'т', code: 'KeyN' },
    { label: 'm', ruLabel: 'ь', eng: 'm', ru: 'ь', code: 'KeyM' },
    { label: ',', ruLabel: 'б', eng: ',', ru: 'б', code: 'Comma' },
    { label: '.', ruLabel: 'ю', eng: ',', ru: 'ю', code: 'Period' },
    { label: '/', ruLabel: '.', eng: '.', ru: '.', code: 'Slash' },
    { label: 'Shift', ruLabel: 'Shift', eng: ' ', ru: ' ', code: 'ShiftRight' },
    { label: 'Ctrl', ruLabel: 'Ctrl', eng: ' ', ru: ' ', code: 'ControlLeft' },
    { label: 'Win', ruLabel: 'Win', eng: ' ', ru: ' ', code: 'MetaLeft' },
    { label: 'Alt', ruLabel: 'Alt', eng: ' ', ru: ' ', code: 'AltLeft' },
    { label: ' ', ruLabel: ' ', eng: ' ', ru: ' ', code: 'Space' },
    { label: 'Alt', ruLabel: 'Alt', eng: ' ', ru: ' ', code: 'AltRight' },
    { label: '←', ruLabel: '←', eng: '←', ru: '←', code: 'ArrowLeft' },
    { label: '↑', ruLabel: '↑', eng: '↑', ru: '↑', code: 'ArrowUp' },
    { label: '↓', ruLabel: '↓', eng: '↓', ru: '↓', code: 'ArrowDown' },
    { label: '→', ruLabel: '→', eng: '→', ru: '→', code: 'ArrowRight' },
    { label: 'Ctrl', ruLabel: 'Ctrl', eng: ' ', ru: ' ', code: 'ControlRight' },
]

const ruLayout = keyboard.map(item => item.ru)
const engLayout = keyboard.map (item => item.eng)
let currentLayout = engLayout


window.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.altKey) {
      currentLayout = currentLayout === engLayout ? ruLayout : engLayout;
      updateKeysText();
    }
  });
  
  function updateKeysText() {
    keyboard.forEach((key) => {
      const keyDiv = document.querySelector(`.key.${key.code}`);
      if (currentLayout === engLayout) {
        keyDiv.textContent = key.label;
      } else {
        keyDiv.textContent = key.ruLabel;
      }
    });
  }

function createStyleLink() {
    let styleLink = document.createElement('link')
    styleLink.rel = 'stylesheet'
    styleLink.href = 'style.css'
    document.head.appendChild(styleLink)
};

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
        let keyDiv = document.createElement('div');
        keyDiv.classList.add('key');
        keyDiv.classList.add(key.code);
        keyDiv.dataset.code = key.code;
      
        if (currentLayout === engLayout) {
          keyDiv.textContent = key.label;
        } else {
          keyDiv.textContent = key.ruLabel;
        }             

        keyDiv.addEventListener('mousedown', (e) => {
            keyDiv.classList.add('active');
            textArea.value += e.target.innerHTML
        });

        keyDiv.addEventListener('mouseup', () => {
            keyDiv.classList.remove('active');
        })
        // keyDiv.addEventListener('mousedown', () => {
        //     keyDiv.classList.add('active');
        //     textArea.value += key.label;
        //     document.dispatchEvent(new KeyboardEvent('onkeydown', { keyCode: key.code }));
        // });

        // keyDiv.addEventListener('mouseup', () => {
        //     keyDiv.classList.remove('active');
        //     document.dispatchEvent(new KeyboardEvent('onkeyup', { keyCode: key.code }));
        // });

        // let currentLayout = 'en'
        // function changeLayout() {
        //     if (currentLayout === 'en') {
        //         currentLayout === 'ru'
        //     } else {
        //         currentLayout === 'en'
        //     }
        // }

        // document.addEventListener('keydown', (event) => {
        //     if (event.ctrlKey && event.altKey) {
        //         changeLayout();
        //     }
        // });

        // document.addEventListener('keydown', function (event) {
        //     if (event.code === 'Backspace') {
        //         deleteChar()
        //     } else if (event.code === 'Delete') {
        //         deleteNextChar()
        //     }
        // });


        // function deleteChar() {
        //     let textarea = document.getElementById('myTextarea');
        //     let cursorPosition = textarea.selectionStart;
        //     let textBeforeCursor = textarea.value.substring(0, cursorPosition - 1);
        //     let textAfterCursor = textarea.value.substring(cursorPosition);
        //     textarea.value = textBeforeCursor + textAfterCursor;
        //     textarea.selectionStart = cursorPosition - 1;
        //     textarea.selectionEnd = cursorPosition - 1;
        //     textarea.focus();
        // }

        // function deleteNextChar(input) {
        //     const startPos = input.selectionStart;
        //     const endPos = input.selectionEnd;

        //     if (startPos === input.value.length) {
        //         return;
        //     }

        //     input.value = input.value.slice(0, startPos) + input.value.slice(startPos + 1);

        //     input.selectionStart = startPos;
        //     input.selectionEnd = startPos;
        // }


        divContainer.appendChild(keyDiv)
    });

    document.body.addEventListener('keydown', (e) => {
        console.log (e)
        textArea.value += e.key
        document.querySelector('.key[data-code="' + e.code + '"]').classList.add('active')
    });

    document.onkeyup = function (up) {
        document.querySelector('.key[data-code="' + up.code + '"]').classList.remove('active')
    };


});
