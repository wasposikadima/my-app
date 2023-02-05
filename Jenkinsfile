#!groovy

properties([disableConcurrentBuilds()])

pipeline {
    agent any
		environment {
				DOCKER_DOCKERFILE = './Dockerfile'
				DOCKER_IMAGE = 'propokot/serviceschurchclient'
				DOCKER_CREDENTIAL = 'docker-hub-credentials'
		}
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
				stage('Building image') {
            steps {
								sh """
								docker build -f "${DOCKER_DOCKERFILE}" --force-rm -t "${DOCKER_IMAGE}:${DOCKER_BRANCH}" "./"
								"""
            }
        }
				stage('Docker login') {
						steps {
								withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIAL}", usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
									sh """
									docker login -u $USERNAME -p $PASSWORD
									"""
							}
						}
				}
				stage('Deploy image') {
            steps {
								sh """
								docker push ${DOCKER_IMAGE}:${DOCKER_BRANCH}
								"""
            }
        }
				stage('Images prune') {
            steps {
								sh """
								docker system prune -a -f
								"""
            }
        }
    }
		post {
				success {
						withCredentials([string(credentialsId: 'telegram_token', variable: 'TOKEN'), string(credentialsId: 'telegram_chat_id', variable: 'CHAT_ID')]) {
						sh ("""
								curl -s -X POST https://api.telegram.org/bot${TOKEN}/sendMessage \
									-d chat_id=${CHAT_ID} \
									-d parse_mode=markdown \
									-d text='*${env.JOB_NAME}* : POC *Branch*: ${env.GIT_BRANCH} *Build* : OK *Published* = YES'
						""")
						}
				}
				aborted {
						withCredentials([string(credentialsId: 'telegram_token', variable: 'TOKEN'), string(credentialsId: 'telegram_chat_id', variable: 'CHAT_ID')]) {
						sh ("""
								curl -s -X POST https://api.telegram.org/bot${TOKEN}/sendMessage \
									-d chat_id=${CHAT_ID} \
									-d parse_mode=markdown \
									-d text='*${env.JOB_NAME}* : POC *Branch*: ${env.GIT_BRANCH} *Build* : `Aborted` *Published* = `Aborted`'
						""")
						}
				}
				failure {
						withCredentials([string(credentialsId: 'telegram_token', variable: 'TOKEN'), string(credentialsId: 'telegram_chat_id', variable: 'CHAT_ID')]) {
						sh ("""
								curl -s -X POST https://api.telegram.org/bot${TOKEN}/sendMessage \
									-d chat_id=${CHAT_ID} \
									-d parse_mode=markdown \
									-d text='*${env.JOB_NAME}* : POC *Branch*: ${env.GIT_BRANCH} *Build* : `not OK` *Published* = `no`'
						""")
						}
				}
		}
}