package org.patterns.patterns.factories.simpleFactory;

import java.time.LocalDate;

/**
 * Represents a news post.
 *
 * This is our product we want to create
 */
public class NewsPost extends Post{

	private String headline;
	
	private LocalDate newsTime;

	public String getHeadline() {
		return headline;
	}

	public void setHeadline(String headline) {
		this.headline = headline;
	}

	public LocalDate getNewsTime() {
		return newsTime;
	}

	public void setNewsTime(LocalDate newsTime) {
		this.newsTime = newsTime;
	}
}
