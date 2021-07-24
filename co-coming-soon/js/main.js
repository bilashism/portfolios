var x = setInterval(function() {
    var deadline = new Date("Jan 5, 2021 15:37:25").getTime();
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementsByClassName("days")[0].innerText = days;
    document.getElementsByClassName("hours")[0].innerText = hours;
    document.getElementsByClassName("minutes")[0].innerText = minutes;
    document.getElementsByClassName("seconds")[0].innerText = seconds;

    if (t < 0) {
        clearInterval(x);
        document.getElementsByClassName("demo")[0].innerText = "EXPIRED";
    }
}, 1000);
