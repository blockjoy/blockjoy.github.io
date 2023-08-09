"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1718],{15680:(e,t,n)=>{n.d(t,{Z:()=>c});var a,r,i=n(67294);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}const c=e=>{let{title:t,titleId:n,...c}=e;return i.createElement("svg",o({width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},c),t?i.createElement("title",{id:n},t):null,a||(a=i.createElement("path",{d:"M9 1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5V4.5a1 1 0 0 1 1-1H9V1Z",fill:"#F8FAF6"})),r||(r=i.createElement("path",{d:"M11.5 5h-5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5Z",fill:"#F8FAF6"})))}},31531:(e,t,n)=>{n.d(t,{p:()=>i});var a=n(67294);const r="base_L3V1",i=e=>{let{method:t,name:n}=e;return a.createElement("h2",{className:r},t&&a.createElement("span",null,t)," ",n&&a.createElement("span",null,n))}},98238:(e,t,n)=>{n.d(t,{D:()=>S});var a=n(67294),r=n(87892);const i="wrapper_d4Gc",o="base_cZP3",c="heading_kxJX",s="select_XVTu",l="buttonWrapper_Ucky",p="button_Pj6S",v="copyButtonSuccess_ASuz",u="copyButtonText_cmI7",m="copyButtonSuccessIcon_tD3P";var d;function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}const h=e=>{let{title:t,titleId:n,...r}=e;return a.createElement("svg",g({width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},r),t?a.createElement("title",{id:n},t):null,d||(d=a.createElement("path",{d:"m3.275 4.461-1.788 1.54 1.788 1.538a.596.596 0 0 1 .21.407.619.619 0 0 1-.132.441.585.585 0 0 1-.396.214.563.563 0 0 1-.425-.14l-2.323-2A.598.598 0 0 1 0 6.001a.617.617 0 0 1 .209-.462l2.323-2a.568.568 0 0 1 .814.08.613.613 0 0 1-.071.842ZM11.79 5.54l-2.323-2a.575.575 0 0 0-.425-.14.567.567 0 0 0-.396.214.607.607 0 0 0-.132.44.615.615 0 0 0 .21.408l1.788 1.54-1.788 1.538a.596.596 0 0 0-.21.407.619.619 0 0 0 .132.441.585.585 0 0 0 .396.214.563.563 0 0 0 .425-.14l2.323-2a.6.6 0 0 0 .209-.46.617.617 0 0 0-.209-.462ZM7.747 1.036a.563.563 0 0 0-.627.159.604.604 0 0 0-.117.2l-3.097 8.8a.618.618 0 0 0 .02.459.588.588 0 0 0 .526.346c.119 0 .235-.038.333-.108a.598.598 0 0 0 .212-.287l3.097-8.8a.618.618 0 0 0-.153-.648.578.578 0 0 0-.194-.12Z",fill:"#F8FAF6"})))};var f=n(15680),b=n(69612);const S=e=>{let{codes:t,defaultLanguage:n="go"}=e;const[d,g]=(0,a.useState)(!1),[S,k]=(0,a.useState)(!0),[y,C]=(0,a.useState)(n),w=(0,a.useMemo)((()=>t?.find((e=>e.language===y))),[t,y]),E=(0,a.useMemo)((()=>t?.map((e=>{let{language:t}=e;return t}))),[t]),N=(0,a.useMemo)((()=>w?.codeShorten&&S?w?.codeShorten:w?.code),[w,S]);return a.createElement("div",{className:i},a.createElement("div",{className:c},a.createElement("select",{className:s,onChange:e=>{var t;(t=e.currentTarget.value,["typescript","javascript","python","go","rust"].includes(t))&&C(e.currentTarget.value)}},E.map((e=>a.createElement("option",{value:e,key:e},e)))),a.createElement("div",{className:l},w?.codeShorten&&a.createElement("button",{className:p,onClick:()=>k(!S)},a.createElement("span",null,S?"Show Full Code":"Show Less Code"),a.createElement(h,null)),a.createElement("button",{onClick:()=>{navigator.clipboard.writeText(N).then((()=>{g(!0),setTimeout((()=>{g(!1)}),1e3)})).catch()},className:d?v:p},a.createElement(b.Z,{className:m}),a.createElement("span",{className:u},a.createElement("span",null,"Copy"),a.createElement(f.Z,null))))),w?a.createElement("div",{className:o},a.createElement(r.dn,{text:N,language:w.language,theme:r.cL,codeBlock:!0})):null)}},27988:(e,t,n)=>{n.d(t,{i:()=>r});var a=n(67294);const r=e=>{let{children:t}=e;return a.createElement("table",null,t)}},21455:(e,t,n)=>{n.d(t,{R:()=>r});var a=n(67294);const r=e=>{let{children:t}=e;return a.createElement("tbody",null,t)}},32275:(e,t,n)=>{n.d(t,{s:()=>p});var a,r=n(67294);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}const o=e=>{let{title:t,titleId:n,...o}=e;return r.createElement("svg",i({width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},o),t?r.createElement("title",{id:n},t):null,a||(a=r.createElement("path",{d:"m9.72 5.28-5-5a1 1 0 0 0-1.415 1.415l4.293 4.293-4.293 4.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414Z",fill:"#5F615D"})))},c="cell_xH13",s="cell--active_xKr9",l="cellClickable_VRgO",p=e=>{let{items:t,children:n,rowCounter:a=0}=e;const[i,p]=(0,r.useState)(!1),v=e=>n&&0===e,u=e=>0===e&&n?{paddingLeft:12+20*a+"px"}:0===e?{paddingLeft:36+20*a+"px"}:void 0;return r.createElement(r.Fragment,null,r.createElement("tr",null,t?.map(((e,t)=>r.createElement("td",{className:v(t)?l:void 0,onClick:v(t)?()=>p(!i):void 0,style:u(t),key:t},v(t)?r.createElement("span",{className:i?s:c},r.createElement(o,null),e):e)))),r.createElement(r.Fragment,null,i&&n))}},97022:(e,t,n)=>{n.d(t,{s:()=>r});var a=n(67294);const r=e=>{let{items:t}=e;return a.createElement("thead",null,a.createElement("tr",null,t.map(((e,t)=>a.createElement("th",{key:t},e)))))}},42868:(e,t,n)=>{n.d(t,{s:()=>c});var a=n(67294);const r="info_eCVA",i="warning_Cn6H",o="base_cmOb",c=e=>{let{text:t,info:n,warning:c,infoInFront:s,warningInFront:l}=e;return a.createElement("div",{className:o},l&&a.createElement("span",{className:i},l),s&&a.createElement("span",{className:r},s),a.createElement("span",null,t),c&&a.createElement("span",{className:i},c),n&&a.createElement("span",{className:r},n)," ")}},34695:(e,t,n)=>{n.d(t,{I:()=>i});var a=n(67294);const r="base_PRYo",i=e=>{let{children:t}=e;return a.createElement("p",{className:r},a.createElement("span",null,t))}},12135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>v,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(34695),o=n(31531),c=n(98238);const s=[{code:'package main\n\nimport (\n   "context"\n   "crypto/tls"\n   "crypto/x509"\n   "fmt"\n   v1 "github.com/blockjoy/api/sdk/go/blockjoy/v1" \n   "google.golang.org/grpc"\n   "google.golang.org/grpc/credentials"\n   "log"\n   "time"\n)\n\nconst (\n   invitationServiceAddress = "unknown-grpc:443" \n)\n\nfunc main() {\n   ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)\n   defer cancel()\n\n   // Set up a connection to the server.\n   invitationServiceConn, err := grpc.DialContext(ctx, invitationServiceAddress, getSecureOptions()...) \n   if err != nil {                                                                                      \n      log.Fatalf("did not connect: %v", err) \n   } \n   defer invitationServiceConn.Close() \n   invitationService := v1.NewInvitationServiceClient(invitationServiceConn) \n   r1, _ := invitationService.Create(ctx, &v1.InvitationServiceCreateRequest{})\n   fmt.Println(r1)\n}\n\nfunc getSecureOptions() []grpc.DialOption {\n   systemRoots, err := x509.SystemCertPool()\n   if err != nil {\n      log.Fatal(err)\n   }\n   cred := credentials.NewTLS(&tls.Config{\n      RootCAs: systemRoots,\n   })\n   return []grpc.DialOption{grpc.WithTransportCredentials(cred), grpc.WithBlock()}\n}\n',codeShorten:"resp, _ := invitationService.Create(ctx, &v1.InvitationServiceCreateRequest{})\nfmt.Println(resp)",language:"go"},{code:'import React, { useEffect, useState } from \'react\'\nimport { grpc } from "@improbable-eng/grpc-web"\nimport { InvitationServiceClient } from "api/sdk/ts/blockjoy/v1/invitation_pb_service"\nimport { InvitationServiceCreateRequest, InvitationServiceCreateResponse } from "api/sdk/ts/blockjoy/v1/invitation_pb"\n\nvar invitationService0 = new InvitationServiceClient(\'https://unknown-grpc-web\')\nfunction App(){\n    const [response, setResponse] = useState<string>("")\n    useEffect(() => { \n        const invitationservicecreaterequest = new InvitationServiceCreateRequest()\n        \n        invitationService0.create(invitationservicecreaterequest, getMetadata(), (err, value:InvitationServiceCreateResponse|null) => {\n            setResponse(JSON.stringify(err ? err : value))\n        })\n    }, [])\n    return <>\n        <ol>\n        {response}\n        </ol>\n    </>\n}\nconst getMetadata = () => {\n    const meta = new grpc.Metadata()\n    return meta\n}\nexport default App;',codeShorten:'const invitationservicecreaterequest = new InvitationServiceCreateRequest();\n\nservice.create(invitationservicecreaterequest, (err, value:InvitationServiceCreateResponse|null) => {\n    const resp = JSON.stringify(err ? err : value);\n    console.log("received ", resp);\n})',language:"typescript"},{code:'import React, { useEffect, useState } from \'react\'\nimport { grpc } from "@improbable-eng/grpc-web"\nimport { InvitationServiceClient } from "api/sdk/ts/blockjoy/v1/invitation_pb_service"\nimport { InvitationServiceCreateRequest, InvitationServiceCreateResponse } from "api/sdk/ts/blockjoy/v1/invitation_pb"\n\nvar invitationService0 = new InvitationServiceClient(\'https://unknown-grpc-web\')\nfunction App(){\n    const [response, setResponse] = useState("")\n    useEffect(() => { \n        const invitationservicecreaterequest = new InvitationServiceCreateRequest()\n        \n        invitationService0.create(invitationservicecreaterequest, getMetadata(), (err, value) => {\n            setResponse(JSON.stringify(err ? err : value))\n        })\n    }, [])\n    return <>\n        <ol>\n        {response}\n        </ol>\n    </>\n}\nconst getMetadata = () => {\n    const meta = new grpc.Metadata()\n    return meta\n}\nexport default App;',codeShorten:'const invitationservicecreaterequest = new InvitationServiceCreateRequest();\n\nservice.create(invitationservicecreaterequest, (err, value) => {\n    const resp = JSON.stringify(err ? err : value);\n    console.log("received ", resp);\n})',language:"javascript"},{code:'extern crate api;\nuse tonic::transport::Channel;\n\nuse api::blockjoy::v1::invitation_service_client::InvitationServiceClient;\nuse api::blockjoy::v1::InvitationServiceCreateRequest;\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n  let channel = Channel::from_static("unknown-grpc")\n    .connect()\n    .await?;\n  let mut client = InvitationServiceClient::new(channel); \n\n  let request = tonic::Request::new(\n    InvitationServiceCreateRequest{\n      invitee_email: None,\n      org_id: None\n    });\n// sending request and waiting for response\n  let response = client.create(request).await?.into_inner();\n  println!("RESPONSE={:?}", response);\n  Ok(())\n}',language:"rust"}];n(42868),n(27988),n(97022),n(21455),n(32275);const l={sidebar_position:3},p="Create",v={unversionedId:"inovation-service/create",id:"inovation-service/create",title:"Create",description:"Invite a user into an organization.",source:"@site/docs/inovation-service/create.mdx",sourceDirName:"inovation-service",slug:"/inovation-service/create",permalink:"/docs/inovation-service/create",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/inovation-service/create.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apiSidebar",previous:{title:"Accept",permalink:"/docs/inovation-service/accept"},next:{title:"Tutorial Intro",permalink:"/docs/intro"}},u={},m=[],d={toc:m},g="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create"},"Create"),(0,r.kt)(o.p,{method:"rpc",name:"Create",mdxType:"ApiMethod"}),(0,r.kt)("p",null,"Invite a user into an organization."),(0,r.kt)(o.p,{method:"requests",name:"InvitationServiceCreateRequest",mdxType:"ApiMethod"}),(0,r.kt)(i.I,{mdxType:"VersionType"},"blockjoy.v1.InvitationServiceCreateRequest"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invitee_email"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the person that is being invited here. Note that this is not the uuid of some user, because the person that is being invited might not have an account (yet).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"org_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the organization that the user is being invited to.")))),(0,r.kt)(c.D,{codes:s,mdxType:"CustomCodeBlock"}),(0,r.kt)(o.p,{method:"returns",name:"InvitationServiceCreateResponse",mdxType:"ApiMethod"}),(0,r.kt)(i.I,{mdxType:"VersionType"},"blockjoy.v1.InvitationServiceCreateResponse"))}h.isMDXComponent=!0}}]);