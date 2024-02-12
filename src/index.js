
const PIN = Math.floor(Math.random() * 10000) 
let attempts = 0
function guessPin() {
    let pinGuessed = Number(document.getElementById('pinArea').value)
    attempts++
    if(pinGuessed == PIN){
        document.getElementById('result').innerHTML = "Congratulations! You got the PIN right with a total of " + attempts + " attempts."
    }
    else if (pinGuessed < PIN){
        // The difference between the pinGuessed and the correct PIN must be at least 1000 to print "much greater" or "much less".
        if (PIN - pinGuessed > 1000){ 
            document.getElementById('result').innerHTML = "The next value entered must be much greater than " + pinGuessed + "."
        }
        else{
            document.getElementById('result').innerHTML = "The next value entered must be greater than " + pinGuessed + "."
        }
    }
    else {
        if (pinGuessed - PIN > 1000){
            document.getElementById('result').innerHTML = "The next value entered must be much less than " + pinGuessed + "."
        }
        else{
            document.getElementById('result').innerHTML = "The next value entered must be less than " + pinGuessed + "."
        }
    }
}