$(function(){
  

 //判断token
 var toke =localStorage.getItem('token')
 if(!toke){
   location.href='./login.html'
 }

 function getinfo(){
  $.ajax({
      type:'get',
      url:'/my/userinfo',
      headers:{
          Authorization:localStorage.getItem('token') || ''
      },
      success: function(res){
        if(res.status!==0){
          return layui.layer.msg(res.message)
        }

        redom(res.data)
      }
  })
}
getinfo()


function redom(data){
  console.log(data);
  var name =data.nickname || data.username
 
  $('.text').html('欢迎&nbsp;&nbsp;'+name)
  console.log( $('.text').html());
  if(data.user_pic !==null){
    $('.layui-nav-img').attr('src',data.user_pic )
    $('.img').hide()
  }else{
  $('.layui-nav-img').hide()
  var first =name[0].toUpperCase()
  
  $('.img').htm(first).show()

}
}





})




  
