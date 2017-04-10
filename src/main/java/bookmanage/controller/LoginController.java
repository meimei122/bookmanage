package bookmanage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
@RequestMapping("/")
public class LoginController {
	
	/**
	 * 登录页面
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "login",method = RequestMethod.GET)
	public String login(Model model) {
		return "app/login";
	}

}
