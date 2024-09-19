package org.patterns.patterns.composite;

/**
 * The component base class for composite pattern
 * defines operations applicable both leaf & composite
 */ 
public abstract class File {

	private String name;
	private int intend;

	public File(String name) {
		this.name = name;
		this.intend = 0;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	protected String getIntendString(){
		String intendStr = "";

		for (int i = 0; i < intend; i++) {
			intendStr += " ";
		}
		return intendStr;
	}
	protected void addIntend(int amount){
		this.intend += amount;
	}
	protected int getIntend(){
		return this.intend;
	}

	@Override
    public boolean equals(Object object){
        if(object == this)
            return true;

        if(object == null)
            return false;

        if(object.getClass() != this.getClass())
            return false;
        
        File parsedObject = (File) object;

        return parsedObject.getName() == this.getName();
    }
	
	public abstract void ls();
	
	public abstract void addFile(File file);

	public abstract File[] getFiles();
	
	public abstract boolean removeFile(File file);
}
