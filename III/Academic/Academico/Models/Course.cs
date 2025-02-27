namespace Academico.Models
{
    public class Course
    {
        public int CourseId { get; set; }
        public string? Name { get; set; }
        public int Vacancies { get; set; }

        public List<Discipline>? Disciplines { get; set; }
    }
}
