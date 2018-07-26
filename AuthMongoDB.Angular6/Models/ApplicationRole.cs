using AspNetCore.Identity.Mongo;
using MongoDB.Bson;

namespace AuthMongoDB.Angular6.Models
{
    public class ApplicationRole: MongoIdentityRole
    {
        public ApplicationRole(string name)
        {
            Name = name;
            NormalizedName = name.ToUpperInvariant();
        }
    }
}
