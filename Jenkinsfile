pipeline {
    agent any

    stages {
        stage('Clean') {
            steps {
                sh "netstat -nlp |grep :3000 |grep -v grep|awk '{print $7}' |awk -F '/' '{print $1}' |xargs kill -9"
            }
        }
        stage('Build') {
            steps {
                sh 'npm run-script build'
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
                sh 'npm run-script start'
            }
        }
    }
}