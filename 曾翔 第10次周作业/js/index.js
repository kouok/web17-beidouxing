
// 点击搜索框  出现遮罩层和搜索栏
(function(){
    function fun0(){
        var search=document.getElementById("search");
        // 遮罩层
        var msk=document.querySelector(".msk");
        // console.log(msk)
        // 搜索框
        var seacherBox=document.querySelector(".seacher-box");
        var search2=document.querySelector(".search2");

        search.onclick=function(event){
            event.stopPropagation();
            msk.style.display="block";
            seacherBox.style.display='block'; 

            search2.onclick=function(event){
                event.stopPropagation();
                msk.style.display="none";
                seacherBox.style.display='none';

                // document.onclick=function(event){
                //     event.stopPropagation();
                //     msk.style.display="none";
                //     seacherBox.style.display='none';
                // } 
            }
        }
    }
    fun0();
    function fun1(){
        var muen=document.getElementById("muen");
        // 遮罩层
        var msk=document.querySelector(".msk");
        var list_muen=document.querySelector(".list-muen")
        console.log(list_muen)
        // li标签
        var oAlist=document.querySelectorAll(".olist li")
        // console.log(oAlist)
        muen.onclick=function(event){
            event.stopPropagation();
            msk.style.display="block";
            list_muen.style.display='block';

            list_muen.onclick=function(event){
                event.stopPropagation();
                // console.log(2222)
                msk.style.display="none";
                list_muen.style.display='none';
            }
            // document.onclick=function(event){
            //     event.stopPropagation();
            //     msk.style.display="";
            //     list_muen.style.display='';
            // }
            // 添加高亮
            for(var i=0;i<oAlist.length;i++){
                oAlist[i].onclick=function(){
                    for(var j=0;j<oAlist.length;j++){
                        oAlist[j].className="";
                    }
                    this.className="olist2";
                }
            }  
        }
    }
    fun1();
    function fun2(){
        var table_on=document.querySelectorAll(".table_on")
         var table_pd=document.querySelectorAll(".table_pd li");
         // console.log(cont_table3)
         for(var i=0;i<table_pd.length;i++){
             table_pd[i].index=i;
             table_pd[i].onclick=function(){
                //  event.stopPropagation();
                 for(var k=0;k<table_pd.length;k++){
                     table_pd[k].className="";
    
                      // 盒子的显示隐藏
                     if(k==this.index){
                         table_on[this.index].style.display="flex";
                     }else{
                         table_on[k].style.display="none";
                     }
                 }
                 // 高亮样式
                 this.className="on_line";
             }
    
    
             // function tabs(tabTit,tabBd,eventType){
             //     var oTit=document.getElementsByClassName(tabTit)[0];
             //     // 通过父级获得了标题下面的五个按钮li
             //     var oTitList=oTit.children;
             //     console.log(oTitList);
             //     var oBd=document.getElementsByClassName(tabBd)[0];
             //     // 通过父级获得5个面板
             //     var oBdList=oBd.children;
             //     console.log(oBdList);
             //     // 给标题li循环绑定点击，鼠标移入等事件
             //     for(var i=0;i<oTitList.length;i++){
             //         //给标题列表项添加索引，一一对应他们的显示位置，间接也与面板顺序建立了关联
             //         oTitList[i].index=i;
             //         // 因为eventType参数传进来的是字符串，所以不能用点的方式，而是用中括号
             //         oTitList[i][eventType]=function(){
             //             // alert(111)
             //             // 通过循环来遍历确定是否该元素就是当前点击的，如果是则加高亮样式，并且把对应位置的面板给显示
             //             for(var j=0;j<oTitList.length;j++){
             //                 if(j==this.index){
             //                     oBdList[this.index].style.display="flex";
             //                     this.style.borderBottom="4px solid #004098";
             //                 //把不是当前点击的这个li全部隐藏
             //                 }else{
             //                    oBdList[j].style.display="none";
             //                    oTitList[j].style.borderBottom="";
             //                 }
             //             }
                         
             //         }
             //     } 
             // }
             // tabs("notice-hd","notice-bd","onclick");
             
             
         }
    }
    fun2()
})()
