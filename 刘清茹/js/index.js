$(function () {

    // 第一行的搜索和下拉列表点击事件
    $("#search,#list").click( function () {
        // 点击按钮遮罩层显示
        $(".masked").slideDown();

        // 获取到当前点击的下标
        var myIndex = $(this).index();
        // 点击按钮显示出对应的内容
        $(".maskedMatter").eq(myIndex).slideDown().siblings().hide();
    });

    // 点击遮罩层隐藏
    $(".masked").click(function () {
        $(".masked").slideUp()
    });
})