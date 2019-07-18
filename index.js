const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
     
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`; 

    const hour = now.getHours();
    const hoursDegrees = ((mins / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`; 
    
}

setInterval(setDate, 1000);


/** here I got the second of the current date. But then I need to rotate the hands
 and then I need to rotate the hands based the time, which should be in degrees*, 
first I have to turn it to something that is based 100, 0 seconds will be zero degress, 
at 100% it'll 360 degress 
So I'm getting the seconds, dividing it by 60, and that's goint to give us the percentage, 
then we times it by 360, to give us th degree so at every 1000 miliseconds, it'll call this function */