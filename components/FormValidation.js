export const numericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105));
};

export const enforceFormat = (event) => {
    if (!numericInput(event)) {
        event.preventDefault();
    }
};

export const formatNumber = (event) => {
    const target = event.target;
    const input = event.target.value.replace(/\D/g, '').substring(0,10);

    const areaCode = input.substring(0,3);
    const middle = input.substring(3,6);
    const ending = input.substring(6,10);

    if (input.length > 6) {
        target.value = '(${areaCode}) ${middle} - ${ending}';
    } else if (input.length > 3) {
        target.value = '(${areaCode}) ${middle}';
    } else {
        target.value = '(${areaCode})';
    }
};

export const validatePhone = (inputField) => {
    inputField.addEventListener('keydown', enforceFormat);
    inputField.addEventListener('keyup', formatNumber);
}