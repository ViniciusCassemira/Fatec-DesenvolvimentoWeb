using System.Runtime.InteropServices;
using MongoDB.Bson.Serialization.Attributes;

namespace pets.Models
{
    public class Pet
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.String)]
        public Guid Id { get; set; }
        public string? Nome { get; set; }
        public int Idade { get; set; }
        public string? Raca { get; set; }
        public string? Cuidador { get; set; }
        public string? Celular { get; set; }
    }
}
