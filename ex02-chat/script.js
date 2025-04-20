const theForm      = document.querySelector("#form-chat-send")
const formInput    = document.querySelector("#message");
const messagesList = document.querySelector(".messages-list");
console.log(formInput)

theForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    if (formInput.value.trim() === ''){
        alert("Não é possível enviar uma mensagem sem texto");
        return;
    }

    const newMessage = document.createElement("div");
    newMessage.classList.add("message-item");
    newMessage.classList.add("message-user");
    newMessage.innerHTML = `<div class="msg-user"><strong>Você diz:</strong></div>
                            <div class="msg-chat">${formInput.value}</div>`;
    messagesList.appendChild(newMessage);

    formInput.value = "";

    messagesList.scrollTop = messagesList.scrollHeight;
})