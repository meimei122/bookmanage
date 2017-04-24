package bookmanage.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import bookmanage.dao.BorrowBookDao;
import bookmanage.entity.BorrowBookEntity;
import bookmanage.service.BorrowBookService;

@Service("borrowBookService")
public class BorrowBookServiceImpl implements BorrowBookService {
	
	@Resource
	private BorrowBookDao borrowBookDao;
	
	@Override
	public List<BorrowBookEntity> borrowInfo() {
		// TODO Auto-generated method stub
		return borrowBookDao.borrowInfo();
	}

}
