package org.example.springbootmvc;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

@Controller()
public class FormController {

    @RequestMapping("/appointment")
    public ModelAndView appointment(){
        return new ModelAndView("appointment");
    }

    @PostMapping("/addappointment")
    public ModelAndView addAppointment(@RequestParam("patientName") Map<String, String> requestParams)
    {
        ModelAndView modelAndView = new ModelAndView("addappointment");
        modelAndView.addObject("message", String.format("name   = %s" ,requestParams.get("patientName")));
        return modelAndView;
    }
}
