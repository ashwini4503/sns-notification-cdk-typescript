import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { SimpleBucketStack } from '../lib/stacks/simple-bucket-stack';

test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new SimpleBucketStack(app, 'SimpleBucketStackTest');
  // THEN
  expectCDK(stack).to(matchTemplate({
    "Resources": {}
  }, MatchStyle.EXACT))
});
