package teht8;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

class TimeUtilsTest {
	@Test
	@DisplayName("Should return -1 for negative params")
	@ParameterizedTest
	@ValueSource(ints = {-234, -456, -1, -4})
	void negativeNumsTest(int num) {
		assertEquals("-1", TimeUtils.secToTime(num));
	}
	
	@Test
	@DisplayName("Should return -1 for params over 84400(=24h)")
	@ParameterizedTest
	@ValueSource(ints = {84401, 100000, 85000})
	void largeNumsTest(int num) {
		assertEquals("-1", TimeUtils.secToTime(num));
	}
	
	@Test
	@DisplayName("Should return 00:00:00 for zero as a param")
	void zeroValueTest() {
		assertEquals("00:00:00", TimeUtils.secToTime(0));
	}
	
	@Test
	@DisplayName("Should return 00:00:00 for 84400(=24h) as a param")
	void maxValueTest() {
		assertEquals("00:00:00", TimeUtils.secToTime(84400));
	}
	
	@Test
	@DisplayName("Should return 12:11:34 for 43894 as a param")
	void twoDigitValuesTest() {
		assertEquals("12:11:34", TimeUtils.secToTime(43894));
	}
	
	@Test
	@DisplayName("Should return 03:05:08 for 11108 as a param")
	void oneDigitValuesTest() {
		assertEquals("03:05:08", TimeUtils.secToTime(11108));
	}
}
