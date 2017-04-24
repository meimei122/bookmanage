package bookmanage.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import bookmanage.entity.BorrowBookEntity;
import bookmanage.service.BorrowBookService;

@Controller
@RequestMapping("BorrowBookController")
public class BorrowBookController {
	
	@Resource
	private BorrowBookService borrowBookService;
	
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
}
