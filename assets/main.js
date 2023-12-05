const form = document.querySelector('.form');

const cpf = document.querySelector('#cpf');

cpf.addEventListener('keypress', () => {
    let cpfLength = cpf.value.length;

    if (cpfLength == 3 || cpfLength == 7) {
        cpf.value += '.';
    }else if (cpfLength == 11) {
        cpf.value += '-';
    }
});

form.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    console.log(data)

    fetch("https://tranquil-rex-405218.rj.r.appspot.com/hashCodeServer?nome=Exemplo&email=XXX@gmail.com&cpf=" + encodeURIComponent(data.cpf),
{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})

        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
})










