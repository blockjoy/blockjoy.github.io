import { Code } from '@site/models/code';

const typescriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { BabelServiceClient } from "api/sdk/ts/blockjoy/v1/babel_pb_service"
import { BabelServiceNotifyRequest, BabelServiceNotifyResponse } from "api/sdk/ts/blockjoy/v1/babel_pb"

var babelService0 = new BabelServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState<string>("")
    useEffect(() => { 
        const babelservicenotifyrequest = new BabelServiceNotifyRequest()
        
        babelService0.notify(babelservicenotifyrequest, getMetadata(), (err, value:BabelServiceNotifyResponse|null) => {
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

const typescriptCodeShorten = `const babelservicenotifyrequest = new BabelServiceNotifyRequest();

service.notify(babelservicenotifyrequest, (err, value:BabelServiceNotifyResponse|null) => {
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
   babelServiceAddress = "unknown-grpc:443" 
)

func main() {
   ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
   defer cancel()

   // Set up a connection to the server.
   babelServiceConn, err := grpc.DialContext(ctx, babelServiceAddress, getSecureOptions()...) 
   if err != nil {                                                                            
      log.Fatalf("did not connect: %v", err) 
   } 
   defer babelServiceConn.Close() 
   babelService := v1.NewBabelServiceClient(babelServiceConn) 
   r1, _ := babelService.Notify(ctx, &v1.BabelServiceNotifyRequest{})
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
}`;

const goCodeShorten = `resp, _ := babelService.Notify(ctx, &v1.BabelServiceNotifyRequest{})
fmt.Println(resp)`;

const javascriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { BabelServiceClient } from "api/sdk/ts/blockjoy/v1/babel_pb_service"
import { BabelServiceNotifyRequest, BabelServiceNotifyResponse } from "api/sdk/ts/blockjoy/v1/babel_pb"

var babelService0 = new BabelServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState("")
    useEffect(() => { 
        const babelservicenotifyrequest = new BabelServiceNotifyRequest()
        
        babelService0.notify(babelservicenotifyrequest, getMetadata(), (err, value) => {
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

const javascriptCodeShorten = `const babelservicenotifyrequest = new BabelServiceNotifyRequest();

service.notify(babelservicenotifyrequest, (err, value) => {
    const resp = JSON.stringify(err ? err : value);
    console.log("received ", resp);
})
`;

const rustCode = `extern crate api;
use tonic::transport::Channel;

use api::blockjoy::v1::BabelServiceNotifyRequest;
use api::blockjoy::v1::babel_service_client::BabelServiceClient;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
  let channel = Channel::from_static("unknown-grpc")
    .connect()
    .await?;
  let mut client = BabelServiceClient::new(channel); 

  let request = tonic::Request::new(
    BabelServiceNotifyRequest{
      config: None,
      uuid: None
    });
// sending request and waiting for response
  let response = client.notify(request).await?.into_inner();
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
