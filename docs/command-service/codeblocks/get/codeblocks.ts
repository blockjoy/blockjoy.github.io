import { Code } from '@site/models/code';

const typescriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { CommandServiceGetRequest, CommandServiceGetResponse } from "api/sdk/ts/blockjoy/v1/command_pb"
import { CommandServiceClient } from "api/sdk/ts/blockjoy/v1/command_pb_service"

var commandService0 = new CommandServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState<string>("")
    useEffect(() => { 
        const commandservicegetrequest = new CommandServiceGetRequest()
        
        commandService0.get(commandservicegetrequest, getMetadata(), (err, value:CommandServiceGetResponse|null) => {
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

const typescriptCodeShorten = `const commandservicegetrequest = new CommandServiceGetRequest();

service.get(commandservicegetrequest, (err, value:CommandServiceGetResponse|null) => {
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
   commandServiceAddress = "unknown-grpc:443" 
)

func main() {
   ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
   defer cancel()

   // Set up a connection to the server.
   commandServiceConn, err := grpc.DialContext(ctx, commandServiceAddress, getSecureOptions()...) 
   if err != nil {                                                                                
      log.Fatalf("did not connect: %v", err) 
   } 
   defer commandServiceConn.Close() 
   commandService := v1.NewCommandServiceClient(commandServiceConn) 
   r1, _ := commandService.Get(ctx, &v1.CommandServiceGetRequest{})
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

const goCodeShorten = `resp, _ := commandService.Get(ctx, &v1.CommandServiceGetRequest{})
fmt.Println(resp)`;

const javascriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { CommandServiceClient } from "api/sdk/ts/blockjoy/v1/command_pb_service"
import { CommandServiceGetRequest, CommandServiceGetResponse } from "api/sdk/ts/blockjoy/v1/command_pb"

var commandService0 = new CommandServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState("")
    useEffect(() => { 
        const commandservicegetrequest = new CommandServiceGetRequest()
        
        commandService0.get(commandservicegetrequest, getMetadata(), (err, value) => {
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

const javascriptCodeShorten = `const commandservicegetrequest = new CommandServiceGetRequest();

service.get(commandservicegetrequest, (err, value) => {
    const resp = JSON.stringify(err ? err : value);
    console.log("received ", resp);
})`;

const rustCode = `extern crate api;
use tonic::transport::Channel;

use api::blockjoy::v1::CommandServiceGetRequest;
use api::blockjoy::v1::command_service_client::CommandServiceClient;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
  let channel = Channel::from_static("unknown-grpc")
    .connect()
    .await?;
  let mut client = CommandServiceClient::new(channel); 

  let request = tonic::Request::new(
    CommandServiceGetRequest{
      id: None
    });
// sending request and waiting for response
  let response = client.get(request).await?.into_inner();
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
