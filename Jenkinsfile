pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'npm build'
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
                echo 'npm start'
            }
        }
    }
}