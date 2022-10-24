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

let username = document.getElementsByClassName("username");


username[0].textContent = prompt("What's your name:");

let agenda = document.getElementsByClassName("scheduler__header-date js-scheduler__header-date text--ellipsis");

const d = new Date();
var num = d.getDate();
var week = 1;
var month = (map.get(d.getMonth())).toString();



for(let i = 0; i < (agenda.length); i++){

    let date;
    if(week == i + 1){
        date = num
    }
    else if(week < i + 1){
        date = num + ((i+1) - week)
    }
    else if(week > i + 1){
        date = num - (week - (i+1));
    }
    
    
    agenda[i].textContent = date + " " + month;
}

let displaying = document.getElementsByClassName("displaying");

displaying[0].style.display = "block";

var minuts = Math.floor((d.getMinutes() + ((d.getHours() - 8) * 60)) / 5)
alert(minuts)

let bar = document.getElementsByClassName("scheduler__events-overlay scheduler__events-overlay--has-events js-scheduler__events-overlay");
let a = week - 1;
let theday = bar[a]
theday.innerHTML += "<div class='scheduler__time-marker js-scheduler__time-marker' style='grid-area: " + minuts + " / 1 / auto / 3; position: absolute; width: 100%;'><div class='scheduler__time-marker-current-day scheduler__time-marker-current-day--outlined'></div></div>"

let actualbar = (document.getElementsByClassName("scheduler__time-marker js-scheduler__time-marker"))[0];
var intervalID = window.setInterval(myCallback, 300_000);

function myCallback() {
  actualbar.style.gridArea = minuts + " / 1 / auto / 3";
}



