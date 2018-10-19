$(function(){
    $("#btn").click(function(){
        var word=$("#word").val();
        $.getJSON('http://localhost/plu/myapi.php',{word:word},function(data){
            if(data.status_code==0){
                var text=data.data.cn_definition.defn;
                $('.content-den').html(text);
            }else{
                $('.content-den').html('没有找到数据');
            }   
        })
    })
})