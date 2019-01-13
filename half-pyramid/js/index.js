const result = document.getElementById("result");
const input = document.getElementById("input");
const submit = document.getElementById("submit");

input.oninput = function () {
    let getInput = input.value;

    submit.onclick = function () {
        for (i = 0; i <= getInput.length; i++) {
            var forEachInput = getInput.charAt(i);
            for (j = getInput.length - 2; j >= i; j--) {
                forEachInput += "0";
            }
            result.innerHTML += "<li>" + forEachInput + "</li>";
        }
    }
}