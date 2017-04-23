/**
 * 图书管理js
 * 
 */
(function(){
	require(['jquery','bootstrap','bootTable','bootTableExport','bootTableCn'],function(jquery,bootstrap,bootTable,bootTableExport,bootTableCn){
		
		window.operateEvents = {
		        'click .like': function (e, value, row, index) {
		        	var sid = id,
		        		book_isbn = row.book_isbn,
		        		book_name = row.book_name,
		        		book_type = row.book_type;
//		        	$.post('BorrowBookController/addBorrow',{sid:sid,book_isbn:book_isbn,book_name:book_name,book_type:book_type},function(data){
//		        		if(data==2){
//		        			new TipBox({type:'error',str:'对不起,您借书数量超过上限!',hasBtn:true});
//		        		}else if(data == 1){
//				        	$("#borrow_table").bootstrapTable('refresh', {url: "BookController/book"});
//		        		}
//		        	});
		        }
		    };
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
				columns:[[{"title": "图书信息表","halign": "center","align": "center","colspan": 8}
					],[
			        {field:'book_isbn',title:'书号',valign: "middle",align:"center"},
			        {field:'book_name',title:'书名',valign: "middle",align:"center"},
			        {field:'book_author',title:'作者',valign: "middle",align:"center"},
			        {field:'book_type',title:'图书类型',valign: "middle",align:"center"},
			        {field:'book_price',title:'图书价格',valign: "middle",align:"center"},
			        {field:'book_totalnum',title:'总数',valign: "middle",align:"center"},
			        {field:'book_avanum',title:'可借数量',valign: "middle",align:"center"}
			        /*{title:'借阅',valign: "middle",align:"center",events: operateEvents,
			            formatter: function (value, row, index) {
			                return [
			                        '<a class="like" title="Borrow">',
			                        '<i class="glyphicon glyphicon-heart"></i>',
			                        '</a>  '
			                    ].join('');
			                }
			            }*/
			    ]]
			});
			
		//带参数查询	
		$("#querybtn").on('click',function(){
			var book_isbn = $("#book_isbn").val(),
				book_name = $("#book_name").val(),
				book_type = $("#book_type").val();
			$("#book_manage_table").bootstrapTable('refresh', {url: "BookController/book?book_isbn="+book_isbn+"&book_name="+book_name+"&book_type="+book_type});
		});
	});
})();