import * as cdk from "@aws-cdk/core";
import { Bucket, EventType } from "@aws-cdk/aws-s3";
import { Topic, ITopic } from "@aws-cdk/aws-sns";
import { SnsDestination } from "@aws-cdk/aws-s3-notifications";

export interface SimpleBucketStackProps extends cdk.StackProps {
  topicNotificationArn: string;
}

export class SimpleBucketStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: SimpleBucketStackProps) {
    super(scope, id, props);

    if (!props?.topicNotificationArn) {
      throw new Error("Missing topic arn");
    }

    // Import topic
    const topic: ITopic = Topic.fromTopicArn(
      this,
      "ImportedTopic",
      props.topicNotificationArn
    );

    // Create bucket
    const bucket: Bucket = new Bucket(this, "SimpleBucket", {
      bucketName: "simple-bucket-tech-data-2021",
      versioned: false
    });

    // Add notification
    bucket.addEventNotification(
      EventType.OBJECT_CREATED,
      new SnsDestination(topic)
    );
  }
}
