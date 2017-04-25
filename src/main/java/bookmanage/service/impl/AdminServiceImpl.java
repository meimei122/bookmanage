package bookmanage.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import bookmanage.dao.AdminDao;
import bookmanage.entity.AdminEntity;
import bookmanage.service.AdminService;

@Service("AdminService")
public class AdminServiceImpl implements AdminService {
	@Resource
	private AdminDao adminDao;
	
	@Override
	public AdminEntity login(AdminEntity adminEntity) {
		// TODO Auto-generated method stub
		return adminDao.login(adminEntity);
	}

	@Override
	public AdminEntity adminInfo(AdminEntity adminEntity) {
		// TODO Auto-generated method stub
		return adminDao.adminInfo(adminEntity);
	}

	@Override
	public int updateAdmin(AdminEntity adminEntity) {
		// TODO Auto-generated method stub
		return adminDao.updateAdmin(adminEntity);
	}
}