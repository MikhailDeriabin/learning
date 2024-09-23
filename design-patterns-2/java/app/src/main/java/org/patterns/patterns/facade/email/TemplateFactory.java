package org.patterns.patterns.facade.email;

import org.patterns.patterns.facade.email.Template.TemplateType;

public class TemplateFactory {

	public static Template createTemplateFor(TemplateType type) {
		switch (type) {
			case Email:
				return new OrderEmailTemplate();
			default:
				throw new IllegalArgumentException("Unknown TemplateType");
		}
		
	}
}
