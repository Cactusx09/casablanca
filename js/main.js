$(document).ready(function () {
	//first screen bg slider
	if ($('*').is('.s_first')){
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
	//gallery blocks
	if ($('*').is('.s_3d__gallery')) {
		$('.s_3d__gallery').waterfall();
	}
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
	$('._scroll').perfectScrollbar();
	$(window).resize(function () {
		$('._scroll').perfectScrollbar('update');
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
			scrollwheel: false,
			nav: true
		});
		//cards filter
		$('.s_style__head_filter span').click(function(){
			var name = $(this).data('filter');
			if(name!='*'){
				$(this).closest('.s_style').find('li').show().not('._'+name).hide();
			}else{
				$(this).closest('.s_style').find('li').show();
			}
			setTimeout(function(){
				sl_cards.flipster('index');
			},500);
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
		}else if(name=='_teacher' && $(this).closest('._about').length){
			$('.popup._about').removeClass('visible');
		}else if(name=='_trial'){
			var text;
			$(this).prev().find('.css-checkbox').each(function(){
				if($(this).prop('checked')){
					text = $(this).next('label').find('span').not('.g_exclusive').text();
				}
			});
			$('.popup._trial').find('.btn b').text(text+' р.');
		}
		if (window.matchMedia('(max-height: 700px)').matches ||
		   window.matchMedia('(max-width: 585px)').matches) {
			var px = window.pageYOffset;
			$('.popup').css('top',px+'px');
		}
	});
	$('.popup .s_once__choose label').click(function(){
		var text = $(this).find('span').not('.g_exclusive').text();
		$(this).closest('.popup__form').find('.btn b').text(text+' р.');
	});
	//drav icons on about screen
	var svgflag = false;
	if ($('*').is('.s_about__block_ico') && !svgflag){
		var svg = $('.s_about__block_ico svg').drawsvg({
			duration: 8500
		});
		var elPosition = $('.s_about__block_ico').offset();
		$(window).scroll(function () {
			if ($(window).scrollTop() > elPosition.top-500 && !svgflag) {
				svg.drawsvg('animate');
				svgflag = true;
			}
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
		select.find('input').val(choosenValue);
		select.find('select').val(choosenValue).prop("selected", true);
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
});
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
		zoom: 16,
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
}
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
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
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
    // Array.prototype.slice.call is not callable under our lovely IE8
    for (var i = 0; i < query.length; i++) {
      images.push(query[i]);
    };

    processScroll();
    addEventListener('scroll',processScroll);

}(this);
