# Filmine Angular applying the Hexagonal Architecture

Simple app with a list of elements and a message log showing the actions on these data.
Easily way to understand the ports, adapters and domain inside a real problem.
- **inbound adapters**: From outside to inside (UI, API, CLI, Tests)
- **outbound adapters**: From inside to outside (DB, API, Filesystem, Tests, Notification Systems, Connecting other Microservices, Messaging Systems, etc)

## Layers:
- **infrastructure/ui**: Angular Components (UI) (Driving Adapters - Inbound Adapters). Which means it only interacts with inbound ports (application layer) (yes, ports and not the specific implementation).
- **application**: Implementation of the use cases (Inbound Ports) defined in the domain layer.
- **domain**: Use Cases in my application defined on ports (interfaces or contracts to be implemented by inbound adapters (in application) and outbound adapters (in infrastructure)).
- **ui**: External application with our frontend views. Agnostic to the domain and application layers. It can use Models from Domain BUT better to use DTOs defined in the application layer.
