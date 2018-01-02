pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'pm2 stop --silent iteck'
                sh 'pm2 delete --silent iteck'
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
                sh 'pm2 start process.config.js --env_production'
            }
        }
    }
}