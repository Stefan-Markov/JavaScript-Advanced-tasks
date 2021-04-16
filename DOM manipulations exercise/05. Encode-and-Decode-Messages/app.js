function encodeAndDecodeMessages() {

    let buttonSend = document.getElementsByTagName('button')[0];
    let buttonDecode = document.getElementsByTagName('button')[1];
    let textNormal = document.getElementsByTagName('textarea')[0];
    let textDecode = document.getElementsByTagName('textarea')[1];

    buttonSend.addEventListener('click', encode);

    buttonDecode.addEventListener('click', decode);

    function encode(e) {
        let output = '';
        if (textNormal.value.length > 0) {
            for (let i = 0; i < textNormal.value.length; i++) {
                let char = String.fromCharCode(textNormal.value.charCodeAt(i) + 1);
                output += char;
            }
        }
        textNormal.value = '';
        textDecode.value = output;
    }

    function decode(e) {
        let output = '';
        if (textDecode.value.length > 0) {
            for (let i = 0; i < textDecode.value.length; i++) {
                let char = String.fromCharCode(textDecode.value.charCodeAt(i) - 1);
                output += char;
            }
        }
        textDecode.value = output;
    }
}