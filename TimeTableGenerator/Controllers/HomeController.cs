using Microsoft.AspNetCore.Mvc;
using TimeTableGenerator.Models;

namespace TimeTableGenerator.Controllers;


public class HomeController : Controller
{
    public HomeController(){}
    
    public IActionResult Index()
    {
        return View();
    }
    [HttpPost]
    public IActionResult GetSubject(InputModel model)
    {
        if (ModelState.IsValid && model.WorkingDays > 0 && model.SubjectsPerDay > 0)
        {
            model.TotalHours = model.WorkingDays * model.SubjectsPerDay;
            return PartialView("_dynamicTable", model);
        }
        return View();
    }
    [HttpPost]
    public IActionResult GenerateTimeTable(InputModel model)
    {
        if (ModelState.IsValid && model.Subject != null)
        {
            return PartialView("_generateTimeTable", model);
        }
        return View();
    }
}
