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
        User user = new User(0, "name", 10, "sex", "dec", "id");
        System.out.println("姓名："+user.getName()+"  ,年龄："+user.getAge());
   //     user.setAge(0);
   //     user.setPassword("4567");
   //     user.setUsername("kkkh");
        
        userService.insertUser(user);
        userService.deleteUser(3);
        
        User userNew = new User(4, "nameupdateOK", 10, "sex", "dec", "id");
        userService.updateUser(userNew);
        
    	System.out.println("ok");
    	
    	Map<String, Object> paramMap = new HashMap<String, Object>();
		
		List<User> userList = userService.getUserByMap(paramMap);
		System.out.println("------------");
		for(User users: userList){
			System.out.println("姓名："+users.getName()+"  ,年龄："+users.getAge());
		}
		
    	
    	
    }
}
