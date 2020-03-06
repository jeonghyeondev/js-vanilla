const body = document.querySelector("body");
const timeContainer = document.querySelector(".js-area"),
    timeCalendar = timeContainer.querySelector(".js-calendar"),
    timeText = timeContainer.querySelector(".js-time");

const IMG_NUMBER = 3;

function changeImg(imgNumber){
	const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
	image.classList.add("bgImage");
	body.prepend(image);

}

function genRandom(){
	const number = Math.floor(Math.random() * IMG_NUMBER);
	return number;
}


function getTime(){
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const date = new Date();
	const month = date.getMonth();
	const day = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	
	timeCalendar.innerText = `${monthNames[month]} / ${day}`
	timeText.innerText = 
		`${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;

}


function init(){
	const randomNum = genRandom();
	changeImg(randomNum);
	getTime();
	setInterval(getTime, 1000);
}

init();