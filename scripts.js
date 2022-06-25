let field = document.querySelector('.message-field');

let messages;
let text;
let username;
let meunome = {
    name: username,
}


function login() {
    username = document.querySelector('.name').value;
    meunome = {
        name: username,
    }
    const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', meunome)
    promise.then(stayOnline);
    promise.then(hideLogin);
    promise.catch(error);
}

function error() {
    alert('escolha outro nome')
}

function hideLogin() {
    document.querySelector('.login').classList.add('hidden');
}


function onlineStatus() {
    const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', meunome)
}


function stayOnline() {
    setInterval(onlineStatus, 4000);
}

searchMessage();


function searchMessage() {
    const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    promise.then(saveMessages)
}

function saveMessages(answer) {
    /*    if (answer.status === 200) {
           console.log("Deuuu boooom");
       } */
    messages = answer.data;
    renderMessages();
}

function renderMessages() {
    field.innerHTML = "";

    for (let i = 0; i < messages.length; i++) {


        if (messages[i].type === 'private_message' && messages[i].to === meunome.name) {

            field.innerHTML += ` 
        <div class="user-message ${messages[i].type}">
        <span class="time">(${messages[i].time})</span>
        <span class="bold">${messages[i].from}</span>
        para 
        <span class="bold">${messages[i].to}:</span>
        ${messages[i].text} </div>`
        }


        if (messages[i].type === 'message') {

            field.innerHTML += ` 
        <div class="user-message ${messages[i].type}">
        <span class="time">(${messages[i].time})</span>
        <span class="bold">${messages[i].from}</span>
        para 
        <span class="bold">${messages[i].to}:</span>
        ${messages[i].text} </div>`
        }


        if (messages[i].type === 'status') {

            field.innerHTML += ` 
        <div class="user-message ${messages[i].type}">
        <span class="time">(${messages[i].time})</span>
        <span class="bold">${messages[i].from}</span>
        
        ${messages[i].text} </div>`
        }
    }
    setTimeout(searchMessage, 3000)
    const lestMessage = field.lastChild;
    lestMessage.scrollIntoView();


}

function sendMessage() {

    text = document.querySelector('.sendmsg').value;
    let msg = {
        from: meunome.name,
        to: "Todos",
        text: text,
        type: "message",
    }
    const promese = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', msg);
    promese.then(saveMessages());
    promese.catch(getName);

    promese.catch(getName);

}


