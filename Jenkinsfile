pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm run-script build'
            }
        }
        stage('Start') {
            steps {
                sh 'pm2 restart process.config.js --env production'
            }
        }
    }
}