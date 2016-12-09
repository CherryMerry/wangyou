// JavaScript Document
(function(){
	
	//顶部切换
	var aTopTabBtn=$('.index-tab-btngroup .btn'),
		aTopTabItem=$('.index-tab-item');
		
	aTopTabBtn.on('click',function(){
		var _iNow=$(this).index();
		
		aTopTabBtn.removeClass('active');
		$(this).addClass('active');
		aTopTabItem.removeClass('show');
		aTopTabItem.eq(_iNow).addClass('show');
		});
		
	var aSwitchBtn=$('.common-module-l .title'),
		aSwitchItem=$('.index-commit-back .commit');
		
	aSwitchBtn.on('click',function(){
		
		var _iNow=$(this).index();
		aSwitchBtn.removeClass('title-active');
		$(this).addClass('title-active');
		aSwitchItem.removeClass('switch-show');
		aSwitchItem.eq(_iNow).addClass('switch-show');
		});
		
	
		
	$('.common-module-r .title').on('click',function(){
		var _iNow=$(this).index();
		
		$('.common-module-r .title').removeClass('title-active');
		$(this).addClass('title-active');
		$('.common-module-r .top-back').removeClass('switch-show');
		$('.common-module-r .top-back').eq(_iNow).addClass('switch-show');
		});
		
	
	//轮播图
	var aFocusBtn=$('.index-focus-foot .btn-group'),
		aFocusBanner=$('.index-focus-list li');
	
	aFocusBtn.on('click','li',function(){
		var _iNow=$(this).index();
		aFocusBtn.find('li').removeClass('active');
		$(this).addClass('active');
		aFocusBanner.hide();
		aFocusBanner.eq(_iNow).fadeIn();
		});
})();