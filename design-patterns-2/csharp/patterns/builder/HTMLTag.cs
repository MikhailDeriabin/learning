using System.Text;

namespace csharp.patterns.builder;

class HTMLTag
{
    public string Tag, Content;

    public List<HTMLTag> children = [];

    public HTMLTag(){}

    public HTMLTag(string tag, string content)
    {
        Tag = tag;
        Content = content;
    }

    public override string ToString()
    {
        var stringBuilder = new StringBuilder();

        stringBuilder.AppendLine($"<{Tag}>");
        stringBuilder.AppendLine($"{Content}");
        foreach (var child in children)
        {
            stringBuilder.AppendLine(child.ToString());
        }
        stringBuilder.AppendLine($"</{Tag}>");

        return stringBuilder.ToString();
    }
}