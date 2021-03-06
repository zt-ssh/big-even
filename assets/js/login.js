$(function () {
  //课堂练习


























  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 //获取全局对象定义
  var form = layui.form
  var layer = layui.layer
//-----------------------------------------------------------------------------------

  //表单验证规则
  form.verify({
    name: [/^[\S]{6,8}/, '用户名必须是6-8位字符'],
    pass: [/^[\S]{6,12}$/, '密码必须是6-12位数字'],
    // 验证确认密码必须和原有密码一致
    same: function (value) {
      // 获取原始密码
      var pass = $('#registerForm input[name=password]').val()
      if (pass !== value) {
        return '两次输入的密码必须一致'
      }
    }
  })
//-----------------------------------------------------------------------------------------
  //登录模块
  $('.layui-form').submit(function (e) {
    e.preventDefault();
    var data = $(this).serialize()
    if (data != '') {
      $.ajax({
        url: '/api/login',
        type: 'POST',
        data: data,
        success: function (res) {
          console.log(res);
          if (res.status === 0) {
            localStorage.setItem('token', res.token)
         
            location.href = './index.html'
            layer.msg(res.message)
          } else {

            //表单提交后 清空

            return layer.msg(res.message)


          }
          $('.layui-form')[0].reset()

        }



      })
    }

  })
//---------------------------------------------------------------------------------  
//注册功能
  $('#registerForm').on('submit', function (e) {
    // 1. 阻止默认的提交行为
    e.preventDefault();
    // 2. 发起Ajax的POST请求
    var data = {
      username: $('#registerForm [name=username]').val(),
      password: $('#registerForm [name=password]').val()
    }
    console.log(data);
    $.post('/api/reguser', data, function (res) {
      if (res.status !== 0) {
        return layer.msg(res.message)
      }
      layer.msg('注册成功，请登录！')
      console.log(res);
      // 模拟人的点击行为
      $('#registerForm a').click()
    })
  })


//----------------------------------------------------------------------------------------

  //切换登录注册页面
  $('#registerForm a').click(function () {
    $('#loginForm').show()
    $('#registerForm').hide()
  })

  $('#loginForm a').click(function () {
    $('#loginForm').hide()
    $('#registerForm').show()

  })


























































































})