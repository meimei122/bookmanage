package bookmanage.controller;

import java.awt.print.Book;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.aspectj.weaver.ast.Var;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import bookmanage.entity.StudentEntity;
import bookmanage.service.StudentService;

@Controller
@RequestMapping("StudentController")
public class StudentController {
	
	@Resource 
	private StudentService studentService;
	
	/**
	 * 统计学生信息
	 * @param studentEntity
	 * @param limit
	 * @param offset
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "student",method = RequestMethod.GET)
	public String student(StudentEntity studentEntity,@RequestParam(defaultValue="0",required=false)int limit,@RequestParam(defaultValue="0",required=false)int offset) {
		String data = null;
		Page<Book> page = PageHelper.offsetPage(offset, limit);
		studentService.studetnInfo(studentEntity);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("rows", page.getResult());
		map.put("total", page.getTotal());
		data = JSON.toJSONString(map);
		return data;
	}
	
	/**
	 * 重置学生密码
	 * @param studentEntity
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "restPsw",method = RequestMethod.POST)
	public int restPsw(StudentEntity studentEntity){
		int i = studentService.updatePsw(studentEntity);
		return i;
	}
	
	/**
	 * 批量删除学生信息
	 * @param studentEntity
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "deleteStu",method = RequestMethod.POST)
	public int deleteStu(String ids){
		List<Integer> list = new ArrayList<Integer>();
		String[] strs = ids.split(",");
        for(int j = 1; j < strs.length;j++){
        	list.add(Integer.parseInt(strs[j]));
        }
		int i = studentService.deleteStu(list);
		return i;
	}
}
