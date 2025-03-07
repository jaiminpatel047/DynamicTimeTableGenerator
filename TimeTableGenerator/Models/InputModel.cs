using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System.ComponentModel.DataAnnotations;

namespace TimeTableGenerator.Models
{
    public class InputModel
    {
        [Required]
        [Range(1, 7)]
        public required int WorkingDays { get; set; }
        [Required]
        [Range(1, 9)]
        public required int SubjectsPerDay { get; set; }
        [Required]
        [Range(1, 50)]
        public required int TotalSubjects { get; set; }
        [ValidateNever]
        public int TotalHours { get; set; }
        public List<SubjectModel>? Subject { get; set; }
    }
    public class SubjectModel
    {
        public string Name { get; set; }
        public int Hours { get; set; }
    }
}
