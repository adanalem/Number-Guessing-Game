

function checknumber() {
    let number = document.getElementById("num").value;
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    if (number == "") {
        Swal.fire("Please enter a number");
        return;
    }

    if (number == randomNumber) {
        Swal.fire({
            title: "🎉 You guessed right!",
            icon: "success"
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "❌ Wrong guess! Try again",
            text: `Guess was ${randomNumber}`
        });
    }
}

function clearinput() {
    document.getElementById("num").value = "";
    document.getElementById("num").focus();
}
