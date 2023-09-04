let menuVisible = false;
//function that hidden or visible the menu
function showHiddenMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

document.getElementById("nav-responsive").onclick = showHiddenMenu;

function selection(){
    //Hidden the menu after the selection an option
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

document.getElementById("selection").onclick = selection;
document.getElementById("selection1").onclick = selection;
document.getElementById("selection2").onclick = selection;
document.getElementById("selection3").onclick = selection;
document.getElementById("selection4").onclick = selection;
document.getElementById("selection5").onclick = selection;

//animation of the skills
function skillsEfects(){
    var skills = document.getElementById("skills");
    var skillDistance = window.innerHeight - skills.getBoundingClientRect().top;
    if(skillDistance >= 300){
        let skillMe = document.getElementsByClassName("progress");
        skillMe[0].classList.add("javascript");
        skillMe[1].classList.add("htmlCss");
        skillMe[2].classList.add("python");
        skillMe[3].classList.add("moodle");
        skillMe[4].classList.add("gitGithub");
        skillMe[5].classList.add("teamWork");
        skillMe[6].classList.add("comunication");
        skillMe[7].classList.add("creativity");
        skillMe[8].classList.add("dedication");
        skillMe[9].classList.add("english");
    }
}


//scroll for the application for activate the functions skills
window.onscroll = function(){
    skillsEfects();
} 