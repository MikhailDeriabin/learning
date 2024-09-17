package org.patterns.patterns.decorator;

/**
 * The common interface for basic class and decorators, 
 * since the decorators should add some new functionality to already existing one, but not change it entirely.
 * Therefore decorators should support the some pack of methods as the base class
 */
public interface IMessage {
    String getContent();
}
