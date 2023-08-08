import { Code } from '@site/models/code';

const typescriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { AuthServiceClient } from "api/sdk/ts/blockjoy/v1/auth_pb_service"
import { AuthServiceUpdateUIPasswordRequest, AuthServiceUpdateUIPasswordResponse } from "api/sdk/ts/blockjoy/v1/auth_pb"

var authService0 = new AuthServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState<string>("")
    useEffect(() => { 
        const authserviceupdateuipasswordrequest = new AuthServiceUpdateUIPasswordRequest()
        
        authService0.updateUIPassword(authserviceupdateuipasswordrequest, getMetadata(), (err, value:AuthServiceUpdateUIPasswordResponse|null) => {
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

const typescriptCodeShorten = `const authserviceupdateuipasswordrequest = new AuthServiceUpdateUIPasswordRequest();

service.updateUIPassword(authserviceupdateuipasswordrequest, (err, value:AuthServiceUpdateUIPasswordResponse|null) => {
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
   authServiceAddress = "unknown-grpc:443" 
)

func main() {
   ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
   defer cancel()

   // Set up a connection to the server.
   authServiceConn, err := grpc.DialContext(ctx, authServiceAddress, getSecureOptions()...) 
   if err != nil {                                                                          
      log.Fatalf("did not connect: %v", err) 
   } 
   defer authServiceConn.Close() 
   authService := v1.NewAuthServiceClient(authServiceConn) 
   r1, _ := authService.UpdateUIPassword(ctx, &v1.AuthServiceUpdateUIPasswordRequest{})
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

const goCodeShorten = `resp, _ := authService.UpdateUIPassword(ctx, &v1.AuthServiceUpdateUIPasswordRequest{})
fmt.Println(resp)
`;

const javascriptCode = `import React, { useEffect, useState } from 'react'
import { grpc } from "@improbable-eng/grpc-web"
import { AuthServiceClient } from "api/sdk/ts/blockjoy/v1/auth_pb_service"
import { AuthServiceUpdateUIPasswordRequest, AuthServiceUpdateUIPasswordResponse } from "api/sdk/ts/blockjoy/v1/auth_pb"

var authService0 = new AuthServiceClient('https://unknown-grpc-web')
function App(){
    const [response, setResponse] = useState("")
    useEffect(() => { 
        const authserviceupdateuipasswordrequest = new AuthServiceUpdateUIPasswordRequest()
        
        authService0.updateUIPassword(authserviceupdateuipasswordrequest, getMetadata(), (err, value) => {
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

const javascriptCodeShorten = `const authserviceupdateuipasswordrequest = new AuthServiceUpdateUIPasswordRequest();

service.updateUIPassword(authserviceupdateuipasswordrequest, (err, value) => {
    const resp = JSON.stringify(err ? err : value);
    console.log("received ", resp);
})`;

const rustCode = `extern crate api;
use tonic::transport::Channel;

use api::blockjoy::v1::auth_service_client::AuthServiceClient;
use api::blockjoy::v1::AuthServiceUpdateUIPasswordRequest;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
  let channel = Channel::from_static("unknown-grpc")
    .connect()
    .await?;
  let mut client = AuthServiceClient::new(channel); 

  let request = tonic::Request::new(
    AuthServiceUpdateUIPasswordRequest{
      new_password: None,
      old_password: None,
      user_id: None
    });
// sending request and waiting for response
  let response = client.update_ui_password(request).await?.into_inner();
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
