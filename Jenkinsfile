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
    }
}