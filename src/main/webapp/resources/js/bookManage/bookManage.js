/**
 * 图书管理js
 * 
 */
(function(){
	require(['jquery','bootstrap','bootTable','bootTableExport','bootTableCn'],function(jquery,bootstrap,bootTable,bootTableExport,bootTableCn){
		
			$("#book_manage_table").bootstrapTable({
				toolbar:'#book_manage_toolbar',
				url:"BookController/book",
			 	height: 580,
			 	striped:true,
			    search:false,
			    showRefresh:true,
			    showColumns:true,
			    showExport:true,
			    showColumns:true,//显示字段
			    pagination:true,//底部数据信息
			    sidePagination:"server",
			    pageSize:5,
			    pageList:[5,10,15,20],
				columns:[[{"title": "图书信息表","halign": "center","align": "center","colspan": 9}
					],[{checkbox: true,align: "center"},
			        {field:'book_isbn',title:'书号',valign: "middle",align:"center"},
			        {field:'book_name',title:'书名',valign: "middle",align:"center"},
			        {field:'book_author',title:'作者',valign: "middle",align:"center"},
			        {field:'book_type',title:'图书类型',valign: "middle",align:"center"},
			        {field:'book_price',title:'图书价格',valign: "middle",align:"center"},
			        {field:'book_totalnum',title:'总数',valign: "middle",align:"center"},
			        {field:'book_avanum',title:'可借数量',valign: "middle",align:"center"}
			    ]]
			});
		
		//添加图书信息
		$('#addBook').on('click',function(){
			$('.update').css({'display':'none'});
			$('.add').css({'display':'block'});
			
			$('#book_isbn1').val(""),
			$('#book_name').val(""),
			$('#book_author').val(""),
			$('#book_type').val(""),
			$('#book_price').val(""),
			$('#book_totalnum').val(""),
			$('#book_avanum').val("");
			
			$('#addBtn').on('click',function(){
				var book_isbn = $('#book_isbn1').val(),
				book_name = $('#book_name').val(),
				book_author = $('#book_author').val(),
				book_type = $('#book_type').val(),
				book_price = $('#book_price').val(),
				book_totalnum = $('#book_totalnum').val(),
				book_avanum = $('#book_avanum').val();
			
			
			$.post('BookController/bookAdd',{book_isbn:book_isbn,book_name:book_name,book_author:book_author,book_type:book_type,book_price:book_price,book_totalnum:book_totalnum,book_avanum:book_avanum},function(data){
				  if(data>0){
					  $("#book_manage_table").bootstrapTable('refresh', {url: "BookController/book"});
				  }
				});
			});
			
		});
		
		
		//修改图书信息
		$('#updateBook').on('click',function(){
			$('.add').css({'display':'none'});
			$('.update').css({'display':'block'});
			var book_isbn,book_name,book_author,book_type,book_price,book_totalnum,book_avanum;
			
			var row = $.map($("#book_manage_table").bootstrapTable('getSelections'), function (row) {
	        	return row
	        });
		  
			if (row.length > 1) {
			  alert("选择项过多,请选择最多一项进行修改");
			  return false ;
			  }
			if(row.length == 0) {
				alert("请选择需要修改的数据！");
				return false ;
			  }
			
			$('#book_isbn2').val(row[0].book_isbn),
			$('#book_name').val(row[0].book_name),
			$('#book_author').val(row[0].book_author),
			$('#book_type').val(row[0].book_type),
			$('#book_price').val(row[0].book_price),
			$('#book_totalnum').val(row[0].book_totalnum),
			$('#book_avanum').val(row[0].book_avanum);
			
			$('#updateBtn').on('click',function(){
				book_isbn = $('#book_isbn2').val(),
				book_name = $('#book_name').val(),
				book_author = $('#book_author').val(),
				book_type = $('#book_type').val(),
				book_price = $('#book_price').val(),
				book_totalnum = $('#book_totalnum').val(),
				book_avanum = $('#book_avanum').val();
				
				$.post('BookController/bookUpdate',{book_isbn:book_isbn,book_name:book_name,book_author:book_author,book_type:book_type,book_price:book_price,book_totalnum:book_totalnum,book_avanum:book_avanum},function(data){
				  if(data>0){
					  $("#book_manage_table").bootstrapTable('refresh', {url: "BookController/book"});
				  }
				});
			});
		});
		
		//批量删除图书信息
		$("#deleteBook").on("click", function () {
	          var row = $.map($("#book_manage_table").bootstrapTable('getSelections'), function (row) {
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
	  					ids += ","+ row[i].book_isbn;
	  				}
	  				$.post('BookController/bookDelete',{ids:ids},function(data){
	  	        	  if(data>0){
	  	        		$("#book_manage_table").bootstrapTable('refresh', {url: "BookController/book"});
	  	        	  }
	  				});
	  			});
	  		  }
		});
	});
})();