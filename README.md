# grpc-tutorial
Tutorial on how to create a grpc .net service and consume it from vue js

## STEPS

### Service
- create new vs project from grpc template  
![New Project](./images/00_crear_proyecto.png)  
- add new .proto file
- set file properties to compile:  
![Proto file properties](./images/01_propiedades_proto_file.png)
- Include NuGet package Grpc.AspNetCore.Web:
```
NuGet\Install-Package Grpc.AspNetCore.Web -Version 2.49.0
```
- Modify Startup.cs, to allow vue client reach service (CORS, and GRPC communication).

```
public class Startup
{
	// This method gets called by the runtime. Use this method to add services to the container.
	// For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
	public void ConfigureServices(IServiceCollection services)
	{
		services.AddGrpc();

		//Add cors
		services.AddCors(o => o.AddPolicy("AllowAll", builder =>
		{
			builder.AllowAnyOrigin()
				   .AllowAnyMethod()
				   .AllowAnyHeader()
				   .WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding");
		}));
	}

	// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
	public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
	{
		if (env.IsDevelopment())
		{
			app.UseDeveloperExceptionPage();
		}

		app.UseRouting();

		//Add GrpcWeb
		app.UseGrpcWeb();

		//Add cors
		app.UseCors("AllowAll");

		app.UseEndpoints(endpoints =>
		{
			//before:
			//endpoints.MapGrpcService<TutorialService>();
			
			//after:
			endpoints.MapGrpcService<GreeterService>().EnableGrpcWeb()
				.RequireCors(cors => cors.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

			endpoints.MapGet("/", async context =>
			{
				await context.Response.WriteAsync("Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
			});
		});
	}
}
```
- Another option is to set up a proxy for docker (Envoy proxy): 
  - https://www.envoyproxy.io/
  - https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/helloworld#configure-the-proxy

- add httpPort and sslPort to launchSettings.json file, to set fixed values:
```
{
  "profiles": {
    "GrpcTutorial": {
      "commandName": "Project",
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      },
      "applicationUrl": "https://localhost:5001"
    },
    "Docker": {
      "commandName": "Docker",
      "launchUrl": "{Scheme}://{ServiceHost}:{ServicePort}",
      "publishAllPorts": true,
      "httpPort": 51804,
      "useSSL": true,
      "sslPort": 44361
    }
  }
}
```


### Client






## Documentation
### GRPC Service  
- https://docs.microsoft.com/es-es/aspnet/core/tutorials/grpc/grpc-start?view=aspnetcore-3.0&tabs=visual-studio
- https://medium.com/@lukastosic/part-3-grpc-its-fairly-simple-tips-and-tricks-c7017ed9735e
- https://docs.microsoft.com/en-us/visualstudio/containers/container-launch-settings?view=vs-2019

### Vue client  
- https://www.geeksforgeeks.org/how-to-install-protocol-buffers-on-windows/
- https://medium.com/@aravindhanjay/a-todo-app-using-grpc-web-and-vue-js-4e0c18461a3e
- https://abhinandanaryal.info.np/article/a-complete-walk-through-of-using-grpc-web-using-net-core-server-and-vuejs-client