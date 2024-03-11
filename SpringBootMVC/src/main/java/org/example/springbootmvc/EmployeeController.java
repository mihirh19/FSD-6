package org.example.springbootmvc;


import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.Arrays;

@Controller
public class EmployeeController {
    @RequestMapping("/appointment")
    public ModelAndView appointment(Model model){

        Employee employee = new Employee();

        employee.setEmployeeGender("Male");
        model.addAttribute("employeeSkills", Arrays.asList("c","c++","java"));

        return new ModelAndView("appointment","employee",employee);
    }

    @RequestMapping("/addappointment")
    public ModelAndView addAppointment(@Valid @ModelAttribute Employee employee, BindingResult bindingResult, Model model)
    {
        if(bindingResult.hasErrors()) {

            model.addAttribute("employeeSkills", Arrays.asList("c","c++","java"));
            return new ModelAndView("appointment","employee",employee);
        }

        ModelAndView modelAndView = new ModelAndView("addappointment");
        modelAndView.addObject("message", "we have registered your detail sucessfully");
        return modelAndView;
    }
}
