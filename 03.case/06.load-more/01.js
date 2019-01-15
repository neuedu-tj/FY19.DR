

let step = 1;
let messages =[];

$(function () {

    //请求   // 初始化加载
    $.getJSON("data/message.json" , function (results) {
        messages = results;
    });

    //生成页面
    function createItem(arr) {           //根据传入的数组内容   去渲染 item

        arr.forEach(function (e) {

            // console.log(e)

            //替换成 自己的 HTML ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
            let item = $("<div class=\"item\">\n" +
                "            <div class=\"photo\"><img src="+e.photo+" height=\"60px\" width=\"60px\"/> </div>\n" +
                "            <div class=\"\">\n" +
                "                <div class=\"name\">"+e.name+"</div>\n" +
                "                <div class=\"content\">"+e.content+"</div>\n" +
                "            </div>\n" +
                "        </div>");
            //⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

            $("#container").append(item);
        })

    }

//监听滚动
    $("#container").scroll(function () {   //监听滚动事件..

        let container_totalHeight = this.scrollHeight;  //总高度

        let contianer_scroll = $(this).scrollTop();   //卷动高度 // 看不见的部分

        let container_height = $(this).height();   //元素可见部分的高度



        if ((Math.ceil(contianer_scroll) + Math.ceil(container_height)) / container_totalHeight >0.9999 ) {

            setTimeout(function () {
                let arr = messages.slice((step-1) , step+4);   //splice 在原数组基础上删除某些元素 , slice 修改数组并返回副本 , 原本不动
                createItem(arr);
                step += 4;
            }, 0)

            // console.log("container_totalHeight =  " + container_totalHeight + " ,  container_height : " + container_height + " + scroll : "+contianer_scroll );

        }

    })



});
