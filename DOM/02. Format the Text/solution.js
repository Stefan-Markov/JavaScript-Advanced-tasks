function solve() {
    let textSentences = document.getElementById('input').textContent.split('.');
    let outputDiv = document.getElementById('output');
    let paragraph = [];
    for (const sentence of textSentences) {

        if (paragraph.length === 3 || textSentences.indexOf(sentence) === textSentences.length - 1) {
            let newParagraph = document.createElement('p');

            newParagraph.textContent = paragraph.join('. ') + '.';
            outputDiv.appendChild(newParagraph);
            paragraph = [];
        }
        paragraph.push(sentence);
    }
}