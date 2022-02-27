// creating an array to acces the contents in case of less number of items
// if we have large number of items we use APIs

console.log("JS file ran");
const menuItems=[
    { 
        id:"1",        
        food:"Food item 1",
        oneliner:"one:Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, debitis.",
        image:"img/food1.jpg",
        hotel:"Hotel name 1",
        about:"one:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam natus, hic iusto consequuntur eveniet totam architecto eius quia iure neque."

    },
    {
        id:"2",
        food:"Food item 2",
        oneliner:"two:Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, debitis.",
        image:"img/food2.jpg",
        hotel:"Hotel name 2",
        about:"two:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam natus, hic iusto consequuntur eveniet totam architecto eius quia iure neque."

    },
    {
        id:"3",
        food:"Food item 3",
        oneliner:"three:Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, debitis.",
        image:"img/food3.jpg",
        hotel:"Hotel name 3",
        about:"three:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam natus, hic iusto consequuntur eveniet totam architecto eius quia iure neque."

    },
    {
        id:"4",
        food:"Food item 4",
        oneliner:"four:Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, debitis.",
        image:"img/food4.jpg",
        hotel:"Hotel name 4",
        about:"four:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam natus, hic iusto consequuntur eveniet totam architecto eius quia iure neque."

    },
    {
        id:"5",
        food:"Food item 5",
        oneliner:"five:Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, debitis.",
        image:"img/food5.jpg",
        hotel:"Hotel name 5",
        about:"five:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam natus, hic iusto consequuntur eveniet totam architecto eius quia iure neque."

    }
]
const food=document.getElementById('food');
const oneliner=document.getElementById('oneliner');
// try to use getElementById
const image=document.getElementById('food1');
const hotel=document.getElementById('title-2');
const about=document.getElementById('about');
const next=document.getElementById('next');
const random=document.getElementById('random');
const prev=document.getElementById('prev');

let currentMenu=3;
console.log("before array run");
// the below function is called when the window is loaded
window.addEventListener('DOMContentLoaded',function (){
    // stroing array contents in one variable
    // console.log("this is array run");
    // let menu=menuItems[currentMenu];
    // food.textContent=menu.food;
    // oneliner.textContent=menu.oneliner;
    // image.src=menu.image;
    // hotel.textContent=menu.hotel;
    // about.textContent=menu.about;
    // now the data is being displayed from javascript and not from html
    allMenu(currentMenu)
});
const allMenu=()=>{
 
    let menu=menuItems[currentMenu];
    food.textContent=menu.food;
    oneliner.textContent=menu.oneliner;
    image.src=menu.image;
    hotel.textContent=menu.hotel;
    about.textContent=menu.about;
}

// random menu
random.addEventListener('click',()=>{
    console.log("Random button clicked");
    // math.random returns any number b/w 0 and 1j
    currentMenu=Math.floor(Math.random()*menuItems.length); 
    console.log(currentMenu);
    allMenu(currentMenu);
})

// prev button
prev.addEventListener('click',()=>{
    console.log("previous button clicked");
    currentMenu--;
    if(currentMenu>=0)
    {

        allMenu(currentMenu);
    }
    if(currentMenu==-1)
    {
        currentMenu=4;
        allMenu(currentMenu);
    }
    
});

// next button
next.addEventListener('click',()=>{
    console.log("next button clicked");
    currentMenu++;
    if(currentMenu>=0 && currentMenu<5)
    {

        allMenu(currentMenu);
    }
    if(currentMenu==5)
    {
        currentMenu=0;
        allMenu(currentMenu);
    }
})