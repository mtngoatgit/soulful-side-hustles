import AWS from "aws-sdk";

const config = {
  accessKeyId: "AWS_ACCESS_KEY_ID",
  secretAccessKey: "AWS_SECRET_ACCESS_KEY",
  region: "AWS_REGION",
};


const s3 = new AWS.S3(config)