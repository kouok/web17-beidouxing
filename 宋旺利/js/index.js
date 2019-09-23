window.onload=function(){
	// 给搜索图标和列表图标绑定点击事件，将搜索框和导航栏显示出来
	(function fun1(){
		var sousuo = document.getElementsByClassName('icon-sousuo')[0];
		var list = document.getElementsByClassName('icon-list')[0];
		var mask = document.getElementsByClassName('mask')[0];
		var triangle1 = document.getElementsByClassName('triangle1')[0];
		var triangle2 = document.getElementsByClassName('triangle2')[0];
		sousuo.onclick=function(event){
			event.stopPropagation();
			mask.style.display = "block";
			triangle1.style.opacity = "1";
			triangle1.style.zIndex = "100";
			triangle1.className = "triangle1 search_move";
			document.onclick=function(){
				mask.style.display = "none";
				triangle1.style.opacity = "0";
				triangle1.style.zIndex = "";
				triangle1.className = "triangle1";
			};
		};
		triangle1.onclick=function(event){
			event.stopPropagation();
		};
		list.onclick=function(event){
			event.stopPropagation();
			mask.style.display = triangle2.style.display = "block";
			triangle2.style.zIndex = "100";
			document.onclick=function(){
				mask.style.display = mask.style.display = "none";
				triangle2.style.zIndex = "";
			};
		};
	})();
	//导航列表的高亮切换
	(function fun2(){
		var oLis = document.querySelectorAll('.menu li');
		var mask = document.getElementsByClassName('mask')[0];
		var triangle2 = document.getElementsByClassName('triangle2')[0];
		for(var i = 0;i < oLis.length;i++){
			oLis[i].onclick=function(event){
				event.stopPropagation();
				for(var j = 0;j < oLis.length;j++){
					oLis[j].className = ""; 
				}
				this.className = "on1";
				mask.style.display = triangle2.style.display = "none";
				triangle2.style.zIndex = "";
			};
		}
	})();
	// 轮播图插件使用
	TouchSlide({ 
	    slideCell:"#slideBox",
	    titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	    mainCell:".bd ul", 
	    effect:"leftLoop", 
	    autoPage:true,//自动分页
	    autoPlay:true //自动播放
	});
	// shops_tit和shops的tab切换
	(function fun3(){
		var tits = document.querySelectorAll('.tits li');
		var wrap = document.querySelectorAll('.wrap');
		var line = document.querySelector('.line');
		for(var i = 0;i < tits.length;i++){
			tits[i].index = i;
			tits[i].onclick=function(){
				for(var j = 0;j < tits.length;j++){
					wrap[j].style.display = "none";
				}
				switch(this.index){
					case 0:
						line.style.width = "2rem";
						line.style.left = "0.51rem";
						break;
					case 1:
						line.style.width = "1.16rem";
						line.style.left = "3.56rem";
						break;
					case 2:
						line.style.width = "1.16rem";
						line.style.left = "5.8rem";
						break;
				}
				wrap[this.index].style.display = "block";
			};
		}
	})();
};