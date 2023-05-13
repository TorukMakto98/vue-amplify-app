#! /bin/bash

# Update command
yum update -y

#install and start docker
amazon-linux-extras install docker
service docker start
usermod -a -G docker ec2-user
chkconfig docker on

# install aws cli
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Login to AWS ECR
aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 322554522448.dkr.ecr.eu-central-1.amazonaws.com
docker pull 322554522448.dkr.ecr.eu-central-1.amazonaws.com/vue-js-app-repo:latest
docker run -p 8080:8080 -d 322554522448.dkr.ecr.eu-central-1.amazonaws.com/vue-js-app-repo