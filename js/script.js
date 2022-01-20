// Two methods for timers - setTimeout and SetInterval (single / repeating)


// settimeout is in milliseconds
//setTimeout(simpleMessage,5000);

var myImage = document.getElementById("mainImage");

var imageArray = ["images/gal5.jpg","images/bbb.jpg","images/gal1.jpg","images/ba.jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,3000);

myImage.onclick =  function() {
	clearInterval(intervalHandle);
};
