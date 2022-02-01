const name = document.getElementById("contactName");
const mail = document.getElementById("contactEmail");
name.addEventListener("input", function (event) {
    if (name.value.length <= 1 || name.value.length > 50) {
        name.setCustomValidity("Length must be greater than 1 and less than 50");
    } else if (name.validity.valueMissing) {
        name.setCustomValidity("please Input a name");
    } else {
        name.setCustomValidity("");
    }
});




