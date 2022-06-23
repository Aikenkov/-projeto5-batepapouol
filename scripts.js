let messages;



const msg1 = {
    from: "João",
    to: "Todos",
    text: "entra na sala...",
    type: "status",
    time: "08:01:17"
};

const msg2 = {
    from: "João",
    to: "Todos",
    text: "Bom dia",
    type: "message",
    time: "08:02:50"
};

/* function colocarmsg() {
    let field = document.querySelector('.message-field');
    field.innerHTML = ` <div class="user-message ${msg2.type}">
    <span class="time">(${msg2.time})</span>
    <span class="bold">${msg2.from}</span>
       para 
    <span class="bold">${msg2.to}: </span>
    ${msg2.text} </div>`

}

colocarmsg() */

let meunome = {
    name: "Fiorinha"
}

login()
function login() {
    const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', meunome)
    promise.then(stayOnline)
}




function stayOnline() {
    setInterval(login, 5000)
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
    console.log(messages)
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
}
