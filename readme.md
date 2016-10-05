# Helipad

## About


#Setup

## Create AWS account
Skip if you already have one but follow this guide to setup an account

## Register domain
With AWS if you dont already have one

## Supporting functions

`
aws cloudformation create-stack --stack-name helipad-supporting-functions --template-body file://cloudformation/01_supporting_functions.yaml --capabilities CAPABILITY_IAM
`


## DNS settings
Update nameserver settings to make domain work

## Infrastructure
Uses cloud formation so its much easier
