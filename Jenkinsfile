pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'node build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'npm install'
            }
        }
        stage('Start') {
            steps {
                echo 'node start'
            }
        }
    }
}