var signResult=[
document.getElementById("creature12Result"),
document.getElementById("creature3Result"),
document.getElementById("creature5Result"),
document.getElementById("creature7Result"),
document.getElementById("creature11Result"), 
document.getElementById("creature2Result"),
document.getElementById("creature6Result"),
document.getElementById("creature9Result"),
document.getElementById("creature10Result"),
document.getElementById("creature1Result"),
document.getElementById("creature4Result"),
document.getElementById("creature8Result")]

var signAudio = [
document.getElementById("creature12Audio"),
document.getElementById("creature3Audio"),
document.getElementById("creature5Audio"),
document.getElementById("creature7Audio"),
document.getElementById("creature11Audio"), 
document.getElementById("creature2Audio"),
document.getElementById("creature6Audio"),
document.getElementById("creature9Audio"),
document.getElementById("creature10Audio"),
document.getElementById("creature1Audio"),
document.getElementById("creature4Audio"),
document.getElementById("creature8Audio")]

var customizeResult = [
document.getElementById("creature12Story"),
document.getElementById("creature3Story"),
document.getElementById("creature5Story"),
document.getElementById("creature7Story"),
document.getElementById("creature11Story"),
document.getElementById("creature2Story"),
document.getElementById("creature6Story"),
document.getElementById("creature9Story"),
document.getElementById("creature10Story"),
document.getElementById("creature1Story"),
document.getElementById("creature4Story"),
document.getElementById("creature8Story")]


var formElement= document.getElementById("form");
var firstNameInput= document.getElementById("firstName");
var lastNameInput= document.getElementById("lastName");
var dateInput= document.getElementById("date");
var guide = document.getElementById("guide");
var back = document.getElementById("backToForm");
var entry = document.getElementById("backstory");
var i = 0;
var gridNumber=0;
var width = window.innerWidth;

function resultVisibility(firstName, lastName){
    signAudio[i].play();
    signResult[i].classList = "showResultPage";
    descriptionCard[gridNumber].classList = "showDescription";  

    for (deselect= 0; deselect<signResult.length; deselect++) {
        if (signResult[deselect].classList == "showResultPage" && signResult[deselect] != signResult[i]){
            signResult[deselect].classList = "resultPage";
            descriptionCard[deselect].classList = "hide";
        }
    }

    if(clicked != gridNumber){
      descriptionCard[clicked].classList = "hide";  
    }

    guide.innerHTML = 
    "Click on the icons below to find out about different mythical creatures and their origins! " + 
    "Fill in the fields to find out what creature corresponds with a different date!";
    back.classList.add("previous");

    // INCLUDE FIRST AND LAST NAME IN TEXT
    // AIR
    if(i == 1 || i == 5 || i == 9){
        customizeResult[i].innerHTML = firstName + " of " + lastName + "'s " + "journey was closely aligned with the element of air. " +
        "The journey of the Air element is inspired by ideas and knowledge. Inspiration comes from all around and physical boundaries are easily surpassed. Any haze or murkiness of uncertainty is lifted by a clearing wind. Standing on a mountaintop or at ocean’s edge makes apparent the clarity of new perspectives and possibilities.";
    }
    // WATER
    else if(i == 2 || i == 6 || i == 10){
        customizeResult[i].innerHTML = firstName + " of " + lastName + "'s " + "journey was one that was closely aligned with the element of water. " +
         "The course of a Water journey can go in any direction at any time, adjusting to changes with ease. This adventure is open to new encounters and new ideas along the way, adapting and encouraging the best outcome for all involved.";
    }
    // FIRE
    else if(i == 3 || i == 7 || i == 11){
        customizeResult[i].innerHTML = firstName + " of " + lastName + "'s " + "journey was one that was closely aligned with the element of fire. " +
         "The Fire expedition requires physical endurance and determination. The traveler will stop at nothing to see it to its end.  There is no condition too strong, nor opponent too fierce to sway the mission.  At journey’s end, the traveler is not depleted but made stronger.";
    }
    // EARTH
    else if( i == 0 || i == 4 || i == 8){
        customizeResult[i].innerHTML = firstName + " of " + lastName + "'s " + "journey was closely aligned with the element of terra. " +
        "The Earth-centric voyage leads one through lands green and full of forests and mountains, sometimes finding yourself in dry deserts of scrub brush, but always finding what you need to survive. The Earth provides for those who are willing to learn new skills in search of comfort and protection.";
    }
}

function formHandler(){

    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    var dateValueRaw = dateInput.value;

    var date = new Date(dateValueRaw);

    var inputMonth = date.getUTCMonth() + 1;
    var inputDay = date.getUTCDate();


    if ((inputMonth == 12 && inputDay > 21 && inputDay <= 31) || (inputMonth == 1 && inputDay <= 21)) {
        gridNumber = 11;
        resultVisibility(firstName, lastName);
    }

    else if ((inputMonth == 1 && inputDay > 21 && inputDay <= 31) || (inputMonth == 2 && inputDay <= 19)){
        i = 1;
        gridNumber = 2;
        resultVisibility(firstName, lastName);
    }

    else if ((inputMonth == 2 && inputDay > 19 && inputDay <=29) || (inputMonth == 3 && inputDay <= 20)){
        i = 2;
        gridNumber = 4;
        resultVisibility(firstName, lastName);
    }

    else if ((inputMonth == 3 && inputDay > 21 && inputDay <= 31) || (inputMonth == 4 && inputDay <= 20)){
        i = 3;
        gridNumber = 6;
        resultVisibility(firstName, lastName);
    }

    else if ((inputMonth == 4 && inputDay > 20 && inputDay <= 30) || (inputMonth == 5 && inputDay <= 21)){
        i = 4;
        gridNumber = 10;
        resultVisibility(firstName, lastName);
    }

    else if ((inputMonth == 5 && inputDay > 21 && inputDay <= 31) || (inputMonth == 6 && inputDay <= 21)){
        i = 5;
        gridNumber = 1;
        resultVisibility(firstName, lastName);
    }

    else if ((inputMonth == 6 && inputDay > 21 && inputDay <= 30) || (inputMonth == 7 && inputDay <= 22)){
        i = 6;
        gridNumber = 5;
        resultVisibility(firstName, lastName);
    }

    else if ((inputMonth == 7 && inputDay > 22 && inputDay <= 31) || (inputMonth == 8 && inputDay <= 22)){
        i = 7;
        gridNumber = 8;
        resultVisibility(firstName, lastName);
    }

    else if ((inputMonth == 8 && inputDay > 22 && inputDay <= 31) || (inputMonth == 9 && inputDay <= 23)){
        i = 8;
        gridNumber = 9;
        resultVisibility(firstName, lastName);
    }

    else if ((inputMonth == 9 && inputDay > 23 && inputDay <= 30) || (inputMonth == 10 && inputDay <= 23)){
        i = 9;
        gridNumber = 0;
        resultVisibility(firstName, lastName);
    }

    else if ((inputMonth == 10 && inputDay > 23 && inputDay <= 31) || (inputMonth == 11 && inputDay <= 22)){
        i = 10;
        gridNumber = 3;
        resultVisibility(firstName, lastName);
    }

    else if ((inputMonth == 11 && inputDay > 22 && inputDay <= 30) || (inputMonth == 12 && inputDay <= 21)){
        i = 11;
        gridNumber = 7;
        resultVisibility(firstName, lastName);
    } 
}

back.addEventListener('click', (function(){
    signResult[i].classList.remove("showResultPage");
    signResult[i].classList.add("resultPage");
    guide.innerHTML = 
    "Fill in the spaces provided with your first name, last name, and your birth date to find out what type of mythical creature you'll encounter on your next adventure!";
    back.classList = "hide";
    descriptionCard[gridNumber].classList = "hide";
    }),false);

formElement.addEventListener('change', formHandler, false);
