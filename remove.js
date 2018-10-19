window.onload=function(){
    $(document).click(function(){
        if(window.getSelection){
            var selectionObj=window.getSelection();
            var selectedText=selectionObj.toString();
            var word=selectedText;
            var jud=/^[a-zA-Z]/
            var judRe=jud.test(word);
            console.log(judRe);
            if(judRe){
                document.oncontextmenu=function(){
                    return false;
                }

                document.oncontextmenu=function(e){
                    var e=event || window.event;
                    if(e.button==2){
                        $.getJSON('http://localhost/plu/myapi.php',{word:word},function(data){
                            if(data.status_code==0){
                                alert(data.data.cn_definition.defn);
                            }else{
                                alert('没有查到数据');
                            }
                        })
                    }
                }
            }else{
                document.oncontextmenu=function(){
                    return true;
                }
            } 
        }
    })
    
}
