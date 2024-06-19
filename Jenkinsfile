pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/HirunaD/UMS---DevOps-Project.git'
        DOCKER_IMAGE_SERVER = 'ums-devops-project'
        DOCKER_IMAGE_CLIENT = 'none'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: "${REPO_URL}", branch: 'main'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    // Build the server Docker image
                    docker.build("${DOCKER_IMAGE_SERVER}", './server')

                    // Build the client Docker image
                    docker.build("${DOCKER_IMAGE_CLIENT}", './client')
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    // Login to Docker Hub (set DOCKERHUB_CREDENTIALS in Jenkins)
                    docker.withRegistry('', 'ums-devops-project') {
                        // Push the server Docker image
                        docker.image("${DOCKER_IMAGE_SERVER}").push()

                        // Push the client Docker image
                        docker.image("${DOCKER_IMAGE_CLIENT}").push()
                    }
                }
            }
        }

        stage('Deploy Containers') {
            steps {
                script {
                    // Pull and run the containers using docker-compose
                    sh 'docker-compose down'
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
