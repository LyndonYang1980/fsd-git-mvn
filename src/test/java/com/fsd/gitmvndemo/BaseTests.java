package com.fsd.gitmvndemo;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.fsd.gitmvndemo.service.Calculation;

@SpringBootTest
@RunWith(SpringRunner.class)
@WebAppConfiguration("src/main/resources")
public class BaseTests {
	
	
	public void testCalc() {
		int a = 200;
		int b = 100;
		
		int addResult = Calculation.add(a, b);
		int subResult = Calculation.sub(a, b);
		
		System.out.println("a + b = " + addResult);
		System.out.println("a - b = " + subResult);
	}
}
