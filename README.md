# Building Microservices with Nest.js, Kafka and Docker Compose

## Overview

This project demonstrates a microservices architecture using Node.js and Docker Compose. The application consists of multiple services that work together to achieve a specific functionality.

## Prerequisites

- Docker installed on your machine: [Docker Installation Guide](https://docs.docker.com/get-docker/)
- Docker Compose installed on your machine: [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)
- Node.js installed on your machine: [Node.js Installation Guide](https://nodejs.org/en/download/)
- This application is depend on kafka server so we have to configure the kafka service.
    - clone `Kafkadrop`:
        ```bash
        git clone https://github.com/obsidiandynamics/kafdrop.git
        ``` 
        ```bash
        cd docker-compose/kafka-kafdrop 
        ```
        ```bash
        docker-compose up
        ```

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/sonukumar16/nestjs-kafka-microservices
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repository
    ```

3. Build and start the services using Docker Compose:

    ```bash
    docker-compose up --build
    ```

   This command will download the necessary images, build the services, and start the containers.

4. Access the application:

   - API Gateway: [http://localhost:3000](http://localhost:3000)

## Services

### API Gateway

- Description: API gateway description.
- Endpoint: [http://localhost:3000](http://localhost:3000)

## Configuration

- Modify the environment variables in the `.env` file to customize the application settings.
- Note: In this application no `.env` fiel need to be configured.

## Development

- Add development-specific instructions here.

## Troubleshooting

- Include common issues and their solutions.

## Contributing

- If you'd like to contribute, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).


## API Documentation
- Sample curls are defined in `.api-curls.txt` file