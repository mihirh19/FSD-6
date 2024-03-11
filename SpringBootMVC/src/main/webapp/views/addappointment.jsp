<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>employee Registration</title>
</head>

<body>

<h1>employee appointment registration status</h1>
<p>${message}</p>

<table>
    <tr>
        <td>employee Name:</td>
        <td>${employee.employeeName}</td>
    </tr>

    <tr>
        <td>employee Contact:</td>
        <td>${employee.employeeContact}</td>
    </tr>

    <tr>
        <td>employee Gender:</td>
        <td>${employee.employeeGender}</td>
    </tr>

</table>

</body>
</html>
