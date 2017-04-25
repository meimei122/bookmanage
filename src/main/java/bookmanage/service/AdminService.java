package bookmanage.service;

import bookmanage.entity.AdminEntity;

public interface AdminService {
	
	/**
	 * 校验用户名密码登录
	 * @param adminEntity
	 * @return
	 */
	public AdminEntity login(AdminEntity adminEntity);
	
	/**
	 * 获取用户信息
	 * @param adminEntity
	 * @return
	 */
	public AdminEntity adminInfo(AdminEntity adminEntity);
	
	/**
	 * 修改密码
	 * @param adminEntity
	 * @return
	 */
	public int updateAdmin(AdminEntity adminEntity);
}
