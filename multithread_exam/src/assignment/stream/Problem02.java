package assignment.stream;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Problem02 {

   public static void main(String[] args) throws IOException {
      Path path = Paths.get("C:\\Users\\mikko\\Desktop\\folders\\metropolia\\multi_thread\\src\\assignment\\Homer-Odyssey-UTF8-Coding.txt");
      String fileContent = Files.readString(path, StandardCharsets.UTF_8).toLowerCase();

      IntStream stream = fileContent.chars();
      
      //Your solution
      String vowels = "aeiou";

      long startTime = System.currentTimeMillis();
      Map<Integer, Long> result = stream
              .parallel()
              .filter(c -> vowels.indexOf(c) >= 0)
              .mapToObj(Integer::valueOf)
              .collect(Collectors.groupingBy(Function.identity(), Collectors.counting() ));
      long endTime = System.currentTimeMillis();

      Set<Integer> resultKeys = result.keySet();
      for(Integer key : resultKeys){
         char keyChar = (char) key.intValue();
         System.out.println(keyChar + ": " + result.get(key));
      }
      System.out.println("Search time (ms) " + (endTime - startTime));
   }

}
