using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoApplication.Entities
{
    public class GreetContext : DbContext
    {
        public GreetContext(DbContextOptions<GreetContext> options): base(options)
        {

        }
        public DbSet<Greet> Greets { get; set; }
    }
}
