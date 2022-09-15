using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PracticeProject1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string data = File.ReadAllText("D:\\Mphasis\\Practice Project\\StudentData.txt");
            Console.WriteLine("Data From the File display here-");
            Console.WriteLine("=========================================");
            Console.WriteLine(data);
            Console.WriteLine("=========================================");
        }
    }
}
