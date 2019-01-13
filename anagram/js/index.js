const fword = document.getElementById("fword");
const sword = document.getElementById("sword");
const check = document.getElementById("check");
const result = document.getElementById("result");

check.onclick = function (e) {
    let getFWord = fword.value.toLowerCase();
    let getSWord = sword.value.toLowerCase();
    let checkGetFWord = getFWord.split('').sort().join('');
    let checkGetSWord = getSWord.split('').sort().join('');

    if ((getFWord.length && getSWord.length) < 1) {
        result.innerHTML = "Word can't be empty";
        return false;
    }
    if ((!getFWord || !getSWord || getFWord.length !== getSWord.length) || (getFWord === getSWord)) {
        result.innerHTML = getFWord + " and " + getSWord + " is NOT an anagram 1";
        return false;
    }

    if (checkGetFWord === checkGetSWord) {
        result.innerHTML = getFWord + " and " + getSWord + " is an anagram 1";
    } else {
        result.innerHTML = getFWord + " and " + getSWord + " is NOT an anagram 1";
    }
}

sword.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.which === 13) {
        check.click();
    }
})

fword.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.which === 13) {
        check.click();
    }
})