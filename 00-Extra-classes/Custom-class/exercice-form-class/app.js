class Form {
    constructor() {

    function addinput() {
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    }
    addinput();

    }

};

function render() {
    document.getElementById("app").innerText = new Form;
}

render()