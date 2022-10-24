//Test
//Map for month
const map = new Map([
    [0, 'janvier'],
    [1, 'fevrier'],
    [2, 'mars'],
    [3, 'avril'],
    [4, 'mai'],
    [5, 'juin'],
    [6, 'juillet'],
    [7, 'août'],
    [8, 'septembre'],
    [9, 'octobre'],
    [10, 'novembre'],
    [11, 'decembre'],
]);

//Get the element of name in the page
let pageUsername = document.getElementsByClassName("username");

//Change ENT username with the username request
var userResponce = prompt("What's your name:").split(" ");

pageUsername[0].textContent = userResponce[0] + " " +userResponce[1].toUpperCase();

//Get the list of element for day of the week
let agenda = document.getElementsByClassName("scheduler__header-date js-scheduler__header-date text--ellipsis");

//Recup date, day in week and month
const d = new Date();
var num = d.getDate();
var week = d.getDay();
var month = (map.get(d.getMonth())).toString();

let firstdate;
let lastdate;
//Set the correct date for all day of the week
for(let i = 0; i < (agenda.length); i++){
    var bold = false;
    let date;
    if(week == i + 1){
        date = num
        bold = true
    }
    else if(week < i + 1){
        date = num + ((i+1) - week)
    }
    else if(week > i + 1){
        date = num - (week - (i+1));
    }
    
    //Change to bold the active date
    agenda[i].textContent = date + " " + month;
    if(bold){
        agenda[i].style.fontWeight = 700;
        let boldation = document.getElementsByClassName("scheduler__header-day js-scheduler__header-day text--ellipsis");
        boldation[i].style.fontWeight = 700;
    }

    if(i == 0){
        firstdate = date;
    }else if(i == 4){
        lastdate = date;
    }
}
//Change the period
let period = document.getElementsByClassName("hide-lt--sm js-scheduler__datepicker-title");

period[0].textContent = "Du " + firstdate + " au " + lastdate + " "+ month + " " + d.getFullYear();


//Activate the display
let displaying = document.getElementsByClassName("displaying");
displaying[0].style.display = "block";

//Calculate the actual number for the placement of the bar
var minuts = Math.floor((d.getMinutes() + ((d.getHours() - 8) * 60)) / 5)

//Get all possible placement for the bar
let bar = document.getElementsByClassName("scheduler__events-overlay scheduler__events-overlay--has-events js-scheduler__events-overlay");

//Set the bar on the correct placement in accord with the day
var a = week - 1;
let theday = bar[a]
theday.innerHTML += "<div class='scheduler__time-marker js-scheduler__time-marker' style='grid-area: " + minuts + " / 1 / auto / 3; position: absolute; width: 100%;'><div class='scheduler__time-marker-current-day scheduler__time-marker-current-day--outlined'></div></div>"

//Get the bar created
let actualbar = (document.getElementsByClassName("scheduler__time-marker js-scheduler__time-marker"))[0];




//Actualize the bar all 5 minuts
var intervalID = window.setInterval(myCallback, 300_000);

function myCallback() {
  actualbar.style.gridArea = minuts + " / 1 / auto / 3";
}


var isMobile = iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {

    pageUsername[0].textContent = prompt("test :");
}else{
    
    pageUsername[0].textContent = "false";
}