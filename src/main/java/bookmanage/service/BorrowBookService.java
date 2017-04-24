package bookmanage.service;

import java.util.List;

import bookmanage.entity.BorrowBookEntity;

public interface BorrowBookService {
	
	/**
	 * 借书信息统计
	 * @return
	 */
	public List<BorrowBookEntity> borrowInfo();
}
