using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerPartMasterController : ControllerBase
    {
        private readonly WebDbContext _context;

        public CustomerPartMasterController(WebDbContext context)
        {
            _context = context;
        }

        // GET: api/CustomerPartMaster
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblCustomerPartMaster>>> GetTblCustomerPartMasters()
        {
            return await _context.TblCustomerPartMasters.ToListAsync();
        }

        // GET: api/CustomerPartMaster/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblCustomerPartMaster>> GetTblCustomerPartMaster(int id)
        {
            var tblCustomerPartMaster = await _context.TblCustomerPartMasters.FindAsync(id);

            if (tblCustomerPartMaster == null)
            {
                return NotFound();
            }

            return tblCustomerPartMaster;
        }

        // PUT: api/CustomerPartMaster/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutTblCustomerPartMaster(TblCustomerPartMaster tblCustomerPartMaster)
        {
            if (tblCustomerPartMaster.CustomerPartId != tblCustomerPartMaster.CustomerPartId)
            {
                return BadRequest();
            }

            _context.Entry(tblCustomerPartMaster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblCustomerPartMasterExists(tblCustomerPartMaster.CustomerPartId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            // return NoContent();
            return new JsonResult("Updated Successfully");
        }

        // POST: api/CustomerPartMaster
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblCustomerPartMaster>> PostTblCustomerPartMaster(TblCustomerPartMaster tblCustomerPartMaster)
        {
            _context.TblCustomerPartMasters.Add(tblCustomerPartMaster);
            await _context.SaveChangesAsync();

            // return CreatedAtAction("GetTblCustomerPartMaster", new { id = tblCustomerPartMaster.CustomerPartId }, tblCustomerPartMaster);
            return new JsonResult("Added Successfully");
        }

        // DELETE: api/CustomerPartMaster/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblCustomerPartMaster(int id)
        {
            var tblCustomerPartMaster = await _context.TblCustomerPartMasters.FindAsync(id);
            if (tblCustomerPartMaster == null)
            {
                return NotFound();
            }

            _context.TblCustomerPartMasters.Remove(tblCustomerPartMaster);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblCustomerPartMasterExists(int id)
        {
            return _context.TblCustomerPartMasters.Any(e => e.CustomerPartId == id);
        }
    }
}
