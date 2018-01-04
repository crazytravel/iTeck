pipeline {
    agent any

    stages {
        stage('Clean') {
            steps {
                sh 'pm2 stop -s iteck' || echo 'continue execute'
                sh 'pm2 delete -s iteck' || echo 'continue execute'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'yarn build'
            }
        }
        stage('Start') {
            steps {
                sh 'pm2 start process.config.js --env production'
            }
        }
    }
}