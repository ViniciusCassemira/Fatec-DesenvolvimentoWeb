using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using pets.Models;

namespace pets.Data
{
    public class petsContext : DbContext
    {
        public petsContext (DbContextOptions<petsContext> options)
            : base(options)
        {
        }

        public DbSet<pets.Models.Pet> Pet { get; set; } = default!;
    }
}
