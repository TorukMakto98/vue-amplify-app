terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  profile = "default"
  region = "eu-central-1"
}

resource "aws_iam_role" "iam_role" {
  name = "ec2-iam-role"

  assume_role_policy = jsondecode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_iam_role_policy" "iam-policy" {
  policy = "iam_iam-policy"
  role   = aws_iam_role.iam_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "ecr:*"
        Effect = "Allow"
        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_instance_profile" "iam_instance_profile" {
  name = "ec2_instance_profil"
  role = aws_iam_role.iam_role.name
}

resource "aws_security_group" "ec2_sg" {
  name = "sg"
  ingress {
    from_port = 8080
    to_port = 8080
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "app_server" {
  ami = "ami-0a887e401f7654935"
  instance_type = "t2.micro"
  iam_instance_profile = aws_iam_instance_profile.iam_instance_profile.name
  vpc_security_group_ids = [aws_security_group.ec2_sg.id]
  tags = {
    Name = "EC2 Instance"
  }
}