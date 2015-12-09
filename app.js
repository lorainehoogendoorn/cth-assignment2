var image = document.getElementById('image'); 

//This function is to rotate the image. When the angle reaches 360 degrees it goes back to 0
var angle = 0;
var turnImage = function() {
    angle+=90;
    image.style.transform = 'rotate('+angle+'deg)';
    console.log("click registered");
    if(angle === 360) {
        angle = 0;
    }
};

// button to check whether you have the right side up
var Guess = function () {
    if(angle === 0) {
        alert("Yes, this is the right way up!");
    }
    else {
        alert("Too bad... Keep trying!");
    }
};

var images = [
src="image1.jpg", 
src="image2.jpg", 
src="image3.jpg",
src="image4.jpg"
];

var angle = 0;
var imageNumber = 0;

var next = function(){
    imageNumber+=1;
    if (imageNumber === images.length){
        imageNumber=0;
    }
    turnImage();  
    image.src = images[imageNumber];
    console.log("click registered");
};

var prev = function(){
    imageNumber-=1;
    if (imageNumber === -1){
        imageNumber = images.length-1;
    }
    turnImage();  
    image.src = images[imageNumber];
    console.log("click registered");
};


