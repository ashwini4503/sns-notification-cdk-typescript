#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { SimpleAppStack } from "../lib/simple-app-stack";
import { SimpleNotificationStack } from "../lib/simple-notification-stack";
import { SimpleQueueStack } from "../lib/simple-queue-stack";
import { SimpleLambdaStack } from "../lib/simple-lambda-stack";
import { SimpleTableStack } from "../lib/simple-table-stack";

const app = new cdk.App();

const bucketStack: SimpleAppStack = new SimpleAppStack(app, "SimpleAppStack", {
  topicExportNameArn: "simple-notification-topic:arn",
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  }
});

const topicStack: SimpleNotificationStack = new SimpleNotificationStack(
  app,
  "SimpleNotificationStack",
  {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION
    }
  }
);

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

bucketStack.addDependency(topicStack);

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