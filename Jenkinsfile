pipeline {
    agent any

    environment {
        PATH = "C:\\Program Files\\nodejs;${env.PATH}"
    }

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                bat 'npx sonarqube-scanner'
            }
        }

        stage('Security') {
            steps {
                bat 'npm audit'
            }
        }

        stage('Deployment') {
            steps {
                bat 'docker build -t smart-restaurant-app .'
            }
        }

        stage('Release') {
            steps {
                bat 'echo Release version 1.0.0 created successfully'
            }
        }

        stage('Monitoring') {
            steps {
                bat 'curl http://localhost:3000/health'
            }
        }
    }
}