/**
 * 学生管理js
 * 
 */
(function(){
	require(['jquery','bootstrap','bootTable','bootTableExport','bootTableCn'],function(jquery,bootstrap,bootTable,bootTableExport,bootTableCn){

			$("#student_table").bootstrapTable({
				toolbar:'#student_toolbar',
				url:"StudentController/student",
			 	height: 580,
			 	striped:true,
			    search:false,
			    showRefresh:false,
			    showColumns:true,
			    showExport:true,
			    showColumns:true,//显示字段
			    pagination:true,//底部数据信息
			    sidePagination:"server",
			    pageSize:5,
			    pageList:[5,10,15,20],
				columns:[[{"title": "学生信息表","halign": "center","align": "center","colspan": 8}
					],[{checkbox: true,align: "center"},
			        {field:'sid',title:'学号',valign: "middle",align:"center"},
			        {field:'username',title:'用户名',valign: "middle",align:"center"},
			        {field:'tel',title:'电话',valign: "middle",align:"center"},
			        {field:'borrow_num',title:'可以借阅数量',valign: "middle",align:"center"}
			    ]]
			});
		
		//重置学生密码
		$("#restPsw").on("click", function () {
          var row = $.map($("#student_table").bootstrapTable('getSelections'), function (row) {
			        	return row
			        }),
			  id;
          
          if (row.length > 1) {
        	  alert("选择项过多,请选择最多一项进行修改");
        	  return false ;
  		  }
          if(row.length == 0) {
  			alert("请选择需要重置的数据！");
  			return false ;
  		  }else{
  			id = row[0].sid;  
  		  }
          
          $.post('StudentController/restPsw',{sids:id},function(data){
        	  if(data>0){
        		  $("#student_table").bootstrapTable('refresh', {url: "StudentController/student"});
        		  alert('重置密码成功');
        	  }
          });
          
        });
		
		
		//批量删除学生信息
		$("#deleteStudent").on("click", function () {
	          var row = $.map($("#student_table").bootstrapTable('getSelections'), function (row) {
				        	return row
				        }),
				  ids = "";
	          
	          if(row.length == 0) {
	  			alert("请至少选择一项进行操作");
	  			return false ;
	  		  }else{
	  			$("#delcfmModel").modal('show');
	  			$("#sure").on("click", function(){
	  				for(var i = 0; i < row.length;i++){
	  					ids += ","+ row[i].sid;
	  				}
	  				$.post('StudentController/deleteStu',{ids:ids},function(data){
	  	        	  if(data>0){
	  	        		$("#student_table").bootstrapTable('refresh', {url: "StudentController/student"});
	  	        	  }
	  				});
	  			});
	  		  }
		});
		
		//带参数查询	
		$("#querybtn").on('click',function(){
			var sid = $("#sid_type").val();
			$("#student_table").bootstrapTable('refresh', {url: "StudentController/student?sid="+sid});
		});
	});
})();