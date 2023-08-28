
// toggle menu button
function toggleMenu(){
    console.log("toggleMenu() called");
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}


// To change the bg videos by clicking on the gallery images..

function changeVideo(name){
    const bgVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');


//JavaScript higher order array function forEach
// makes easier to mapp data
    bgVideoList.forEach(video =>{
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active')
        }
    });

//Changing model names 

models.forEach(model =>{
    model.classList.remove('active');
    if(model.classList.contains(name)){
        model.classList.add('active')
    }
});

//Changing trailers per model

trailers.forEach(trailer =>{
    trailer.classList.remove('active');
    if(trailer.classList.contains(name)){
        trailer.classList.add('active')
    }
});

}


