<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>

<table border="1" align="center" width="400px">
	<thead>
		<tr>
			<td colspan="3" align="center">用户信息</td>
		</tr>
	</thead>
	<tr>
		<td>姓名</td>
		<td>密码</td>
		<td>年龄</td>
	</tr>
<c:forEach var="i" items="${userList}"> 
	<tr>
		<td>${i.username}</td>
		<td>${i.password}</td>
		<td>${i.age}</td>
	</tr>
	</c:forEach>
</table>
</body>
</html>