let messages;

let meunome = {
    name: "Fiorinha"
}

login()
function login() {
    const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', meunome)
    promise.then(stayOnline)
}

function stayOnline() {
    setTimeout(login, 4000)
}

searchMessage()

function searchMessage() {
    const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    promise.then(saveMessages)
}

function saveMessages(answer) {
    if (answer.status === 200) {
        console.log("Deuuu boooom");
    }

    messages = answer.data;
    renderMessages()

}

function renderMessages() {
    let field = document.querySelector('.message-field');
    field.innerHTML = "";

    for (let i = 0; i < messages.length; i++) {
        field.innerHTML += ` 
        <div class="user-message ${messages[i].type}">
        <span class="time">(${messages[i].time})</span>
        <span class="bold">${messages[i].from}</span>
        para 
        <span class="bold">${messages[i].to}:</span>
        ${messages[i].text} </div>`
    }

    setTimeout(searchMessage, 3000)
}
