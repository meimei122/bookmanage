package bookmanage.service;

import java.util.List;

import bookmanage.entity.BookEntity;

public interface BookService {
	/**
	 * 首页图书信息统计
	 * @return
	 */
	public List<BookEntity> bookInfo();
	
	/**
	 * 图书信息统计给图书管理使用
	 * @return
	 */
	public List<BookEntity> book(BookEntity book);
	
	/**
	 * 添加图书信息
	 * @param book
	 * @return
	 */
	public int bookAdd(BookEntity book);
	
	/**
	 * 修改图书信息
	 * @param book
	 * @return
	 */
	public int bookUpdate(BookEntity book);
	
	/**
	 * 删除图书信息
	 * @param book
	 * @return
	 */
	public int bookDelete(List<Integer> list);
}
