package bookmanage.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import bookmanage.dao.BookDao;
import bookmanage.entity.BookEntity;
import bookmanage.service.BookService;

@Service("bookService")
public class BookServiceImpl implements BookService {
	@Resource
	private BookDao bookDao;
	
	@Override
	public List<BookEntity> bookInfo() {
		// TODO Auto-generated method stub
		return bookDao.bookInfo();
	}

	@Override
	public List<BookEntity> book(BookEntity book) {
		// TODO Auto-generated method stub
		return bookDao.book(book);
	}

	@Override
	public int bookAdd(BookEntity book) {
		// TODO Auto-generated method stub
		return bookDao.bookAdd(book);
	}

	@Override
	public int bookUpdate(BookEntity book) {
		// TODO Auto-generated method stub
		return bookDao.bookUpdate(book);
	}

	@Override
	public int bookDelete(List<Integer> list) {
		// TODO Auto-generated method stub
		return bookDao.bookDelete(list);
	}

}
