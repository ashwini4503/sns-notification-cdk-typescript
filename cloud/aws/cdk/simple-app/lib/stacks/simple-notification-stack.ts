import * as cdk from "@aws-cdk/core";
import { Topic } from "@aws-cdk/aws-sns";
import { CfnOutput } from "@aws-cdk/core";
import { EmailSubscription } from "@aws-cdk/aws-sns-subscriptions";
import { Effect, PolicyStatement, ServicePrincipal } from "@aws-cdk/aws-iam";

export class SimpleNotificationStack extends cdk.Stack {
  public readonly topicNotificationArn: string;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const topic: Topic = new Topic(this, "SimpleNotificationTopic", {
      displayName: "simple-notification",
      topicName: "simple-notification",
      fifo: false,
    });

    this.topicNotificationArn = topic.topicArn;

    topic.addToResourcePolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        principals: [ new ServicePrincipal("s3.amazonaws.com") ],
        actions: [ "sns:Publish" ],
        resources: [ topic.topicArn ]
      })
    );

    topic.addSubscription(new EmailSubscription("jacosi8339@ofenbuy.com"));

    new CfnOutput(this, "OutputSimpleNotificationTopic", {
      description: "Simple notification topic arn",
      value: topic.topicArn,
      exportName: "simple-notification-topic:arn",
    });
  }
}
