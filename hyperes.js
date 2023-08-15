score = localStorage.getItem("Quest")
document.getElementById("score").innerHTML = localStorage.getItem("Scorer") + " Points"
document.getElementById("Quest").innerHTML = "Correct: " + localStorage.getItem("Quest") + "/15"
document.getElementById("Time").innerHTML = "Time Taken: " + Math.round(localStorage.getItem("Time")) + " sec"

if (score >= 10) {
    document.getElementById("Text").innerHTML = "Congrats, You have vast knowledge about your country 🤩"
}

else if (score >= 6) {
    document.getElementById("Text").innerHTML = "Well done, You have great knowledge about your country 🥳"
}

else if (score >= 0) {
    document.getElementById("Text").innerHTML = "No worries, you can improve your knowledge 🙂"

}

