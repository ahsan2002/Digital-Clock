function displaytime() {
    var dateTime=new Date();
    var hrs=dateTime.getHours();
    var mi=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    var session=document.getElementById("tstamp");


    if (hrs>=12) {
        session.innerHTML= 'PM';
    }
    else{
        session.innerHTML= 'AM';
    }
    
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("minutes").innerHTML=mi;
    document.getElementById("seconds").innerHTML=sec;

}

setInterval(displaytime,10);