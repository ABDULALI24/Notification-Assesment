using Microsoft.EntityFrameworkCore;
using NotiPractice2.Models;
using System.Collections.Generic;

namespace NotiPractice2.EF
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {

        }

        public DbSet<Notification> Notifications { get; set; }
    }
}
