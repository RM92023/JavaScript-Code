const toRecomend = (gender) => {

    const age = document.getElementById('age').value;
    const recomendation = document.getElementById('recomendations');


    switch(gender){
        case 'drama':
            if(age < 13)
                recomendation.textContent = 'WhiteHouse';
            else if(age < 16)
                    recomendation.textContent = 'The Shawshank Redemption';
                else
                    recomendation.textContent = 'Taxi Driver';
        break;

        case 'comedy':
            if(age < 13)
                recomendation.textContent = 'Back to the Future';
            else if(age < 16)
                    recomendation.textContent = 'The Truman Show';
                else
                    recomendation.textContent = 'The Wolf of Wall Street';
        break;

        case 'musical':
            if(age < 13)
                recomendation.textContent = 'La La Land';
            else if(age < 16)
                    recomendation.textContent = 'Les Miserables';
                else
                    recomendation.textContent = 'The Rocky Horror Picture Show';
        break;

        case 'crime':
            if(age < 13)
                recomendation.textContent = 'Without Options';
            else if(age < 16)
                    recomendation.textContent = 'The Secret of Your Eyes';
                else
                    recomendation.textContent = 'The Godfather';
        break;
    }
}
