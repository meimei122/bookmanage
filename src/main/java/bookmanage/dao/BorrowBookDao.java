package bookmanage.dao;

import java.util.List;

import bookmanage.entity.BorrowBookEntity;

public interface BorrowBookDao {
	/**
	 * 首页借书信息统计
	 * @return
	 */
	public List<BorrowBookEntity> borrowInfo();
}
