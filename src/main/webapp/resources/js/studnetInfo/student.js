/**
 * 学生管理js
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
			$("#student_table").bootstrapTable({
				toolbar:'#student_toolbar',
				//url:"",
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
				columns:[[{"title": "图书信息表","halign": "center","align": "center","colspan": 8}
					],[
			        {field:'sid',title:'学号',valign: "middle",align:"center"},
			        {field:'username',title:'用户名',valign: "middle",align:"center"},
			        {field:'tel',title:'电话',valign: "middle",align:"center"},
			        {field:'borrow_num',title:'可以借阅数量',valign: "middle",align:"center"},
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
			 
			function initTableCheckbox() {  
                var $thr = $('table thead tr');  
                var $checkAllTh = $('<th><input type="checkbox" id="checkAll" name="checkAll" /></th>');  
                /*将全选/反选复选框添加到表头最前，即增加一列*/  
                $thr.prepend($checkAllTh);  
                /*“全选/反选”复选框*/  
                var $checkAll = $thr.find('input');  
                $checkAll.click(function(event){  
                    /*将所有行的选中状态设成全选框的选中状态*/  
                    $tbr.find('input').prop('checked',$(this).prop('checked'));  
                    /*并调整所有选中行的CSS样式*/  
                    if ($(this).prop('checked')) {  
                        $tbr.find('input').parent().parent().addClass('warning');  
                    } else{  
                        $tbr.find('input').parent().parent().removeClass('warning');  
                    }  
                    /*阻止向上冒泡，以防再次触发点击操作*/  
                    event.stopPropagation();  
                });  
                /*点击全选框所在单元格时也触发全选框的点击操作*/  
                $checkAllTh.click(function(){  
                    $(this).find('input').click();  
                });  
                var $tbr = $('table tbody tr');  
                var $checkItemTd = $('<td><input type="checkbox" name="checkItem" /></td>');  
                /*每一行都在最前面插入一个选中复选框的单元格*/  
                $tbr.prepend($checkItemTd);  
                /*点击每一行的选中复选框时*/  
                $tbr.find('input').click(function(event){  
                    /*调整选中行的CSS样式*/  
                    $(this).parent().parent().toggleClass('warning');  
                    /*如果已经被选中行的行数等于表格的数据行数，将全选框设为选中状态，否则设为未选中状态*/  
                    $checkAll.prop('checked',$tbr.find('input:checked').length == $tbr.length ? true : false);  
                    /*阻止向上冒泡，以防再次触发点击操作*/  
                    event.stopPropagation();  
                });  
                /*点击每一行时也触发该行的选中操作*/  
                $tbr.click(function(){  
                    $(this).find('input').click();  
                });  
            }  
            initTableCheckbox(); 
		
		//带参数查询	
		$("#querybtn").on('click',function(){
			var book_isbn = $("#book_isbn").val(),
				book_name = $("#book_name").val(),
				book_type = $("#book_type").val();
			//$("#book_manage_table").bootstrapTable('refresh', {url: "BookController/book?book_isbn="+book_isbn+"&book_name="+book_name+"&book_type="+book_type});
		});
	});
})();