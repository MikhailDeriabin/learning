package org.patterns.patterns.facade.email;

public class HalloweenStationary implements Stationary {

	@Override
	public String getHeader() {
		return "It's Halloween!!";
	}

	@Override
	public String getFooter() {
		return "BUY MORE STUFF! It's Halloween, c'mon!!";
	}

}
