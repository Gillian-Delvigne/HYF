class Form {
    constructor() {
    const form = document.createElement("form");
    function addinput() {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    form.appendChild(input);
    }
    addinput();

    }
};

function render() {
    const myForm = new Form;
    const myDiv = document.getElementById("app");
    myDiv.innerHTML += myForm;

}

render();                      