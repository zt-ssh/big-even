
$('.layui-form').submit(function(e){
    var layer=layui.layer
    e.preventDefault();
    var data = $(this).serialize()
    if(data!=''){
        $.ajax({
            url:'http://ajax.frontend.itheima.net/api/login',
            type:'POST',
            data:data,
            success:function(res){
                if(res.status==0){
                    layer.msg(res.message)
                    location.href='./index.html'
                }

            }

        
           
        })
    }
    
})



























































