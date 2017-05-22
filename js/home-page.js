/*------------------slider-1------------------------*/
let slideIndex = 0;
showSlide(slideIndex);
var timeout = null;

function previous(n) {
  let x = document.getElementsByClassName("slide");
  if (slideIndex==0) {
    slideIndex = slideIndex + x.length-2;
    cleartimeout();
    showSlide(slideIndex);
  }
  else{
      slideIndex= slideIndex-1;
      cleartimeout();
      showSlide(slideIndex -= n);
  }
  if((slideIndex - n) < 0){
    slideIndex = x.length;
    cleartimeout();
    showSlide(slideIndex-=n);
  }
}

function next() {
  cleartimeout();
  showSlide(slideIndex);
}

function currentSlide(n) {
  cleartimeout();
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let i;
  let x = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex = 0}    
  if (n < 0) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" dot-orange", "");
  }
  slideIndex++;
  if(slideIndex > x.length-1){
    slideIndex=0;
    x[x.length-1].style.display = "block";  
    dots[x.length-1].className += " dot-orange";
  }
  else {
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " dot-orange";
  }
  timeout = setTimeout(showSlide,3000);
}
function cleartimeout() {
  clearTimeout(timeout);
}

/*-------------------slider-2----------------------------*/
let slideIndex2 = 0;
showSlide2(slideIndex2);
var timeout2 = null;
function currentSlide2(t) {
  cleartimeout2();
  showSlide2(slideIndex2 = t);
}

function showSlide2(t) {
  let k;
  let l = document.getElementsByClassName("slide-2");
  let dots2 = document.getElementsByClassName("dot-2");
  if (t > l.length) {slideIndex2 = 0}    
  if (t < 0) {slideIndex2 = k.length}
  /*console.log("slide 2: " + slideIndex2);*/
  for (k = 0; k < l.length; k++) {
     l[k].style.display = "none";  
  }
  for (k = 0; k < dots2.length; k++) {
     dots2[k].className = dots2[k].className.replace(" dot-orange-2", "");
  }
  slideIndex2 ++;
  if(slideIndex2 > l.length-1){
    slideIndex2 = 0;
    l[l.length-1].style.display = "block";  
    dots2[l.length-1].className += " dot-orange-2";
  }
  else{
    l[slideIndex2-1].style.display = "block";  
    dots2[slideIndex2-1].className += " dot-orange-2";
  }
  timeout2 = setTimeout(showSlide2,3500); 
}
function cleartimeout2() {
  clearTimeout(timeout2);
}
/*-------------------slider-3----------------------------*/
let slideIndex3 = 1;
showSlide3(slideIndex3);

function previous3(h) {
    showSlide3(slideIndex3 += h);
}
function next3(h) {
    showSlide3(slideIndex3 += h);
}

function showSlide3(h) {
    let j;
    let m = document.getElementsByClassName("slide-3");
    if (h > m.length) {slideIndex3 = 1} 
    if (h < 1) {slideIndex3 = m.length} ;
    for (j = 0; j < m.length; j++) {
        m[j].style.display = "none"; 
    }
    m[slideIndex3-1].style.display = "flex"; 
}
/*----------------nav-respone---------------*/
function topNav() {
    let x = document.getElementById("topNav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }

}