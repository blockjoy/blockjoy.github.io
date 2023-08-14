import { Code } from '@site/models/code';

const typescriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { HostProvisionServiceClient } from "api/sdk/ts/blockjoy/v1/host_provision_pb_service"
import { HostProvisionServiceCreateRequest, HostProvisionServiceCreateResponse } from "api/sdk/ts/blockjoy/v1/host_provision_pb"

var hostProvisionService0 = new HostProvisionServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState<string>("")
    useEffect(() => { 
        const hostprovisionservicecreaterequest = new HostProvisionServiceCreateRequest()
        
        hostProvisionService0.create(hostprovisionservicecreaterequest, getMetadata(), (err, value:HostProvisionServiceCreateResponse|null) => {
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

const typescriptCodeShorten = `const hostprovisionservicecreaterequest = new HostProvisionServiceCreateRequest();

service.create(hostprovisionservicecreaterequest, (err, value:HostProvisionServiceCreateResponse|null) => {
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
   hostProvisionServiceAddress = "unknown-grpc:443" 
)

func main() {
   ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
   defer cancel()

   // Set up a connection to the server.
   hostProvisionServiceConn, err := grpc.DialContext(ctx, hostProvisionServiceAddress, getSecureOptions()...) 
   if err != nil {                                                                                            
      log.Fatalf("did not connect: %v", err) 
   } 
   defer hostProvisionServiceConn.Close() 
   hostProvisionService := v1.NewHostProvisionServiceClient(hostProvisionServiceConn) 
   r1, _ := hostProvisionService.Create(ctx, &v1.HostProvisionServiceCreateRequest{})
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

const goCodeShorten = `resp, _ := hostProvisionService.Create(ctx, &v1.HostProvisionServiceCreateRequest{})
fmt.Println(resp)`;

const javascriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { HostProvisionServiceClient } from "api/sdk/ts/blockjoy/v1/host_provision_pb_service"
import { HostProvisionServiceCreateRequest, HostProvisionServiceCreateResponse } from "api/sdk/ts/blockjoy/v1/host_provision_pb"

var hostProvisionService0 = new HostProvisionServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState("")
    useEffect(() => { 
        const hostprovisionservicecreaterequest = new HostProvisionServiceCreateRequest()
        
        hostProvisionService0.create(hostprovisionservicecreaterequest, getMetadata(), (err, value) => {
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

const javascriptCodeShorten = `const hostprovisionservicecreaterequest = new HostProvisionServiceCreateRequest();

service.create(hostprovisionservicecreaterequest, (err, value) => {
    const resp = JSON.stringify(err ? err : value);
    console.log("received ", resp);
})`;

const rustCode = `extern crate api;
use tonic::transport::Channel;

use api::blockjoy::v1::host_provision_service_client::HostProvisionServiceClient;
use api::blockjoy::v1::HostProvisionServiceCreateRequest;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
  let channel = Channel::from_static("unknown-grpc")
    .connect()
    .await?;
  let mut client = HostProvisionServiceClient::new(channel); 

  let request = tonic::Request::new(
    HostProvisionServiceCreateRequest{
      ip_gateway: None,
      ip_range_from: None,
      ip_range_to: None,
      org_id: None
    });
// sending request and waiting for response
  let response = client.create(request).await?.into_inner();
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
