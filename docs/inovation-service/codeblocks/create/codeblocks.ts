import { Code } from '@site/models/code';

const typescriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { InvitationServiceClient } from "api/sdk/ts/blockjoy/v1/invitation_pb_service"
import { InvitationServiceCreateRequest, InvitationServiceCreateResponse } from "api/sdk/ts/blockjoy/v1/invitation_pb"

var invitationService0 = new InvitationServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState<string>("")
    useEffect(() => { 
        const invitationservicecreaterequest = new InvitationServiceCreateRequest()
        
        invitationService0.create(invitationservicecreaterequest, getMetadata(), (err, value:InvitationServiceCreateResponse|null) => {
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

const typescriptCodeShorten = `const invitationservicecreaterequest = new InvitationServiceCreateRequest();

service.create(invitationservicecreaterequest, (err, value:InvitationServiceCreateResponse|null) => {
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
   invitationServiceAddress = "unknown-grpc:443" 
)

func main() {
   ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
   defer cancel()

   // Set up a connection to the server.
   invitationServiceConn, err := grpc.DialContext(ctx, invitationServiceAddress, getSecureOptions()...) 
   if err != nil {                                                                                      
      log.Fatalf("did not connect: %v", err) 
   } 
   defer invitationServiceConn.Close() 
   invitationService := v1.NewInvitationServiceClient(invitationServiceConn) 
   r1, _ := invitationService.Create(ctx, &v1.InvitationServiceCreateRequest{})
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

const goCodeShorten = `resp, _ := invitationService.Create(ctx, &v1.InvitationServiceCreateRequest{})
fmt.Println(resp)`;

const javascriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { InvitationServiceClient } from "api/sdk/ts/blockjoy/v1/invitation_pb_service"
import { InvitationServiceCreateRequest, InvitationServiceCreateResponse } from "api/sdk/ts/blockjoy/v1/invitation_pb"

var invitationService0 = new InvitationServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState("")
    useEffect(() => { 
        const invitationservicecreaterequest = new InvitationServiceCreateRequest()
        
        invitationService0.create(invitationservicecreaterequest, getMetadata(), (err, value) => {
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

const javascriptCodeShorten = `const invitationservicecreaterequest = new InvitationServiceCreateRequest();

service.create(invitationservicecreaterequest, (err, value) => {
    const resp = JSON.stringify(err ? err : value);
    console.log("received ", resp);
})`;

const rustCode = `extern crate api;
use tonic::transport::Channel;

use api::blockjoy::v1::invitation_service_client::InvitationServiceClient;
use api::blockjoy::v1::InvitationServiceCreateRequest;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
  let channel = Channel::from_static("unknown-grpc")
    .connect()
    .await?;
  let mut client = InvitationServiceClient::new(channel); 

  let request = tonic::Request::new(
    InvitationServiceCreateRequest{
      invitee_email: None,
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
