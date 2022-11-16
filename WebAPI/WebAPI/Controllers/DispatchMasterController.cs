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
    public class DispatchMasterController : ControllerBase
    {
        private readonly WebDbContext _context;

        public DispatchMasterController(WebDbContext context)
        {
            _context = context;
        }

        // GET: api/DispatchMaster
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblDispatchMaster>>> GetTblDispatchMasters()
        {
            return await _context.TblDispatchMasters.ToListAsync();
        }

        // GET: api/DispatchMaster/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblDispatchMaster>> GetTblDispatchMaster(int id)
        {
            var tblDispatchMaster = await _context.TblDispatchMasters.FindAsync(id);

            if (tblDispatchMaster == null)
            {
                return NotFound();
            }

            return tblDispatchMaster;
        }

        // PUT: api/DispatchMaster/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutTblDispatchMaster(TblDispatchMaster tblDispatchMaster)
        {
            if (tblDispatchMaster.DispatchId != tblDispatchMaster.DispatchId)
            {
                return BadRequest();
            }

            _context.Entry(tblDispatchMaster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblDispatchMasterExists(tblDispatchMaster.DispatchId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            //  return NoContent();
            return new JsonResult("Updated Successfully");
        }

        // POST: api/DispatchMaster
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblDispatchMaster>> PostTblDispatchMaster(TblDispatchMaster tblDispatchMaster)
        {
            _context.TblDispatchMasters.Add(tblDispatchMaster);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TblDispatchMasterExists(tblDispatchMaster.DispatchId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            //  return CreatedAtAction("GetTblDispatchMaster", new { id = tblDispatchMaster.DispatchId }, tblDispatchMaster);
            return new JsonResult("Added Successfully");
        }

        // DELETE: api/DispatchMaster/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblDispatchMaster(int id)
        {
            var tblDispatchMaster = await _context.TblDispatchMasters.FindAsync(id);
            if (tblDispatchMaster == null)
            {
                return NotFound();
            }

            _context.TblDispatchMasters.Remove(tblDispatchMaster);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblDispatchMasterExists(int id)
        {
            return _context.TblDispatchMasters.Any(e => e.DispatchId == id);
        }
    }
}
