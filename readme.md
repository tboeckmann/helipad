# Helipad

## About


#Setup

## Create AWS account
Skip if you already have one but follow this guide to setup an account

## Register domain
With AWS if you dont already have one

## PreRequists

1. AWS account, setup instructions here
2. Domain [optional] but without some features are limited it can be created with AWS in Route53 or your favorite domain registar.
3. Install F#####h *TODO instructions*

## Setup

1. We need some lambda functions to help with our future Cloudformation scripts, we can create the lambda functions with a cloudformation template `aws cloudformation create-stack --stack-name helipad-supporting-functions --template-body file://cloudformation/01_supporting_functions.yaml --capabilities CAPABILITY_IAM`

2. Create buckets for website hosting, `aws cloudformation create-stack --stack-name helipad-website-buckets --template-body file://cloudformation/02_website_buckets.yaml --parameters ParameterKey=RootDomainName,ParameterValue=helipad.com`

3. Create dynamodb tables, `aws cloudformation create-stack --stack-name helipad-dynamodb --template-body file://cloudformation/03_dynamodb_tables.yaml`

4. Create API gateway and lambda functions `aws cloudformation create-stack --stack-name helipad-api --template-body file://cloudformation/04_api.yaml --parameters ParameterKey=SwaggerBody,ParameterValue=file://api/swagger.json`

# get buckname for sync
aws cloudformation describe-stacks --stack-name helipad-website-buckets --query 'Stacks[].Outputs[?OutputKey==`ContentBucket`].OutputValue' --output text


## DNS settings
Update nameserver settings to make domain work

## Infrastructure
Uses cloud formation so its much easier

# Landing Page Customization

## Changing \<head> content
HTML \<head> tags are used by search engines to display page information. Not all search engines run scripts on the page, so the tags need to be updated in the `html\index.html` file.

## Changing auto-generated page content

Content that appears on page is located in: `html\js\helipad.js`. To change this, simply edit the JSON fields.


## Changing content blocks

To change the content blocks on the page, find the block in `html\index.html` file and edit the text in HTML.

## Changing auto-generated form fields
The form fields are configured in `html\js\helipad.js` under the JSON section: `helipad.fields`

### Enabling/ disabling form fields
To change whether a form field is displayed on the form, edit the form field found under `helipad.fields`.  To change the field, toggle the `"enabled"` key to `true` or `false`.

The following example <strong>enables</strong> the company form field from being displayed:

```
"company": {
    "enabled": true,
    "label": "company",
    "required": false
}
```

The following example <strong>disables</strong> the company form field from being displayed:

```
"company": {
    "enabled": false,
    "label": "company",
    "required": false
}
```

### Changing if form fields are required to be filled in
To change whether a form field is required to be filled in, edit the form field found under `helipad.fields`.  To change the field, toggle the `"required"` key to `true` or `false`.

The following example <strong>requires</strong> the company form field to be completed:

```
"company": {
    "enabled": true,
    "label": "company",
    "required": true
}
```

The following example <strong>does not require</strong> the company form field to be completed:

```
"company": {
    "enabled": true,
    "label": "company",
    "required": false
}
```
NOTE: Ensure that `"enabled"` is set to `true` to display the form field.



# Thanks to
https://github.com/gilt/cloudformation-helpers for their helper functions.

http://getbootstrap.com/ for creating and maintaining Twitter Bootstrap.

https://github.com/thomaspark/bootswatch for awesome, simple Bootstrap themes.

