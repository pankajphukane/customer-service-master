using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using WebAPI.Models;

namespace WebAPI.Data
{
    public partial class WebDbContext : DbContext
    {
        public WebDbContext()
        {
        }

        public WebDbContext(DbContextOptions<WebDbContext> options)
            : base(options)
        {
        }

       
        public virtual DbSet<TblCustomerMaster> TblCustomerMasters { get; set; }
        public virtual DbSet<TblCustomerPartMaster> TblCustomerPartMasters { get; set; }
        public virtual DbSet<TblDispatchMaster> TblDispatchMasters { get; set; }
        public virtual DbSet<TblManualCreatedRso> TblManualCreatedRsos { get; set; }
        public virtual DbSet<TblPlantMaster> TblPlantMasters { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("server=APPDEV;user id=sa;database=CustomerService;password=AITS@1234567");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { 

            modelBuilder.Entity<TblCustomerMaster>(entity =>
            {
                entity.ToTable("tblCustomerMaster");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CustomerName).HasMaxLength(100);
            });

            modelBuilder.Entity<TblCustomerPartMaster>(entity =>
            {
                entity.HasKey(e => e.CustomerPartId);

                entity.ToTable("tblCustomerPartMaster");

                entity.Property(e => e.CustomerPartId).HasColumnName("CustomerPartID");
            });

            modelBuilder.Entity<TblDispatchMaster>(entity =>
            {
                entity.HasKey(e => e.DispatchId);

                entity.ToTable("tblDispatchMaster");

                entity.Property(e => e.DispatchId)
                    .ValueGeneratedNever()
                    .HasColumnName("DispatchID");
            });

            modelBuilder.Entity<TblManualCreatedRso>(entity =>
            {
                entity.ToTable("tblManualCreatedRSO");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.OrderDate).HasColumnType("date");
            });

            modelBuilder.Entity<TblPlantMaster>(entity =>
            {
                entity.HasKey(e => e.PlantId);

                entity.ToTable("tblPlantMaster");

                entity.Property(e => e.PlantId).HasColumnName("PlantID");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
