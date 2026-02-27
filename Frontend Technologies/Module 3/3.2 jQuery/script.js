function action1(){
    $("div p").replaceWith(replacementFn)
}

function replacementFn(){
    return '<a href="https://youtube.com">' + $(this).text() + '</a>'
}

function action2(){
    $("a").hover(hoverToggleUp, hoverToggleDown)
}

function hoverToggleUp(){
    $(this).css("font-size", "20px");
}

function hoverToggleDown(){
    $(this).css("font-size", "15px");
}

function action3(){
    $("p").fadeOut();
    $("button").slideUp();
}