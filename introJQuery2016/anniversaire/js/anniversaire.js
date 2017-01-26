$(function(){
    var
    $action = $('#action')
    $clickMe = $('#clickMe')
    $item1 = $('.item1');
    $item2 = $('.item2');
    $item3 = $('.item3');
    $card = $('.card');
    $p = $('p');
    $h1 = $('h1');
    $audio = $('audio');
    aSound = document.createElement('audio');

    $action.on('click',function(){
        $clickMe.remove();
        $item1.slideDown();
    }),
    $item1.on('click',function(){
        $item2.slideDown();
    }),
    $item2.on('click',function(){
        $item3.slideDown();
    });
    $item3.on('click',function(){
        $p.text(' Happy B-DAY!!!! ');
        $h1.css('background-color', 'initial');
        $card.css('background-image', 'url(bday.png)')
            .css('background-size', 'cover')
            .css('background-repeat', 'no-repeat')
            .css('background-position', 'center');
        $item1.slideUp(600).delay(800).fadeIn(1000);
        $item2.slideUp(600).delay(1000).fadeIn(1600);
        $item3.slideUp(600).delay(1400).fadeIn(1800);

         aSound.setAttribute('src', 'birthday1.wav');
         aSound.play();
    });
});


//this makes the music playing
/*var aSound = document.createElement('audio');
 aSound.setAttribute('src', 'beep.wav');
 aSound.play();*/
