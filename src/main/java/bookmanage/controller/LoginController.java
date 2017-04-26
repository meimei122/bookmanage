package bookmanage.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import bookmanage.entity.AdminEntity;
import bookmanage.service.AdminService;


@Controller
@RequestMapping("/")
public class LoginController {
	@Resource
	private AdminService adminservice;
	
	/**
	 * 登录页面
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "login",method = RequestMethod.GET)
	public String login(Model model) {
		return "app/login";
	}
	
	/**
	 * 校验用户名密码
	 * @param adminEntity
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "loginCheck",method = RequestMethod.POST)
	public Map<String,Object> loginCheck(AdminEntity adminEntity,HttpServletRequest request) {
		AdminEntity admin = adminservice.login(adminEntity);
		boolean result = true;
		if(admin==null){
			result = false;
		}
		else{
			result = true;
			request.getSession().setAttribute("aid", admin.getAid());
			request.getSession().setAttribute("ausername", admin.getAusername());
		}
		 Map<String,Object> map = new HashMap<>();  
	     map.put("param", result); 
	     return map;  
	}
	
	/**
	 * 校验密码
	 * @param adminEntity
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "pswCheck",method = RequestMethod.POST)
	public String pswCheck(AdminEntity adminEntity) {
		AdminEntity adminResult = adminservice.login(adminEntity);
		boolean result = true;
		if(adminResult==null){
			result = false;
		}
		else{
			result = true;
		}
        Map<String, Boolean> map = new HashMap<>();  
        map.put("valid", result);  
        ObjectMapper mapper = new ObjectMapper();  
        String resultString = "";  
        try {  
            resultString = mapper.writeValueAsString(map);  
        } catch (JsonProcessingException e) {  
            e.printStackTrace();  
        }  
        return resultString;  
	}
	
	/**
	 * 修改用户信息
	 * @param students
	 * @return
	 */
	
	@RequestMapping(value = "updateUser", method = RequestMethod.POST)
	public String updateUser(String nowPassword,HttpServletRequest request) {
		AdminEntity adminEntity = new AdminEntity();
		Integer aid = (Integer) request.getSession().getAttribute("aid");
		adminEntity.setAid(aid);
		adminEntity.setApass(nowPassword);
		int i = adminservice.updateAdmin(adminEntity);
		if(i>0){
			return "app/login"; 
		}else{
			return "app/index";
		}
		
	}
	
	/**
	 * 默认页面
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "index",method = RequestMethod.POST)
	public String index(Model model) {
		return "app/index";
	}
}
