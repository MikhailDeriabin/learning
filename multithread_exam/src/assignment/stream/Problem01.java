package assignment.stream;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.IntStream;

public class Problem01 {

   public static void main(String[] args) throws IOException{
      Path path = Paths.get("C:\\Users\\mikko\\Desktop\\folders\\metropolia\\multi_thread\\src\\assignment\\Homer-Odyssey-UTF8-Coding.txt");
      String fileContent = Files.readString(path, StandardCharsets.UTF_8).toLowerCase();

      IntStream stream = fileContent.chars();
      
      //Your solution
      long startTime = System.currentTimeMillis();
      long aLetterCount = stream
                             .parallel()
                             .filter(c -> c == 'a')
                             .count();
      long endTime = System.currentTimeMillis();

      System.out.println("a letters found: " + aLetterCount);
      System.out.println("Search time (ms) " + (endTime - startTime));
   }

}
