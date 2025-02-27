namespace Academico.Models
{
    public class Curso
    {
        public int CursoId { get; set; }
        public string? Nome {  get; set; }
        public int Vagas { get; set; }

        public List<Disciplina>? Disciplinas { get; set; }
    }   
}
