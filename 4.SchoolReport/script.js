let arrayNotes = [3, 4, 3, 5, 3]

const listNotes = () => {
    const notesContainer = document.getElementById('listNotes');
    for (let note of arrayNotes) {
        let noteElement = document.createElement('li');
        noteElement.classList.add('note'); // Agregar la clase 'note' a cada nota
        noteElement.textContent = note;
        notesContainer.appendChild(noteElement);
    }
}

const calculateAverage = () => {
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        sum += arrayNotes[i];
    }
    let average = (sum / arrayNotes.length)
    document.getElementById('average').textContent = average;
}

const calculateHighhestNotes = () => {
    let highNote = 0;
    let i = 0;
    while (i < arrayNotes.length) {
        if(arrayNotes[i] > highNote){
            highNote = arrayNotes[i];
        }
        i++;
    }
    document.getElementById('highhestNotes').textContent = highNote;
}

const calculatePostponements = () => {
    let postpons = 'No';
    let i = 0;
    do {
        if (arrayNotes[i] < 3){
            postpons = 'Si';
            break;
        }
        i++;
    } while (i < arrayNotes.length);
    document.getElementById('postponements').textContent = postpons;
}