package bookmanage.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
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
	public Map<String,Object> loginCheck(AdminEntity adminEntity) {
		AdminEntity admin = adminservice.login(adminEntity);
		boolean result = true;
		if(admin==null){
			result = false;
		}
		else{
			result = true;
		}
		 Map<String,Object> map = new HashMap<>();  
	     map.put("param", result); 
	     return map;  
	}
	
	@RequestMapping(value = "index",method = RequestMethod.GET)
	public String index(Model model) {
		return "app/index";
	}
}
