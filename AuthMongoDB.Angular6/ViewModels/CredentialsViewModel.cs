using AuthMongoDB.Angular6.ViewModels.Validations;
using FluentValidation.Attributes;

namespace AuthMongoDB.Angular6.ViewModels
{
    [Validator(typeof(CredentialsViewModelValidator))]
    public class CredentialsViewModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
}
