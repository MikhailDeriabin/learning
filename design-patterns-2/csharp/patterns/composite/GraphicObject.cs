using System.Text;

namespace csharp.patterns.composite;

public class GraphicObject
{
    public virtual string Name { get; set; } = "Group";
    public string Color;

    private Lazy<List<GraphicObject>> children = new();
    public List<GraphicObject> Children => children.Value;

    private void Print(StringBuilder builder, int depth)
    {
        builder.Append(new string('*', depth))
        .Append(string.IsNullOrWhiteSpace(Color) ? string.Empty : $"{Color} ")
        .AppendLine(Name);

        foreach (var child in Children)
        {
            child.Print(builder, depth + 1);
        }
    }

    public override string ToString()
    {
        var builder = new StringBuilder();
        Print(builder, 0);
        return builder.ToString();
    }
}