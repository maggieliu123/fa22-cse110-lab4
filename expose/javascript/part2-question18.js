function showTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let update = setInterval(showTime, 1000)

