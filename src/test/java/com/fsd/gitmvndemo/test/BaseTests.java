package com.fsd.gitmvndemo.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.fsd.gitmvndemo.config.Application;
import com.fsd.gitmvndemo.service.Calculation;

@SpringBootTest(classes = Application.class)
@RunWith(SpringRunner.class)
public class BaseTests {
	
	@Test
	public void testCalc() {
		int a = 200;
		int b = 100;
		
		int addResult = Calculation.add(a, b);
		int subResult = Calculation.sub(a, b);
		
		System.out.println("a + b = " + addResult);
		System.out.println("a - b = " + subResult);
	}
}
