import { Code } from '@site/models/code';

const typescriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { BlockchainServiceClient } from "api/sdk/ts/blockjoy/v1/blockchain_pb_service"
import { BlockchainServiceGetRequest, BlockchainServiceGetResponse } from "api/sdk/ts/blockjoy/v1/blockchain_pb"

var blockchainService0 = new BlockchainServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState<string>("")
    useEffect(() => { 
        const blockchainservicegetrequest = new BlockchainServiceGetRequest()
        
        blockchainService0.get(blockchainservicegetrequest, getMetadata(), (err, value:BlockchainServiceGetResponse|null) => {
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

const typescriptCodeShorten = `const blockchainservicegetrequest = new BlockchainServiceGetRequest();

service.get(blockchainservicegetrequest, (err, value:BlockchainServiceGetResponse|null) => {
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
   blockchainServiceAddress = "unknown-grpc:443" 
)

func main() {
   ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
   defer cancel()

   // Set up a connection to the server.
   blockchainServiceConn, err := grpc.DialContext(ctx, blockchainServiceAddress, getSecureOptions()...) 
   if err != nil {                                                                                      
      log.Fatalf("did not connect: %v", err) 
   } 
   defer blockchainServiceConn.Close() 
   blockchainService := v1.NewBlockchainServiceClient(blockchainServiceConn) 
   r1, _ := blockchainService.Get(ctx, &v1.BlockchainServiceGetRequest{})
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

const goCodeShorten = `resp, _ := blockchainService.Get(ctx, &v1.BlockchainServiceGetRequest{})
fmt.Println(resp)`;

const javascriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { BlockchainServiceGetRequest, BlockchainServiceGetResponse } from "api/sdk/ts/blockjoy/v1/blockchain_pb"
import { BlockchainServiceClient } from "api/sdk/ts/blockjoy/v1/blockchain_pb_service"

var blockchainService0 = new BlockchainServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState("")
    useEffect(() => { 
        const blockchainservicegetrequest = new BlockchainServiceGetRequest()
        
        blockchainService0.get(blockchainservicegetrequest, getMetadata(), (err, value) => {
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

const javascriptCodeShorten = `const blockchainservicegetrequest = new BlockchainServiceGetRequest();

service.get(blockchainservicegetrequest, (err, value) => {
    const resp = JSON.stringify(err ? err : value);
    console.log("received ", resp);
})`;

const rustCode = `extern crate api;
use tonic::transport::Channel;

use api::blockjoy::v1::blockchain_service_client::BlockchainServiceClient;
use api::blockjoy::v1::BlockchainServiceGetRequest;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
  let channel = Channel::from_static("unknown-grpc")
    .connect()
    .await?;
  let mut client = BlockchainServiceClient::new(channel); 

  let request = tonic::Request::new(
    BlockchainServiceGetRequest{
      id: None
    });
// sending request and waiting for response
  let response = client.get(request).await?.into_inner();
  println!("RESPONSE={:?}", response);
  Ok(())
}
`;

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
