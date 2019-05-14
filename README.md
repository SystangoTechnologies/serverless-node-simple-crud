# serverless-node-simple-crud

Simple AWS lambda serverless function for crud operations using Expressjs.

## Setup
 - Install  `node`, `npm`
 - Run the following commands

```sh
# Install serverless globally
$ npm install -g serverless

# Provide credentials of AWS to serverless
$ sls config credentials --provider aws --key PUBLIC_KEY --secret SECRET_KEY

# Install dependencies
$ npm install

# Export Env variable
$ export MY_API_KEY= Some text for api key generation

```

## Deployment
Setup the following variables into your AWS lambda function.
```
NODE_ENV=production/development
DATABASE= Name of the database.
DB_USERNAME= Database user name
DB_PASSWORD= Database password
DB_HOST= Database host
DB_PORT= Database port
```
Deploying serverless function to AWS.
```sh
$ sls deploy  # Deploying serverless function to AWS
```
## Running
 - Make a POST APIs call with the API URL returned.
 - Set API key value in the x-api-key header of every request.
 - The API key is auto-generated by AWS and printed on the screen while running 'sls deploy'.
 - Refer to postman collection in the codebase with the file named 'serverless-node-simple-crud.postman_collection.json'
 
## Contributors
[Vikas Patidar](https://www.linkedin.com/in/vikas-patidar-0106/)

## License

Built under [MIT](http://www.opensource.org/licenses/mit-license.php) license.

