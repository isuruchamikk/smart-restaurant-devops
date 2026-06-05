pipeline {
    agent any

    environment {
        PATH = "C:\\Program Files\\nodejs;${env.PATH}"
    }

    stages {

        stage('Build') {
            steps {
                bat '''
                if exist node_modules rmdir /s /q node_modules
                npm install
                '''
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
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

        stage('Monitoring') {
            steps {
                bat 'curl http://localhost:3000/health'
            }
        }
    }
}