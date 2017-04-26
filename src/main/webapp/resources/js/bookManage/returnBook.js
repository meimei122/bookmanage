/**
 * 还书js
 */
(function(){
	require(['jquery','bootstrap','bootTable','bootTableExport','bootTableCn'],function(jquery,bootstrap,bootTable,bootTableExport,bootTableCn){
		
			$("#return_book_table").bootstrapTable({
				toolbar:'#return_book_toolbar',
				//url:"BorrowBookController/returnBook",
			 	height: 380,
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
			    columns:[[{"title": "还书信息表","halign": "center","align": "center","colspan": 9}
				],[{checkbox: true,align: "center"},      
			        {field:'book_isbn',title:'书号',valign: "middle",align:"center"},
			        {field:'book_name',title:'书名',valign: "middle",align:"center"},
			        {field:'sid',title:'学号',valign: "middle",align:"center"},
			        {field:'borrow_time',title:'借书日期',valign: "middle",align:"center"},
			        {field:'return_time',title:'还书日期',valign: "middle",align:"center"},
				    {field:'outDate',title:'是否超期',valign: "middle",align:"center"},
				    {field:'outDateNum',title:'超期天数',valign: "middle",align:"center"},
				    {field:'pay',title:'超期应付款',valign: "middle",align:"center"}
			    ]]
			});
		
		$("#returnBtn").on("click",function(){
			 var row = $.map($("#return_book_table").bootstrapTable('getSelections'), function (row) {
		        	return row
		        });
			 
			 if(row.length == 0) {
	  			alert("请选择需要归还的图书信息！");
	  			return false ;
	  		 }
			 
			 var book_isbn = row[0].book_isbn,
			 	 book_name =  row[0].book_name,
			 	 sid = row[0].sid,
			 	 outDate = row[0].outDate,
			 	 outDateNum = row[0].outDateNum,
			 	 pay = row[0].pay;
			 
			 if(outDate == "是"){
				 $('#book_isbnInput').val(book_isbn);
				 $('#book_name').val(book_name);
				 $('#sidInput').val(sid);
				 $('#outDate').val(outDate);
				 $('#outDateNum').val(outDateNum);
				 $('#pay').val(pay);
			 	 
			 	$("#modelTable").modal('show');
			 	
			 	$("#save").on('click',function(){
			 		var book_isbn = $('#book_isbnInput').val(),
					 	sid = $('#sidInput').val(),
					 	pay =  $('#pay').val(),
					 	actualPay = $('#actualPay').val();
			 		if(actualPay != pay){
			 			$(".message").css({'display':'block'});
			 			return false;
			 		}else if(actualPay == pay){
			 			$(".message").css({'display':'none'});
			 			$.post("BorrowBookController/clearBorrowInfo",{book_isbn:book_isbn,sid:sid},function(data){
			 				if(data>0){
			 					borrowInfo();
			 					alert('还书成功');
			 				}
			 			});
			 		}
			 	});
			 }else{
				 $.post("BorrowBookController/clearBorrowInfo",{book_isbn:book_isbn,sid:sid},function(data){
	 				if(data>0){
	 					borrowInfo();
	 					alert('还书成功');
	 				}
	 			 });
			 }
			 
		});
			
		//带参数查询	
		$("#querybtn").on('click',function(){
			borrowInfo();
		});
		
		function borrowInfo(){
			var book_isbn = $("#book_isbn").val(),
			sid = $("#sid").val();
		$("#return_book_table").bootstrapTable('refresh', {url: "BorrowBookController/returnBook?book_isbn="+book_isbn+"&sid="+sid});
		}
	});
})();