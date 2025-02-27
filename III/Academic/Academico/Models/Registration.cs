namespace Academico.Models
{
    public class Registration
    {
        public int RegistrationId { get; set; }
        public DateTime DateRegistration { get; set; }
        public int CourseId { get; set; }
        public int StudentId { get; set; }
    }
}
