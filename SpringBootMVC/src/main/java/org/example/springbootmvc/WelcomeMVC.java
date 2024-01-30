package org.example.springbootmvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller()
public class WelcomeMVC {

    @RequestMapping("/welcome")
    public String welcome() {
        return "welcome";
    }
}
