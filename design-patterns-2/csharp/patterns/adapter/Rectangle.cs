using System.Collections.ObjectModel;

namespace csharp.patterns.adapter;

/// <summary>
/// Some code which uses Point and Line objects to create a Rectangle.
/// It is a collection of lines
/// </summary>
public class VectorRectangle : VectorObject
{
    public VectorRectangle(int x, int y, int width, int height)
    {
        Add( new Line(new Point(x, y), new Point(x + width, y)) );
        Add( new Line(new Point(x + width, y), new Point(x + width, y + height)) );
        Add( new Line(new Point(x, y), new Point(x, y + height)) );
        Add( new Line(new Point(x, y  + height), new Point(x + width, y + height)) );
    }
}

public class Line
{
    public Line(Point start, Point end)
    {
        Start = start;
        End = end;
    }

    public Point Start, End;
}

public class VectorObject : Collection<Line>
{
    
}