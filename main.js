var counter = document.getElementsByTagName('h1')[0];

var space = 1;
var holdSpace = 1;
var id;

var min1 = 0, min2 = 0, sec1 = 0, sec2 = 0, mili1 = 0, mili2 = 0;
var elapsed = '00:00';

var time;
var start;

var eventID = 3;
var scrambleLength = 20;

var copy_to_clipboard;
var DataTime;

var Time22 = [];
var Time33 = [];
var Time44 = [];
var Time55 = [];
var Time66 = [];
var Time77 = [];
var Time88 = [];
var Time99 = [];
var Time10 = [];
var Time11 = [];
var Time12 = [];
var Time13 = [];

var Time22elapsed = [];
var Time33elapsed = [];
var Time44elapsed = [];
var Time55elapsed = [];
var Time66elapsed = [];
var Time77elapsed = [];
var Time88elapsed = [];
var Time99elapsed = [];
var Time10elapsed = [];
var Time11elapsed = [];
var Time12elapsed = [];
var Time13elapsed = [];

var Timeelapsed22 = [];
var Timeelapsed33 = [];
var Timeelapsed44 = [];
var Timeelapsed55 = [];
var Timeelapsed66 = [];
var Timeelapsed77 = [];
var Timeelapsed88 = [];
var Timeelapsed99 = [];
var Timeelapsed10 = [];
var Timeelapsed11 = [];
var Timeelapsed12 = [];
var Timeelapsed13 = [];

var listOfAo522 = [];
var listOfAo533 = [];
var listOfAo544 = [];
var listOfAo555 = [];
var listOfAo566 = [];
var listOfAo577 = [];
var listOfAo588 = [];
var listOfAo599 = [];
var listOfAo510 = [];
var listOfAo511 = [];
var listOfAo512 = [];
var listOfAo513 = [];


function Timer() {
	start = new Date().getTime();

	id = setInterval(function() {
		time = new Date().getTime() - start;
		elapsed = Math.floor(time);
		MakeTime();
		document.getElementById("fake_Times").innerHTML = "<p>" + counter.innerHTML + "</p>";
	}, 10);
}

function MakeTime() {	// It is messy as hell, but it is my first time using delta timing
	elapsed = Math.trunc(elapsed / 10);
	elapsed = elapsed / 1000000;
	elapsed = elapsed.toString();
	elapsed += "01";
		
		if (elapsed.charAt(4) === '6' && elapsed.charAt(5) === '0') {
			elapsed = Number(elapsed);
			elapsed += 0.004000;
			time += 40000;
			start -= 40000;
			elapsed = elapsed.toString();
		}

	min1 = elapsed.charAt(2);
	min2 = elapsed.charAt(3);
				
	sec1 = elapsed.charAt(4);
	sec2 = elapsed.charAt(5);
				
	mili1 = elapsed.charAt(6);
	mili2 = elapsed.charAt(7);

	document.getElementById("counter").innerHTML = min1 + min2 + ":" + sec1 + sec2 + "." + mili1 + mili2;
}

function Input() {

	document.addEventListener("keydown", function(e) {
		if (e.keyCode === 32 && space === 1) {
			start = 0;
			time = 0;
			elapsed = 0;

			counter.innerHTML = "00:00.00";

			counter.style.color = "#f00"; 

			holdSpace++;

			if (holdSpace >= 5) {
				counter.style.color = "#0f0";
				space++;
				holdSpace = 1;
			}
		}
	});

	document.addEventListener("keyup", function(e) {
		if (e.keyCode === 32) {
			counter.style.color = "#000";
			holdSpace = 1;
			if (space === 2) {
				Timer();
				space++;
			}
		}
	});

	document.addEventListener("keypress", function() {

		if (space === 3) {
			clearInterval(id);
			SaveDataToLocalStorage();
			generateScramble();
			TimeCount();
			updateScroll();
			currentTime();
			currentAverage();
			bestAverage();
			bestTime();
			document.getElementById("fake_Times").innerHTML = "";
			space = 1;
		}
	});
}

function generateScramble() { // Helped by Andres Morales and Jonas W.
	if (eventID === 2) {

		document.getElementById("nav-main").style.height = "70px";
		document.getElementById("Scramble").style.height = "30px";
		document.getElementById("Scramble").style.paddingTop = "25px";
		document.getElementById("Scramble").style.lineHeight = "20px";

		scrambleLength = 9;
		
		var array = new Array(" U", " R", " F");
		var switches = ["", "\'", "2"]; 
		var array2 = new Array();
		var last = '';
		var random = 0;
			
			for (var i = 0; i < scrambleLength; i++) {
	    		do {
	      			 random = Math.floor(Math.random() * array.length);
	   			} while (last == array[random])
	    			last = array[random];
	    			array2.push(array[random] + switches[parseInt(Math.random() * switches.length)]); 
				}

		var scramble = "Scramble: " + array2.join("");
		document.getElementById("Scramble").innerHTML = scramble; 
		copy_to_clipboard = array2.join("");
	}

	if (eventID === 3 || eventID === 12 || eventID === 13) {

		document.getElementById("nav-main").style.height = "70px";
		document.getElementById("Scramble").style.height = "30px";
		document.getElementById("Scramble").style.paddingTop = "25px";
		document.getElementById("Scramble").style.lineHeight = "20px";
		
		var directions = [
			[" D", " U"],
		    [" L", " R"],
		    [" F", " B"]
		 ];

		var times = ["", "'", "2"];

		var random = (array, exclude) => {
			do {
		    	var n = Math.floor( Math.random() * array.length );
			} while(array[n] === exclude)
		   		return array[n];
			}

		var scramble = new Array(20);
		var direction;

		for(var i = 0; i < scramble.length; i++){
			direction = random(directions, direction);
		  	scramble[i] = random(direction) + random(times);
		}

		document.getElementById("Scramble").innerHTML = "Scramble: " + scramble.join("");
		copy_to_clipboard = scramble.join("");
	}

	if (eventID === 4) {

		document.getElementById("nav-main").style.height = "85px";
		document.getElementById("Scramble").style.height = "45px";
		document.getElementById("Scramble").style.paddingTop = "25px";
		document.getElementById("Scramble").style.lineHeight = "20px";

		scrambleLength = 40;

		var array = new Array(" U", " D", " R", " L", " F", " B");
		var wide = ["w", "", ""];
		var switches = ["", "\'", "2"]; 
		var array2 = new Array();
		var last = '';
		var random = 0;
			
			for (var i = 0; i < scrambleLength; i++) {
	    		do {
	      			 random = Math.floor(Math.random() * array.length);
	   			} while (last == array[random])
	    			last = array[random];
	    			array2.push(array[random] + wide[parseInt(Math.random() * wide.length)] +  switches[parseInt(Math.random() * switches.length)]);
				}

		var scramble = "Scramble: " + array2.join("");
		document.getElementById("Scramble").innerHTML = scramble; 
		copy_to_clipboard = array2.join("");
	}

	if (eventID === 5) {
		
		document.getElementById("nav-main").style.height = "105px";
		document.getElementById("Scramble").style.height = "65px";
		document.getElementById("Scramble").style.paddingTop = "25px";
		document.getElementById("Scramble").style.lineHeight = "20px";

		scrambleLength = 60;

		var array = new Array(" U", " D", " R", " L", " F", " B");
		var wide = ["w", "", ""];
		var switches = ["", "\'", "2"]; 
		var array2 = new Array();
		var last = '';
		var random = 0;
			
			for (var i = 0; i < scrambleLength; i++) {
	    		do {
	      			 random = Math.floor(Math.random() * array.length);
	   			} while (last == array[random])
	    			last = array[random];
	    			array2.push(array[random] + wide[parseInt(Math.random() * wide.length)] +  switches[parseInt(Math.random() * switches.length)]);
				}

		var scramble = "Scramble: " + array2.join("");
		document.getElementById("Scramble").innerHTML = scramble; 
		copy_to_clipboard = array2.join("");
	}

	if (eventID === 6) {
		
		document.getElementById("nav-main").style.height = "145px";
		document.getElementById("Scramble").style.height = "105px";
		document.getElementById("Scramble").style.paddingTop = "25px";
		document.getElementById("Scramble").style.lineHeight = "20px";

		scrambleLength = 80;

		var array = new Array("U", "D", "R", "L", "F", "B");
		var before = ["2", "3", ""];
		var wide = ["w", "w", ""];
		var switches = [" ", "\' ", "2 "]; 
		var array2 = new Array();
		var last = '';
		var random = 0;
			
			for (var i = 0; i < scrambleLength; i++) {
	    		do {
	      			 random = Math.floor(Math.random() * array.length);
	   			} while (last == array[random])
	    			last = array[random];
	    			var widerand = parseInt(Math.random() * wide.length);
	    			array2.push(before[widerand] + array[random] + wide[widerand] +  switches[parseInt(Math.random() * switches.length)]);
				}

		var scramble = "Scramble: " + array2.join("");
		document.getElementById("Scramble").innerHTML = scramble; 

		copy_to_clipboard = array2.join("");
	}

	if (eventID === 7) {
		
		document.getElementById("nav-main").style.height = "165px";
		document.getElementById("Scramble").style.height = "125px";
		document.getElementById("Scramble").style.paddingTop = "25px";
		document.getElementById("Scramble").style.lineHeight = "20px";

		scrambleLength = 90;

		var array = new Array("U", "D", "R", "L", "F", "B");
		var before = ["2", "3", ""];
		var wide = ["w", "w", ""];
		var switches = [" ", "\' ", "2 "]; 
		var array2 = new Array();
		var last = '';
		var random = 0;
			
			for (var i = 0; i < scrambleLength; i++) {
	    		do {
	      			 random = Math.floor(Math.random() * array.length);
	   			} while (last == array[random])
	    			last = array[random];
	    			var widerand = parseInt(Math.random() * wide.length);
	    			array2.push(before[widerand] + array[random] + wide[widerand] +  switches[parseInt(Math.random() * switches.length)]);
				}

		var scramble = "Scramble: " + array2.join("");
		document.getElementById("Scramble").innerHTML = scramble; 
		copy_to_clipboard = array2.join("");
	}

	if (eventID === 8) { // Megaminx
			
		document.getElementById("nav-main").style.height = "190px";
		document.getElementById("Scramble").style.width = "850px";
		document.getElementById("Scramble").style.height = "150px";
		document.getElementById("Scramble").style.paddingTop = "25px";
		document.getElementById("Scramble").style.lineHeight = "20px";
			
		var array1 = new Array(" D", " R");
		var array2 = new Array(" R", " D");
		var array3 = new Array("<span style='letter-spacing: 2px';>--</span>", "<span style='letter-spacing: 1px';>++</span>");
		var array4 = new Array(" U", " U'");
		var scramble = [];
		var scrambleCopy = [];
			
		for (var j = 0; j < 7; j++) {
			var random = Math.floor(Math.random() * 2);
			var line = [];
			for (var i = 0; i < 10; i++) {
				if (random === 0) {
					var random1 = Math.floor(Math.random() * 2); 
					line += array1[0] + array3[random1] + array1[1] + array3[random1];
				} else {
					var random1 = Math.floor(Math.random() * 2);
					line += array2[0] + array3[random1] + array2[1] + array3[random1];
				}
			}
			var random2 = Math.floor(Math.random() * 2);
			line += array4[random2];
			scramble.push(line);
			scramble.push("<br />");
			scrambleCopy.push(line);
		}
		document.getElementById("Scramble").innerHTML = "Scramble: " + scramble.join("");
		copy_to_clipboard = scrambleCopy.join("");
	}

	if (eventID === 9) { // Pyraminx
		
		document.getElementById("nav-main").style.height = "70px";
		document.getElementById("Scramble").style.height = "30px";
		document.getElementById("Scramble").style.paddingTop = "25px";
		document.getElementById("Scramble").style.lineHeight = "20px";

		scrambleLength = 9;
		
		var array = new Array(" U", " R", " B");
		var switches = ["", "\'"]; 
		var array2 = new Array();
		var last = '';
		var random = 0;	
			
			for (var i = 0; i < scrambleLength; i++) {
	    		do {
	      			 random = Math.floor(Math.random() * array.length);
	   			} while (last == array[random])
	    			last = array[random];
	    			array2.push(array[random] + switches[parseInt(Math.random() * switches.length)]); 
				}

		var scrambleLength2 = Math.floor(Math.random() * 3);
		var array3 = new Array(" l", " r", " u", " b");
		var switches2 = ["", "\'"]; 
		var array4 = new Array();
		var last2 = '';
		var random2 = 0;	
			
			for (var i = 0; i < scrambleLength2; i++) {
	    		do {
	      			 random2 = Math.floor(Math.random() * array3.length);
	   			 } while (last2 == array3[random2])
	    			last2 = array3[random2];
	    			array4.push(array3[random2] + switches2[parseInt(Math.random() * switches2.length)]); 
				}
			
		var scramble = "Scramble: " + array2.join("") + array4.join("");
		document.getElementById("Scramble").innerHTML = scramble; 
		copy_to_clipboard = array2.join("") + array4.join("");
	}

	if (eventID === 10) { // Skewb

		document.getElementById("nav-main").style.height = "70px";
		document.getElementById("Scramble").style.height = "30px";
		document.getElementById("Scramble").style.paddingTop = "25px";
		document.getElementById("Scramble").style.lineHeight = "20px";
		
		scrambleLength = 9;

		var array = new Array(" R", " L", " B")
		var switches = ["", "\'"]; 
		var array2 = new Array();
		var last = '';
		var random = 0;
			
			for (var i = 0; i < scrambleLength; i++) {
	    		do {
	      			 random = Math.floor(Math.random() * array.length);
	   			} while (last == array[random])
	    			last = array[random];
	    			array2.push(array[random] + switches[parseInt(Math.random() * switches.length)]); 
				}

		var scramble = "Scramble: " + array2.join("");
		document.getElementById("Scramble").innerHTML = scramble; 
		copy_to_clipboard = array2.join("");
	}

	if (eventID === 11) { // Square-1
		document.getElementById("Scramble").innerHTML = "Unfinished";
	}
}


function copy() { // Helped by Prasanth
	var inp = document.createElement('input');
	document.body.appendChild(inp);
	inp.value = copy_to_clipboard;
	inp.select();
	document.execCommand('copy', false);
	inp.remove();
}

function toggle(myNum) {

	switch (myNum) {
		case 2:
		eventID = 2;
		document.getElementById("accordionButton").innerHTML = "2 x 2";
		break;

		case 3:
		eventID = 3;
		document.getElementById("accordionButton").innerHTML = "3 x 3";
		break;

		case 4:
		eventID = 4;
		document.getElementById("accordionButton").innerHTML = "4 x 4";
		break;

		case 5:
		eventID = 5;
		document.getElementById("accordionButton").innerHTML = "5 x 5";
		break;

		case 6:
		eventID = 6;
		document.getElementById("accordionButton").innerHTML = "6 x 6";
		break;

		case 7:
		eventID = 7;
		document.getElementById("accordionButton").innerHTML = "7 x 7";
		break;

		case 8:
		eventID = 8;
		document.getElementById("accordionButton").innerHTML = "Megaminx";
		break;

		case 9:
		eventID = 9;
		document.getElementById("accordionButton").innerHTML = "Pyraminx";
		break;

		case 10:
		eventID = 10;
		document.getElementById("accordionButton").innerHTML = "Skewb";
		break;

		case 11:
		eventID = 11;
		document.getElementById("accordionButton").innerHTML = "Square-1";
		break;

		case 12:
		eventID = 12;
		document.getElementById("accordionButton").innerHTML = "3 x 3 OH";
		break;

		case 13:
		eventID = 13;
		document.getElementById("accordionButton").innerHTML = "3 x 3 BLD";
		break;
	}
	
	document.getElementById("best_time").innerHTML = "Best Time: ";
	document.getElementById("best_ao5").innerHTML = "Best Ao5: ";
	document.getElementById("current_time").innerHTML = "Current Time: ";
	document.getElementById("current_ao5").innerHTML = "Current Ao5: ";
	generateScramble()
	document.getElementById("counter").innerHTML = "00:00.00";
	SaveDataToLocalStorage();
	TimeCount();
	currentTime();
	currentAverage();
	bestAverage();
	bestTime();
}

function check() {
	
	if (localStorage.Session2 == null) {
		Time22.push(JSON.parse(localStorage.getItem('Session2')));
    	Time22.splice(0, 1);
    	localStorage.setItem('Session2', JSON.stringify(Time22));

    	Time22elapsed.push(JSON.parse(localStorage.getItem('Session2elapsed')));
    	Time22elapsed.splice(0, 1);
    	localStorage.setItem('Session2elapsed', JSON.stringify(Time22elapsed));
	}

	if (localStorage.Session3 == null) {
		Time33.push(JSON.parse(localStorage.getItem('Session3')));
    	Time33.splice(0, 1);
    	localStorage.setItem('Session3', JSON.stringify(Time33));

    	Time33elapsed.push(JSON.parse(localStorage.getItem('Session3elapsed')));
    	Time33elapsed.splice(0, 1);
    	localStorage.setItem('Session3elapsed', JSON.stringify(Time33elapsed));
	}

	if (localStorage.Session4 == null) {
		Time44.push(JSON.parse(localStorage.getItem('Session4')));
    	Time44.splice(0, 1);
    	localStorage.setItem('Session4', JSON.stringify(Time44));

    	Time44elapsed.push(JSON.parse(localStorage.getItem('Session4elapsed')));
    	Time44elapsed.splice(0, 1);
    	localStorage.setItem('Session4elapsed', JSON.stringify(Time44elapsed));
	}

	if (localStorage.Session5 == null) {
		Time55.push(JSON.parse(localStorage.getItem('Session5')));
    	Time55.splice(0, 1);
    	localStorage.setItem('Session5', JSON.stringify(Time55));

    	Time55elapsed.push(JSON.parse(localStorage.getItem('Session5elapsed')));
    	Time55elapsed.splice(0, 1);
    	localStorage.setItem('Session5elapsed', JSON.stringify(Time55elapsed));
	}

	if (localStorage.Session6 == null) {
		Time66.push(JSON.parse(localStorage.getItem('Session6')));
    	Time66.splice(0, 1);
    	localStorage.setItem('Session6', JSON.stringify(Time66));

    	Time66elapsed.push(JSON.parse(localStorage.getItem('Session6elapsed')));
    	Time66elapsed.splice(0, 1);
    	localStorage.setItem('Session6elapsed', JSON.stringify(Time66elapsed));
	}

	if (localStorage.Session7 == null) {
		Time77.push(JSON.parse(localStorage.getItem('Session7')));
    	Time77.splice(0, 1);
    	localStorage.setItem('Session7', JSON.stringify(Time77));

    	Time77elapsed.push(JSON.parse(localStorage.getItem('Session7elapsed')));
    	Time77elapsed.splice(0, 1);
    	localStorage.setItem('Session7elapsed', JSON.stringify(Time77elapsed));
	}

	if (localStorage.Session8 == null) {
		Time88.push(JSON.parse(localStorage.getItem('Session8')));
    	Time88.splice(0, 1);
    	localStorage.setItem('Session8', JSON.stringify(Time88));

    	Time88elapsed.push(JSON.parse(localStorage.getItem('Session8elapsed')));
    	Time88elapsed.splice(0, 1);
    	localStorage.setItem('Session8elapsed', JSON.stringify(Time88elapsed));
	}

	if (localStorage.Session9 == null) {
		Time99.push(JSON.parse(localStorage.getItem('Session9')));
    	Time99.splice(0, 1);
    	localStorage.setItem('Session9', JSON.stringify(Time99));

    	Time99elapsed.push(JSON.parse(localStorage.getItem('Session9elapsed')));
    	Time99elapsed.splice(0, 1);
    	localStorage.setItem('Session9elapsed', JSON.stringify(Time99elapsed));
	}

	if (localStorage.Session10 == null) {
		Time10.push(JSON.parse(localStorage.getItem('Session10')));
    	Time10.splice(0, 1);
    	localStorage.setItem('Session10', JSON.stringify(Time10));

    	Time10elapsed.push(JSON.parse(localStorage.getItem('Session10elapsed')));
    	Time10elapsed.splice(0, 1);
    	localStorage.setItem('Session10elapsed', JSON.stringify(Time10elapsed));
	}

	if (localStorage.Session11 == null) {
		Time11.push(JSON.parse(localStorage.getItem('Session11')));
    	Time11.splice(0, 1);
    	localStorage.setItem('Session11', JSON.stringify(Time11));

    	Time11elapsed.push(JSON.parse(localStorage.getItem('Session11elapsed')));
    	Time11elapsed.splice(0, 1);
    	localStorage.setItem('Session11elapsed', JSON.stringify(Time11elapsed));
	}

	if (localStorage.Session12 == null) {
		Time12.push(JSON.parse(localStorage.getItem('Session12')));
    	Time12.splice(0, 1);
    	localStorage.setItem('Session12', JSON.stringify(Time12));

    	Time12elapsed.push(JSON.parse(localStorage.getItem('Session12elapsed')));
    	Time12elapsed.splice(0, 1);
    	localStorage.setItem('Session12elapsed', JSON.stringify(Time12elapsed));
	}

	if (localStorage.Session13 == null) {
		Time13.push(JSON.parse(localStorage.getItem('Session13')));
    	Time13.splice(0, 1);
    	localStorage.setItem('Session13', JSON.stringify(Time13));

    	Time13elapsed.push(JSON.parse(localStorage.getItem('Session13elapsed')));
    	Time13elapsed.splice(0, 1);
    	localStorage.setItem('Session13elapsed', JSON.stringify(Time13elapsed));
	}
}

function SaveDataToLocalStorage() {
	switch (eventID) {
		case 2:
		Time22 = JSON.parse(localStorage.getItem("Session2"));
		if (counter.innerHTML !== "00:00.00") {
			Time22.push({
				index: Time22.length,
				data: "<p>" + counter.innerHTML + "<a onclick='Delete(" + Time22.length + ")'>&#10005</a></p>"
			});
		} else {
			counter.innerHTML = "00:00.00";
		}

		localStorage.setItem("Session2", JSON.stringify(Time22));
		document.getElementById("Times").innerHTML = "";
		Time22.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time22elapsed = JSON.parse(localStorage.getItem("Session2elapsed"));
		if (elapsed !== "00:00") {
			Time22elapsed.push({
				index: Time22elapsed.length,
				data: elapsed
			});
		} else {
			elapsed = "00:00";
		}

		localStorage.setItem("Session2elapsed", JSON.stringify(Time22elapsed));
		Timeelapsed22 = [];
		Time22elapsed.forEach(function(item) {
			Timeelapsed22.push(Number(item.data));
		});
	break;

	case 3:
		Time33 = JSON.parse(localStorage.getItem("Session3"));
		if (counter.innerHTML !== "00:00.00") {
			Time33.push({
				index: Time33.length,
				data: "<p>" + counter.innerHTML + "<a onclick='Delete(" + Time33.length + ")'>&#10005</a></p>"
			});
		} else {
			counter.innerHTML = "00:00.00";
		}

		localStorage.setItem("Session3", JSON.stringify(Time33));
		document.getElementById("Times").innerHTML = "";
		Time33.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time33elapsed = JSON.parse(localStorage.getItem("Session3elapsed"));
		if (elapsed !== "00:00") {
			Time33elapsed.push({
				index: Time33elapsed.length,
				data: elapsed
			});
		} else {
			elapsed = "00:00";
		}

		localStorage.setItem("Session3elapsed", JSON.stringify(Time33elapsed));
		Timeelapsed33 = [];
		Time33elapsed.forEach(function(item) {
			Timeelapsed33.push(Number(item.data));
		});

	break;

	case 4:
		Time44 = JSON.parse(localStorage.getItem("Session4"));
		if (counter.innerHTML !== "00:00.00") {
			Time44.push({
				index: Time44.length,
				data: "<p>" + counter.innerHTML + "<a onclick='Delete(" + Time44.length + ")'>&#10005</a></p>"
			});
		} else {
			counter.innerHTML = "00:00.00";
		}

		localStorage.setItem("Session4", JSON.stringify(Time44));
		document.getElementById("Times").innerHTML = "";
		Time44.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time44elapsed = JSON.parse(localStorage.getItem("Session4elapsed"));
		if (elapsed !== "00:00") {
			Time44elapsed.push({
				index: Time44elapsed.length,
				data: elapsed
			});
		} else {
			elapsed = "00:00";
		}

		localStorage.setItem("Session4elapsed", JSON.stringify(Time44elapsed));
		Timeelapsed44 = [];
		Time44elapsed.forEach(function(item) {
			Timeelapsed44.push(Number(item.data));
		});
	break;

	case 5:
		Time55 = JSON.parse(localStorage.getItem("Session5"));
		if (counter.innerHTML !== "00:00.00") {
			Time55.push({
				index: Time55.length,
				data: "<p>" + counter.innerHTML + "<a onclick='Delete(" + Time55.length + ")'>&#10005</a></p>"
			});
		} else {
			counter.innerHTML = "00:00.00";
		}

		localStorage.setItem("Session5", JSON.stringify(Time55));
		document.getElementById("Times").innerHTML = "";
		Time55.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time55elapsed = JSON.parse(localStorage.getItem("Session5elapsed"));
		if (elapsed !== "00:00") {
			Time55elapsed.push({
				index: Time55elapsed.length,
				data: elapsed
			});
		} else {
			elapsed = "00:00";
		}

		localStorage.setItem("Session5elapsed", JSON.stringify(Time55elapsed));
		Timeelapsed55 = [];
		Time55elapsed.forEach(function(item) {
			Timeelapsed55.push(Number(item.data));
		});
	break;

	case 6:
		Time66 = JSON.parse(localStorage.getItem("Session6"));
		if (counter.innerHTML !== "00:00.00") {
			Time66.push({
				index: Time66.length,
				data: "<p>" + counter.innerHTML + "<a onclick='Delete(" + Time66.length + ")'>&#10005</a></p>"
			});
		} else {
			counter.innerHTML = "00:00.00";
		}

		localStorage.setItem("Session6", JSON.stringify(Time66));
		document.getElementById("Times").innerHTML = "";
		Time66.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time66elapsed = JSON.parse(localStorage.getItem("Session6elapsed"));
		if (elapsed !== "00:00") {
			Time66elapsed.push({
				index: Time66elapsed.length,
				data: elapsed
			});
		} else {
			elapsed = "00:00";
		}

		localStorage.setItem("Session6elapsed", JSON.stringify(Time66elapsed));
		Timeelapsed66 = [];
		Time66elapsed.forEach(function(item) {
			Timeelapsed66.push(Number(item.data));
		});
	break;

	case 7:
		Time77 = JSON.parse(localStorage.getItem("Session7"));
		if (counter.innerHTML !== "00:00.00") {
			Time77.push({
				index: Time77.length,
				data: "<p>" + counter.innerHTML + "<a onclick='Delete(" + Time77.length + ")'>&#10005</a></p>"
			});
		} else {
			counter.innerHTML = "00:00.00";
		}

		localStorage.setItem("Session7", JSON.stringify(Time77));
		document.getElementById("Times").innerHTML = "";
		Time77.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time77elapsed = JSON.parse(localStorage.getItem("Session7elapsed"));
		if (elapsed !== "00:00") {
			Time77elapsed.push({
				index: Time77elapsed.length,
				data: elapsed
			});
		} else {
			elapsed = "00:00";
		}

		localStorage.setItem("Session7elapsed", JSON.stringify(Time77elapsed));
		Timeelapsed77 = [];
		Time77elapsed.forEach(function(item) {
			Timeelapsed77.push(Number(item.data));
		});
	break;

	case 8:
		Time88 = JSON.parse(localStorage.getItem("Session8"));
		if (counter.innerHTML !== "00:00.00") {
			Time88.push({
				index: Time88.length,
				data: "<p>" + counter.innerHTML + "<a onclick='Delete(" + Time88.length + ")'>&#10005</a></p>"
			});
		} else {
			counter.innerHTML = "00:00.00";
		}

		localStorage.setItem("Session8", JSON.stringify(Time88));
		document.getElementById("Times").innerHTML = "";
		Time88.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time88elapsed = JSON.parse(localStorage.getItem("Session8elapsed"));
		if (elapsed !== "00:00") {
			Time88elapsed.push({
				index: Time88elapsed.length,
				data: elapsed
			});
		} else {
			elapsed = "00:00";
		}

		localStorage.setItem("Session8elapsed", JSON.stringify(Time88elapsed));
		Timeelapsed88 = [];
		Time88elapsed.forEach(function(item) {
			Timeelapsed88.push(Number(item.data));
		});
	break;

	case 9:
		Time99 = JSON.parse(localStorage.getItem("Session9"));
		if (counter.innerHTML !== "00:00.00") {
			Time99.push({
				index: Time99.length,
				data: "<p>" + counter.innerHTML + "<a onclick='Delete(" + Time99.length + ")'>&#10005</a></p>"
			});
		} else {
			counter.innerHTML = "00:00.00";
		}

		localStorage.setItem("Session9", JSON.stringify(Time99));
		document.getElementById("Times").innerHTML = "";
		Time99.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time99elapsed = JSON.parse(localStorage.getItem("Session9elapsed"));
		if (elapsed !== "00:00") {
			Time99elapsed.push({
				index: Time99elapsed.length,
				data: elapsed
			});
		} else {
			elapsed = "00:00";
		}

		localStorage.setItem("Session9elapsed", JSON.stringify(Time99elapsed));
		Timeelapsed99 = [];
		Time99elapsed.forEach(function(item) {
			Timeelapsed99.push(Number(item.data));
		});
	break;

	case 10:
		Time10 = JSON.parse(localStorage.getItem("Session10"));
		if (counter.innerHTML !== "00:00.00") {
			Time10.push({
				index: Time10.length,
				data: "<p>" + counter.innerHTML + "<a onclick='Delete(" + Time10.length + ")'>&#10005</a></p>"
			});
		} else {
			counter.innerHTML = "00:00.00";
		}

		localStorage.setItem("Session10", JSON.stringify(Time10));
		document.getElementById("Times").innerHTML = "";
		Time10.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time10elapsed = JSON.parse(localStorage.getItem("Session10elapsed"));
		if (elapsed !== "00:00") {
			Time10elapsed.push({
				index: Time10elapsed.length,
				data: elapsed
			});
		} else {
			elapsed = "00:00";
		}

		localStorage.setItem("Session10elapsed", JSON.stringify(Time10elapsed));
		Timeelapsed10 = [];
		Time10elapsed.forEach(function(item) {
			Timeelapsed10.push(Number(item.data));
		});
	break;

	case 11:
		Time11 = JSON.parse(localStorage.getItem("Session11"));
		if (counter.innerHTML !== "00:00.00") {
			Time11.push({
				index: Time11.length,
				data: "<p>" + counter.innerHTML + "<a onclick='Delete(" + Time11.length + ")'>&#10005</a></p>"
			});
		} else {
			counter.innerHTML = "00:00.00";
		}

		localStorage.setItem("Session11", JSON.stringify(Time11));
		document.getElementById("Times").innerHTML = "";
		Time11.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time11elapsed = JSON.parse(localStorage.getItem("Session11elapsed"));
		if (elapsed !== "00:00") {
			Time11elapsed.push({
				index: Time11elapsed.length,
				data: elapsed
			});
		} else {
			elapsed = "00:00";
		}

		localStorage.setItem("Session11elapsed", JSON.stringify(Time11elapsed));
		Timeelapsed11 = [];
		Time11elapsed.forEach(function(item) {
			Timeelapsed11.push(Number(item.data));
		});
	break;

	case 12:
		Time12 = JSON.parse(localStorage.getItem("Session12"));
		if (counter.innerHTML !== "00:00.00") {
			Time12.push({
				index: Time12.length,
				data: "<p>" + counter.innerHTML + "<a onclick='Delete(" + Time12.length + ")'>&#10005</a></p>"
			});
		} else {
			counter.innerHTML = "00:00.00";
		}

		localStorage.setItem("Session12", JSON.stringify(Time12));
		document.getElementById("Times").innerHTML = "";
		Time12.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time12elapsed = JSON.parse(localStorage.getItem("Session12elapsed"));
		if (elapsed !== "00:00") {
			Time12elapsed.push({
				index: Time12elapsed.length,
				data: elapsed
			});
		} else {
			elapsed = "00:00";
		}

		localStorage.setItem("Session12elapsed", JSON.stringify(Time12elapsed));
		Timeelapsed12 = [];
		Time12elapsed.forEach(function(item) {
			Timeelapsed12.push(Number(item.data));
		});
	break;

	case 13:
		Time13 = JSON.parse(localStorage.getItem("Session13"));
		if (counter.innerHTML !== "00:00.00") {
			Time13.push({
				index: Time13.length,
				data: "<p>" + counter.innerHTML + "<a onclick='Delete(" + Time13.length + ")'>&#10005</a></p>"
			});
		} else {
			counter.innerHTML = "00:00.00";
		}

		localStorage.setItem("Session13", JSON.stringify(Time13));
		document.getElementById("Times").innerHTML = "";
		Time13.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time13elapsed = JSON.parse(localStorage.getItem("Session13elapsed"));
		if (elapsed !== "00:00") {
			Time13elapsed.push({
				index: Time13elapsed.length,
				data: elapsed
			});
		} else {
			elapsed = "00:00";
		}

		localStorage.setItem("Session13elapsed", JSON.stringify(Time13elapsed));
		Timeelapsed13 = [];
		Time13elapsed.forEach(function(item) {
			Timeelapsed13.push(Number(item.data));
		});
	break;
	}

	elapsed = "00:00";
}

function Delete(deleted) {
	
	if (eventID === 2) {
		Time22 = Time22.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session2", JSON.stringify(Time22));
		document.getElementById("Times").innerHTML = "";
		Time22.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time22elapsed = Time22elapsed.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session2elapsed", JSON.stringify(Time22elapsed));
		Timeelapsed22 = [];
		Time22elapsed.forEach(function(item) {
			Timeelapsed22.push(Number(item.data));
		});
	}

	if (eventID === 3) {
		Time33 = Time33.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session3", JSON.stringify(Time33));
		document.getElementById("Times").innerHTML = "";
		Time33.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time33elapsed = Time33elapsed.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session3elapsed", JSON.stringify(Time33elapsed));
		Timeelapsed33 = [];
		Time33elapsed.forEach(function(item) {
			Timeelapsed33.push(Number(item.data));
		});
	}

	if (eventID === 4) {
		Time44 = Time44.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session4", JSON.stringify(Time44));
		document.getElementById("Times").innerHTML = "";
		Time44.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time44elapsed = Time44elapsed.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session4elapsed", JSON.stringify(Time44elapsed));
		Timeelapsed44 = [];
		Time44elapsed.forEach(function(item) {
			Timeelapsed44.push(Number(item.data));
		});
	}

	if (eventID === 5) {
		Time55 = Time55.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session5", JSON.stringify(Time55));
		document.getElementById("Times").innerHTML = "";
		Time55.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time55elapsed = Time55elapsed.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session5elapsed", JSON.stringify(Time55elapsed));
		Timeelapsed55 = [];
		Time55elapsed.forEach(function(item) {
			Timeelapsed55.push(Number(item.data));
		});
	}

	if (eventID === 6) {
		Time66 = Time66.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session6", JSON.stringify(Time66));
		document.getElementById("Times").innerHTML = "";
		Time66.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time66elapsed = Time66elapsed.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session6elapsed", JSON.stringify(Time66elapsed));
		Timeelapsed66 = [];
		Time66elapsed.forEach(function(item) {
			Timeelapsed66.push(Number(item.data));
		});
	}

	if (eventID === 7) {
		Time77 = Time77.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session7", JSON.stringify(Time77));
		document.getElementById("Times").innerHTML = "";
		Time77.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time77elapsed = Time77elapsed.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session7elapsed", JSON.stringify(Time77elapsed));
		Timeelapsed77 = [];
		Time77elapsed.forEach(function(item) {
			Timeelapsed77.push(Number(item.data));
		});
	}

	if (eventID === 8) {
		Time88 = Time88.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session8", JSON.stringify(Time88));
		document.getElementById("Times").innerHTML = "";
		Time88.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time88elapsed = Time88elapsed.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session8elapsed", JSON.stringify(Time88elapsed));
		Timeelapsed88 = [];
		Time88elapsed.forEach(function(item) {
			Timeelapsed88.push(Number(item.data));
		});
	}

	if (eventID === 9) {
		Time99 = Time99.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session9", JSON.stringify(Time99));
		document.getElementById("Times").innerHTML = "";
		Time99.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time99elapsed = Time99elapsed.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session9elapsed", JSON.stringify(Time99elapsed));
		Timeelaped99 = [];
		Time99elapsed.forEach(function(item) {
			Timeelapsed99.push(Number(item.data));
		});
	}

	if (eventID === 10) {
		Time10 = Time10.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session10", JSON.stringify(Time10));
		document.getElementById("Times").innerHTML = "";
		Time10.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time10elapsed = Time10elapsed.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session10elapsed", JSON.stringify(Time10elapsed));
		Timeelapsed10 = [];
		Time10elapsed.forEach(function(item) {
			Timeelapsed10.push(Number(item.data));
		});
	}

	if (eventID === 11) {
		Time11 = Time77.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session11", JSON.stringify(Time11));
		document.getElementById("Times").innerHTML = "";
		Time10.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time11elapsed = Time77elapsed.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session11elapsed", JSON.stringify(Time10elapsed));
		Timeelapsed10 = [];
		Time10elapsed.forEach(function(item) {
			Timeelapsed10.push(Number(item.data));
		});
	}

	if (eventID === 12) {
		Time12 = Time77.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session12", JSON.stringify(Time12));
		document.getElementById("Times").innerHTML = "";
		Time12.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time12elapsed = Time77elapsed.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session12elapsed", JSON.stringify(Time12elapsed));
		Timeelapsed12 = [];
		Time12elapsed.forEach(function(item) {
			Timeelapsed12.push(Number(item.data));
		});
	}

	if (eventID === 13) {
		Time13 = Time77.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session13", JSON.stringify(Time13));
		document.getElementById("Times").innerHTML = "";
		Time13.forEach(function(item) {
			document.getElementById("Times").innerHTML += item.data;
		});

		Time13elapsed = Time77elapsed.filter(function(e) { return e.index !== deleted});
		localStorage.setItem("Session13elapsed", JSON.stringify(Time13elapsed));
		Timeelapsed13 = [];
		Time13elapsed.forEach(function(item) {
			Timeelapsed13.push(Number(item.data));
		});
	}

	TimeCount();
	currentTime();
	currentAverage();
	bestAverage();
	bestTime();

	elapsed = "00:00";
}

function bestTime() {
	if (eventID === 2 && Timeelapsed22.length !== 0) {
		Timeelapsed22 = Timeelapsed22.sort();
		var bestTime = Timeelapsed22[0];
		bestTime = bestTime.toString();
		
		var bestMin1 = bestTime.charAt(2);
		var bestMin2 = bestTime.charAt(3);

		var bestSec1 = bestTime.charAt(4);
		var bestSec2 = bestTime.charAt(5);

		var bestMiliSec1 = bestTime.charAt(6);
		var bestMiliSec2 = bestTime.charAt(7);

		document.getElementById("best_time").innerHTML = "Best Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
	}

	if (eventID === 3 && Timeelapsed33.length !== 0) {
		Timeelapsed33 = Timeelapsed33.sort();
		var bestTime = Timeelapsed33[0];
		bestTime = bestTime.toString();
			
		var bestMin1 = bestTime.charAt(2);
		var bestMin2 = bestTime.charAt(3);

		var bestSec1 = bestTime.charAt(4);
		var bestSec2 = bestTime.charAt(5);

		var bestMiliSec1 = bestTime.charAt(6);
		var bestMiliSec2 = bestTime.charAt(7);

		document.getElementById("best_time").innerHTML = "Best Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
	}

	if (eventID === 4 && Timeelapsed44.length !== 0) {
		Timeelapsed44 = Timeelapsed44.sort();
		var bestTime = Timeelapsed44[0];
		bestTime = bestTime.toString();
		
		var bestMin1 = bestTime.charAt(2);
		var bestMin2 = bestTime.charAt(3);

		var bestSec1 = bestTime.charAt(4);
		var bestSec2 = bestTime.charAt(5);

		var bestMiliSec1 = bestTime.charAt(6);
		var bestMiliSec2 = bestTime.charAt(7);

		document.getElementById("best_time").innerHTML = "Best Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
	}

	if (eventID === 5 && Timeelapsed55.length !== 0) {
		Timeelapsed55 = Timeelapsed55.sort();
		var bestTime = Timeelapsed55[0];
		bestTime = bestTime.toString();
		
		var bestMin1 = bestTime.charAt(2);
		var bestMin2 = bestTime.charAt(3);

		var bestSec1 = bestTime.charAt(4);
		var bestSec2 = bestTime.charAt(5);

		var bestMiliSec1 = bestTime.charAt(6);
		var bestMiliSec2 = bestTime.charAt(7);

		document.getElementById("best_time").innerHTML = "Best Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
	}

	if (eventID === 6 && Timeelapsed66.length !== 0) {
		Timeelapsed55 = Timeelapsed66.sort();
		var bestTime = Timeelapsed66[0];
		bestTime = bestTime.toString();
		
		var bestMin1 = bestTime.charAt(2);
		var bestMin2 = bestTime.charAt(3);

		var bestSec1 = bestTime.charAt(4);
		var bestSec2 = bestTime.charAt(5);

		var bestMiliSec1 = bestTime.charAt(6);
		var bestMiliSec2 = bestTime.charAt(7);

		document.getElementById("best_time").innerHTML = "Best Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
	}

	if (eventID === 7 && Timeelapsed77.length !== 0) {
		Timeelapsed77 = Timeelapsed77.sort();
		var bestTime = Timeelapsed77[0];
		bestTime = bestTime.toString();
		
		var bestMin1 = bestTime.charAt(2);
		var bestMin2 = bestTime.charAt(3);

		var bestSec1 = bestTime.charAt(4);
		var bestSec2 = bestTime.charAt(5);

		var bestMiliSec1 = bestTime.charAt(6);
		var bestMiliSec2 = bestTime.charAt(7);

		document.getElementById("best_time").innerHTML = "Best Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
	}

	if (eventID === 8 && Timeelapsed88.length !== 0) {
		Timeelapsed88 = Timeelapsed88.sort();
		var bestTime = Timeelapsed88[0];
		bestTime = bestTime.toString();
		
		var bestMin1 = bestTime.charAt(2);
		var bestMin2 = bestTime.charAt(3);

		var bestSec1 = bestTime.charAt(4);
		var bestSec2 = bestTime.charAt(5);

		var bestMiliSec1 = bestTime.charAt(6);
		var bestMiliSec2 = bestTime.charAt(7);

		document.getElementById("best_time").innerHTML = "Best Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
	}

	if (eventID === 9 && Timeelapsed99.length !== 0) {
		Timeelapsed99 = Timeelapsed99.sort();
		var bestTime = Timeelapsed99[0];
		bestTime = bestTime.toString();
		
		var bestMin1 = bestTime.charAt(2);
		var bestMin2 = bestTime.charAt(3);

		var bestSec1 = bestTime.charAt(4);
		var bestSec2 = bestTime.charAt(5);

		var bestMiliSec1 = bestTime.charAt(6);
		var bestMiliSec2 = bestTime.charAt(7);

		document.getElementById("best_time").innerHTML = "Best Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
	}

	if (eventID === 10 && Timeelapsed10.length !== 0) {
		Timeelapsed10 = Timeelapsed10.sort();
		var bestTime = Timeelapsed10[0];
		bestTime = bestTime.toString();
		
		var bestMin1 = bestTime.charAt(2);
		var bestMin2 = bestTime.charAt(3);

		var bestSec1 = bestTime.charAt(4);
		var bestSec2 = bestTime.charAt(5);

		var bestMiliSec1 = bestTime.charAt(6);
		var bestMiliSec2 = bestTime.charAt(7);

		document.getElementById("best_time").innerHTML = "Best Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
	}

	if (eventID === 11 && Timeelapsed11.length !== 0) {
		Timeelapsed11 = Timeelapsed11.sort();
		var bestTime = Timeelapsed11[0];
		bestTime = bestTime.toString();
		
		var bestMin1 = bestTime.charAt(2);
		var bestMin2 = bestTime.charAt(3);

		var bestSec1 = bestTime.charAt(4);
		var bestSec2 = bestTime.charAt(5);

		var bestMiliSec1 = bestTime.charAt(6);
		var bestMiliSec2 = bestTime.charAt(7);

		document.getElementById("best_time").innerHTML = "Best Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
	}

	if (eventID === 12 && Timeelapsed12.length !== 0) {
		Timeelapsed12 = Timeelapsed12.sort();
		var bestTime = Timeelapsed12[0];
		bestTime = bestTime.toString();
		
		var bestMin1 = bestTime.charAt(2);
		var bestMin2 = bestTime.charAt(3);

		var bestSec1 = bestTime.charAt(4);
		var bestSec2 = bestTime.charAt(5);

		var bestMiliSec1 = bestTime.charAt(6);
		var bestMiliSec2 = bestTime.charAt(7);

		document.getElementById("best_time").innerHTML = "Best Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
	}

	if (eventID === 13 && Timeelapsed13.length !== 0) {
		Timeelapsed13 = Timeelapsed13.sort();
		var bestTime = Timeelapsed13[0];
		bestTime = bestTime.toString();
		
		var bestMin1 = bestTime.charAt(2);
		var bestMin2 = bestTime.charAt(3);

		var bestSec1 = bestTime.charAt(4);
		var bestSec2 = bestTime.charAt(5);

		var bestMiliSec1 = bestTime.charAt(6);
		var bestMiliSec2 = bestTime.charAt(7);

		document.getElementById("best_time").innerHTML = "Best Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
	}
}

function currentTime() {

	if (eventID === 2) {
		if (Timeelapsed22.length !== 0) {
			var bestTime = Timeelapsed22[Timeelapsed22.length - 1];
			bestTime = bestTime.toString();
			var bestMin1 = bestTime.charAt(2);
			var bestMin2 = bestTime.charAt(3);

			var bestSec1 = bestTime.charAt(4);
			var bestSec2 = bestTime.charAt(5);

			var bestMiliSec1 = bestTime.charAt(6);
			var bestMiliSec2 = bestTime.charAt(7);
			document.getElementById("current_time").innerHTML = "Current Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
		}
	}

	if (eventID === 3) {
		if (Timeelapsed33.length !== 0) {
			var bestTime = Timeelapsed33[Timeelapsed33.length - 1];
			bestTime = bestTime.toString();
			var bestMin1 = bestTime.charAt(2);
			var bestMin2 = bestTime.charAt(3);

			var bestSec1 = bestTime.charAt(4);
			var bestSec2 = bestTime.charAt(5);

			var bestMiliSec1 = bestTime.charAt(6);
			var bestMiliSec2 = bestTime.charAt(7);
			document.getElementById("current_time").innerHTML = "Current Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
		}	
	}
		

	if (eventID === 4) {
		if (Timeelapsed44.length !== 0) {
			var bestTime = Timeelapsed44[Timeelapsed44.length - 1];
			bestTime = bestTime.toString();
			var bestMin1 = bestTime.charAt(2);
			var bestMin2 = bestTime.charAt(3);

			var bestSec1 = bestTime.charAt(4);
			var bestSec2 = bestTime.charAt(5);

			var bestMiliSec1 = bestTime.charAt(6);
			var bestMiliSec2 = bestTime.charAt(7);
			document.getElementById("current_time").innerHTML = "Current Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
		}
	}

	if (eventID === 5) {
		if (Timeelapsed55.length !== 0) {
			var bestTime = Timeelapsed55[Timeelapsed55.length - 1];
			bestTime = bestTime.toString();
			var bestMin1 = bestTime.charAt(2);
			var bestMin2 = bestTime.charAt(3);

			var bestSec1 = bestTime.charAt(4);
			var bestSec2 = bestTime.charAt(5);

			var bestMiliSec1 = bestTime.charAt(6);
			var bestMiliSec2 = bestTime.charAt(7);
			document.getElementById("current_time").innerHTML = "Current Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
		}
	}

	if (eventID === 6) {
		if (Timeelapsed66.length !== 0) {
			var bestTime = Timeelapsed66[Timeelapsed66.length - 1];
			bestTime = bestTime.toString();
			var bestMin1 = bestTime.charAt(2);
			var bestMin2 = bestTime.charAt(3);

			var bestSec1 = bestTime.charAt(4);
			var bestSec2 = bestTime.charAt(5);

			var bestMiliSec1 = bestTime.charAt(6);
			var bestMiliSec2 = bestTime.charAt(7);
			document.getElementById("current_time").innerHTML = "Current Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
		}
	}

	if (eventID === 7) {
		if (Timeelapsed77.length !== 0) {
			var bestTime = Timeelapsed77[Timeelapsed77.length - 1];
			bestTime = bestTime.toString();
			var bestMin1 = bestTime.charAt(2);
			var bestMin2 = bestTime.charAt(3);

			var bestSec1 = bestTime.charAt(4);
			var bestSec2 = bestTime.charAt(5);

			var bestMiliSec1 = bestTime.charAt(6);
			var bestMiliSec2 = bestTime.charAt(7);
			document.getElementById("current_time").innerHTML = "Current Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
		}
	}

	if (eventID === 8) {
		if (Timeelapsed88.length !== 0) {
			var bestTime = Timeelapsed88[Timeelapsed88.length - 1];
			bestTime = bestTime.toString();
			var bestMin1 = bestTime.charAt(2);
			var bestMin2 = bestTime.charAt(3);

			var bestSec1 = bestTime.charAt(4);
			var bestSec2 = bestTime.charAt(5);

			var bestMiliSec1 = bestTime.charAt(6);
			var bestMiliSec2 = bestTime.charAt(7);
			document.getElementById("current_time").innerHTML = "Current Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
		}
	}

	if (eventID === 9) {
		if (Timeelapsed99.length !== 0) {
			var bestTime = Timeelapsed99[Timeelapsed99.length - 1];
			bestTime = bestTime.toString();
			var bestMin1 = bestTime.charAt(2);
			var bestMin2 = bestTime.charAt(3);

			var bestSec1 = bestTime.charAt(4);
			var bestSec2 = bestTime.charAt(5);

			var bestMiliSec1 = bestTime.charAt(6);
			var bestMiliSec2 = bestTime.charAt(7);
			document.getElementById("current_time").innerHTML = "Current Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
		}
	}

	if (eventID === 10) {
		if (Timeelapsed10.length !== 0) {
			var bestTime = Timeelapsed10[Timeelapsed10.length - 1];
			bestTime = bestTime.toString();
			var bestMin1 = bestTime.charAt(2);
			var bestMin2 = bestTime.charAt(3);

			var bestSec1 = bestTime.charAt(4);
			var bestSec2 = bestTime.charAt(5);

			var bestMiliSec1 = bestTime.charAt(6);
			var bestMiliSec2 = bestTime.charAt(7);
			document.getElementById("current_time").innerHTML = "Current Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
		}	
	}

	if (eventID === 11) {
		if (Timeelapsed11.length !== 0) {
			var bestTime = Timeelapsed11[Timeelapsed11.length - 1];
			bestTime = bestTime.toString();
			var bestMin1 = bestTime.charAt(2);
			var bestMin2 = bestTime.charAt(3);

			var bestSec1 = bestTime.charAt(4);
			var bestSec2 = bestTime.charAt(5);

			var bestMiliSec1 = bestTime.charAt(6);
			var bestMiliSec2 = bestTime.charAt(7);
			document.getElementById("current_time").innerHTML = "Current Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
		}
	}

	if (eventID === 12) {
		if (Timeelapsed12.length !== 0) {
			var bestTime = Timeelapsed12[Timeelapsed12.length - 1];
			bestTime = bestTime.toString();
			var bestMin1 = bestTime.charAt(2);
			var bestMin2 = bestTime.charAt(3);

			var bestSec1 = bestTime.charAt(4);
			var bestSec2 = bestTime.charAt(5);

			var bestMiliSec1 = bestTime.charAt(6);
			var bestMiliSec2 = bestTime.charAt(7);
			document.getElementById("current_time").innerHTML = "Current Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
		}
	}

	if (eventID === 13) {
		if (Timeelapsed13.length !== 0) {
			var bestTime = Timeelapsed13[Timeelapsed13.length - 1];
			bestTime = bestTime.toString();
			var bestMin1 = bestTime.charAt(2);
			var bestMin2 = bestTime.charAt(3);

			var bestSec1 = bestTime.charAt(4);
			var bestSec2 = bestTime.charAt(5);

			var bestMiliSec1 = bestTime.charAt(6);
			var bestMiliSec2 = bestTime.charAt(7);
			document.getElementById("current_time").innerHTML = "Current Time: " + bestMin1 + bestMin2 + ":" + bestSec1 + bestSec2 + "." + bestMiliSec1 + bestMiliSec2;
		}
	}
}

function bestAverage() {

	if (eventID === 2) {
		if (Timeelapsed22.length >= 5) {
				var zero = 0;
				var one = 1;
				var two = 2;
				var three = 3;
				var four = 4;

				listOfAo522 = [];
			for (var i = 0; i < Timeelapsed22.length - 4; i++) {
				var Average = [];
				Average.push(Timeelapsed22[zero]);
				Average.push(Timeelapsed22[one]);
				Average.push(Timeelapsed22[two]);
				Average.push(Timeelapsed22[three]);
				Average.push(Timeelapsed22[four]);
				Average = Average.sort();
				Average = Average[1] + Average[2] + Average[3];
				Average = Average / 3;
				Average = Average * 1000000;
				Average = Math.trunc(Average);
				Average = Average / 1000000;
				Average += "01";
				Average = Number(Average);
				zero++;
				one++;
				two++;
				three++;
				four++;
				listOfAo522.push(Average);
			}
			listOfAo522.sort();
			var bestAverage = listOfAo522[0];
			bestAverage = bestAverage.toString();
			if (bestAverage.charAt(4) === '6' && bestAverage.charAt(5) === '0') {
				bestAverage = Number(bestAverage);
				bestAverage += 0.004000;
			}
			document.getElementById("best_ao5").innerHTML = "Best Ao5: " + bestAverage.charAt(2) + bestAverage.charAt(3) + ":" + bestAverage.charAt(4) + bestAverage.charAt(5) + "." + bestAverage.charAt(6) + bestAverage.charAt(7);
		}
	}

	if (eventID === 3) {
		if (Timeelapsed33.length >= 5) {
				var zero = 0;
				var one = 1;
				var two = 2;
				var three = 3;
				var four = 4;

				listOfAo533 = [];
			for (var i = 0; i < Timeelapsed33.length - 4; i++) {
				var Average = [];
				Average.push(Timeelapsed33[zero]);
				Average.push(Timeelapsed33[one]);
				Average.push(Timeelapsed33[two]);
				Average.push(Timeelapsed33[three]);
				Average.push(Timeelapsed33[four]);
				Average = Average.sort();
				Average = Average[1] + Average[2] + Average[3];
				Average = Average / 3;
				Average = Average * 1000000;
				Average = Math.trunc(Average);
				Average = Average / 1000000;
				Average += "01";
				Average = Number(Average);
				zero++;
				one++;
				two++;
				three++;
				four++;
				listOfAo533.push(Average);
			}
			listOfAo533.sort();
			var bestAverage = listOfAo533[0];
			bestAverage = bestAverage.toString();
			if (bestAverage.charAt(4) === '6' && bestAverage.charAt(5) === '0') {
				bestAverage = Number(bestAverage);
				bestAverage += 0.004000;
			}
			document.getElementById("best_ao5").innerHTML = "Best Ao5: " + bestAverage.charAt(2) + bestAverage.charAt(3) + ":" + bestAverage.charAt(4) + bestAverage.charAt(5) + "." + bestAverage.charAt(6) + bestAverage.charAt(7);
		}
	}

	if (eventID === 4) {
		if (Timeelapsed44.length >= 5) {
				var zero = 0;
				var one = 1;
				var two = 2;
				var three = 3;
				var four = 4;

				listOfAo533 = [];
			for (var i = 0; i < Timeelapsed44.length - 4; i++) {
				var Average = [];
				Average.push(Timeelapsed44[zero]);
				Average.push(Timeelapsed44[one]);
				Average.push(Timeelapsed44[two]);
				Average.push(Timeelapsed44[three]);
				Average.push(Timeelapsed44[four]);
				Average = Average.sort();
				Average = Average[1] + Average[2] + Average[3];
				Average = Average / 3;
				Average = Average * 1000000;
				Average = Math.trunc(Average);
				Average = Average / 1000000;
				Average += "01";
				Average = Number(Average);
				zero++;
				one++;
				two++;
				three++;
				four++;
				listOfAo544.push(Average);
			}
			listOfAo544.sort();
			var bestAverage = listOfAo544[0];
			bestAverage = bestAverage.toString();
			if (bestAverage.charAt(4) === '6' && bestAverage.charAt(5) === '0') {
				bestAverage = Number(bestAverage);
				bestAverage += 0.004000;
			}
			document.getElementById("best_ao5").innerHTML = "Best Ao5: " + bestAverage.charAt(2) + bestAverage.charAt(3) + ":" + bestAverage.charAt(4) + bestAverage.charAt(5) + "." + bestAverage.charAt(6) + bestAverage.charAt(7);
		}
	}

	if (eventID === 5) {
		if (Timeelapsed55.length >= 5) {
				var zero = 0;
				var one = 1;
				var two = 2;
				var three = 3;
				var four = 4;

				listOfAo555 = [];
			for (var i = 0; i < Timeelapsed55.length - 4; i++) {
				var Average = [];
				Average.push(Timeelapsed55[zero]);
				Average.push(Timeelapsed55[one]);
				Average.push(Timeelapsed55[two]);
				Average.push(Timeelapsed55[three]);
				Average.push(Timeelapsed55[four]);
				Average = Average.sort();
				Average = Average[1] + Average[2] + Average[3];
				Average = Average / 3;
				Average = Average * 1000000;
				Average = Math.trunc(Average);
				Average = Average / 1000000;
				Average += "01";
				Average = Number(Average);
				zero++;
				one++;
				two++;
				three++;
				four++;
				listOfAo555.push(Average);
			}
			listOfAo555.sort();
			var bestAverage = listOfAo555[0];
			bestAverage = bestAverage.toString();
			if (bestAverage.charAt(4) === '6' && bestAverage.charAt(5) === '0') {
				bestAverage = Number(bestAverage);
				bestAverage += 0.004000;
			}
			document.getElementById("best_ao5").innerHTML = "Best Ao5: " + bestAverage.charAt(2) + bestAverage.charAt(3) + ":" + bestAverage.charAt(4) + bestAverage.charAt(5) + "." + bestAverage.charAt(6) + bestAverage.charAt(7);
		}
	}

	if (eventID === 6) {
		if (Timeelapsed66.length >= 5) {
				var zero = 0;
				var one = 1;
				var two = 2;
				var three = 3;
				var four = 4;

				listOfAo566 = [];
			for (var i = 0; i < Timeelapsed66.length - 4; i++) {
				var Average = [];
				Average.push(Timeelapsed66[zero]);
				Average.push(Timeelapsed66[one]);
				Average.push(Timeelapsed66[two]);
				Average.push(Timeelapsed66[three]);
				Average.push(Timeelapsed66[four]);
				Average = Average.sort();
				Average = Average[1] + Average[2] + Average[3];
				Average = Average / 3;
				Average = Average * 1000000;
				Average = Math.trunc(Average);
				Average = Average / 1000000;
				Average += "01";
				Average = Number(Average);
				zero++;
				one++;
				two++;
				three++;
				four++;
				listOfAo566.push(Average);
			}
			listOfAo566.sort();
			var bestAverage = listOfAo566[0];
			bestAverage = bestAverage.toString();
			if (bestAverage.charAt(4) === '6' && bestAverage.charAt(5) === '0') {
				bestAverage = Number(bestAverage);
				bestAverage += 0.004000;
			}
			document.getElementById("best_ao5").innerHTML = "Best Ao5: " + bestAverage.charAt(2) + bestAverage.charAt(3) + ":" + bestAverage.charAt(4) + bestAverage.charAt(5) + "." + bestAverage.charAt(6) + bestAverage.charAt(7);
		}
	}

	if (eventID === 7) {
		if (Timeelapsed77.length >= 5) {
				var zero = 0;
				var one = 1;
				var two = 2;
				var three = 3;
				var four = 4;

				listOfAo577 = [];
			for (var i = 0; i < Timeelapsed77.length - 4; i++) {
				var Average = [];
				Average.push(Timeelapsed77[zero]);
				Average.push(Timeelapsed77[one]);
				Average.push(Timeelapsed77[two]);
				Average.push(Timeelapsed77[three]);
				Average.push(Timeelapsed77[four]);
				Average = Average.sort();
				Average = Average[1] + Average[2] + Average[3];
				Average = Average / 3;
				Average = Average * 1000000;
				Average = Math.trunc(Average);
				Average = Average / 1000000;
				Average += "01";
				Average = Number(Average);
				zero++;
				one++;
				two++;
				three++;
				four++;
				listOfAo577.push(Average);
			}
			listOfAo577.sort();
			var bestAverage = listOfAo577[0];
			bestAverage = bestAverage.toString();
			if (bestAverage.charAt(4) === '6' && bestAverage.charAt(5) === '0') {
				bestAverage = Number(bestAverage);
				bestAverage += 0.004000;
			}
			document.getElementById("best_ao5").innerHTML = "Best Ao5: " + bestAverage.charAt(2) + bestAverage.charAt(3) + ":" + bestAverage.charAt(4) + bestAverage.charAt(5) + "." + bestAverage.charAt(6) + bestAverage.charAt(7);
		}
	}

	if (eventID === 8) {
		if (Timeelapsed88.length >= 5) {
				var zero = 0;
				var one = 1;
				var two = 2;
				var three = 3;
				var four = 4;

				listOfAo588 = [];
			for (var i = 0; i < Timeelapsed88.length - 4; i++) {
				var Average = [];
				Average.push(Timeelapsed88[zero]);
				Average.push(Timeelapsed88[one]);
				Average.push(Timeelapsed88[two]);
				Average.push(Timeelapsed88[three]);
				Average.push(Timeelapsed88[four]);
				Average = Average.sort();
				Average = Average[1] + Average[2] + Average[3];
				Average = Average / 3;
				Average = Average * 1000000;
				Average = Math.trunc(Average);
				Average = Average / 1000000;
				Average += "01";
				Average = Number(Average);
				zero++;
				one++;
				two++;
				three++;
				four++;
				listOfAo588.push(Average);
			}
			listOfAo588.sort();
			var bestAverage = listOfAo588[0];
			bestAverage = bestAverage.toString();
			if (bestAverage.charAt(4) === '6' && bestAverage.charAt(5) === '0') {
				bestAverage = Number(bestAverage);
				bestAverage += 0.004000;
			}
			document.getElementById("best_ao5").innerHTML = "Best Ao5: " + bestAverage.charAt(2) + bestAverage.charAt(3) + ":" + bestAverage.charAt(4) + bestAverage.charAt(5) + "." + bestAverage.charAt(6) + bestAverage.charAt(7);
		}
	}

	if (eventID === 9) {
		if (Timeelapsed99.length >= 5) {
				var zero = 0;
				var one = 1;
				var two = 2;
				var three = 3;
				var four = 4;

				listOfAo599 = [];
			for (var i = 0; i < Timeelapsed99.length - 4; i++) {
				var Average = [];
				Average.push(Timeelapsed99[zero]);
				Average.push(Timeelapsed99[one]);
				Average.push(Timeelapsed99[two]);
				Average.push(Timeelapsed99[three]);
				Average.push(Timeelapsed99[four]);
				Average = Average.sort();
				Average = Average[1] + Average[2] + Average[3];
				Average = Average / 3;
				Average = Average * 1000000;
				Average = Math.trunc(Average);
				Average = Average / 1000000;
				Average += "01";
				Average = Number(Average);
				zero++;
				one++;
				two++;
				three++;
				four++;
				listOfAo599.push(Average);
			}
			listOfAo599.sort();
			var bestAverage = listOfAo599[0];
			bestAverage = bestAverage.toString();
			if (bestAverage.charAt(4) === '6' && bestAverage.charAt(5) === '0') {
				bestAverage = Number(bestAverage);
				bestAverage += 0.004000;
			}
			document.getElementById("best_ao5").innerHTML = "Best Ao5: " + bestAverage.charAt(2) + bestAverage.charAt(3) + ":" + bestAverage.charAt(4) + bestAverage.charAt(5) + "." + bestAverage.charAt(6) + bestAverage.charAt(7);
		}
	}

	if (eventID === 10) {
		if (Timeelapsed10.length >= 5) {
				var zero = 0;
				var one = 1;
				var two = 2;
				var three = 3;
				var four = 4;

				listOfAo510 = [];
			for (var i = 0; i < Timeelapsed10.length - 4; i++) {
				var Average = [];
				Average.push(Timeelapsed10[zero]);
				Average.push(Timeelapsed10[one]);
				Average.push(Timeelapsed10[two]);
				Average.push(Timeelapsed10[three]);
				Average.push(Timeelapsed10[four]);
				Average = Average.sort();
				Average = Average[1] + Average[2] + Average[3];
				Average = Average / 3;
				Average = Average * 1000000;
				Average = Math.trunc(Average);
				Average = Average / 1000000;
				Average += "01";
				Average = Number(Average);
				zero++;
				one++;
				two++;
				three++;
				four++;
				listOfAo510.push(Average);
			}
			listOfAo510.sort();
			var bestAverage = listOfAo510[0];
			bestAverage = bestAverage.toString();
			if (bestAverage.charAt(4) === '6' && bestAverage.charAt(5) === '0') {
				bestAverage = Number(bestAverage);
				bestAverage += 0.004000;
			}
			document.getElementById("best_ao5").innerHTML = "Best Ao5: " + bestAverage.charAt(2) + bestAverage.charAt(3) + ":" + bestAverage.charAt(4) + bestAverage.charAt(5) + "." + bestAverage.charAt(6) + bestAverage.charAt(7);
		}
	}

	if (eventID === 11) {
		if (Timeelapsed11.length >= 5) {
				var zero = 0;
				var one = 1;
				var two = 2;
				var three = 3;
				var four = 4;

				listOfAo511 = [];
			for (var i = 0; i < Timeelapsed11.length - 4; i++) {
				var Average = [];
				Average.push(Timeelapsed11[zero]);
				Average.push(Timeelapsed11[one]);
				Average.push(Timeelapsed11[two]);
				Average.push(Timeelapsed11[three]);
				Average.push(Timeelapsed11[four]);
				Average = Average.sort();
				Average = Average[1] + Average[2] + Average[3];
				Average = Average / 3;
				Average = Average * 1000000;
				Average = Math.trunc(Average);
				Average = Average / 1000000;
				Average += "01";
				Average = Number(Average);
				zero++;
				one++;
				two++;
				three++;
				four++;
				listOfAo511.push(Average);
			}
			listOfAo511.sort();
			var bestAverage = listOfAo511[0];
			bestAverage = bestAverage.toString();
			if (bestAverage.charAt(4) === '6' && bestAverage.charAt(5) === '0') {
				bestAverage = Number(bestAverage);
				bestAverage += 0.004000;
			}
			document.getElementById("best_ao5").innerHTML = "Best Ao5: " + bestAverage.charAt(2) + bestAverage.charAt(3) + ":" + bestAverage.charAt(4) + bestAverage.charAt(5) + "." + bestAverage.charAt(6) + bestAverage.charAt(7);
		}
	}

	if (eventID === 12) {
		if (Timeelapsed12.length >= 5) {
				var zero = 0;
				var one = 1;
				var two = 2;
				var three = 3;
				var four = 4;

				listOfAo512 = [];
			for (var i = 0; i < Timeelapsed12.length - 4; i++) {
				var Average = [];
				Average.push(Timeelapsed12[zero]);
				Average.push(Timeelapsed12[one]);
				Average.push(Timeelapsed12[two]);
				Average.push(Timeelapsed12[three]);
				Average.push(Timeelapsed12[four]);
				Average = Average.sort();
				Average = Average[1] + Average[2] + Average[3];
				Average = Average / 3;
				Average = Average * 1000000;
				Average = Math.trunc(Average);
				Average = Average / 1000000;
				Average += "01";
				Average = Number(Average);
				zero++;
				one++;
				two++;
				three++;
				four++;
				listOfAo512.push(Average);
			}
			listOfAo512.sort();
			var bestAverage = listOfAo512[0];
			bestAverage = bestAverage.toString();
			if (bestAverage.charAt(4) === '6' && bestAverage.charAt(5) === '0') {
				bestAverage = Number(bestAverage);
				bestAverage += 0.004000;
			}
			document.getElementById("best_ao5").innerHTML = "Best Ao5: " + bestAverage.charAt(2) + bestAverage.charAt(3) + ":" + bestAverage.charAt(4) + bestAverage.charAt(5) + "." + bestAverage.charAt(6) + bestAverage.charAt(7);
		}
	}

	if (eventID === 13) {
		if (Timeelapsed13.length >= 5) {
				var zero = 0;
				var one = 1;
				var two = 2;
				var three = 3;
				var four = 4;

				listOfAo513 = [];
			for (var i = 0; i < Timeelapsed13.length - 4; i++) {
				var Average = [];
				Average.push(Timeelapsed13[zero]);
				Average.push(Timeelapsed13[one]);
				Average.push(Timeelapsed13[two]);
				Average.push(Timeelapsed13[three]);
				Average.push(Timeelapsed13[four]);
				Average = Average.sort();
				Average = Average[1] + Average[2] + Average[3];
				Average = Average / 3;
				Average = Average * 1000000;
				Average = Math.trunc(Average);
				Average = Average / 1000000;
				Average += "01";
				Average = Number(Average);
				zero++;
				one++;
				two++;
				three++;
				four++;
				listOfAo513.push(Average);
			}
			listOfAo513.sort();
			var bestAverage = listOfAo513[0];
			bestAverage = bestAverage.toString();
			if (bestAverage.charAt(4) === '6' && bestAverage.charAt(5) === '0') {
				bestAverage = Number(bestAverage);
				bestAverage += 0.004000;
			}
			document.getElementById("best_ao5").innerHTML = "Best Ao5: " + bestAverage.charAt(2) + bestAverage.charAt(3) + ":" + bestAverage.charAt(4) + bestAverage.charAt(5) + "." + bestAverage.charAt(6) + bestAverage.charAt(7);
		}
	}
}

function currentAverage() {

	if (eventID === 2) {
		var Ao5 = [];
		if (Timeelapsed22.length >= 5) {
			Ao5.push(Timeelapsed22[Timeelapsed22.length - 1]);
			Ao5.push(Timeelapsed22[Timeelapsed22.length - 2]);
			Ao5.push(Timeelapsed22[Timeelapsed22.length - 3]);
			Ao5.push(Timeelapsed22[Timeelapsed22.length - 4]);
			Ao5.push(Timeelapsed22[Timeelapsed22.length - 5]);
			Ao5 = Ao5.sort();
			Ao5 = Ao5[1] + Ao5[2] + Ao5[3];
			Ao5 = Ao5 / 3;
			Ao5 = Ao5.toString();
			Ao5 = Ao5.charAt(2) + Ao5.charAt(3) + ":" + Ao5.charAt(4) + Ao5.charAt(5) + "." + Ao5.charAt(6) + Ao5.charAt(7);
			document.getElementById("current_ao5").innerHTML = "Current Ao5: " + Ao5;
			document.getElementById("Ao5").innerHTML = "Ao5: " + Ao5;
			
		}
	}

	if (eventID === 3) {
		var Ao5 = [];
		if (Timeelapsed33.length >= 5) {
			Ao5.push(Timeelapsed33[Timeelapsed33.length - 1]);
			Ao5.push(Timeelapsed33[Timeelapsed33.length - 2]);
			Ao5.push(Timeelapsed33[Timeelapsed33.length - 3]);
			Ao5.push(Timeelapsed33[Timeelapsed33.length - 4]);
			Ao5.push(Timeelapsed33[Timeelapsed33.length - 5]);
			Ao5 = Ao5.sort();
			Ao5 = Ao5[1] + Ao5[2] + Ao5[3];
			Ao5 = Ao5 / 3;
			Ao5 = Ao5.toString();
			Ao5 = Ao5.charAt(2) + Ao5.charAt(3) + ":" + Ao5.charAt(4) + Ao5.charAt(5) + "." + Ao5.charAt(6) + Ao5.charAt(7);
			document.getElementById("current_ao5").innerHTML = "Current Ao5: " + Ao5;
			document.getElementById("Ao5").innerHTML = "Ao5: " + Ao5;
		}
	}

	if (eventID === 4) {
		var Ao5 = [];
		if (Timeelapsed44.length >= 5) {
			Ao5.push(Timeelapsed44[Timeelapsed44.length - 1]);
			Ao5.push(Timeelapsed44[Timeelapsed44.length - 2]);
			Ao5.push(Timeelapsed44[Timeelapsed44.length - 3]);
			Ao5.push(Timeelapsed44[Timeelapsed44.length - 4]);
			Ao5.push(Timeelapsed44[Timeelapsed44.length - 5]);
			Ao5 = Ao5.sort();
			Ao5 = Ao5[1] + Ao5[2] + Ao5[3];
			Ao5 = Ao5 / 3;
			Ao5 = Ao5.toString();
			Ao5 = Ao5.charAt(2) + Ao5.charAt(3) + ":" + Ao5.charAt(4) + Ao5.charAt(5) + "." + Ao5.charAt(6) + Ao5.charAt(7);
			document.getElementById("current_ao5").innerHTML = "Current Ao5: " + Ao5;
			document.getElementById("Ao5").innerHTML = "Ao5: " + Ao5;
		}
	}

	if (eventID === 5) {
		var Ao5 = [];
		if (Timeelapsed55.length >= 5) {
			Ao5.push(Timeelapsed55[Timeelapsed55.length - 1]);
			Ao5.push(Timeelapsed55[Timeelapsed55.length - 2]);
			Ao5.push(Timeelapsed55[Timeelapsed55.length - 3]);
			Ao5.push(Timeelapsed55[Timeelapsed55.length - 4]);
			Ao5.push(Timeelapsed55[Timeelapsed55.length - 5]);
			Ao5 = Ao5.sort();
			Ao5 = Ao5[1] + Ao5[2] + Ao5[3];
			Ao5 = Ao5 / 3;
			Ao5 = Ao5.toString();
			Ao5 = Ao5.charAt(2) + Ao5.charAt(3) + ":" + Ao5.charAt(4) + Ao5.charAt(5) + "." + Ao5.charAt(6) + Ao5.charAt(7);
			document.getElementById("current_ao5").innerHTML = "Current Ao5: " + Ao5;
			document.getElementById("Ao5").innerHTML = "Ao5: " + Ao5;
		}
	}

	if (eventID === 6) {
		var Ao5 = [];
		if (Timeelapsed66.length >= 5) {
			Ao5.push(Timeelapsed66[Timeelapsed66.length - 1]);
			Ao5.push(Timeelapsed66[Timeelapsed66.length - 2]);
			Ao5.push(Timeelapsed66[Timeelapsed66.length - 3]);
			Ao5.push(Timeelapsed66[Timeelapsed66.length - 4]);
			Ao5.push(Timeelapsed66[Timeelapsed66.length - 5]);
			Ao5 = Ao5.sort();
			Ao5 = Ao5[1] + Ao5[2] + Ao5[3];
			Ao5 = Ao5 / 3;
			Ao5 = Ao5.toString();
			Ao5 = Ao5.charAt(2) + Ao5.charAt(3) + ":" + Ao5.charAt(4) + Ao5.charAt(5) + "." + Ao5.charAt(6) + Ao5.charAt(7);
			document.getElementById("current_ao5").innerHTML = "Current Ao5: " + Ao5;
			document.getElementById("Ao5").innerHTML = "Ao5: " + Ao5;
		}
	}

	if (eventID === 7) {
		var Ao5 = [];
		if (Timeelapsed77.length >= 5) {
			Ao5.push(Timeelapsed77[Timeelapsed77.length - 1]);
			Ao5.push(Timeelapsed77[Timeelapsed77.length - 2]);
			Ao5.push(Timeelapsed77[Timeelapsed77.length - 3]);
			Ao5.push(Timeelapsed77[Timeelapsed77.length - 4]);
			Ao5.push(Timeelapsed77[Timeelapsed77.length - 5]);
			Ao5 = Ao5.sort();
			Ao5 = Ao5[1] + Ao5[2] + Ao5[3];
			Ao5 = Ao5 / 3;
			Ao5 = Ao5.toString();
			Ao5 = Ao5.charAt(2) + Ao5.charAt(3) + ":" + Ao5.charAt(4) + Ao5.charAt(5) + "." + Ao5.charAt(6) + Ao5.charAt(7);
			document.getElementById("current_ao5").innerHTML = "Current Ao5: " + Ao5;
			document.getElementById("Ao5").innerHTML = "Ao5: " + Ao5;
		}
	}

	if (eventID === 8) {
		var Ao5 = [];
		if (Timeelapsed88.length >= 5) {
			Ao5.push(Timeelapsed88[Timeelapsed88.length - 1]);
			Ao5.push(Timeelapsed88[Timeelapsed88.length - 2]);
			Ao5.push(Timeelapsed88[Timeelapsed88.length - 3]);
			Ao5.push(Timeelapsed88[Timeelapsed88.length - 4]);
			Ao5.push(Timeelapsed88[Timeelapsed88.length - 5]);
			Ao5 = Ao5.sort();
			Ao5 = Ao5[1] + Ao5[2] + Ao5[3];
			Ao5 = Ao5 / 3;
			Ao5 = Ao5.toString();
			Ao5 = Ao5.charAt(2) + Ao5.charAt(3) + ":" + Ao5.charAt(4) + Ao5.charAt(5) + "." + Ao5.charAt(6) + Ao5.charAt(7);
			document.getElementById("current_ao5").innerHTML = "Current Ao5: " + Ao5;
			document.getElementById("Ao5").innerHTML = "Ao5: " + Ao5;
		}
	}

	if (eventID === 9) {
		var Ao5 = [];
		if (Timeelapsed99.length >= 5) {
			Ao5.push(Timeelapsed99[Timeelapsed99.length - 1]);
			Ao5.push(Timeelapsed99[Timeelapsed99.length - 2]);
			Ao5.push(Timeelapsed99[Timeelapsed99.length - 3]);
			Ao5.push(Timeelapsed99[Timeelapsed99.length - 4]);
			Ao5.push(Timeelapsed99[Timeelapsed99.length - 5]);
			Ao5 = Ao5.sort();
			Ao5 = Ao5[1] + Ao5[2] + Ao5[3];
			Ao5 = Ao5 / 3;
			Ao5 = Ao5.toString();
			Ao5 = Ao5.charAt(2) + Ao5.charAt(3) + ":" + Ao5.charAt(4) + Ao5.charAt(5) + "." + Ao5.charAt(6) + Ao5.charAt(7);
			document.getElementById("current_ao5").innerHTML = "Current Ao5: " + Ao5;
			document.getElementById("Ao5").innerHTML = "Ao5: " + Ao5;
		}
	}

	if (eventID === 10) {
		var Ao5 = [];
		if (Timeelapsed10.length >= 5) {
			Ao5.push(Timeelapsed10[Timeelapsed10.length - 1]);
			Ao5.push(Timeelapsed10[Timeelapsed10.length - 2]);
			Ao5.push(Timeelapsed10[Timeelapsed10.length - 3]);
			Ao5.push(Timeelapsed10[Timeelapsed10.length - 4]);
			Ao5.push(Timeelapsed10[Timeelapsed10.length - 5]);
			Ao5 = Ao5.sort();
			Ao5 = Ao5[1] + Ao5[2] + Ao5[3];
			Ao5 = Ao5 / 3;
			Ao5 = Ao5.toString();
			Ao5 = Ao5.charAt(2) + Ao5.charAt(3) + ":" + Ao5.charAt(4) + Ao5.charAt(5) + "." + Ao5.charAt(6) + Ao5.charAt(7);
			document.getElementById("current_ao5").innerHTML = "Current Ao5: " + Ao5;
			document.getElementById("Ao5").innerHTML = "Ao5: " + Ao5;
		}
	}

	if (eventID === 11) {
		var Ao5 = [];
		if (Timeelapsed11.length >= 5) {
			Ao5.push(Timeelapsed11[Timeelapsed11.length - 1]);
			Ao5.push(Timeelapsed11[Timeelapsed11.length - 2]);
			Ao5.push(Timeelapsed11[Timeelapsed11.length - 3]);
			Ao5.push(Timeelapsed11[Timeelapsed11.length - 4]);
			Ao5.push(Timeelapsed11[Timeelapsed11.length - 5]);
			Ao5 = Ao5.sort();
			Ao5 = Ao5[1] + Ao5[2] + Ao5[3];
			Ao5 = Ao5 / 3;
			Ao5 = Ao5.toString();
			Ao5 = Ao5.charAt(2) + Ao5.charAt(3) + ":" + Ao5.charAt(4) + Ao5.charAt(5) + "." + Ao5.charAt(6) + Ao5.charAt(7);
			document.getElementById("current_ao5").innerHTML = "Current Ao5: " + Ao5;
			document.getElementById("Ao5").innerHTML = "Ao5: " + Ao5;
		}
	}

	if (eventID === 12) {
		var Ao5 = [];
		if (Timeelapsed12.length >= 5) {
			Ao5.push(Timeelapsed12[Timeelapsed12.length - 1]);
			Ao5.push(Timeelapsed12[Timeelapsed12.length - 2]);
			Ao5.push(Timeelapsed12[Timeelapsed12.length - 3]);
			Ao5.push(Timeelapsed12[Timeelapsed12.length - 4]);
			Ao5.push(Timeelapsed12[Timeelapsed12.length - 5]);
			Ao5 = Ao5.sort();
			Ao5 = Ao5[1] + Ao5[2] + Ao5[3];
			Ao5 = Ao5 / 3;
			Ao5 = Ao5.toString();
			Ao5 = Ao5.charAt(2) + Ao5.charAt(3) + ":" + Ao5.charAt(4) + Ao5.charAt(5) + "." + Ao5.charAt(6) + Ao5.charAt(7);
			document.getElementById("current_ao5").innerHTML = "Current Ao5: " + Ao5;
			document.getElementById("Ao5").innerHTML = "Ao5: " + Ao5;
		}
	}

	if (eventID === 13) {
		var Ao5 = [];
		if (Timeelapsed13.length >= 5) {
			Ao5.push(Timeelapsed13[Timeelapsed13.length - 1]);
			Ao5.push(Timeelapsed13[Timeelapsed13.length - 2]);
			Ao5.push(Timeelapsed13[Timeelapsed13.length - 3]);
			Ao5.push(Timeelapsed13[Timeelapsed13.length - 4]);
			Ao5.push(Timeelapsed13[Timeelapsed13.length - 5]);
			Ao5 = Ao5.sort();
			Ao5 = Ao5[1] + Ao5[2] + Ao5[3];
			Ao5 = Ao5 / 3;
			Ao5 = Ao5.toString();
			Ao5 = Ao5.charAt(2) + Ao5.charAt(3) + ":" + Ao5.charAt(4) + Ao5.charAt(5) + "." + Ao5.charAt(6) + Ao5.charAt(7);
			document.getElementById("current_ao5").innerHTML = "Current Ao5: " + Ao5;
			document.getElementById("Ao5").innerHTML = "Ao5: " + Ao5;
		}
	}
}

function TimeCount() {
	if (eventID === 2) {
		document.getElementById("TimeCount").innerHTML = "Time List - " + Time22.length + " solves";
	}

	if (eventID === 3) {
		document.getElementById("TimeCount").innerHTML = "Time List - " + Time33.length + " solves";
	}

	if (eventID === 4) {
		document.getElementById("TimeCount").innerHTML = "Time List - " + Time44.length + " solves";
	}

	if (eventID === 5) {
		document.getElementById("TimeCount").innerHTML = "Time List - " + Time55.length + " solves";
	}

	if (eventID === 6) {
		document.getElementById("TimeCount").innerHTML = "Time List - " + Time66.length + " solves";
	}

	if (eventID === 7) {
		document.getElementById("TimeCount").innerHTML = "Time List - " + Time77.length + " solves";
	}

	if (eventID === 8) {
		document.getElementById("TimeCount").innerHTML = "Time List - " + Time88.length + " solves";
	}

	if (eventID === 9) {
		document.getElementById("TimeCount").innerHTML = "Time List - " + Time99.length + " solves";
	}

	if (eventID === 10) {
		document.getElementById("TimeCount").innerHTML = "Time List - " + Time10.length + " solves";
	}

	if (eventID === 11) {
		document.getElementById("TimeCount").innerHTML = "Time List - " + Time11.length + " solves";
	}

	if (eventID === 12) {
		document.getElementById("TimeCount").innerHTML = "Time List - " + Time12.length + " solves";
	}

	if (eventID === 13) {
		document.getElementById("TimeCount").innerHTML = "Time List - " + Time13.length + " solves";
	}
}


 
function updateScroll() {
	var element = document.getElementById("time_list");
	element.scrollTop = element.scrollHeight;
}

Input();
generateScramble();
check();
SaveDataToLocalStorage();
TimeCount();
updateScroll();
currentTime();
currentAverage();
bestAverage();
bestTime();

