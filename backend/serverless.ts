import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
    service: process.env.SERVICE,
    frameworkVersion: '2', 
}