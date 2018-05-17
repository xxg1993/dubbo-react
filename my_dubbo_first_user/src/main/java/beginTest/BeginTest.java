package beginTest;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.xxg.bean.User;
import com.xxg.service.UserService;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BeginTest {
    public static void main(String[] args) throws IOException {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(new String[]{"META-INF/spring/dubbo-user.xml"});
        context.start();
        UserService userService = (UserService) context.getBean("userService");
        User user = new User();
        
        user.setAge(0);
   //     user.setPassword("4567");
    //    user.setUsername("kkkh");
        
        userService.insertUser(user);
        
    	System.out.println("ok");
    	
    	Map<String, Object> paramMap = new HashMap<String, Object>();
		
		List<User> userList = userService.getUserByMap(paramMap);
		System.out.println("------------");
		for(User users: userList){
	//		System.out.println("姓名："+users.getUsername()+"  ,密码："+users.getPassword());
		}
		
    	
    	
    }
}
