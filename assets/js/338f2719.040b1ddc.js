"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1848],{15680:(e,t,n)=>{n.d(t,{Z:()=>c});var a,r,s=n(67294);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}const c=e=>{let{title:t,titleId:n,...c}=e;return s.createElement("svg",o({width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},c),t?s.createElement("title",{id:n},t):null,a||(a=s.createElement("path",{d:"M9 1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5V4.5a1 1 0 0 1 1-1H9V1Z",fill:"#F8FAF6"})),r||(r=s.createElement("path",{d:"M11.5 5h-5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5Z",fill:"#F8FAF6"})))}},70630:(e,t,n)=>{n.d(t,{p:()=>s});var a=n(67294);const r="base_L3V1",s=e=>{let{method:t,name:n}=e;return a.createElement("h2",{className:r},t&&a.createElement("span",null,t)," ",n&&a.createElement("span",null,n))}},77583:(e,t,n)=>{n.d(t,{D:()=>k});var a=n(67294),r=n(87892);const s="wrapper_d4Gc",o="base_cZP3",c="heading_kxJX",i="select_XVTu",l="buttonWrapper_Ucky",u="button_Pj6S",p="copyButtonSuccess_ASuz",d="copyButtonText_cmI7",m="copyButtonSuccessIcon_tD3P";var h;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}const g=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",v({width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,h||(h=a.createElement("path",{d:"m3.275 4.461-1.788 1.54 1.788 1.538a.596.596 0 0 1 .21.407.619.619 0 0 1-.132.441.585.585 0 0 1-.396.214.563.563 0 0 1-.425-.14l-2.323-2A.598.598 0 0 1 0 6.001a.617.617 0 0 1 .209-.462l2.323-2a.568.568 0 0 1 .814.08.613.613 0 0 1-.071.842ZM11.79 5.54l-2.323-2a.575.575 0 0 0-.425-.14.567.567 0 0 0-.396.214.607.607 0 0 0-.132.44.615.615 0 0 0 .21.408l1.788 1.54-1.788 1.538a.596.596 0 0 0-.21.407.619.619 0 0 0 .132.441.585.585 0 0 0 .396.214.563.563 0 0 0 .425-.14l2.323-2a.6.6 0 0 0 .209-.46.617.617 0 0 0-.209-.462ZM7.747 1.036a.563.563 0 0 0-.627.159.604.604 0 0 0-.117.2l-3.097 8.8a.618.618 0 0 0 .02.459.588.588 0 0 0 .526.346c.119 0 .235-.038.333-.108a.598.598 0 0 0 .212-.287l3.097-8.8a.618.618 0 0 0-.153-.648.578.578 0 0 0-.194-.12Z",fill:"#F8FAF6"})))};var w=n(15680),S=n(69612);const k=e=>{let{codes:t,defaultLanguage:n="go"}=e;const[h,v]=(0,a.useState)(!1),[k,f]=(0,a.useState)(!0),[b,U]=(0,a.useState)(n),y=(0,a.useMemo)((()=>t?.find((e=>e.language===b))),[t,b]),A=(0,a.useMemo)((()=>t?.map((e=>{let{language:t}=e;return t}))),[t]),N=(0,a.useMemo)((()=>y?.codeShorten&&k?y?.codeShorten:y?.code),[y,k]);return a.createElement("div",{className:s},a.createElement("div",{className:c},a.createElement("select",{className:i,onChange:e=>{var t;(t=e.currentTarget.value,["typescript","javascript","python","go","rust"].includes(t))&&U(e.currentTarget.value)}},A.map((e=>a.createElement("option",{value:e,key:e},e)))),a.createElement("div",{className:l},y?.codeShorten&&a.createElement("button",{className:u,onClick:()=>f(!k)},a.createElement("span",null,k?"Show Full Code":"Show Less Code"),a.createElement(g,null)),a.createElement("button",{onClick:()=>{navigator.clipboard.writeText(N).then((()=>{v(!0),setTimeout((()=>{v(!1)}),1e3)})).catch()},className:h?p:u},a.createElement(S.Z,{className:m}),a.createElement("span",{className:d},a.createElement("span",null,"Copy"),a.createElement(w.Z,null))))),y?a.createElement("div",{className:o},a.createElement(r.dn,{text:N,language:y.language,theme:r.cL,codeBlock:!0})):null)}},36348:(e,t,n)=>{n.d(t,{I:()=>s});var a=n(67294);const r="base_PRYo",s=e=>{let{children:t}=e;return a.createElement("p",{className:r},a.createElement("span",null,t))}},60073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),s=n(36348),o=n(70630);const c=[{code:'package main\n\nimport (\n   "context"\n   "crypto/tls"\n   "crypto/x509"\n   "fmt"\n   v1 "github.com/blockjoy/api/sdk/go/blockjoy/v1" \n   "google.golang.org/grpc"\n   "google.golang.org/grpc/credentials"\n   "log"\n   "time"\n)\n\nconst (\n   authServiceAddress = "unknown-grpc:443" \n)\n\nfunc main() {\n   ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)\n   defer cancel()\n\n   // Set up a connection to the server.\n   authServiceConn, err := grpc.DialContext(ctx, authServiceAddress, getSecureOptions()...) \n   if err != nil {                                                                          \n      log.Fatalf("did not connect: %v", err) \n   } \n   defer authServiceConn.Close() \n   authService := v1.NewAuthServiceClient(authServiceConn) \n   r1, _ := authService.UpdateUIPassword(ctx, &v1.AuthServiceUpdateUIPasswordRequest{})\n   fmt.Println(r1)\n}\n\nfunc getSecureOptions() []grpc.DialOption {\n   systemRoots, err := x509.SystemCertPool()\n   if err != nil {\n      log.Fatal(err)\n   }\n   cred := credentials.NewTLS(&tls.Config{\n      RootCAs: systemRoots,\n   })\n   return []grpc.DialOption{grpc.WithTransportCredentials(cred), grpc.WithBlock()}\n}\n',codeShorten:"resp, _ := authService.UpdateUIPassword(ctx, &v1.AuthServiceUpdateUIPasswordRequest{})\nfmt.Println(resp)\n",language:"go"},{code:'import React, { useEffect, useState } from \'react\'\nimport { grpc } from "@improbable-eng/grpc-web"\nimport { AuthServiceClient } from "api/sdk/ts/blockjoy/v1/auth_pb_service"\nimport { AuthServiceUpdateUIPasswordRequest, AuthServiceUpdateUIPasswordResponse } from "api/sdk/ts/blockjoy/v1/auth_pb"\n\nvar authService0 = new AuthServiceClient(\'https://unknown-grpc-web\')\nfunction App(){\n    const [response, setResponse] = useState<string>("")\n    useEffect(() => { \n        const authserviceupdateuipasswordrequest = new AuthServiceUpdateUIPasswordRequest()\n        \n        authService0.updateUIPassword(authserviceupdateuipasswordrequest, getMetadata(), (err, value:AuthServiceUpdateUIPasswordResponse|null) => {\n            setResponse(JSON.stringify(err ? err : value))\n        })\n    }, [])\n    return <>\n        <ol>\n        {response}\n        </ol>\n    </>\n}\nconst getMetadata = () => {\n    const meta = new grpc.Metadata()\n    return meta\n}\nexport default App;',codeShorten:'const authserviceupdateuipasswordrequest = new AuthServiceUpdateUIPasswordRequest();\n\nservice.updateUIPassword(authserviceupdateuipasswordrequest, (err, value:AuthServiceUpdateUIPasswordResponse|null) => {\n    const resp = JSON.stringify(err ? err : value);\n    console.log("received ", resp);\n})',language:"typescript"},{code:'import React, { useEffect, useState } from \'react\'\nimport { grpc } from "@improbable-eng/grpc-web"\nimport { AuthServiceClient } from "api/sdk/ts/blockjoy/v1/auth_pb_service"\nimport { AuthServiceUpdateUIPasswordRequest, AuthServiceUpdateUIPasswordResponse } from "api/sdk/ts/blockjoy/v1/auth_pb"\n\nvar authService0 = new AuthServiceClient(\'https://unknown-grpc-web\')\nfunction App(){\n    const [response, setResponse] = useState("")\n    useEffect(() => { \n        const authserviceupdateuipasswordrequest = new AuthServiceUpdateUIPasswordRequest()\n        \n        authService0.updateUIPassword(authserviceupdateuipasswordrequest, getMetadata(), (err, value) => {\n            setResponse(JSON.stringify(err ? err : value))\n        })\n    }, [])\n    return <>\n        <ol>\n        {response}\n        </ol>\n    </>\n}\nconst getMetadata = () => {\n    const meta = new grpc.Metadata()\n    return meta\n}\nexport default App;',codeShorten:'const authserviceupdateuipasswordrequest = new AuthServiceUpdateUIPasswordRequest();\n\nservice.updateUIPassword(authserviceupdateuipasswordrequest, (err, value) => {\n    const resp = JSON.stringify(err ? err : value);\n    console.log("received ", resp);\n})',language:"javascript"},{code:'extern crate api;\nuse tonic::transport::Channel;\n\nuse api::blockjoy::v1::auth_service_client::AuthServiceClient;\nuse api::blockjoy::v1::AuthServiceUpdateUIPasswordRequest;\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n  let channel = Channel::from_static("unknown-grpc")\n    .connect()\n    .await?;\n  let mut client = AuthServiceClient::new(channel); \n\n  let request = tonic::Request::new(\n    AuthServiceUpdateUIPasswordRequest{\n      new_password: None,\n      old_password: None,\n      user_id: None\n    });\n// sending request and waiting for response\n  let response = client.update_ui_password(request).await?.into_inner();\n  println!("RESPONSE={:?}", response);\n  Ok(())\n}',language:"rust"}];var i=n(77583);const l={sidebar_position:6},u="Update UIPassword",p={unversionedId:"auth-service/update-uipassword",id:"auth-service/update-uipassword",title:"Update UIPassword",description:"Update the user\u2019s password via profile UI",source:"@site/docs/auth-service/update-uipassword.mdx",sourceDirName:"auth-service",slug:"/auth-service/update-uipassword",permalink:"/docs/auth-service/update-uipassword",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/auth-service/update-uipassword.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"apiSidebar",previous:{title:"Update Password",permalink:"/docs/auth-service/update-password"},next:{title:"Babel Service",permalink:"/docs/babel-service/"}},d={},m=[],h={toc:m},v="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(v,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-uipassword"},"Update UIPassword"),(0,r.kt)(o.p,{method:"rpc",name:"UpdateUIPassword",mdxType:"ApiMethod"}),(0,r.kt)("p",null,"Update the user\u2019s password via profile UI"),(0,r.kt)(o.p,{method:"requests",name:"AuthServiceUpdateUIPasswordRequest",mdxType:"ApiMethod"}),(0,r.kt)(s.I,{mdxType:"VersionType"},"blockjoy.v1.AuthServiceUpdateUIPasswordRequest"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"new_password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"old_password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)(i.D,{codes:c,mdxType:"CustomCodeBlock"}),(0,r.kt)(o.p,{method:"returns",name:"AuthServiceUpdateUIPasswordResponse",mdxType:"ApiMethod"}),(0,r.kt)(s.I,{mdxType:"VersionType"},"blockjoy.v1.AuthServiceUpdateUIPasswordResponse"))}g.isMDXComponent=!0}}]);