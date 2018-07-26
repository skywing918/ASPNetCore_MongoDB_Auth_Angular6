using AuthMongoDB.Angular6.Auth;
using AuthMongoDB.Angular6.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AuthMongoDB.Angular6.Helper
{
    public class Tokens
    {
        public static async Task<string> GenerateJwt(ClaimsIdentity identity, IJwtFactory jwtFactory, string userName, JwtIssuerOptions jwtOptions, JsonSerializerSettings serializerSettings)
        {
            var response = new
            {
                id = identity.Claims.Single(c => c.Type == "id").Value,
                fullname = identity.Claims.Single(c => c.Type == "fullname").Value,
                unique_name = userName,
                roles = identity.Claims.Where(c => c.Type == ClaimTypes.Role).Select(r=>r.Value).ToList(),
                auth_token = await jwtFactory.GenerateEncodedToken(userName, identity),
                expires_in = (int)jwtOptions.ValidFor.TotalSeconds
            };

            return JsonConvert.SerializeObject(response, serializerSettings);
        }
    }
}
