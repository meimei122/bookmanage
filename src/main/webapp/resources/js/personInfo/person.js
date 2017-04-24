/**
 * 个人信息js
 */
(function(){
	require(['jquery','bootstrap','bootstrapValidator'],function($,bootstrap,bootstrapValidator){
		$.post("userInfo",{aid:id},function(data){
			$("#username").val(data.username);
		});
		
		$("#personForm").bootstrapValidator({
	        //字段验证
	        fields: {
	            beforPassword:{
	                validators: {
	                    //非空
	                    notEmpty: {
	                        message: '*密码不能为空'
	                    },
	                    threshold :  6 ,
	                    remote: {//ajax验证。server result:{"valid",true or false} 向服务发送当前input name值，获得一个json数据。例表示正确：{"valid",true}    
	                        url: 'checkPass',//验证地址  
	                        message: '*密码错误',//提示消息  
	                        delay  :  6000,//每输入一个字符，就发ajax请求，服务器压力还是太大，设置6秒发送一次ajax（默认输入一个字符，提交一次，服务器压力太大）  
	                        type: 'POST',//请求方式  
	                        //自定义提交数据，默认值提交当前input value  
	                        data: function(validator) {  
	                        	return {  
	                        		username: $('[name="username"]').val(),  
		                        	pass: $('[name="beforPassword"]').val()  
		                        };  
	                       }  
	                    }
	                }
	            },
	            //密码
	            nowPassword:{
	                validators: {
	                    notEmpty: {
	                        message: '*密码不能为空'
	                    }
	                }
	            }
	        }
	    });
	});
})();