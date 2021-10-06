import * as cdk from "@aws-cdk/core";
import { AttributeType, Table } from "@aws-cdk/aws-dynamodb";

export class SimpleTableStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Table(this, "SimpleTable", {
      tableName: "Books",
      partitionKey: {
        name: "isbn",
        type: AttributeType.STRING
      }
    });
  }
}
