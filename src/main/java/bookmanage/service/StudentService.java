package bookmanage.service;

import java.util.List;

import bookmanage.entity.StudentEntity;

public interface StudentService {
	
	/**
	 * 统计学生信息
	 * @param studentEntity
	 * @return
	 */
	public List<StudentEntity> studetnInfo(StudentEntity studentEntity);
	
	/**
	 * 重置学生密码
	 * @param studentEntity
	 * @return
	 */
	public int updatePsw(StudentEntity studentEntity);
	
	/**
	 * 批量删除学生信息
	 * @param list
	 * @return
	 */
	public int deleteStu(List<Integer> list);
	
	/**
	 * 修改学生借书信息
	 * @param list
	 * @return
	 */
	public int updateStudent(Integer sid);
}
