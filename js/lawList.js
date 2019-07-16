
$('.ebs').load('examList_top_menu.html');  
$('.header').load('header.html');        
$('.footer').load('footer.html');    

$(document).ready(function(){

	// google.charts.load("current", {packages:['corechart']});
	// google.charts.setOnLoadCallback(drawChart);
	// function drawChart() {
	//   var data = google.visualization.arrayToDataTable([
	// 		['Element', '年薪', { role: 'style' }],
	// 		['公股　銀行', 715524, "color: #color_13"],            // RGB value
	// 		['高考　會計', 705240, '#dfdfdf'],            // English color name
	// 		['普考　會計', 589250, '#dfdfdf'],
	// 		['民營　行業', 492000, '#dfdfdf'],
	// 	 	['一般　就業', 396500, '#dfdfdf' ], // CSS-style declaration
	//   ]);

	// var view = new google.visualization.DataView(data);
	// view.setColumns([0, 1,
	// 						{ calc: "stringify",
	// 						type: "string",
	// 						role: "annotation" },
	// 						2]);


	// var sw = 500;
	// if (screen.width <= 581){
	// 	sw = screen.width;
	// }

	//   var options = {
	// 	 title: "",//頂部標題
	// 	 color: '#7c7c7c',
	// 	 fontSize: 16,
	// 	 tooltip: {trigger:'selection'},
	// 	 width: sw,
	// 	 height: 380,
	// 	 bar: {groupWidth: "70%"},
	// 	 legend: { position: "none" },//顯示目標說明
	// 	 vAxis: {//縱軸設定
	// 		minValue: 0,
	// 		ticks: [0, 200000, 400000, 600000, 800000],
	// 		textStyle: {
	// 			fontSize: 13,
	// 			color: '#464646',
	// 		  },
	// 	 },
	// 	 hAxis: {//橫軸設定
	// 		textStyle: {
	// 		  fontSize: 16,
	// 		  color: '#9498A3',
	// 		  bold: true,
	// 		  italic: false
	// 		},
	// 		titleTextStyle: {
	// 		  fontSize: 18,
	// 		  color: '#9498A3',
	// 		  bold: true,
	// 		  italic: false
	// 		}
	// 	 },
	//   };
	  
	//   var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
	//   chart.draw(view, options);
	// }

//Aos init
AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function

	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 100, // the delay on throttle used while scrolling the page (advanced)

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 800, // values from 0 to 3000, with step 50ms
	easing: 'ease-in-out-back', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: true, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // 視窗觸發位置

});

	


	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('#Chen').addClass('active');
		$('#Lin').addClass('active');
	}else{

		$('#Chen').click(function(){
			if($(this).hasClass('active')){
				return;
			}
			$(this).toggleClass('active');
			$('#Lin').toggleClass('active');
		});
	
		$('#Lin').click(function(){
			if($(this).hasClass('active')){
				return;
			}
			$(this).toggleClass('active');
			$('#Chen').toggleClass('active');
		});
	}



// 	window.onresize = function() {
// 		www.calc();
//   };

// 	www = {
// 		ww : window.width(),
// 		calc : function(){
// 			if(this.ww <= 1300){
// 				$('#Chen').addClass('active');
// 				$('#Lin').addClass('active');
// 			}else if(this.ww >= 1301){
// 				$('#Chen').addClass('active');
// 				$('#Lin').removeClass('active');
// 			}
// 		}
// 	}
	

	//swipers
	// var time_line_slider = new Swiper('.timeline-swiper', {
	// 	allowTouchMove: true,
	// 	slidesPerView: 1,
	// 	freeMode: true,
	// 	freeModeSticky : false,
	// 	freeModeMinimumVelocity : 1,
	// });




	var student_experience_slider = new Swiper('.student-experience-slider', {
		allowTouchMove: false,
		effect : 'fade',
		loop:true,
	});

	var student_avatar_slider = new Swiper('.student-avatar-slider', {
      allowTouchMove: true,

		spaceBetween:30,
		effect : 'fade',
		loop:true,
		centeredSlides: true,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 1//可視block的預載入數量,
		 },
		autoplay: {
			delay: 6000,
			stopOnLastSlide: false,
			disableOnInteraction: true,
		},
		controller: {
			control: student_experience_slider,
			inverse: false,
			by: 'slide',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},

		on:{
			slideChange: function(){
				var sai =this.realIndex + 1;
				$('.pager_number').delay(500).html(sai)
			},
		 }, 
	});
	
	var bank_video_swiper = new Swiper('.bank-video-swiper', {
		allowTouchMove: true,
		slidesPerView: 1,
		grabCursor: true,
		effect: 'fade',
		direction: 'vertical',
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 1//可視block的預載入數量,
		 },
	});

	var bank_intro_swiper = new Swiper('.bank-intro-swiper', {
     	allowTouchMove: true,
		slidesPerView: 1,
		grabCursor: true,
		autoplay: {
			delay: 5000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		},
		controller: {
			control: bank_video_swiper,
			inverse: false,
			by: 'slide',
		},
		pagination: {
			el: '.swiper-pagination',
		},
	});




	$('#course_1').show();
	$('.tab_item').click(function(){
		var tabEl = this;
		tabBoxAction.TabSwitcher(tabEl);
		setTimeout(() => {
			swiperInit();
		}, 500);
		
	});

	$('#Course_next').click(function(){
		tabBoxAction.CourseNext();
		setTimeout(() => {
			swiperInit();
		}, 500);
	});

	var tabBoxAction = {

		TabSwitcher: function (tabEl){
			$('.tab_box li').removeClass('active');
			$(tabEl).addClass('active');
			var triggerId ='#' +  $(tabEl).attr('data-cid');
			$('.course_information').hide(300);
			$(triggerId).show(400);
		},

		CourseNext: function (){
			var tabActiveThis = $('.tab_item.active');
			var tabActiveNext = $('.tab_item.active').next();
			tabActiveNext.addClass('active');
			
			if(tabActiveNext.length == 0){
				$('.tab_box li:first').addClass('active');
			}
			tabActiveThis.removeClass('active');
			var tabActiveThisNew = $('.tab_item.active');
			var triggerId ='#' +  $(tabActiveThisNew).attr('data-cid');
			$('.course_information').hide(300);
			$(triggerId).show(400);
		},

	}

swiperInit();

	function swiperInit(){
		var courseswiper_1 = new Swiper('.course_swiper_1', {
				allowTouchMove: false,
				initialSlide :1,
				slidesPerView: 'auto',
				spaceBetween: 0,
				centeredSlides: true,
				navigation: {
					nextEl: '.swiper-button-next.cs1',
					prevEl: '.swiper-button-prev.cs1',
				},
				breakpoints: { 
					861: {
						initialSlide :0,
					},
				}
		});

		var courseswiper_2 = new Swiper('.course_swiper_2', {
				allowTouchMove: false,
				initialSlide :1,
				slidesPerView: 'auto',
				spaceBetween: 0,
				centeredSlides: true,
				navigation: {
					nextEl: '.swiper-button-next.cs2',
					prevEl: '.swiper-button-prev.cs2',
				},
				breakpoints: { 
					861: {
						initialSlide :0,
					},
				}
		});
		
		var courseswiper_3 = new Swiper('.course_swiper_3', {
				allowTouchMove: false,
				initialSlide :1,
				slidesPerView: 'auto',
				spaceBetween: 0,
				centeredSlides: true,
				navigation: {
					nextEl: '.swiper-button-next.cs3',
					prevEl: '.swiper-button-prev.cs3',
				},
				breakpoints: { 
					861: {
						initialSlide :0,
					},
				}
		});

		var courseswiper_4 = new Swiper('.course_swiper_4', {
				freeMode : false,
				freeModeMomentum : true,
				allowTouchMove: false,
				initialSlide :1,
				slidesPerView: 'auto',
				spaceBetween: 0,
				centeredSlides: true,
				navigation: {
					nextEl: '.swiper-button-next.cs4',
					prevEl: '.swiper-button-prev.cs4',
				},
				breakpoints: { 
					861: {
						initialSlide :0,
					},
				}
		});
	};

	

   //cbox 自適應   
	var cboxOptions = {
	width: '98%',
	//    height: '95%',
	maxWidth: '1280px',
	//maxHeight: '800px',
	};
	$('.ec_combos').colorbox(cboxOptions);

	$(window).resize(function(){
		$(window).resize({
		width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
		height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height
		});
	});


	//文章斷點
		var info_content_len = 110;
		$('.info_content').each(function(i){
			if($(this).text().length>info_content_len){
				$(this).attr("title",$(this).text());
				var thistext=$(this).text().substring(0,info_content_len-1)+"...";
				$(this).text(thistext);
			};
		});

	//年度區塊
	$('#year_108').fadeIn(1);
	$('.years_btn:first').addClass("active");
	$('.years_btn a:first').addClass("active");

	$('.years_btn').click(function() {  
	$('.years_btn').removeClass('active');
	$('.years_btn a').removeClass('active');
		
	$(this).addClass('active');
	$(this).children('a').addClass('active');
		$(".years_panel").hide();
			var years = $(this).children('a').attr('href');
			$(years).fadeIn(300);
			return false;
	});

	$('.q_block').click(function(){
		$(this).next().toggleClass('active');
	});

});
