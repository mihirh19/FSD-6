<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<html>
<head>
    <title>employee Registration</title>
</head>
<body>
<h1>employee appointment registration</h1>

<form:form method="post" action="addappointment" modelAttribute="employee">

    <table>
        <tr>
            <td>Name:</td>
            <td>
                <form:input path="employeeName" type="text"/>
            </td>
        </tr>
        <tr><form:errors path="employeeName" style="color:red"/></tr>

        <tr>
            <td>Contact No:</td>
            <td>
                <form:input path="employeeContact" type="text"/>
            </td>
        </tr>
        <tr> <form:errors path="employeeContact" style="color:red"/></tr>

        <tr>
            <td>Gender:</td>
            <td>
                <form:radiobutton path="employeeGender" value="Male" label="Male"/>
                <form:radiobutton path="employeeGender" value="Female" label="Female"/>
            </td>
        </tr>
        <tr><form:errors path="employeeGender" style="color:red"/></tr>

        <tr>
            <td colspan="2"><input type="submit" value="add my appointment!"/></td>
        </tr>

    </table>

</form:form>
</body>
</html>
