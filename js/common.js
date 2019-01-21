$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
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

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


	


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");


	/*//masonry
    var $container = $(".masonry-container");
    $container.imagesLoaded(function () {
        $container.masonry({
            columnWidth: ".item",
            itemSelector: ".item"
        });
        $(".item").imagefill();
    });
    $(".gitem").imagefill();*/
});

function cycleText(i)
{
    var arSlogan = ['ДОБРО ПОЖАЛОВАТЬ', 'В', 'IFIR', 'Мебель, сделанная с душой!'];
 
    if(!i || i >= arSlogan.length)
        i = 0;
    $('#w1').text( arSlogan[i] ).fadeIn(1500).fadeOut(1500, function() {
        cycleText(++i);
    });

}
 
cycleText();

$(document).ready(function() {
	function checkWidth() {
	  var windowWidth = $('body').innerWidth(),
		elem = $(".Question1"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
									  // страницу для поиска нужного элемента
		elem1 = $(".separator");
		elem2 = $(".Question2");
	  if(windowWidth < 780){
		elem.removeClass('col-6');
		elem1.removeClass('col-1');
		elem2.removeClass('col-5');
		elem.addClass('col-12');
		elem2.addClass('col-12');
		$("#line").hide()
	  }
	  else{
		elem.removeClass('col-12');
		elem.addClass('col-6');
		elem1.addClass('col-1');
		elem2.removeClass('col-12');
		elem2.addClass('col-5');
		$("#line").show()
	  }
	}
  
	checkWidth(); // проверит при загрузке страницы
  
	$(window).resize(function(){
	  checkWidth(); // проверит при изменении размера окна клиента
	});
  });