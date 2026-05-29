const images = [

"https://placehold.co/800x400?text=Image+1",
"https://placehold.co/800x400?text=Image+2",
"https://placehold.co/800x400?text=Image+3",
"https://placehold.co/800x400?text=Image+4",
"https://placehold.co/800x400?text=Image+5"

];

let currentIndex = 0;
let slideshow = null;

const mainImage =
document.querySelector("#mainImage");

const modal =
document.querySelector("#imageModal");

const modalImage =
document.querySelector("#modalImage");

const playBtn =
document.querySelector("#playBtn");

const palette =
document.querySelector("#palette");

const commandInput =
document.querySelector("#commandInput");

const commandList =
document.querySelector("#commandList");

const commands = [
    "Open Gallery",
    "Next Image",
    "Previous Image",
    "Play Slideshow",
    "Pause Slideshow",
    "Close Modal"
];

function renderImage(){

    mainImage.src =
    images[currentIndex];

}

function nextImage(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    renderImage();
}

function prevImage(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex =
        images.length - 1;
    }

    renderImage();
}

document
.querySelector("#nextBtn")
.addEventListener("click",nextImage);

document
.querySelector("#prevBtn")
.addEventListener("click",prevImage);

mainImage.addEventListener("click",()=>{

    modal.classList.remove("hidden");

    modalImage.src =
    images[currentIndex];

});

function toggleSlideshow(){

    if(slideshow){

        clearInterval(slideshow);

        slideshow = null;

        playBtn.textContent =
        "▶ Play";

    }else{

        slideshow =
        setInterval(nextImage,2000);

        playBtn.textContent =
        "⏸ Pause";
    }

}

playBtn.addEventListener(
"click",
toggleSlideshow
);

document.addEventListener(
"keydown",
(e)=>{

    if(
        document.activeElement ===
        commandInput
    ){
        return;
    }

    if(e.key==="ArrowRight"){
        nextImage();
    }

    if(e.key==="ArrowLeft"){
        prevImage();
    }

    if(
        e.key >= "1" &&
        e.key <= "9"
    ){

        const index =
        Number(e.key)-1;

        if(index < images.length){

            currentIndex = index;

            renderImage();
        }

    }

    if(e.code==="Space"){

        e.preventDefault();

        toggleSlideshow();
    }

    if(e.key==="Escape"){

        modal.classList.add("hidden");

        palette.classList.add("hidden");
    }

    if(
        e.ctrlKey &&
        e.key==="k"
    ){

        e.preventDefault();

        palette.classList.remove("hidden");

        commandInput.focus();

        renderCommands(commands);
    }

});

function renderCommands(list){

    commandList.innerHTML = "";

    list.forEach(command=>{

        const li =
        document.createElement("li");

        li.textContent = command;

        commandList.appendChild(li);

    });

}

commandInput.addEventListener(
"input",
()=>{

    const keyword =
    commandInput.value.toLowerCase();

    const filtered =
    commands.filter(command=>

        command
        .toLowerCase()
        .includes(keyword)

    );

    renderCommands(filtered);

});

commandInput.addEventListener(
"keydown",
(e)=>{

    if(e.key==="Escape"){

        palette.classList.add("hidden");
    }

    if(e.key==="Enter"){

        alert(
            "Selected: " +
            commandInput.value
        );

        palette.classList.add("hidden");
    }

});

modal.addEventListener(
"click",
()=>{

    modal.classList.add("hidden");

});

renderImage();