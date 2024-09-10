package org.patterns.patterns.factories.factoryMethod.message;

/**
 * This is a concreate product we want to create
 */
public class TextMessage extends Message {
	@Override
	public String getContent() {
		return "Text";
	}
}
