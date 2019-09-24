TouchSlide({ 
    slideCell:"#slideBox",
    titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
    mainCell:".bd ul", 
    effect:"leftLoop", 
    autoPage:true,//自动分页
    autoPlay:true //自动播放
  });
  
  // 搜索框
  $(function(){
    $("#login").click(function(){
        $("#mask").show();
        $("#layer").slideDown(200);
    })
    $("#mask").click(function(){
        $(this).fadeOut(200);
        $("#layer").slideUp(200);
    })
 })


   // 列表框
   $(function(){
    $("#classify").click(function(){
        $("#mask").show();
        $("#packing").slideDown(200);
    })
    $("#mask").click(function(){
        $(this).fadeOut(200);
        $("#packing").slideUp(200);
    })
 })

