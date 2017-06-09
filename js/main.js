$(function(){

	$(".carousel").owlCarousel({
    	singleItem: true,
    	navigation: true,
    	navigationText: false
    });

    var mixer = mixitup('.mix_box');

	$('.btn_menu').click(function(){
	$('.menu ul').slideToggle();
	});

	$(".carousel_2").owlCarousel({
    	items: 2,
    	itemsDesktop: 2,
    	itemsDesktopSmall: 1,
    	itemsTablet: 1
    });

    // $('.instructors li').click(function(){
    //     $('.string').css({"background-color":"#7d7d7e"});
    //     $('.string', this).css({"background-color":"#ff6600"});
    //     $('.string i', this).css({"transition":"all, .5s", "transform":"rotate(90deg)"});
    //     $('.description', this).slideToggle(500);
    // });


    $('.instructors li').hover(function(){
        $('.description', this).slideDown(100);   
    },function(){
        $('.description', this).slideUp(100);            
    });

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $("#menu, #top_btn").on("click","a", function (event) {
     //отменяем стандартную обработку нажатия по ссылке
        // event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

});