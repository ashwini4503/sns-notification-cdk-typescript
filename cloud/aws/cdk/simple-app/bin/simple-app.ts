#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { SimpleBucketStack } from "../lib/stacks/simple-bucket-stack";
import { SimpleNotificationStack } from "../lib/stacks/simple-notification-stack";
import { SimpleQueueStack } from "../lib/stacks/simple-queue-stack";
import { SimpleLambdaStack } from "../lib/stacks/simple-lambda-stack";
import { SimpleTableStack } from "../lib/stacks/simple-table-stack";


const app = new cdk.App();

const topicStack: SimpleNotificationStack = new SimpleNotificationStack(
  app,
  "SimpleTopicNotificationStack",
  {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION
    }
  }
);

const bucketStack: SimpleBucketStack = new SimpleBucketStack(
  app,
  "SimpleBucketStack",
  {
    topicNotificationArn: topicStack.topicNotificationArn,
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION
    }
  });

const queueStack: SimpleQueueStack = new SimpleQueueStack(
  app,
  "SimpleQueueStack",
  {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION
    }
  }
);

const simpleLambdaStack: SimpleLambdaStack = new SimpleLambdaStack(
  app,
  "SimpleLambdaStack",
  {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION
    }
  }
);

const simpleTableStack: SimpleTableStack = new SimpleTableStack(
  app,
  "SimpleTableStack",
  {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION
    }
  }
);

// Define dependency
bucketStack.addDependency(topicStack);