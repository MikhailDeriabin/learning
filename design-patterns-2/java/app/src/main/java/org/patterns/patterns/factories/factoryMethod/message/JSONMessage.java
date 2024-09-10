package org.patterns.patterns.factories.factoryMethod.message;

/**
 * This is a concreate product we want to create
 */
public class JSONMessage extends Message {
	@Override
	public String getContent() {
		return "{\"JSON\":[]}";
	}
}
