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
    public class PlantMasterController : ControllerBase
    {
        private readonly WebDbContext _context;

        public PlantMasterController(WebDbContext context)
        {
            _context = context;
        }

        // GET: api/PlantMaster
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TblPlantMaster>>> GetTblPlantMasters()
        {
            return await _context.TblPlantMasters.ToListAsync();
        }

        // GET: api/PlantMaster/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TblPlantMaster>> GetTblPlantMaster(int id)
        {
            var tblPlantMaster = await _context.TblPlantMasters.FindAsync(id);

            if (tblPlantMaster == null)
            {
                return NotFound();
            }

            return tblPlantMaster;
        }

        // PUT: api/PlantMaster/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutTblPlantMaster(TblPlantMaster tblPlantMaster)
        {
            if (tblPlantMaster.PlantId != tblPlantMaster.PlantId)
            {
                return BadRequest();
            }

            _context.Entry(tblPlantMaster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblPlantMasterExists(tblPlantMaster.PlantId))
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

        // POST: api/PlantMaster
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TblPlantMaster>> PostTblPlantMaster(TblPlantMaster tblPlantMaster)
        {
            _context.TblPlantMasters.Add(tblPlantMaster);
            await _context.SaveChangesAsync();

            // return CreatedAtAction("GetTblPlantMaster", new { id = tblPlantMaster.PlantId }, tblPlantMaster);
            return new JsonResult("Added Successfully");
        }

        // DELETE: api/PlantMaster/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblPlantMaster(int id)
        {
            var tblPlantMaster = await _context.TblPlantMasters.FindAsync(id);
            if (tblPlantMaster == null)
            {
                return NotFound();
            }

            _context.TblPlantMasters.Remove(tblPlantMaster);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TblPlantMasterExists(int id)
        {
            return _context.TblPlantMasters.Any(e => e.PlantId == id);
        }
    }
}
