$(document).ready(function () {

//creates grid
function makeGrid() {
for (let i = 0; i < 64; i++) {
    $('.grid').append(
        $('<div>').addClass('cell')
    )
}
}
makeGrid()


//assigns different colors to Palette
const Palette = [
    'red',
    'blue',
    'green',
    'orange',
    'yellow',
    'purple',
    'teal',
    'brown'
];


//cycles through Palette array, creates new button and assigns color 
function makePalette() { 
    for (let index = 0; index < Palette.length; index = index + 1) {
        const nextColor = Palette[index];
        const newButton = $('<button>');
        $('.palette').append(newButton);
        newButton.css('backgroundColor', nextColor);
    }
    $('.palette button').first().addClass('active');
}
makePalette()



//adds or removes golden border and rotation from palette button
function onPaletteClick() {
    $('button').removeClass('active');
    $(this).addClass('active');
   }
   $('.palette button').click(onPaletteClick);


//takes current active palette color and adds grid click function 
   function onGridClick () {
    const clickColor = $('.palette button.active').css('background-color');
    let target = $(this);
    if (target.css('background-color') === clickColor) {
    target.css('background-color', '')
    } else {
    target.css('background-color', clickColor);
    }
    }
    $('.grid .cell').click(onGridClick);


//adds clear function to control clear all button
function onClearClick() {
    $('.grid .cell').css('background-color','');
}
$('.controls .clear').click(onClearClick);


//adds fill all function to fill all button
function onFillAllClick(){
    const clickColor = $('.palette button.active').css('background-color');
    $('.grid .cell').css('background-color', clickColor);
}
$('.controls .fill-all').click(onFillAllClick);


//adds fill function to fill empty cells 
function onFillEmptyClick () {
        const elements = $('.grid .cell');
        const clickColor = $('.palette button.active').css('background-color');
    for (let index = 0; index < elements.length; index = index + 1) {
        let nextElement = $( elements[index] );
        if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {
        nextElement.css('background-color', clickColor);
        }    
    }    
    }
 $('.controls .fill-empty').click(onFillEmptyClick);


 //adds new color button to palette
 $('.addColorButton').click(function () {
     const newColor = $('.addColor').val();
     const newButton = $('<button>');
     $('.palette').prepend(newButton);
    newButton.css('background-color', newColor);
    $('.palette button').removeClass('active');
    $('.palette button').click(onPaletteClick);
    newButton.addClass('active');
 });

 $('.palette button').click(onPaletteClick);

 //removes new color button from palette
 $('.removeColorButton').click(function () {
    $('.palette button').first().remove();
});


//adds drag function to mouseedown/mouseenter on grid
const mouseIsDown = 'false';
$(document).mousedown(function (){
    isDown=true;
})
$(document).mouseup(function(){
    isDown = false;
})
$(".grid .cell").mouseenter(function () {
    if (isDown) {
    const clickColor = $('.palette button.active').css('background-color');
    $(this).css('background-color', clickColor)
    }
  });

});