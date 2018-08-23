let num = null;
let op = null;

const numButtons = document.getElementsByClassName('num-button');

for (var i = 0; i < numButtons.length; i++) {
    const button = numButtons[i];
    const num = button.textContent;
    button.onclick = () => {
        enterNumber(num)
    }
}

const input = document.getElementById('num-input');

const dot = document.getElementById('dot');
dot.onclick = () => {
    for (let i = 0; i < input.value.length; i++) {
        if (input.value [i] === '.') {
            return
        }
    }
    input.value += '.'
};

const backspace = document.getElementById('backspace');
backspace.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0'
    } else {
        input.value = input.value.slice(0, -1)
    }
};

const clear = document.getElementById('clear');
clear.onclick = () => {
    input.value = input.value.slice(-1, 0)
    input.value = '0'
};

enterNumber = (n) => {
    if (n === '+') {
        if (num == null) {
            op = '+';
            console.log('+');
        }
        return
    }
    if (op == null) {
        num = input.value;
        input.value = n;
    }
    if (input.value === '0') {
        input.value = n;
    } else {
        input.value = input.value + n;
    }
};
