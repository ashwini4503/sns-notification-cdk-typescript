import * as cdk from "@aws-cdk/core";
import { Queue } from "@aws-cdk/aws-sqs";
import { CfnOutput } from "@aws-cdk/core";

export class SimpleQueueStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue: Queue = new Queue(this, "SimpleQueue", {
      queueName: "simple-queue.fifo",
      fifo: true
    });

    new CfnOutput(this, "OutputSimpleQueue", {
      description: "Simple queue arn",
      value: queue.queueArn,
      exportName: "simple-queue:arn",
    });
  }
}
