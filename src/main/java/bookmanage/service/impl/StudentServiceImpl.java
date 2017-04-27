package bookmanage.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import bookmanage.dao.StudentDao;
import bookmanage.entity.StudentEntity;
import bookmanage.service.StudentService;

@Service("studentService")
public class StudentServiceImpl implements StudentService {
	
	@Resource
	private StudentDao studentDao;
	
	@Override
	public List<StudentEntity> studetnInfo(StudentEntity studentEntity) {
		// TODO Auto-generated method stub
		return studentDao.studetnInfo(studentEntity);
	}

	@Override
	public int updatePsw(StudentEntity studentEntity) {
		// TODO Auto-generated method stub
		return studentDao.updatePsw(studentEntity);
	}

	@Override
	public int deleteStu(List<Integer> list) {
		// TODO Auto-generated method stub
		return studentDao.deleteStu(list);
	}

	@Override
	public int updateStudent(Integer sid) {
		// TODO Auto-generated method stub
		return studentDao.updateStudent(sid);
	}

}
