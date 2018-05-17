package control;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Iterator;
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

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import com.xxg.bean.User;

/**
 * Servlet implementation class UserAction
 */

public class UserAction extends HttpServlet {
	private static final long serialVersionUID = 1L;
	ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(new String[]{"META-INF/spring/dubbo-user.xml"});

       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserAction() {
        super();
        // TODO Auto-generated constructor stub
       context.start();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action=request.getParameter("method");
        String work="";
        System.out.println("get:"+action);
        if (action.equals("test"))
        {
            test(request, response);
        }
    }
    
    private void test(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    
  //      request.setCharacterEncoding("gbk");
        
        UserService userService = (UserService) context.getBean("userService");
        System.out.println("test:ok");
        
        Map<String, Object> paramMap = new HashMap<String, Object>();        
        List<User> userList = userService.getUserByMap(paramMap);
        System.out.println("------------");
       
        response.setContentType("text/html;charset=utf-8"); 
        JSONArray jsonArray = JSONArray.fromObject(userList);
        PrintWriter out = response.getWriter();
        System.out.println(jsonArray.toString());
        out.println(jsonArray.toString());
        out.flush();
        out.close();

    
}
    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String action = request.getParameter("method");
        String work = "";
        System.out.println("get:"+action);
        if (action.equals("addTest"))
        {
            addTest(request, response);
            
        }else if (action.equals("add")){
            addTest(request, response);
            
        }else if (action.equals("delete")){
            delete(request, response);
            
        }else if (action.equals("update")){
            update(request, response);
            
        }
    }


    private void update(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // TODO Auto-generated method stub
        response.setContentType("text/html;charset=utf-8");
        String ds = request.getParameter("ds");
        JSONArray json=JSONArray.fromObject(ds);
        JSONObject jsonOne;
        System.out.println(json.toString());
        int delete_id = json.getJSONObject(0).getInt("id_key");
        System.out.println(json.toString());
        
        UserService userService = (UserService) context.getBean("userService");
        System.out.println("update:ok");
        Map<String, Object> paramMap = new HashMap<String, Object>();        
        List<User> userList = userService.getUserByMap(paramMap);
        
        
        Iterator<User> iterator = userList.iterator();
        while (iterator.hasNext()){
            User targetUpdate= iterator.next();
            if (targetUpdate.getId_key() == delete_id){
                targetUpdate.setName(json.getJSONObject(0).getString("name"));
                targetUpdate.setAge(Integer.valueOf(json.getJSONObject(0).getString("age")));
                targetUpdate.setSex(json.getJSONObject(0).getString("sex"));
                targetUpdate.setDescrip(json.getJSONObject(0).getString("descrip"));
                targetUpdate.setId(json.getJSONObject(0).getString("id"));
                userService.updateUser(targetUpdate);
                System.out.println("updateUser:ok");
                break;
            }
        }

        JSONArray jsonArray = JSONArray.fromObject(userList);
        PrintWriter out = response.getWriter();
        out.println(jsonArray.toString());
        System.out.println(jsonArray.toString());
        out.flush();
        out.close();
    }

    
    
    private void delete(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // TODO Auto-generated method stub
        response.setContentType("text/html;charset=utf-8");
        String ds = request.getParameter("ds");
        JSONArray json=JSONArray.fromObject(ds);
        JSONObject jsonOne;
        System.out.println(json.toString());
        int delete_id = json.getJSONObject(0).getInt("id_key");
        
        UserService userService = (UserService) context.getBean("userService");
        System.out.println("update:ok");
        Map<String, Object> paramMap = new HashMap<String, Object>();        
        List<User> userList = userService.getUserByMap(paramMap);
        
        Iterator<User> iterator = userList.iterator();
        while (iterator.hasNext()){
            if (iterator.next().getId_key() == delete_id){
                iterator.remove();
                userService.deleteUser(delete_id);
                System.out.println("delete:ok");
                break;
            }
        }

        JSONArray jsonArray = JSONArray.fromObject(userList);
        PrintWriter out = response.getWriter();
        out.println(jsonArray.toString());
        System.out.println(jsonArray.toString());
        out.flush();
        out.close();
    }

    private void addTest(HttpServletRequest request, HttpServletResponse response) throws IOException {
  //      request.setCharacterEncoding("gbk");

        response.setContentType("text/html;charset=utf-8");
        String ds = request.getParameter("ds");
        JSONArray json=JSONArray.fromObject(ds);
        JSONObject jsonOne;
        System.out.println(json.toString());
        
        
       
        UserService userService = (UserService) context.getBean("userService");
         
        for (int i=0; i<json.size(); i++){
            jsonOne = json.getJSONObject(i); 
            userService.insertUser(new User(0, jsonOne.getString("name"), 
                    Integer.valueOf(jsonOne.getString("age")), 
                    jsonOne.getString("sex"), 
                    jsonOne.getString("descrip"), 
                    jsonOne.getString("id")));
        }
        
        System.out.println("add:ok");
        Map<String, Object> paramMap = new HashMap<String, Object>();        
        List<User> userList = userService.getUserByMap(paramMap);
        
  

        System.out.println(userList.size());
        JSONArray jsonArray = JSONArray.fromObject(userList);
        PrintWriter out = response.getWriter();
        out.println(jsonArray.toString());
        System.out.println(jsonArray.toString());
        out.flush();
        out.close();
        
    }

}
