import AWS from "aws-sdk";

const config = {
  accessKeyId: "PERHAPS_AWS_ACCESS_KEY_ID",
  secretAccessKey: "PERHAPS_AWS_SECRET_ACCESS_KEY",
  region: "PERHAPS_AWS_REGION",
};


const s3 = new AWS.S3(config)