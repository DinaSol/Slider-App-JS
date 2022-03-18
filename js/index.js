
var sliderRow = document.getElementById('sliderRow');
var overlay = document.getElementById('overlay');
var overlayInner = document.getElementById('overlayInner');
var closeIcon = document.getElementById("close-icon");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var arrowsIcons = document.getElementById('arrow-icons');
var closeIconContainer = document.getElementById('close-icon-container');
var currentOverlayIndex= 0;
var cards=[];
//var cardsArr = Array.from(cardItems);  //ES6


/**********************Display items************************/

var itemsContainer='';
    for(var i =1; i<7 ; i++){
        itemsContainer += `
        <div class="col-md-4 p-3">
            <div class="card-item w-100 " >
                <div  class="card-img-container w-100 ">
                    <img class="card-img w-100 h-100" src="./images/slide-`+ i +`.jpg"/>
                </div>
                <div class="card-text ">
                    <h6>eligendi vitae iure at aut!</h6>
                    <p>Odio adipisci animi esse ab voluptates atque iste nulla aliquam impedit.</p>
                </div>
            </div>
        </div>`;
    }
    sliderRow.innerHTML= itemsContainer;


/******Making Array of images && Add event Click & Display the image of which had clicked********/
var cardImg = document.getElementsByClassName('card-img');

for(var i =0; i< cardImg.length ; i++){
    cards.push(cardImg[i]);
    
    cardImg[i].addEventListener( "click" , function(e){
      displayOverlay(e);
    });
}

/**********************Display Overlay************************/

function displayOverlay(e){
    overlay.classList.add('d-flex');
      var imgSrc = e.target.getAttribute('src');
      overlayInner.style.backgroundImage = "url("+imgSrc+")";
      currentOverlayIndex= cards.indexOf(e.target);
}

/**********************Close overlay when click it************************/
// overlay.addEventListener("click" , function(e){
//     if( e.target != overlayInner  && e.target !=  closeIconContainer && e.target !=  arrowsIcons ){
//         overlay.classList.remove('d-flex');
//     }

// })

/**********************Close overlay when press ESC key************************/
document.addEventListener("keydown", function(e){
    console.log(e.keyCode);
    if(e.keyCode == 27 ){
        overlay.classList.remove('d-flex');
    }
})
/**********************Close Icon************************/
closeIcon.addEventListener("click" , function(){

    overlay.classList.remove('d-flex');
})

/**********************Previous Item************************/
prev.addEventListener('click' , prevItem)

function prevItem(){
    currentOverlayIndex = currentOverlayIndex - 1 ;
    if(currentOverlayIndex < 0 ){
        currentOverlayIndex = cards.length - 1;
    }
    var prevImage=  cards[currentOverlayIndex].getAttribute('src');
    overlayInner.style.backgroundImage = "url("+prevImage+")";
}


/**********************Next Item************************/
function nextItem(){
    
        currentOverlayIndex = currentOverlayIndex + 1;
        if(currentOverlayIndex == cards.length ){
            currentOverlayIndex = 0;
        }
        var nextImage=  cards[currentOverlayIndex].getAttribute('src');
        overlayInner.style.backgroundImage = "url("+nextImage+")";
}
next.addEventListener('click' , nextItem);



/**********************Arrow Keys************************/

document.addEventListener("keydown", function(e){
    if(e.keyCode == 37 ){
        prevItem();
    }
    else if(e.keyCode == 39){
        nextItem();
    }
})

