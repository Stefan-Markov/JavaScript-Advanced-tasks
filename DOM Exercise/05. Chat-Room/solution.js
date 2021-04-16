function solve() {

    document.getElementById('send').addEventListener('click', send);

    function send() {
        let messages = document.getElementById('chat_input');
        if (messages.value.length > 0) {
            let div = document.createElement('div');
            div.setAttribute('class', 'message my-message');
            div.textContent = messages.value;
            document.getElementById('chat_messages').appendChild(div);
            messages.value = '';
        }
    }
}


