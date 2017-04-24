(function(){
	require(['orange','jquery'],function(orange,jquery){
		var menu = [{dlClass:'system_log',title:'图书管理',src:'resources/images/left/select_xl01.png',
						data:[{ddTile:'还书管理',selector:'#return_book_div',path:'bookManage/returnBook'},
						      {ddTile:'图书信息管理',selector:'#book_manage_div',path:'bookManage/bookManage'}]},
			        {dlClass:'custom',title:'学生信息管理',src:'resources/images/left/select_xl01.png',
						data:[{ddTile:'学生信息管理',selector:'#student_div',path:'studentInfo/student'}]},
			        {dlClass:'app',title:'个人信息管理',src:'resources/images/left/select_xl01.png',
						data:[{ddTile:'修改密码',selector:'#person_div',path:'personInfo/person'}]},
					{dlClass:'statistics',title:'统计分析',src:'resources/images/left/select_xl01.png',
						data:[{ddTile:'图书信息统计',selector:'#statist_div',path:'statist/statist'}]}
					];
		
		for(var i = 0; i < menu.length;i++){
			var dl = $('<dl class="'+menu[i].dlClass+'">'),
				dt = $('<dt>'+menu[i].title+'<img src="'+menu[i].src+'"></dt>');
			dl.append(dt);
			for(var j = 0; j < menu[i].data.length;j++){
				var data = menu[i].data,
					dd = $('<dd><a selector = "'+data[j].selector+'" path = "'+data[j].path+'">'+data[j].ddTile+'</a></dd>');
				$('dl dd:first').addClass('first_dd');
				dl.append(dd);
			}
			$('.leftsidebar_box').append(dl);
		}
		
		$(".leftsidebar_box dt").css({"background-color":"#16a085"});
		$(".leftsidebar_box dt img").attr("src","resources/images//left/select_xl01.png");
		$(".leftsidebar_box dd").hide();
		$(".leftsidebar_box dt").click(function(){
			$(".leftsidebar_box dt").css({"background-color":"#16a085"})
			$(this).css({"background-color": "#048f74"});
			$(this).parent().find('dd').removeClass("menu_chioce");
			$(".leftsidebar_box dt img").attr("src","resources/images/left/select_xl01.png");
			$(this).parent().find('img').attr("src","resources/images/left/select_xl.png");
			$(".menu_chioce").slideUp(); 
			$(this).parent().find('dd').slideToggle();
			$(this).parent().find('dd').addClass("menu_chioce");
		});
		$("dd a").click(function(){
			$(".leftsidebar_box").find('a').removeClass("onclick");
			$(this).addClass("onclick");
			if($(this).attr('path')!=undefined){
				var path = $(this).attr('path'),
				selector = $(this).attr('selector');
				orange.loadPage({
					url: 'system/getPage.service?path='+path, 
					target: 'right_content', 
					selector: selector, 
					replace: true, 
					success: function(response) {
					
				}});
			}
		});
		
		$(".leftsidebar_box dt:first").trigger('click');
		$(".leftsidebar_box dd a:first").trigger('click');
	});
})();
