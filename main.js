let num = null;
let p = false;
let lop = null;

const numButtons = document.getElementsByClassName('num-button');

for (let i = 0; i < numButtons.length; i++) {
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
        input.value = '0';
        num = null
    } else {
        input.value = input.value.slice(0, -1)
    }
};

const clear = document.getElementById('clear');
clear.onclick = () => {
    input.value = input.value.slice(-1, 0);
    input.value = '0';
    num = null
};

const operationButtons = document.getElementsByClassName('operation-button');
[].forEach.call(operationButtons, (button) => {
    button.onclick = () => {
        dispatchOperation(button.textContent);
    }
});

enterNumber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        if (p) {
            num = parseFloat(input.value);
            input.value = n;
            p = false;
        } else {
            input.value = input.value + n;
        }
    }
};

const dispatchOperation = (operation) => {
    if (lop) {
        if (!p) {
            num = processOperation(lop, num, parseFloat(input.value));
            input.value = num;
        }
    }
    p = true;
    lop = operation
};

const processOperation = (operation, argument1, argument2) => {
    switch (operation) {
        case '+':
            return argument1 + argument2;
        case '-':
            return argument1 - argument2;
        case '×':
            return argument1 * argument2;
        case '÷':
            return argument1 / argument2;
    }
};
