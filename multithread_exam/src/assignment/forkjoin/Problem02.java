package assignment.forkjoin;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.RecursiveTask;

public class Problem02
{
   public static class Task extends RecursiveTask<int[]> {
      private final char[] array;
      private final int start, end;

      Task(char[] array, int start, int end){
         this.array = array;
         this.start = start;
         this.end = end;
      }
      @Override
      protected int[] compute() {
         if(end - start < 100)
         {
            int[] count = new int[5];
            for(int idx = start; idx < end; idx++)
            {
               switch (array[idx]) {
                  case 'a' -> count[0]++;
                  case 'e' -> count[1]++;
                  case 'i' -> count[2]++;
                  case 'o' -> count[3]++;
                  case 'u' -> count[4]++;
               }
            }

            return count;
         }
         else
         {
            int mid = (start + end) / 2;
            Task leftTask = new Task( array, start, mid);
            Task rightTask = new Task(array, mid, end);
            invokeAll(leftTask, rightTask);

            int[] leftArr = leftTask.join();
            int[] rightArr = rightTask.join();

            for(int i=0; i<leftArr.length; i++){
               leftArr[i] += rightArr[i];
            }

            return leftArr;
         }
      }
   }
   public static void main(String[] args) throws IOException
   {
      Path path = Paths.get("C:\\Users\\mikko\\Desktop\\folders\\metropolia\\multi_thread\\src\\assignment\\Homer-Odyssey-UTF8-Coding.txt");
      String fileContent = Files.readString(path, StandardCharsets.UTF_8).toLowerCase();

      char[] content = fileContent.toCharArray();

      long startTimeSeq = System.currentTimeMillis();
      int[] countResult = countVowels(content, 0, content.length);
      long endTimeSeq = System.currentTimeMillis();
      System.out.println("Result sequential");
      System.out.println("a : " + countResult[0] );
      System.out.println("e : " + countResult[1] );
      System.out.println("i : " + countResult[2] );
      System.out.println("o : " + countResult[3] );
      System.out.println("u : " + countResult[4] );
      System.out.println("Search time seq (ms) " + (endTimeSeq - startTimeSeq));


      ForkJoinPool executor = new ForkJoinPool(8);
      Task root = new Task(content, 0, content.length);
      long startTime = System.currentTimeMillis();
      executor.execute(root);
      int[] result = root.join();
      long endTime = System.currentTimeMillis();

      System.out.println("Result parallel");
      System.out.println("a : " + result[0] );
      System.out.println("e : " + result[1] );
      System.out.println("i : " + result[2] );
      System.out.println("o : " + result[3] );
      System.out.println("u : " + result[4] );
      System.out.println("Search time (ms) " + (endTime - startTime));
   }

   /*
    * Used coding 
    * int[0] for 'a' 
    * int[1] for 'e' 
    * int[2] for 'i' 
    * int[3] for 'o' 
    * int[4] for 'u'
    */
   public static int[] countVowels(char[] str, int start, int end)
   {
      if(end - start < 100)
      {
         int[] count = new int[5];
         for(int idx = start; idx < end; idx++)
         {
            switch (str[idx]) {
               case 'a' -> count[0]++;
               case 'e' -> count[1]++;
               case 'i' -> count[2]++;
               case 'o' -> count[3]++;
               case 'u' -> count[4]++;
            }
         }

         return count;
      }
      else
      {
         int mid = (start + end) / 2;
         int[] leftResult = countVowels( str, start, mid);
         int[] rightResult = countVowels( str, mid, end);
         
         leftResult[0] += rightResult[0];
         leftResult[1] += rightResult[1];
         leftResult[2] += rightResult[2];
         leftResult[3] += rightResult[3];
         leftResult[4] += rightResult[4];
         
         return leftResult;
      }
   }

}
