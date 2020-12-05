$(function(){
    


    $('.layui-form').submit(function(e){
        var form =layui.form
        var layer = layui.layer
       
    
        //表单验证规则
        form.verify({
            name: [/^[\S]{6,8}/,'用户名必须是6-8位字符'],
            pass:[/^[\S]{6,12}$/,'密码必须是6-12位数字']
        })
        e.preventDefault();
        var data = $(this).serialize()
        if(data!=''){
            $.ajax({
                url:'http://ajax.frontend.itheima.net/api/login',
                type:'POST',
                data:data,
                success:function(res){
                    if(res.status==0){
                        
                        location.href='./index.html'
                        layer.msg(res.message)
                    }else{

                        //表单提交后 清空
                        $('.layui-form')[0].reset()
                       return layer.msg(res.message)
                       
                    
                    }
    
                }
    
            
               
            })
        }
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

































})