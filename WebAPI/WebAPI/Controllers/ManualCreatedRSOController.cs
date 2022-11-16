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
    public class ManualCreatedRSOController : ControllerBase
    {
        private readonly WebDbContext _context;

        public ManualCreatedRSOController(WebDbContext context)
        {
            _context = context;
        }

        // GET: api/ManualCreatedRSO
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblManualCreatedRso>>> GetTblManualCreatedRsos()
        {
            return await _context.TblManualCreatedRsos.ToListAsync();
        }

        // GET: api/ManualCreatedRSO/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblManualCreatedRso>> GetTblManualCreatedRso(long id)
        {
            var tblManualCreatedRso = await _context.TblManualCreatedRsos.FindAsync(id);

            if (tblManualCreatedRso == null)
            {
                return NotFound();
            }

            return tblManualCreatedRso;
        }

        // PUT: api/ManualCreatedRSO/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutTblManualCreatedRso(TblManualCreatedRso tblManualCreatedRso)
        {
            if (tblManualCreatedRso.Id != tblManualCreatedRso.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblManualCreatedRso).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblManualCreatedRsoExists(tblManualCreatedRso.Id))
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

        // POST: api/ManualCreatedRSO
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblManualCreatedRso>> PostTblManualCreatedRso(TblManualCreatedRso tblManualCreatedRso)
        {

            //string dateString = String.Format("{0:dd/MM/yyyy}", tblManualCreatedRso.OrderDate);
            
            
            
            _context.TblManualCreatedRsos.Add(tblManualCreatedRso);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetTblManualCreatedRso", new { id = tblManualCreatedRso.Id }, tblManualCreatedRso);
            return new JsonResult("Added Successfully");
        }

        // DELETE: api/ManualCreatedRSO/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblManualCreatedRso(long id)
        {
            var tblManualCreatedRso = await _context.TblManualCreatedRsos.FindAsync(id);
            if (tblManualCreatedRso == null)
            {
                return NotFound();
            }

            _context.TblManualCreatedRsos.Remove(tblManualCreatedRso);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblManualCreatedRsoExists(long id)
        {
            return _context.TblManualCreatedRsos.Any(e => e.Id == id);
        }
    }
}
