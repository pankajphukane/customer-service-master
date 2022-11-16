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
    public class CustomerMasterController : ControllerBase
    {
        private readonly WebDbContext _context;

        public CustomerMasterController(WebDbContext context)
        {
            _context = context;
        }

        // GET: api/CustomerMaster
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblCustomerMaster>>> GetTblCustomerMasters()
        {
            return await _context.TblCustomerMasters.ToListAsync();
        }

        // GET: api/CustomerMaster/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblCustomerMaster>> GetTblCustomerMaster(long id)
        {
            var tblCustomerMaster = await _context.TblCustomerMasters.FindAsync(id);

            if (tblCustomerMaster == null)
            {
                return NotFound();
            }

            return tblCustomerMaster;
        }

        // PUT: api/CustomerMaster/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutTblCustomerMaster(TblCustomerMaster tblCustomerMaster)
        {
            if (tblCustomerMaster.Id != tblCustomerMaster.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblCustomerMaster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblCustomerMasterExists(tblCustomerMaster.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            //return NoContent();
            return new JsonResult("Updated Successfully");
        }

        // POST: api/CustomerMaster
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblCustomerMaster>> PostTblCustomerMaster(TblCustomerMaster tblCustomerMaster)
        {
            _context.TblCustomerMasters.Add(tblCustomerMaster);
            await _context.SaveChangesAsync();

            // return CreatedAtAction("GetTblCustomerMaster", new { id = tblCustomerMaster.Id }, tblCustomerMaster);
            return new JsonResult("Added Successfully");
        }

        // DELETE: api/CustomerMaster/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblCustomerMaster(long id)
        {
            var tblCustomerMaster = await _context.TblCustomerMasters.FindAsync(id);
            if (tblCustomerMaster == null)
            {
                return NotFound();
            }

            _context.TblCustomerMasters.Remove(tblCustomerMaster);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblCustomerMasterExists(long id)
        {
            return _context.TblCustomerMasters.Any(e => e.Id == id);
        }
    }
}
