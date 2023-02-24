function clock(){
    const timeInfo = new Date();
    const timeArea = document.querySelector(".clock");

    const hrs = String(timeInfo.getHours()).padStart(2,"0");
    const mins = String(timeInfo.getMinutes()).padStart(2,"0");
    const secs = String(timeInfo.getSeconds()).padStart(2,"0");
    timeArea.innerText = `${hrs}:${mins}:${secs}`;
}

clock();
setInterval(clock,1000);

