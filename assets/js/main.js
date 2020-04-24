$(document).ready(function(){

	//динамическая регулировка высоты левой части сайта
	function resize_text_page(){
		if ($(".text_page").length > 0) {
			var height = $(".text_page .right_part").outerHeight();
			$(".text_page .left_part").height(height);
		}
	}

	$(window).on("resize", function(){
		resize_text_page();
	})

	resize_text_page();

	// просчет даты доставки
	function get_delivery_date(){
		// текущая дата
		var date = new Date(),
			tomorrow = new Date(),
			h = date.getHours(),
			m = date.getMinutes(),
			day = 'сегодня',
			day_numb = date.getDate(),
			month = date.getMonth(),
			monthes = ["Января","Февраля","Марта","Апреля","Марта","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];


			tomorrow.setDate(date.getDate()+1);
			var date = true;

		if (h >= 18) {
			date = '9:00';
			day = 'завтра';
			day_numb = tomorrow.getDate(),
			month = tomorrow.getMonth();
		}
		else if(h < 7){
			date = '9:00';
		}
		else{
			if (m<10) {m = '0'+m;}
			date = (h+2)+':'+m;
		}

		return {
			'date': date,
			'day': day,
			'day_numb': day_numb,
			'month': monthes[month]
		}
		
	}

	var ship_date = get_delivery_date();

	if ($('#first_screen').length > 0) {
		$("#first_screen .ship_wrap.desktop>span").html("Доставим "+ship_date.day+":")
		$("#first_screen .ship_wrap.desktop .when .hours").html(ship_date.date)
	}
	if ($('#first_screen.product').length > 0) {
		$("#first_screen.product .details .hr+p.desktop").html("Доставим "+ship_date.day+" на <span>"+ship_date.date+"</span>")
	}
	if ($('#first_screen.catalog').length > 0) {
		$("#first_screen.catalog .catalog_head .ship_on.desktop").html("<p>Доставим "+ship_date.day+" на </p><p><span>"+ship_date.date+"</span></p>")
	}

	if ($('.mob.ship_mob').length > 0) {
		// $("#first_screen .mob.ship_mob li:first-child div.text p+p").html("<span>"+ship_date.day_numb+"</span> "+ship_date.month+" <span>"+ship_date.date+"</span>")
		$("#first_screen .mob.ship_mob li:first-child div.text p+p").html(ship_date.day+" на "+ship_date.date+"</span>")
	}


	// фиксированный хедер

	$(window).on("scroll", function(){
		if ($(window).scrollTop() < 60) {
			$('header').removeClass('fixed');
		}
		else{
			$('header').addClass('fixed');
		}
	})


	//прелоадер

	function hide_preloader(){
		setTimeout(function(){
			$(".preloader_img").animate({
				top : '270px'
			}, 1000);
		}, 1000)

		setTimeout(function(){
			$(".preloader .bg_wrap .logo").css("filter" , 'blur(15px)');
		}, 2000)

		setTimeout(function(){
			$(".preloader .bg_wrap .logo").animate({
				opacity : '0'
			}, 500);
		}, 2000)

		setTimeout(function(){
			$(".preloader").animate({
				height : '0'
			}, 500);
		}, 3000)

		setTimeout(function(){
			$("body.loading").removeClass("loading")
		}, 3000)

	}

	//заставка меж страницами
	function hide_preloader_between_pages(){
		$(".preloader_between_pages").css("left" , "0");
		setTimeout(function(){
			$(".preloader_between_pages").animate({
				"left" : "-100vw",
			}, 1500);
		}, 1500)
		setTimeout(function(){
			$("body.loading").removeClass("loading")
		}, 2500)
	}


	// анимация появления левого блока главной страницы

	function cut_animation(start){

		setTimeout(function(){
			$("#first_screen .flex-wrap>.left_part .animation_overlay>div:nth-child(1)").animate({
				width : '0'
			}, 600);
		}, start+400)

		setTimeout(function(){
			$("#first_screen .flex-wrap>.left_part .animation_overlay>div:nth-child(2)").animate({
				width : '0'
			}, 600);
		}, start+200)

		setTimeout(function(){
			$("#first_screen .flex-wrap>.left_part .animation_overlay>div:nth-child(3)").animate({
				width : '0'
			}, 600);
		}, start)

	}

	// появление контента первого экрана главной страницы
	function first_screen_fadein(start){

		// только для десктопа
		if (window_width >= 1040) {
			// заголовк
			setTimeout(function(){
				$("h1.first_screen_fadein").css("filter" , 'blur(0)');
				$("h1.first_screen_fadein").animate({
					opacity : '1'
				}, 500);
			}, start+200)

			// лого
			setTimeout(function(){
				$("img.first_screen_fadein").animate({
					opacity : '1'
				}, 1500);
			}, start+1000)

			// меню
			setTimeout(function(){
				$("nav.first_screen_fadein").animate({
					opacity : '1'
				}, 1500);
			}, start+1500)

			// полоска под заголовком
			$(".hr.first_screen_fadein").css({
				"width" : '55vw',
				"left" : '75vw',
				'opacity' : '1'
			});

			setTimeout(function(){
				$(".hr.first_screen_fadein").animate({
					"left" : '45%',
				}, 1000);
			}, start+1500)

			setTimeout(function(){
				$(".hr.first_screen_fadein").animate({
				"width" : '140px',
				}, 1000);
			}, start+1500)


			//блок с ближайшей доставкой
			setTimeout(function(){
				$(".ship_wrap.first_screen_fadein").animate({
					opacity : '1'
				}, 1000);
			}, start+3500)

			// кнопка перехода в каталог
			setTimeout(function(){
				$(".go_to_catalog.first_screen_fadein").css({
					"opacity": "1",
					"width" : "60vw",
					"right" : "100vw",
    				"color": "#403f3e",
				});

				$(".go_to_catalog.first_screen_fadein .hr").css({
    				"width": "0",
    				"left" : "310px",
				});

				$(".go_to_catalog.first_screen_fadein").animate({
					"right" : '40vw'
				}, 1000);
			}, start+3000)


			setTimeout(function(){

				$(".go_to_catalog.first_screen_fadein").animate({
					"width": "310px",
    				"left" : "0",
				}, 1000);

			}, start+3800)

			setTimeout(function(){
				$(".go_to_catalog.first_screen_fadein").css({
    				"color": "#fff"
				});
				$(".go_to_catalog.first_screen_fadein .hr").animate({
					"width": "280px",
    				"left" : "30px",
				}, 1000);

			}, start+5000)

			setTimeout(function(){
				$(".go_to_catalog.first_screen_fadein .hr").animate({
					"width": "55px"
				}, 1000);

			}, start+6000)
			

		}
		else{
			$("h1.first_screen_fadein").css("filter" , 'blur(0)');
			$(".first_screen_fadein").css("opacity", "1");
			$(".go_to_catalog.first_screen_fadein").css("overflow", "initial");
		}

	}

	//анимация блока с мессенджером

	function messages_animation(start){
		setTimeout(function(){
			$(".messages_animation:nth-child(1) img").animate({
				"opacity" : 1,
				"width": "190px",
				"height": "25px"
			}, 500);

		}, start)

		setTimeout(function(){

			$(".messages_animation:nth-child(2) img").animate({
				"opacity" : 1,
				"width": "220px",
				"height": "250px"
			}, 500);

		}, start+1000)

		setTimeout(function(){
			$(".messages_animation:nth-child(3) img:nth-child(1)").animate({
				"opacity" : 1,
				"width": "68px",
				"height": "25px"
			}, 500);

		}, start+2000)

		setTimeout(function(){

			$(".messages_animation:nth-child(3) img:nth-child(2)").animate({
				"opacity" : 1,
				"width": "8px",
				"height": "8px"
			}, 500);

		}, start+2500)

	}

	//анимация блока с трендами

	function trends_animation(start, status){
		if (!status) {return}
		$(".big.trend_item .hr").css({
		    width: "0",
			left: "0"
		});

		setTimeout(function(){

			$(".big.trend_item .hr").animate({
				"width" : "100%",
			}, 500);

		}, start+500)

		setTimeout(function(){

			$(".big.trend_item .hr").animate({
				"width" : "55px",
				"left" : "95%",
			}, 500);

		}, start+1000)

	}


	// чистка кода после анимаций
	function clear_animation_helpers(start){

		setTimeout(function(){
			$(".animation_overlay, .preloader").remove();		
		}, start)
	}

	// алгоритм запуска анимаций

	if ($("#first_screen").hasClass("main")) {
		hide_preloader();
		var window_width = $(window).width();
		cut_animation(4000);
		first_screen_fadein(4400);

		var messages_animation_init = false;
		$(window).on("scroll", function(){
			if ($(window).scrollTop() > ($("#fourth_screen").offset().top - 400) && !messages_animation_init) {
				messages_animation(0);
				messages_animation_init = true;
			}
			
		})

		var	status = true;
		
		$(".trend_item.big").on("mouseover", function(){
			trends_animation(0, status);
			$(this).removeClass("trends_animation")
		})

		$(".trend_item.big").on("mouseout", function(){
			$(this).addClass("trends_animation");
			status = false;
		})

	}
	else{
		hide_preloader_between_pages();
	}
	clear_animation_helpers(5000);


	// scroll top

	$('.scroll_top').on('click', function(){
	    $('html, body').animate({scrollTop:0}, 'slow');
	});


	//отображаем заставку

	$("a").on("click", function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		if ( href != '#') {
			$(".preloader_between_pages").animate({
				"left" : "0",
			}, 1500);
			setTimeout(function(){
				window.location.href = href;
			}, 1500)
		}
	})

	//Фильтры в каталоге

	$(".filter_item.color h4").on("click", function(){
		$(".filter_item.color .control").slideToggle();
		$(this).find("div.arrow").toggleClass("active");
	})


	$(".filter_item.price h4").on("click", function(){
		$(".filter_item.price .control").slideToggle();
		$(this).find("div.arrow").toggleClass("active");
	})

	if($("#slider-snap").length>0){

		var snapSlider = document.getElementById('slider-snap');
		var range = {
		  'min': 0,
		  '0%': 0,
		  '5%': 100,
		  '10%': 200,
		  '15%': 300,
		  '20%': 400,
		  '25%': 500,
		  '30%': 600,
		  '35%': 700,
		  '40%': 800,
		  '45%': 900,
		  '50%': 1000,
		  '55%': 1100,
		  '60%': 1200,
		  '65%': 1300,
		  '70%': 1400,
		  '75%': 1500,
		  '80%': 1600,
		  '85%': 1700,
		  '90%': 1800,
		  '95%': 1900,
		  '100%': 2000,
		  'max': 2000
		};



		noUiSlider.create(snapSlider, {
			start: [ 0, 1500 ],
			snap: true,
			connect: true,
		  	tooltips: true,
			range: range,
		    format: wNumb({
		        decimals: 0
		    }),
		});

		$('#range').text(JSON.stringify(range, null, '\t'));
	}


	$(".cats>li").on("click", function(){
		$(".filter_item.categories .hr").css("width", "0");
		$(".cats>li ul").slideUp();
		$(this).find("ul").slideDown();
		$(this).find("div.arrow").toggleClass("active");

		var this_elem = $(this);
		setTimeout(function(){
			var li_position = this_elem.offset().top - $(".filter_item.categories").offset().top+5;
			$(".filter_item.categories .hr").css("top", li_position+"px");
			$(".filter_item.categories .hr").css("left", "100%");
			setTimeout(function(){
				$(".filter_item.categories .hr").animate({
					"left" : "-100px",
					"width" : "100%",
				}, 1500);
			}, 500)
			setTimeout(function(){
				$(".filter_item.categories .hr").animate({
					"width" : "85px",
				}, 1000);
			}, 1000)
		}, 500)
	})

	$(".choosed_contact button").on("click", function(){
		$(".contacts_wrap .contacts_list").toggleClass("active")
	})
	
})


