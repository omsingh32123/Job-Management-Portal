# Use OpenJDK 17 as the base image
FROM openjdk:17-jdk-slim

# Install Maven to build the Spring Boot application
RUN apt-get update && apt-get install -y maven

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml and source code into the container
COPY pom.xml /app/
COPY src /app/src/

# Run Maven to build the JAR file inside the container
RUN mvn clean package

# Command to run the application (the JAR file is created in the target folder)
ENTRYPOINT ["java", "-jar", "/app/target/Jobify-0.0.1-SNAPSHOT.jar"]
