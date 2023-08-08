import { Code } from '@site/models/code';

const typescriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { HostServiceUpdateRequest, HostServiceUpdateResponse } from "api/sdk/ts/blockjoy/v1/host_pb"
import { HostServiceClient } from "api/sdk/ts/blockjoy/v1/host_pb_service"

var hostService0 = new HostServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState<string>("")
    useEffect(() => { 
        const hostserviceupdaterequest = new HostServiceUpdateRequest()
        
        hostService0.update(hostserviceupdaterequest, getMetadata(), (err, value:HostServiceUpdateResponse|null) => {
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

const typescriptCodeShorten = `const hostserviceupdaterequest = new HostServiceUpdateRequest();

service.update(hostserviceupdaterequest, (err, value:HostServiceUpdateResponse|null) => {
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
   hostServiceAddress = "unknown-grpc:443" 
)

func main() {
   ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
   defer cancel()

   // Set up a connection to the server.
   hostServiceConn, err := grpc.DialContext(ctx, hostServiceAddress, getSecureOptions()...) 
   if err != nil {                                                                          
      log.Fatalf("did not connect: %v", err) 
   } 
   defer hostServiceConn.Close() 
   hostService := v1.NewHostServiceClient(hostServiceConn) 
   r1, _ := hostService.Update(ctx, &v1.HostServiceUpdateRequest{})
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

const goCodeShorten = `resp, _ := hostService.Update(ctx, &v1.HostServiceUpdateRequest{})
fmt.Println(resp)`;

const javascriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { HostServiceClient } from "api/sdk/ts/blockjoy/v1/host_pb_service"
import { HostServiceUpdateRequest, HostServiceUpdateResponse } from "api/sdk/ts/blockjoy/v1/host_pb"

var hostService0 = new HostServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState("")
    useEffect(() => { 
        const hostserviceupdaterequest = new HostServiceUpdateRequest()
        
        hostService0.update(hostserviceupdaterequest, getMetadata(), (err, value) => {
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

const javascriptCodeShorten = `const hostserviceupdaterequest = new HostServiceUpdateRequest();

service.update(hostserviceupdaterequest, (err, value) => {
    const resp = JSON.stringify(err ? err : value);
    console.log("received ", resp);
})`;

const rustCode = `extern crate api;
use tonic::transport::Channel;

use api::blockjoy::v1::host_service_client::HostServiceClient;
use api::blockjoy::v1::HostServiceUpdateRequest;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
  let channel = Channel::from_static("unknown-grpc")
    .connect()
    .await?;
  let mut client = HostServiceClient::new(channel); 

  let request = tonic::Request::new(
    HostServiceUpdateRequest{
      id: None,
      name: None,
      os: None,
      os_version: None,
      version: None
    });
// sending request and waiting for response
  let response = client.update(request).await?.into_inner();
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
