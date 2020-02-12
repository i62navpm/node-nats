import { connect, StanOptions, Stan } from 'node-nats-streaming';

export default function getConnection(clusterID = 'test-cluster', clientID = 'test', options?: StanOptions): Stan {
  return connect(clusterID, clientID, options);
}
