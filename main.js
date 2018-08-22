const numButtons = document.getElementsByClassName('num-button');

for (var i = 0; i < numButtons.length; i++) {
    const button = numButtons[i];
    const num = button.textContent;
    button.onclick = () => {
        enterNumber(num)
    }
}

console.log(num1);

const input = document.getElementById('num-input');

const backspace = document.getElementById('backspace');
backspace.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0'
    } else {
        input.value = input.value.slice(0, -1)
    }
};

enterNumber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        input.value = input.value + n;
    }
};
