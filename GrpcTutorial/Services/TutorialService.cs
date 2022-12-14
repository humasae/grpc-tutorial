using Grpc.Core;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GrpcTutorial
{
    public class TutorialService : Signer.SignerBase
    {
        private readonly ILogger<TutorialService> _logger;
        public TutorialService(ILogger<TutorialService> logger)
        {
            _logger = logger;
        }

        public override Task<PersonReply> SignPerson(PersonRequest request, ServerCallContext context)
        {
            _logger.LogInformation("Signing person {Name}", request.ToString());
            return Task.FromResult(new PersonReply
            {
                Name = String.Format("Person name is: {0} {1}", request.FirstName, request.LastName),
                Contact = String.Format("Person address is: {0}. And email is: {1}", request.Address, request.Email)

            });
        }
    }
}
