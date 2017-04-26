package bookmanage.service;

import java.util.List;

import bookmanage.entity.BorrowBookEntity;

public interface BorrowBookService {
	
	/**
	 * 借书信息统计
	 * @return
	 */
	public List<BorrowBookEntity> borrowInfo();
	
	/**
	 * 还书页面借书信息
	 * @return
	 */
	public List<BorrowBookEntity> borrowBookInfo(BorrowBookEntity borrowBookEntity);
	
	/**
	 * 还书完成后清除借书信息
	 * @param borrowBookEntity
	 * @return
	 */
	public int clearBorrow(BorrowBookEntity borrowBookEntity);
}
