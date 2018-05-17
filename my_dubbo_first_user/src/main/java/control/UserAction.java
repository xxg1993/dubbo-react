package control;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.xxg.bean.User;
import com.xxg.service.UserService;


/**
 * Servlet implementation class UserAction
 */
public class UserAction extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */             
    public UserAction() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action = request.getParameter("method");
		System.out.println("post:"+action);
		if (action.equals("query")){
			
			query(request,response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String action = request.getParameter("method");
		System.out.println("post:"+action);
		if (action.equals("addUser"))
		{
			addUser(request,response);
			
		}
		
		
	}
	
	private void addUser(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(new String[]{"META-INF/spring/dubbo-user.xml"});
        context.start();
        UserService userService = (UserService) context.getBean("userService");
        
		String username =request.getParameter("username");
		String password =request.getParameter("password");
		String age =request.getParameter("age");
		User user = new User();
	//	user.setUsername(username);
	//	user.setPassword(password);
		user.setAge(Integer.parseInt(age));
		userService.insertUser(user);
		
		HttpSession session=request.getSession();
		session.setAttribute("username", username);
		session.setAttribute("password", password);
		session.setAttribute("age", age);
		
		request.getRequestDispatcher("okTest.jsp").forward(request, response);
		
	}
	
	private void query(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(new String[]{"META-INF/spring/dubbo-user.xml"});
        context.start();
        UserService userService = (UserService) context.getBean("userService");
        
        Map<String, Object> paramMap = new HashMap<String, Object>();
		
		List<User> userList = userService.getUserByMap(paramMap);

		
		request.setAttribute("userList", userList);
		request.setAttribute("testFlag", "ok");
		request.getRequestDispatcher("query.jsp").forward(request, response);
		
	}

}
