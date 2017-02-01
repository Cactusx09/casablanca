$(document).ready(function () {
	if ($('*').is('#preloader')){
		if(window.matchMedia('(min-width: 700px)').matches){
			window.onload = function(){
				preloader.className = 'done';
			};
		}else{
			preloader.remove();
		}
	}
	//first screen bg slider
	if ($('*').is('.s_first') && window.matchMedia('(min-width: 700px)').matches){
		var bg_slider = $(".s_first");
		bg_slider.vegas({
			slides: [{
				src: "/images/bg_slider/1.jpg"
			}, {
				src: "/images/bg_slider/2.jpg"
			}, {
				src: "/images/bg_slider/3.jpg"
			}, {
				src: "/images/bg_slider/4.jpg"
			}, {
				src: "/images/bg_slider/5.jpg"
			}, {
				src: "/images/bg_slider/1.jpg"
			}],
			delay: 12000
		});
	}
	//mobile fix for card page
	if(window.matchMedia('(max-width: 1470.5px)').matches){
		$('.s_card__right').insertAfter('.s_card__left_more');
	}
	$(window).resize(function(){
		if(window.matchMedia('(max-width: 1470.5px)').matches){
			$('.s_card__right').insertAfter('.s_card__left_more');
		}else{
			$('.s_card__right').insertAfter('.s_card__left');
		}
	});
	//gallery blocks
	if ($('*').is('.s_3d__gallery')) {
		$('.s_3d__gallery').waterfall();
	}
	//card popup
	$('.s_card__calendar_tabcol span').click(function(){
		$('.popup._teacher, .overlay').addClass('visible');
		var px = window.pageYOffset;
		$('.popup').css('top',px+'px');
		$('.popup__form_teacher2 span').last().find('small').text($(this).text());
	});
	//teachers slider
	var sl_teachers, sl_teachers2, sl_teachers_n = 3;
	if ($('*').is('.s_teachers__slider_wrp')) {
		var $frame = $('.s_teachers__slider_wrp');
		var sl_teachers = new Sly($frame, {
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateOn: 'click',
			activateMiddle: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			elasticBounds: 1,
			dragHandle: 1,
			prev: $frame.prev('.container').find('.s_teachers__arr_left'),
			next: $frame.prev('.container').find('.s_teachers__arr_right')
		}).init();
		sl_teachers.on('change', function (eventName) {
			var n = $frame.find('li').length-1;
			sl_teachers_n = this.rel.activeItem;
        	if(sl_teachers_n==n){
				$frame.prev('.container').find('.s_teachers__arr_right').addClass('disabled');
			}
        });
	}
	//abonements toogle
	$('.s_price__item_arr').click(function () {
		$(this).closest('.s_price__item').toggleClass('active');
	});
	//baner slider
	if ($('*').is('.s_baner__slider')) {
		var $baner = $('.s_baner__slider');
		$baner.lightSlider({
			item: 1,
			adaptiveHeight: true,
			controls: false
		});
	}
	//tabs
	$('.s_reviews__right_item').click(function () {
		var n = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.s_reviews__left').find('li').eq(n).addClass('current').siblings().removeClass('current');
	});
	//custom scroll
	$('._scroll, .s_card__calendar').perfectScrollbar();
	$(window).resize(function () {
		$('._scroll, .s_card__calendar').perfectScrollbar('update');
	});
	//closest slider
	if ($('*').is('.s_closest__slider')) {
		var $closest = $('.s_closest__slider');
		$closest.lightSlider({
			item: 3,
			adaptiveHeight: true,
			controls: false,
			pager: false,
			loop: true,
			slideMargin: 30,
			responsive : [
				{
					breakpoint:930,
					settings: {
						item:2
					  }
				},
				{
					breakpoint:570,
					settings: {
						item: 1
					  }
				}
			]
		});
		$('.s_closest__arr_left').click(function () {
			$closest.goToPrevSlide();
		});
		$('.s_closest__arr_right').click(function () {
			$closest.goToNextSlide();
		});
	}
	//phone mask
	$('input[name="phone"]').mask('+7 (999) 999-99-99');
	if($('*').is('.s_event__slider')){
		$('.s_event__slider').lightSlider({
			item: 1,
			adaptiveHeight: true,
			controls: false,
			slideMargin: 0
		});
	}
	//validate
	$("form").each(function (index) {
		var it = $(this);
		it.validate({
			rules: {
				name: {
					required: true
				},
				mail: {
					required: true
				},
				phone: {
					required: true
				}
			},
			messages: {},
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$.ajax({
					type: "POST",
					url: "../mail.php",
					data: it.serialize()
				}).done(function () {
					$('.popup').removeClass('visible');
					$('.popup.thnx, .overlay').addClass('visible');
					setTimeout(function () {
						if ($('.popup.thnx').hasClass('visible')) {
							$('.popup.thnx, .overlay').removeClass('visible');
						}
						$('form').each(function () {
							$(this)[0].reset();
						});
					}, 2800);
				});
				return false;
			},
			success: function () {},
			highlight: function (element, errorClass) {
				$(element).addClass('error');
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).removeClass('error');
			}
		});
	});
	//case slider
	if ($('*').is('.s_case__slider')) {
		var $case = $('.s_case__slider');
		$case.lightSlider({
			item: 5,
			adaptiveHeight: true,
			controls: false,
			pager: false,
			responsive : [
				{
					breakpoint:1470,
					settings: {
						item:4
					  }
				},
				{
					breakpoint:1200,
					settings: {
						item:3
					  }
				},
				{
					breakpoint:840,
					settings: {
						item:2
					  }
				},
				{
					breakpoint:570,
					settings: {
						item:1
					  }
				}
			]
		});
		$('.s_case__arr_left').click(function () {
			$case.goToPrevSlide();
		});
		$('.s_case__arr_right').click(function () {
			$case.goToNextSlide();
		});
	}
	//cards slider
	if ($('*').is('.s_style__cards')) {
		var sl_cards = $('.s_style__cards').flipster({
			nav: true,
			touch: true,
			scrollwheel: false
		});
	}
	//fixed menu
	if ($('*').is('.s_first__nav')) {
		var elementPosition = $('.s_first__nav').offset();
		$(window).scroll(function () {
			if ($(window).scrollTop() > elementPosition.top) {
				$('.s_first__nav').addClass('_fixed');
			} else {
				$('.s_first__nav').removeClass('_fixed');
			}
		});
	}
	//fixed back
	if ($('*').is('.back')) {
		var elemePosition = $('.back').offset();
		$(window).scroll(function () {
			if ($(window).scrollTop() > elemePosition.top) {
				$('.back').addClass('_fixed');
			} else {
				$('.back').removeClass('_fixed');
			}
		});
	}
	//gallery
	if ($('*').is('.s_3d__gallery')) {
		$('.s_3d__gallery').lightGallery();
	}
	//close popups
	$('.overlay, .close_pop').click(function(){
		$('.popup, .overlay').removeClass('visible');
	});
	//popups
	$('._open_pop').click(function(e){
		e.preventDefault();
		$('form').each(function() {
            $(this)[0].reset();
        });
		var name = $(this).data('name');
		$('.overlay, .popup.'+name).addClass('visible');
		setTimeout(function() {
            $('.popup').find('input').eq(0).focus();
        }, 1000);
		if(name=='_call'){
			mapInitialize('popup_map');
		}else if(name=='_about'){
			sl_teachers2.activate(sl_teachers_n);
		}else if(name=='_teacher'){
			var pop = $('.popup._teacher');
			if($(this).closest('._about').length){
				$('.popup._about').removeClass('visible');
			}
			var cont = $('.s_teachers__item_txt').eq(sl_teachers_n);
			var element = cont.find('.h2');
			if(element.find('span').length){
				pop.find('.s_once__choose label').last().show().prev().prop('checked',true);
			}else{
				pop.find('.s_once__choose label').last().hide();
			}
			pop.find('.popup__form_trial span').text(cont.find('h5').text());
			pop.find('.popup__form_teacher2 span').html(cont.find('.h2').html());
		}else if(name=='_trial'){
			var text;
			if($(this).closest('.s_card__trial_body').length){
				text = $(this).closest('.s_card__trial_body').find('h3 span').text();
				text = $('.popup._trial').find('.btn b').text(text+' р.');
			} else{
				$(this).prev().find('.css-checkbox').each(function(){
					if($(this).prop('checked')){
						text = $(this).next('label').find('span').not('.g_exclusive').text();
					}
				});
				$('.popup._trial').find('.btn b').text(text+' р.');
			}
		}else if(name=='_case'){
			var popup = $('.popup._case');
			var btn = $(this);
			popup.find('h5').text(btn.prev('h5').text());
			popup.find('h2').text(btn.prevAll('h3').text());
			popup.find('h4').html(btn.prevAll('h4').html());
		}
		var px = window.pageYOffset;
		$('.popup').css('top',px+'px');
	});
	$('.popup .s_once__choose label').click(function(){
		var text = $(this).find('span').not('.g_exclusive').text();
		$(this).closest('.popup__form').find('.btn b').text(text+' р.');
	});
	//drav icons on about screen
	var svgflag = false;
	if ($('*').is('.s_about__block_ico') && !svgflag){
		var svg = $('.s_about__block_ico svg').drawsvg({
			duration: 5500
		});
		var elPosition = $('.s_about__block_ico').offset();
		scrollHandler = function () {
			if ($(window).scrollTop() > elPosition.top-500 && !svgflag) {
				svg.drawsvg('animate');
				svgflag = true;
			}
		};
		//smooth scroll event
		var scrollTimeout;  // global for any pending scrollTimeout

		$(window).scroll(function () {
			if (scrollTimeout) {
				clearTimeout(scrollTimeout);
				scrollTimeout = null;
			}
			scrollTimeout = setTimeout(scrollHandler, 50);
		});
	}
	//gmaps
	if ($('*').is('#map')){
		mapInitialize('map');
	}
	//select generation by trg
	var wrp = $('.select-wrp').each(function(){
        var select = $(this).find('select');
        var add_current = select.data('placeholder');
        var max = select.find('option').length;
        var li='';
        select.find('option').each(function(){
            if($(this).index()<1){
                data_value = $(this).attr('value');
                text = $(this).text();
                li = li +'<li class="active" data-value="'+data_value+'">'+text+'</li>';
            }else{
                data_value = $(this).attr('value');
                text = $(this).text();
                li = li +'<li data-value="'+data_value+'">'+text+'</li>';
            }
        });
        $(this).append('<div class="custom_select"><div class="current_option" data-value=""><span>'+add_current+'</span><b><svg xmlns="http://www.w3.org/2000/svg" width="27" height="23" viewBox="0 0 25 20"><path d="M25 8.5L23.5 7 18.5 12 13.5 7 12 8.5 18.5 15 25 8.5Z" fill="rgb(0, 0, 0)"/></svg></b></div><ul class="_scroll custom_options">'+li+'</ul> </div>');
    });
    //selects
    $(window).click(function (e) {
        $(".custom_options, .current_option").removeClass('active');
    });
    $(".custom_options li").click(function () {
        customOptionsBlock = $(this).parent();
		select = customOptionsBlock.closest('.select-wrp');
		customOptionsBlock.find('li').removeClass('active');
		if(select.hasClass('popup_select')){
			var popup = select.closest('.popup');
			popup.find('.popup__table_item')
				.eq($(this).index()).addClass('current')
				.siblings().removeClass('current');
		}
        $(this).toggleClass('active');
		choosenValue = $(this).data("value");
		select.find('select option').removeAttr('selected');
		select.find('select option[value="'+choosenValue+'"]').attr('selected',true);
        span = select.find('.current_option>span');
        var str = $(this).text();
        span.text(str);
        customOptionsBlock.data("value", choosenValue);
        $(".custom_options ,.current_option").removeClass('active');
    });
    $(".current_option").click(function (event) {
        event.stopPropagation();
        customOptionsBlock = $(this).next();
        $(".current_option").removeClass('active');
        $(this).addClass('active');
        $(".custom_options").removeClass('active');
        customOptionsBlock.addClass('active');
    });
	//popup teachers slider
	if ($('*').is('.s_teachers__slider_wrp2')) {
		var $frame = $('.s_teachers__slider_wrp2');
		var sl_teachers2 = new Sly($frame, {
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateOn: 'click',
			activateMiddle: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			elasticBounds: 1,
			dragHandle: 1,
			prev: $frame.find('.s_teachers__arr_left2'),
			next: $frame.find('.s_teachers__arr_right2')
		}).init();
		sl_teachers2.on('change', function (eventName) {
			var n = $frame.find('li').length-1,
				sl_teachers_n2 = this.rel.activeItem;
			sl_teachers.activate(sl_teachers_n2);
        	if(sl_teachers_n2==n){
				$frame.find('.s_teachers__arr_right2').addClass('disabled');
			}
        });
	}
	//card page dif
	$('.s_card__calendar_dif span').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
	});
	//card slider teachers
	if($('*').is('.s_card__who_slider')){
		var sl_card_who = $('.s_card__who_slider').lightSlider({
			item:1,
			controls: false,
			pager: false,
			adaptiveHeight: true
		});
		$('.s_card__who_left').click(function () {
			sl_card_who.goToPrevSlide();
		});
		$('.s_card__who_right').click(function () {
			sl_card_who.goToNextSlide();
		});
	}
	//card page day time filter
	$('.s_card__calendar_time span').click(function(){
		$('.s_card__calendar_tabitem').eq($(this).index()).addClass('current').siblings().removeClass('current');
		$(this).addClass('current').siblings().removeClass('current');
	});
	//choose abonement in popup trigger
	$('.popup__table .s_price__item_trow').click(function(){
		$(this).find('input').prop('checked',true);
	});
	//hamb
	$('.s_first__hamb').click(function(){
		$('.s_first__nav').addClass('active');
	});
	$('.s_first__close').click(function(){
		$('.s_first__nav').removeClass('active');
	});
	//price
	if($('*').is('.s_price') && window.matchMedia('(min-width: 700px)').matches){
		$(window).scroll(function(){
			var elPosition = $('.s_price').offset();
			if ($(window).scrollTop() > elPosition.top-700 && $(window).scrollTop()< elPosition.top + $('.s_price').height()-100) {
				$('.price').addClass('visible');
			} else{
				$('.price').removeClass('visible');
			}
		});
	}
});
//gmap init
function mapInitialize(el_id) {
	var moscow = new google.maps.LatLng(55.759119, 37.624978);
	var stylez = [
		{
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#242f3e"
		  }
		]
	  },
			{
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#746855"
		  }
		]
	  },
			{
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#242f3e"
		  }
		]
	  },
			{
				"featureType": "administrative.locality",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#d59563"
		  }
		]
	  },
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#d59563"
		  }
		]
	  },
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#263c3f"
		  }
		]
	  },
			{
				"featureType": "poi.park",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#6b9a76"
		  }
		]
	  },
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#38414e"
		  }
		]
	  },
			{
				"featureType": "road",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#212a37"
		  }
		]
	  },
			{
				"featureType": "road",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#9ca5b3"
		  }
		]
	  },
			{
				"featureType": "road.highway",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#746855"
		  }
		]
	  },
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#1f2835"
		  }
		]
	  },
			{
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#f3d19c"
		  }
		]
	  },
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#2f3948"
		  }
		]
	  },
			{
				"featureType": "transit.station",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#d59563"
		  }
		]
	  },
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#17263c"
		  }
		]
	  },
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#515c6d"
		  }
		]
	  },
			{
				"featureType": "water",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#17263c"
		  }
		]
	  }
	];
	var mapOptions = {
		zoom: 17,
		center: moscow,
		mapTypeControl: false,
		scrollwheel: false,
		navigationControl: false,
		scaleControl: false
	};
	map = new google.maps.Map(document.getElementById(el_id), mapOptions);
	var mapType = new google.maps.StyledMapType(stylez, {
		name: "Night"
	});
	map.mapTypes.set('Night', mapType);
    map.setMapTypeId('Night');
	moscow = new google.maps.Marker({
		map: map,
		position: moscow,
		title: "Мы находимся тут!",
		icon: '../images/marker.png'
	});
	var p1 = new google.maps.Polyline({
	  path: [{lat:55.758894 ,lng: 37.620631 },
			 {lat:55.759142 ,lng: 37.622149 }],
	  geodesic: true,
	  strokeColor: '#fdd835',
	  strokeOpacity: 0.8,
	  strokeWeight: 4
	});
	var p2 = new google.maps.Polyline({
	  path: [{lat:55.759305 ,lng: 37.623233 },
			 {lat:55.759404 ,lng: 37.623893 }],
	  geodesic: true,
	  strokeColor: '#fdd835',
	  strokeOpacity: 0.8,
	  strokeWeight: 4
	});
	var p3 = new google.maps.Polyline({
	  path: [{lat:55.759305 ,lng: 37.623233 },
			 {lat:55.759404 ,lng: 37.623893 }],
	  geodesic: true,
	  strokeColor: '#fdd835',
	  strokeOpacity: 0.8,
	  strokeWeight: 4
	});
	var p3 = new google.maps.Polyline({
	  path: [{lat:55.759371 ,lng: 37.625759 },
			 {lat:55.758930 ,lng: 37.626462 }],
	  geodesic: true,
	  strokeColor: '#fdd835',
	  strokeOpacity: 0.8,
	  strokeWeight: 4
	});
	var p4 = new google.maps.Polyline({
	  path: [{lat:55.758550 ,lng: 37.627100 },
		  	 {lat:55.758795 ,lng: 37.626671 },
			 {lat:55.758447 ,lng: 37.625883 }],
	  geodesic: true,
	  strokeColor: '#fdd835',
	  strokeOpacity: 0.8,
	  strokeWeight: 4
	});
	var p5 = new google.maps.Polyline({
	  path: [{lat:55.758438 ,lng: 37.627295 },
			 {lat:55.758344 ,lng: 37.627440 }],
	  geodesic: true,
	  strokeColor: '#fdd835',
	  strokeOpacity: 0.8,
	  strokeWeight: 4
	});
	var p6 = new google.maps.Polyline({
	  path: [{lat:55.758248 ,lng: 37.627571 },
			 {lat:55.758159 ,lng: 37.627697 }],
	  geodesic: true,
	  strokeColor: '#fdd835',
	  strokeOpacity: 0.8,
	  strokeWeight: 4
	});
	var p7 = new google.maps.Polyline({
	  path: [{lat:55.759680 ,lng: 37.621336 },
			 {lat:55.759383 ,lng: 37.621503 }],
	  geodesic: true,
	  strokeColor: '#fdd835',
	  strokeOpacity: 0.8,
	  strokeWeight: 4
	});
	var p8 = new google.maps.Polyline({
	  path: [{lat:55.759934 ,lng: 37.628924 },
			 {lat:55.760137 ,lng: 37.630557 }],
	  geodesic: true,
	  strokeColor: '#fdd835',
	  strokeOpacity: 0.8,
	  strokeWeight: 4
	});
	var p9 = new google.maps.Polyline({
	  path: [{lat:55.756527 ,lng: 37.626896 },
			 {lat:55.757502 ,lng: 37.625973 }],
	  geodesic: true,
	  strokeColor: '#fdd835',
	  strokeOpacity: 0.8,
	  strokeWeight: 4
	});
	var p10 = new google.maps.Polyline({
	  path: [{lat:55.758051 ,lng: 37.627829 },
			 {lat:55.756846 ,lng: 37.629487 }],
	  geodesic: true,
	  strokeColor: '#fdd835',
	  strokeOpacity: 0.8,
	  strokeWeight: 4
	});
	var p11 = new google.maps.Polyline({
	  path: [{lat:55.760153 ,lng: 37.620865 },
			 {lat:55.761073 ,lng: 37.620387 }],
	  geodesic: true,
	  strokeColor: '#fdd835',
	  strokeOpacity: 0.8,
	  strokeWeight: 4
	});
	var p12 = new google.maps.Polyline({
	  path: [{lat:55.760792 ,lng: 37.620757 },
			 {lat:55.760197 ,lng: 37.621042 }],
	  geodesic: true,
	  strokeColor: '#fdd835',
	  strokeOpacity: 0.8,
	  strokeWeight: 4
	});
	p1.setMap(map);
	p2.setMap(map);
	p3.setMap(map);
	p4.setMap(map);
	p5.setMap(map);
	p6.setMap(map);
	p7.setMap(map);
	p8.setMap(map);
	p9.setMap(map);
	p10.setMap(map);
	p11.setMap(map);
	p12.setMap(map);
}
//lazy load images
!function(window){
  var $q = function(q, res){
        if (document.querySelectorAll) {
          res = document.querySelectorAll(q);
        } else {
          var d=document
            , a=d.styleSheets[0] || d.createStyleSheet();
          a.addRule(q,'f:b');
          for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
            l[b].currentStyle.f && c.push(l[b]);
          a.removeRule(0);
          res = c;
        }
        return res;
      }
    , addEventListener = function(evt, fn){
        window.addEventListener
          ? this.addEventListener(evt, fn, false)
          : (window.attachEvent)
            ? this.attachEvent('on' + evt, fn)
            : this['on' + evt] = fn;
      }
    , _has = function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
    ;
  function loadImage (el, fn) {
    var img = new Image()
      , src = el.getAttribute('data-src');
    img.onload = function() {
      if (!! el.parent)
        el.parent.replaceChild(img, el)
      else
        el.src = src;
      fn? fn() : null;
    }
    img.src = src;
  }
  function elementInViewport(el) {
    var rect = el.getBoundingClientRect()
    return (
       rect.top    >= 0
    && rect.left   >= 0
    && rect.top <= (window.innerHeight+300 || document.documentElement.clientHeight+300)
    )
  }
    var images = new Array()
      , query = $q('img.lazy')
      , processScroll = function(){
          for (var i = 0; i < images.length; i++) {
            if (elementInViewport(images[i])) {
              loadImage(images[i], function () {
                images.splice(i, i);
              });
            }
          };
        }
      ;
    for (var i = 0; i < query.length; i++) {
      images.push(query[i]);
    };
    processScroll();
    addEventListener('scroll',processScroll);
}(this);
