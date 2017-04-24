package bookmanage.dao;

import java.util.List;

import bookmanage.entity.BookEntity;

public interface BookDao {
	
	/**
	 * 图书信息统计
	 * @return
	 */
	public List<BookEntity> bookInfo();

	/**
	 * 图书信息统计给图书管理使用
	 * @return
	 */
	public List<BookEntity> book(BookEntity book);
}
