using System;
using System.Linq; // Needed for Intersect() and Except()

namespace ConsoleApplication1
{
    class Program
    {
        public static void Main(string[] args)
        {
            // You have two arrays/lists as follows
            int[] list1 = new int[] { 1, 2, 3, 4, 5 };
            int[] list2 = new int[] { 3, 4, 5, 6, 7 };

            // a. Common elements in both lists
            // Intersect() returns values that exist in BOTH list1 and list2
            int[] list3 = list1.Intersect(list2).ToArray();
            Console.WriteLine(string.Join(" ", list3));

            // b. Elements in list1 that are NOT found in list2
            // Except() returns values from the first list that do not exist in the second list
            int[] list4 = list1.Except(list2).ToArray();
            Console.WriteLine(string.Join(" ", list4));

            // c. Elements in list2 that are NOT found in list1
            int[] list5 = list2.Except(list1).ToArray();
            Console.WriteLine(string.Join(" ", list5));

            Console.WriteLine("Press <ENTER> to continue");
            Console.ReadLine();
        }
    }
}