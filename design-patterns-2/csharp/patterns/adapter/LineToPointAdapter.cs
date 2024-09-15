using System.Collections.ObjectModel;

namespace csharp.patterns.adapter;

public class LineToPointAdapter : Collection<Point>
{

    public LineToPointAdapter(Line line)
    {
        ConvertToPoint(line);
    }

    private void ConvertToPoint(Line line)
    {
        Add(new Point(line.Start.X, line.Start.Y));
        Add(new Point(line.End.X, line.End.Y));
    }
}