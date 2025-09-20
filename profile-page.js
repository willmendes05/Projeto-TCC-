const btn = document.querySelector("#btn")
const save = document.querySelector("#save")

function chamarForm() {
    const form = document.querySelector("#form-edit")

    form.classList.add("hidden")
}

function removeForm() {
    const form = document.querySelector("#form-edit")

    form.classList.remove("hidden")
}

btn.addEventListener("click", removeForm)

btn.addEventListener('click', chamarForm)