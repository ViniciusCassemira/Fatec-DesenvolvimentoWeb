namespace Academico.Models
{
    public class Student
    {
        public int StudentId { get; set; }
        public string? Ra { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
