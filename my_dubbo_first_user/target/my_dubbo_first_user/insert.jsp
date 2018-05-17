<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>

<!--  <form action="/banksteel-user-app/create" method="post"> -->
<form action="UserAction?method=addUser" method="post" name="form1">
<table border="1" align="center">
	<tr>
		<td>姓名：</td>
		<td><input type="text" name="username"/></td>
	</tr>
	<tr>
		<td>密码：</td>
		<td><input type="password" name="password"/></td>
	</tr>
	<tr>
		<td>年龄：</td>
		<td><input type="text" name="age"/></td>
	</tr>
	<tr>
		<td colspan="2" align="center">
		<input type="submit" value="提交"/>
		</td>
	</tr>
</table>
</form>
</body>
</html>