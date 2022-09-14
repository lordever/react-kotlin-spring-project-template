# Short description

This is mine project which I hope will help many people who want to develop application by using kotlin + react (functional components).

Please rate via stars so that the project is seen as much as possible

# Getting Started

## Backend

1. First you need to make `mvn clean install` 
2. After that you can run backend of by typing `./mvnw spring-boot:run`. You'll see successfully message and look forward api by `curl localhost:8080/api`
3. For adding new employee you can add this by next command: `curl -X POST localhost:8080/api/employees -d "{\"firstName\": \"Bilbo\", \"lastName\": \"Baggins\", \"description\": \"burglar\"}" -H "Content-Type:application/json"`

## Frontend 

More about client side you can read [here](./src/main/webapp/client/README.md#usage) 

1. Make `npm install` in directory `./src/main/webpapp/client`
2. Run `npm run serve` command from this directory
3. You'll see successfully message and look forward web page by navigation to `http://localhost:8080`

### Reference Documentation

For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.7.3/maven-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/2.7.3/maven-plugin/reference/html/#build-image)
* [Rest Repositories](https://docs.spring.io/spring-boot/docs/2.7.3/reference/htmlsingle/#howto.data-access.exposing-spring-data-repositories-as-rest)
* [Spring Data JPA](https://docs.spring.io/spring-boot/docs/2.7.3/reference/htmlsingle/#data.sql.jpa-and-spring-data)
* [Thymeleaf](https://docs.spring.io/spring-boot/docs/2.7.3/reference/htmlsingle/#web.servlet.spring-mvc.template-engines)

### Guides

The following guides illustrate how to use some features concretely:

* [Accessing JPA Data with REST](https://spring.io/guides/gs/accessing-data-rest/)
* [Accessing Neo4j Data with REST](https://spring.io/guides/gs/accessing-neo4j-data-rest/)
* [Accessing MongoDB Data with REST](https://spring.io/guides/gs/accessing-mongodb-data-rest/)
* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)
* [Handling Form Submission](https://spring.io/guides/gs/handling-form-submission/)

