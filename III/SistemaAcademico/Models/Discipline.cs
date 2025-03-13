namespace Academico.Models
{
    public class Discipline
    {
        public int DisciplineId { get; set; }
        public string? Name { get; set; }
        public int Semester { get; set; }

        public int Courseid { get; set; }
        public Course? Course { get; set; }
    }
}
