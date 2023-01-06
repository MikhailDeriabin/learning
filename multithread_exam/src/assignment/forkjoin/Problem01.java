package assignment.forkjoin;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.RecursiveTask;

public class Problem01 {
   public static class Task extends RecursiveTask<Integer>{
      private final char vowel;
      private final char[] array;
      private final int start, end;

      Task(char vowel, char[] array, int start, int end){
         this.vowel = vowel;
         this.array = array;
         this.start = start;
         this.end = end;
      }
      @Override
      protected Integer compute() {
         if( end - start < 100 ){
            int count = 0;
            for(int idx = start; idx < end; idx++){
               if( vowel == array[idx] )
                  count++;
            }

            return count;
         }
         else{
            int mid = (start+end)/2;
            Task leftTask = new Task(vowel, array, start, mid);
            Task rightTask = new Task(vowel, array, mid, end);
            invokeAll(leftTask, rightTask);

            return leftTask.join() + rightTask.join();
         }
      }
   }

   public static void main(String[] args) throws IOException {
      Path path = Paths.get("C:\\Users\\mikko\\Desktop\\folders\\metropolia\\multi_thread\\src\\assignment\\Homer-Odyssey-UTF8-Coding.txt");
      String fileContent = Files.readString(path, StandardCharsets.UTF_8).toLowerCase();

      char[] content = fileContent.toCharArray();

      long startTimeSeq = System.currentTimeMillis();
      int countResult = countVowel('a', content, 0, content.length);
      System.out.println("Result " + countResult);
      long endTimeSeq = System.currentTimeMillis();
      System.out.println("Search time seq (ms) " + (endTimeSeq - startTimeSeq));


      ForkJoinPool executor = new ForkJoinPool(8);
      Task root = new Task('a', content, 0, content.length);
      long startTime = System.currentTimeMillis();
      executor.execute(root);

      System.out.println("a letters: " + root.join());
      long endTime = System.currentTimeMillis();
      System.out.println("Search time (ms) " + (endTime - startTime));
   }
   
   public static int countVowel(final char vowel, char[] str, int start, int end) {
      if( end - start < 100 ) {
         int count = 0;
         for(int idx = start; idx < end; idx++) {
            if( vowel == str[idx] )
               count++;
         }
         
         return count;
      }
      else{
         int mid = (start+end)/2;
         int leftResult = countVowel(vowel, str, start, mid);
         int rightResult = countVowel(vowel, str, mid, end);
         return leftResult + rightResult;
      }
   }

}
