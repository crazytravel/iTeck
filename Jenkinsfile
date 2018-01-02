pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm install'
            }
        }
        stage('Start') {
            steps {
                sh 'npm start'
            }
        }
    }
}