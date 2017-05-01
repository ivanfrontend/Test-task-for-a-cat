// функция для бокового меню
$('.menuActiv').click(function(){
	$(this).children(".noneActiv").slideToggle("slow");
});
// Конец
// Функция для подстановки цены и веса 
$('.contenerSum').click(function(){
	var textSum1 = $(this).children(".sumPozition").text();
	var textSum2 = $(this).children(".vesPozition").text();
	$(this).parent(".activSpisok").siblings(".textLeft").text(textSum1);
	$(this).parent(".activSpisok").siblings(".textRighet").text(textSum2).append(' <img src="img/navig1.png" alt="strelka1">');
	var numberSum = parseInt(textSum1);
});
// конец
// Все функции для всплыаёщего меню
// для счётчика + -
	var Kolichestvo = 1;
	var gt = 0; 
	var gg = 0;
	$(".plus").click(function(){
		Kolichestvo++;
		$(".int").text(Kolichestvo);
		gt = $('.itogSum').text();
		gg = $('#optionsPostRighet').text();
		gg = parseInt(gg);
		gt = parseInt(gt);
		$('.itogSum').text(gt + gg);
});

	$(".minus").click(function(){
		Kolichestvo--;
		if(Kolichestvo < 0){
			Kolichestvo = 0;
		}

		$(".int").text(Kolichestvo);
		gt = $('.itogSum').text();
		gg = $('#optionsPostRighet').text();
		gg = parseInt(gg);
		gt = parseInt(gt);
		if(Kolichestvo === 0){
			gg = 0;
			gt = 0;
		}
		$('.itogSum').text(gt - gg);	
	});
	// функция для карзины 
	$('.karzina').click(function(event){
		event.preventDefault();
		$('.korzina1').toggle('slow');
		$('.karzina').attr('disabled', true);
		var sumZakaz = $(this).parent(".divButton").parent(".buttonActiv").siblings(".sum").children(".textLeft").text();
		sumZakaz = parseInt(sumZakaz);
		$('#optionsPostRighet').text(sumZakaz);
		$('.itogSum').text(sumZakaz);
		zag = $(this).parent(".divButton").parent(".buttonActiv").siblings(".wrapPost").children(".zag").text();
		$('.zagPost').text(zag);
	});
	// конец
	// функция для закрытия всплывающего меню
	$('.clozeImg').click(function(){
		$('.korzina1').toggle('slow');
		$('.karzina').attr('disabled', false);
		$(".int").text(Kolichestvo = 1);
	});
	// конец 
// конец функций для всплывающего окна
