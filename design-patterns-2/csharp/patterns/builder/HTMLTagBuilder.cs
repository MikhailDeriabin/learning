namespace csharp.patterns.builder;

class HTMLTagBuilder
{
    private readonly string rootTag;
    HTMLTag root;

    public HTMLTagBuilder(string tag="div")
    {
        rootTag = tag;
        root = new(tag, "");
    }

    public HTMLTagBuilder AddChild(string childTag, string childContent)
    {
        var child = new HTMLTag(childTag, childContent);
        root.children.Add(child);
        return this;
    }

    public override string ToString()
    {
        return root.ToString();
    }
}