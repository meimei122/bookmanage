package bookmanage.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import bookmanage.entity.BookEntity;
import bookmanage.entity.BorrowBookEntity;
import bookmanage.service.BookService;
import bookmanage.service.BorrowBookService;
import bookmanage.service.StudentService;

@Controller
@RequestMapping("BorrowBookController")
public class BorrowBookController {
	
	@Resource
	private BorrowBookService borrowBookService;
	
	@Resource
	private BookService bookService;
	
	@Resource 
	private StudentService studentService;
	
	/**
	 * 统计数据页面借书信息
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "borrowBookInfo", method = RequestMethod.POST)
	public List borrowBookInfo() {
		List<String> xDataList = new ArrayList<String>();
		List numList = new ArrayList<String>();
		List total = new ArrayList<>();
		List<BorrowBookEntity> borrowBooks = borrowBookService.borrowInfo();
		for(int i = 0;i < borrowBooks.size();i++){
			xDataList.add(borrowBooks.get(i).getBook_type());
			numList.add(borrowBooks.get(i).getBorrow_num());
		}
		total.add(xDataList);
		total.add(numList);
		
		return total;
	}
	
	/**
	 * 还书模块
	 * @param borrowBookEntity
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "returnBook", method = RequestMethod.GET)
	public String returnBook(BorrowBookEntity borrowBookEntity,@RequestParam(defaultValue="0",required=false)int limit,@RequestParam(defaultValue="0",required=false)int offset) {
		String data = null;
		Page<BookEntity> page = PageHelper.offsetPage(offset, limit);
		List<BorrowBookEntity> borrowBooks = borrowBookService.borrowBookInfo(borrowBookEntity);
		for(int i = 0;i < borrowBooks.size();i++){
			int outData = Integer.parseInt(borrowBooks.get(i).getOutDate());
			double pay = 0;
			if(outData>0){
				pay = outData*0.5;
				borrowBooks.get(i).setOutDate("是");
				borrowBooks.get(i).setOutDateNum(outData+" 天");
				borrowBooks.get(i).setPay(pay+"元");
			}else{
				borrowBooks.get(i).setOutDate("否");
				borrowBooks.get(i).setOutDateNum("0 天");
				borrowBooks.get(i).setPay(pay+"元");
			}
		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("rows", page.getResult());
		map.put("total", page.getTotal());
		data = JSON.toJSONString(map);
		return data;
	}
	
	/**
	 * 清除借书信息
	 * @param borrowBookEntity
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "clearBorrowInfo", method = RequestMethod.POST)
	public int clearBorrowInfo(BorrowBookEntity borrowBookEntity) {
		int j = 0;
		int i = borrowBookService.clearBorrow(borrowBookEntity);
		int stu = studentService.updateStudent(borrowBookEntity.getSid());
		int book = bookService.updateBorrow(borrowBookEntity.getBook_isbn());
		if(i>0&&stu>0&&book>0){
			j = 1;
		}
		return j;
	}
}
