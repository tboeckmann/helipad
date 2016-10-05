# Helipad

## About


#Setup

## Create AWS account
Skip if you already have one but follow this guide to setup an account

## Register domain
With AWS if you dont already have one

## Setup

1. We need some lambda functions to help with our future Cloudformation scripts, we can create the lambda functions with a cloudformation template `aws cloudformation create-stack --stack-name helipad-supporting-functions --template-body file://cloudformation/01_supporting_functions.yaml --capabilities CAPABILITY_IAM`

2. Create buckets for website hosting, `aws cloudformation create-stack --stack-name helipad-website-buckets --template-body file://cloudformation/02_website_buckets.yaml --parameters ParameterKey=RootDomainName,ParameterValue=helipad.com`

3. Create dynamodb tables, `aws cloudformation create-stack --stack-name helipad-dynamodb --template-body file://cloudformation/03_dynamodb_tables.yaml`


## DNS settings
Update nameserver settings to make domain work

## Infrastructure
Uses cloud formation so its much easier


# Thanks to
https://github.com/gilt/cloudformation-helpers of there helper functions