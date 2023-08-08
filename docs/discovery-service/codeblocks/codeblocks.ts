import { Code } from '@site/models/code';

const typescriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { DiscoveryServiceServicesRequest, DiscoveryServiceServicesResponse } from "api/sdk/ts/blockjoy/v1/discovery_pb"
import { DiscoveryServiceClient } from "api/sdk/ts/blockjoy/v1/discovery_pb_service"

var discoveryService0 = new DiscoveryServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState<string>("")
    useEffect(() => { 
        const discoveryserviceservicesrequest = new DiscoveryServiceServicesRequest()
        
        discoveryService0.services(discoveryserviceservicesrequest, getMetadata(), (err, value:DiscoveryServiceServicesResponse|null) => {
            setResponse(JSON.stringify(err ? err : value))
        })
    }, [])
    return <>
        <ol>
        {response}
        </ol>
    </>
}
const getMetadata = () => {
    const meta = new grpc.Metadata()
    return meta
}
export default App;`;

const typescriptCodeShorten = `const discoveryserviceservicesrequest = new DiscoveryServiceServicesRequest();

service.services(discoveryserviceservicesrequest, (err, value:DiscoveryServiceServicesResponse|null) => {
    const resp = JSON.stringify(err ? err : value);
    console.log("received ", resp);
})`;

const goCode = `package main

import (
   "context"
   "crypto/tls"
   "crypto/x509"
   "fmt"
   v1 "github.com/blockjoy/api/sdk/go/blockjoy/v1" 
   "google.golang.org/grpc"
   "google.golang.org/grpc/credentials"
   "log"
   "time"
)

const (
   discoveryServiceAddress = "unknown-grpc:443" 
)

func main() {
   ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
   defer cancel()

   // Set up a connection to the server.
   discoveryServiceConn, err := grpc.DialContext(ctx, discoveryServiceAddress, getSecureOptions()...) 
   if err != nil {                                                                                    
      log.Fatalf("did not connect: %v", err) 
   } 
   defer discoveryServiceConn.Close() 
   discoveryService := v1.NewDiscoveryServiceClient(discoveryServiceConn) 
   r1, _ := discoveryService.Services(ctx, &v1.DiscoveryServiceServicesRequest{})
   fmt.Println(r1)
}

func getSecureOptions() []grpc.DialOption {
   systemRoots, err := x509.SystemCertPool()
   if err != nil {
      log.Fatal(err)
   }
   cred := credentials.NewTLS(&tls.Config{
      RootCAs: systemRoots,
   })
   return []grpc.DialOption{grpc.WithTransportCredentials(cred), grpc.WithBlock()}
}
`;

const goCodeShorten = `resp, _ := discoveryService.Services(ctx, &v1.DiscoveryServiceServicesRequest{})
fmt.Println(resp)`;

const javascriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { DiscoveryServiceClient } from "api/sdk/ts/blockjoy/v1/discovery_pb_service"
import { DiscoveryServiceServicesRequest, DiscoveryServiceServicesResponse } from "api/sdk/ts/blockjoy/v1/discovery_pb"

var discoveryService0 = new DiscoveryServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState("")
    useEffect(() => { 
        const discoveryserviceservicesrequest = new DiscoveryServiceServicesRequest()
        
        discoveryService0.services(discoveryserviceservicesrequest, getMetadata(), (err, value) => {
            setResponse(JSON.stringify(err ? err : value))
        })
    }, [])
    return <>
        <ol>
        {response}
        </ol>
    </>
}
const getMetadata = () => {
    const meta = new grpc.Metadata()
    return meta
}
export default App;`;

const javascriptCodeShorten = `const discoveryserviceservicesrequest = new DiscoveryServiceServicesRequest();

service.services(discoveryserviceservicesrequest, (err, value) => {
    const resp = JSON.stringify(err ? err : value);
    console.log("received ", resp);
})`;

const rustCode = `extern crate api;
use tonic::transport::Channel;

use api::blockjoy::v1::discovery_service_client::DiscoveryServiceClient;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
  let channel = Channel::from_static("unknown-grpc")
    .connect()
    .await?;
  let mut client = DiscoveryServiceClient::new(channel); 

  let request = tonic::Request::new(
    ());
// sending request and waiting for response
  let response = client.services(request).await?.into_inner();
  println!("RESPONSE={:?}", response);
  Ok(())
}`;

export const codes: Code[] = [
  {
    code: goCode,
    codeShorten: goCodeShorten,
    language: 'go',
  },
  {
    code: typescriptCode,
    codeShorten: typescriptCodeShorten,
    language: 'typescript',
  },
  {
    code: javascriptCode,
    codeShorten: javascriptCodeShorten,
    language: 'javascript',
  },
  {
    code: rustCode,
    language: 'rust',
  },
];
