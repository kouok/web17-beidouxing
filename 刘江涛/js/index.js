$(function() {
    // 搜索的点击
    $(".icon-sousuo").click(function(event) {
            event.stopPropagation();
            $(".search-box").stop().fadeIn();
            $(".mask").addClass("op");
        })
        // 搜索的阻止冒泡
    $(".search-box").click(function(event) {
            event.stopPropagation();
        })
        // 菜单的点击
    $(".icon-list").click(function(event) {
            event.stopPropagation();
            $(".list-box").stop().fadeIn();
            $(".mask").addClass("op");
        })
        // 菜单的阻止冒泡
    $(".list-box").click(function(event) {
            event.stopPropagation();
        })
        // 菜单的hover高亮
    $(".list-ulst li").click(function() {
        $(this).siblings().removeClass("onli")
        $(this).addClass("onli");
    })


    // 点击其他时隐藏搜索和菜单
    $(document).click(function() {
        $(".search-box").stop().fadeOut();
        $(".list-box").stop().fadeOut();
        $(".mask").removeClass("op");
    })
    TouchSlide({
        slideCell: "#slideBox",
        titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell: ".bd ul",
        effect: "leftLoop",
        autoPage: true, //自动分页
        autoPlay: true //自动播放
    });

    $(function() {
        var count = $(".table-bd li").length;
        var index = 1;
        //左动
        $(".prev").on("click", function(event) {
            index--;
            if (index < 0) {
                index = count;
            }
            $(".table-bd").stop().animate({ "left": -index * 7.5 + "rem" }, function() {
                if (index == 0) {
                    index = count - 2;
                }
                $(".table-bd").css("left", -index * 7.5 + "rem");
                $(".table-xia").removeClass("on");
                $(".table-xia").eq(index - 1).addClass("on");
            });
        });
        //右动
        $(".next").on("click", function(event) {
            index++;
            if (index > count - 1) {
                index = 0;
            }
            $(".table-bd").stop().animate({ "left": -index * 7.5 + "rem" }, 400, "swing", function() {
                if (index == count - 1) {
                    index = 1;
                }
                $(".table-bd").css("left", -index * 7.5 + "rem");
                $(".table-xia").removeClass("on");
                $(".table-xia").eq(index - 1).addClass("on");
            });
        });
        // 定时器
        var timer1 = setInterval(function() {
            $(".next").click();
        }, 5000);
        //清除定时器
        function cleartimer() {
            clearInterval(timer1);
        }
        //启动定时器
        function opentimer() {
            timer1 = setInterval(function() {
                $(".next").click();
            }, 5000);
        }

        $(".table-title li").on("click", function() {
            $(".table-xia").removeClass("on");
            $(this).find(".table-xia").addClass("on");
            index = parseInt($(this).index()) + 1;
            $(".table-bd").css("left", -index * 7.5 + "rem");

        })
    });



})