
const changeTime = () => {
    let hour = document.getElementById("hour");
	let minute = document.getElementById("minute");
	let seconds = document.getElementById("seconds");
	let ampm = document.getElementById("ampm");

    let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();

    var am = "AM";

    if(h > 12) {
        h = h - 12;
        am = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerHTML = h;
	ampm.innerHTML = am;
	seconds.innerHTML = s;
	minute.innerHTML = m;

    setTimeout(changeTime , 1000);
}

setInterval(changeTime , 1000);
changeTime()