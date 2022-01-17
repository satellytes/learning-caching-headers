# Learning Caching Headers

Learning `cache-control` headers with serverless, AWS Lambda and AWS Cloudfront.

## Usage

```bash
# install dependencies
yarn

# deploy function (make sure AWS CLI is setup)
yarn deploy

# stream the logs of the function
yarn logs

# only deploy function code (faster then full deployment)
yarn deploy:function

# remove everything you've deployed
yarn deploy:remove
```

> First deploy can take very long (around 5 minutes) as we need to wait for CloudFront to instantiate

## Architecture

The idea is to have a CDN in front of our serverless function to improve API performance. The CDN is
controlled via the HTTP header `cache-control`.

```
Serverless Node Function
     (AWS Lambda)
          ↑ 
          ↓
         CDN
   (AWS Cloudfront)
          ↑
          ↓
         User
```

We can also use this setup to host a website. Depending on the framework and techniques you might
also want to introduce S3 for your static files then.

## Resources

- https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Cache-Control
- https://www.youtube.com/watch?v=bfLFHp7Sbkg
- https://github.com/Droplr/serverless-api-cloudfront
