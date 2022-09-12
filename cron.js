var sec = 00;
var min = 00;
var hr = 00;
var interval;

function digits(number){
    if(number<10){
        return('0' + number);
    } else{
        return(number);
    }
}

function start(){
    timer();
    interval = setInterval(timer, 0.1);
    document.querySelector('.start').disabled = true;
}

function stop(){
    clearInterval(interval);
    document.querySelector('.start').disabled = false;
}

function reset(){
    clearInterval(interval);
    sec = 0;
    min = 0;
    document.getElementById('cron').innerHTML = '00:00:00';
    document.querySelector('.start').disabled = false;
}

function timer(){
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
        if(min == 60){
            hr++
            min = 0;
        }
    }
    document.getElementById('cron').innerHTML =digits(hr) + ':' + digits(min) + ':' + digits(sec);
}