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

Date.prototype.getWeek = function() {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                          - 3 + (week1.getDay() + 6) % 7) / 7);
  }

//Get the element that affich the name on the page
let pageUsername = document.getElementsByClassName("username");

//Change ENT username with the username request
var userResponce = prompt("What's your entire name (firstname name):").split(" ");

while(userResponce.length != 2 || userResponce[1].length == 0){
    userResponce = prompt("Wrong! What's your ENTIRE name (firstname name):").split(" ");
}

pageUsername[0].textContent = userResponce[0] + " " +userResponce[1].toUpperCase();

//Get the list of day
let agenda = document.getElementsByClassName("scheduler__header-date js-scheduler__header-date text--ellipsis");

//Recup date, day in week and month
const d = new Date();
var num = d.getDate();
var week = d.getDay();
var month = (map.get(d.getMonth())).toString();
var weeknum = d.getWeek();

//Set the correct week of the year
let semaine = document.getElementsByClassName("scheduler__week js-scheduler__week");
semaine[0].textContent = "S. " + weeknum

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
        
        let yellow = document.getElementsByClassName("scheduler__header scheduler__header--has-events  js-scheduler__header ");
        yellow[i].classList = "scheduler__header scheduler__header--has-events scheduler__header--today bg--warn-lighter  js-scheduler__header ";
        let yellow2 = document.getElementsByClassName("scheduler__slot  scheduler__slot--break js-scheduler__day-slot");
        yellow2[i].classList = "scheduler__slot scheduler__slot--today js-scheduler__slot--today scheduler__slot--break js-scheduler__day-slot";
        
        let yellow3 = yellow[i].parentElement.childNodes;

        for(x = 0;x < (yellow3.length); x++){
            
            if(yellow3[x].classList == "scheduler__slot   js-scheduler__day-slot"){
                yellow3[x].classList = "scheduler__slot scheduler__slot--today js-scheduler__slot--today  js-scheduler__day-slot";
            }
            
        }
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



if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    const len = agenda.length;
    var supp = 0;
    for(var b = 0; b < (len); b++){

        if(b != (week - 1)){
            agenda[b - supp].parentElement.parentElement.parentElement.parentElement.remove();
        
            supp += 1;
        }
    
    }
  }else{
    document.write("not mobile");
  }