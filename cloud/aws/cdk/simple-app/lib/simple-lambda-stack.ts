import * as cdk from "@aws-cdk/core";
import { Code, Function, Runtime } from "@aws-cdk/aws-lambda";
import * as path from "path";

export class SimpleLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Function(this, "SimpleLambda", {
      runtime: Runtime.NODEJS_14_X,
      functionName: "simple-lambda",
      handler: "index.handler",
      code: Code.fromAsset(path.join(__dirname, "assets/simple-lambda"))
    });
  }
}
