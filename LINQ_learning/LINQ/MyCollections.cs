namespace LINQ;

public static class MyCollections
{
    private static Random Rand = new Random();
    public static T[] Arrays<T>(int count=10, int min=1, int max=10)
    {
        if (typeof(T) == typeof(int))
        {
            var result = new int[count];
            for (int i = 0; i < count; i++)
                result[i] = Rand.Next(min, max+1);
            return result as T[];
        }
            
        throw new NotImplementedException($"{nameof(MyCollections)}.{nameof(Arrays)} method does not support {typeof(T)} arrays generation");
    }
}