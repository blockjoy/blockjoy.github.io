"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9141],{15680:(e,t,o)=>{o.d(t,{Z:()=>m});var n,r,a=o(67294);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},s.apply(this,arguments)}const m=e=>{let{title:t,titleId:o,...m}=e;return a.createElement("svg",s({width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":o},m),t?a.createElement("title",{id:o},t):null,n||(n=a.createElement("path",{d:"M9 1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5V4.5a1 1 0 0 1 1-1H9V1Z",fill:"#F8FAF6"})),r||(r=a.createElement("path",{d:"M11.5 5h-5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5Z",fill:"#F8FAF6"})))}},28792:(e,t,o)=>{o.d(t,{q:()=>n});const n=[{code:'package main\n\nimport (\n   "context"\n   "crypto/tls"\n   "crypto/x509"\n   "fmt"\n   v1 "github.com/blockjoy/api/sdk/go/blockjoy/v1" \n   "google.golang.org/grpc"\n   "google.golang.org/grpc/credentials"\n   "log"\n   "time"\n)\n\nconst (\n   commandServiceAddress = "unknown-grpc:443" \n)\n\nfunc main() {\n   ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)\n   defer cancel()\n\n   // Set up a connection to the server.\n   commandServiceConn, err := grpc.DialContext(ctx, commandServiceAddress, getSecureOptions()...) \n   if err != nil {                                                                                \n      log.Fatalf("did not connect: %v", err) \n   } \n   defer commandServiceConn.Close() \n   commandService := v1.NewCommandServiceClient(commandServiceConn) \n   r1, _ := commandService.Get(ctx, &v1.CommandServiceGetRequest{})\n   fmt.Println(r1)\n}\n\nfunc getSecureOptions() []grpc.DialOption {\n   systemRoots, err := x509.SystemCertPool()\n   if err != nil {\n      log.Fatal(err)\n   }\n   cred := credentials.NewTLS(&tls.Config{\n      RootCAs: systemRoots,\n   })\n   return []grpc.DialOption{grpc.WithTransportCredentials(cred), grpc.WithBlock()}\n}\n',codeShorten:"resp, _ := commandService.Get(ctx, &v1.CommandServiceGetRequest{})\nfmt.Println(resp)",language:"go"},{code:'import React, { useEffect, useState } from \'react\'\nimport { grpc } from "@improbable-eng/grpc-web"\nimport { CommandServiceGetRequest, CommandServiceGetResponse } from "api/sdk/ts/blockjoy/v1/command_pb"\nimport { CommandServiceClient } from "api/sdk/ts/blockjoy/v1/command_pb_service"\n\nvar commandService0 = new CommandServiceClient(\'https://unknown-grpc-web\')\nfunction App(){\n    const [response, setResponse] = useState<string>("")\n    useEffect(() => { \n        const commandservicegetrequest = new CommandServiceGetRequest()\n        \n        commandService0.get(commandservicegetrequest, getMetadata(), (err, value:CommandServiceGetResponse|null) => {\n            setResponse(JSON.stringify(err ? err : value))\n        })\n    }, [])\n    return <>\n        <ol>\n        {response}\n        </ol>\n    </>\n}\nconst getMetadata = () => {\n    const meta = new grpc.Metadata()\n    return meta\n}\nexport default App;',codeShorten:'const commandservicegetrequest = new CommandServiceGetRequest();\n\nservice.get(commandservicegetrequest, (err, value:CommandServiceGetResponse|null) => {\n    const resp = JSON.stringify(err ? err : value);\n    console.log("received ", resp);\n})',language:"typescript"},{code:'import React, { useEffect, useState } from \'react\'\nimport { grpc } from "@improbable-eng/grpc-web"\nimport { CommandServiceClient } from "api/sdk/ts/blockjoy/v1/command_pb_service"\nimport { CommandServiceGetRequest, CommandServiceGetResponse } from "api/sdk/ts/blockjoy/v1/command_pb"\n\nvar commandService0 = new CommandServiceClient(\'https://unknown-grpc-web\')\nfunction App(){\n    const [response, setResponse] = useState("")\n    useEffect(() => { \n        const commandservicegetrequest = new CommandServiceGetRequest()\n        \n        commandService0.get(commandservicegetrequest, getMetadata(), (err, value) => {\n            setResponse(JSON.stringify(err ? err : value))\n        })\n    }, [])\n    return <>\n        <ol>\n        {response}\n        </ol>\n    </>\n}\nconst getMetadata = () => {\n    const meta = new grpc.Metadata()\n    return meta\n}\nexport default App;',codeShorten:'const commandservicegetrequest = new CommandServiceGetRequest();\n\nservice.get(commandservicegetrequest, (err, value) => {\n    const resp = JSON.stringify(err ? err : value);\n    console.log("received ", resp);\n})',language:"javascript"},{code:'extern crate api;\nuse tonic::transport::Channel;\n\nuse api::blockjoy::v1::CommandServiceGetRequest;\nuse api::blockjoy::v1::command_service_client::CommandServiceClient;\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n  let channel = Channel::from_static("unknown-grpc")\n    .connect()\n    .await?;\n  let mut client = CommandServiceClient::new(channel); \n\n  let request = tonic::Request::new(\n    CommandServiceGetRequest{\n      id: None\n    });\n// sending request and waiting for response\n  let response = client.get(request).await?.into_inner();\n  println!("RESPONSE={:?}", response);\n  Ok(())\n}',language:"rust"}]},70630:(e,t,o)=>{o.d(t,{p:()=>a});var n=o(67294);const r="base_L3V1",a=e=>{let{method:t,name:o}=e;return n.createElement("h2",{className:r},t&&n.createElement("span",null,t)," ",o&&n.createElement("span",null,o))}},77583:(e,t,o)=>{o.d(t,{D:()=>E});var n=o(67294),r=o(87892);const a="wrapper_d4Gc",s="base_cZP3",m="heading_kxJX",i="select_XVTu",d="buttonWrapper_Ucky",l="button_Pj6S",T="copyButtonSuccess_ASuz",p="copyButtonText_cmI7",c="copyButtonSuccessIcon_tD3P";var y;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u.apply(this,arguments)}const w=e=>{let{title:t,titleId:o,...r}=e;return n.createElement("svg",u({width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":o},r),t?n.createElement("title",{id:o},t):null,y||(y=n.createElement("path",{d:"m3.275 4.461-1.788 1.54 1.788 1.538a.596.596 0 0 1 .21.407.619.619 0 0 1-.132.441.585.585 0 0 1-.396.214.563.563 0 0 1-.425-.14l-2.323-2A.598.598 0 0 1 0 6.001a.617.617 0 0 1 .209-.462l2.323-2a.568.568 0 0 1 .814.08.613.613 0 0 1-.071.842ZM11.79 5.54l-2.323-2a.575.575 0 0 0-.425-.14.567.567 0 0 0-.396.214.607.607 0 0 0-.132.44.615.615 0 0 0 .21.408l1.788 1.54-1.788 1.538a.596.596 0 0 0-.21.407.619.619 0 0 0 .132.441.585.585 0 0 0 .396.214.563.563 0 0 0 .425-.14l2.323-2a.6.6 0 0 0 .209-.46.617.617 0 0 0-.209-.462ZM7.747 1.036a.563.563 0 0 0-.627.159.604.604 0 0 0-.117.2l-3.097 8.8a.618.618 0 0 0 .02.459.588.588 0 0 0 .526.346c.119 0 .235-.038.333-.108a.598.598 0 0 0 .212-.287l3.097-8.8a.618.618 0 0 0-.153-.648.578.578 0 0 0-.194-.12Z",fill:"#F8FAF6"})))};var C=o(15680),b=o(69612);const E=e=>{let{codes:t,defaultLanguage:o="go"}=e;const[y,u]=(0,n.useState)(!1),[E,k]=(0,n.useState)(!0),[x,R]=(0,n.useState)(o),g=(0,n.useMemo)((()=>t?.find((e=>e.language===x))),[t,x]),_=(0,n.useMemo)((()=>t?.map((e=>{let{language:t}=e;return t}))),[t]),O=(0,n.useMemo)((()=>g?.codeShorten&&E?g?.codeShorten:g?.code),[g,E]);return n.createElement("div",{className:a},n.createElement("div",{className:m},n.createElement("select",{className:i,onChange:e=>{var t;(t=e.currentTarget.value,["typescript","javascript","python","go","rust"].includes(t))&&R(e.currentTarget.value)}},_.map((e=>n.createElement("option",{value:e,key:e},e)))),n.createElement("div",{className:d},g?.codeShorten&&n.createElement("button",{className:l,onClick:()=>k(!E)},n.createElement("span",null,E?"Show Full Code":"Show Less Code"),n.createElement(w,null)),n.createElement("button",{onClick:()=>{navigator.clipboard.writeText(O).then((()=>{u(!0),setTimeout((()=>{u(!1)}),1e3)})).catch()},className:y?T:l},n.createElement(b.Z,{className:c}),n.createElement("span",{className:p},n.createElement("span",null,"Copy"),n.createElement(C.Z,null))))),g?n.createElement("div",{className:s},n.createElement(r.dn,{text:O,language:g.language,theme:r.cL,codeBlock:!0})):null)}},27988:(e,t,o)=>{o.d(t,{i:()=>r});var n=o(67294);const r=e=>{let{children:t}=e;return n.createElement("table",null,t)}},21455:(e,t,o)=>{o.d(t,{R:()=>r});var n=o(67294);const r=e=>{let{children:t}=e;return n.createElement("tbody",null,t)}},51885:(e,t,o)=>{o.d(t,{s:()=>l});var n,r=o(67294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a.apply(this,arguments)}const s=e=>{let{title:t,titleId:o,...s}=e;return r.createElement("svg",a({width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":o},s),t?r.createElement("title",{id:o},t):null,n||(n=r.createElement("path",{d:"m9.72 5.28-5-5a1 1 0 0 0-1.415 1.415l4.293 4.293-4.293 4.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414Z",fill:"#5F615D"})))},m="cell_xH13",i="cell--active_xKr9",d="cellClickable_VRgO",l=e=>{let{items:t,children:o,rowCounter:n=0}=e;const[a,l]=(0,r.useState)(!1),T=e=>o&&0===e,p=e=>0===e&&o?{paddingLeft:12+20*n+"px"}:0===e?{paddingLeft:36+20*n+"px"}:void 0;return r.createElement(r.Fragment,null,r.createElement("tr",null,t?.map(((e,t)=>r.createElement("td",{className:T(t)?d:void 0,onClick:T(t)?()=>l(!a):void 0,style:p(t),key:t},T(t)?r.createElement("span",{className:a?i:m},r.createElement(s,null),e):e)))),r.createElement(r.Fragment,null,a&&o))}},97022:(e,t,o)=>{o.d(t,{s:()=>r});var n=o(67294);const r=e=>{let{items:t}=e;return n.createElement("thead",null,n.createElement("tr",null,t.map(((e,t)=>n.createElement("th",{key:t},e)))))}},54968:(e,t,o)=>{o.d(t,{s:()=>m});var n=o(67294);const r="info_eCVA",a="warning_Cn6H",s="base_cmOb",m=e=>{let{text:t,info:o,warning:m,infoInFront:i,warningInFront:d}=e;return n.createElement("div",{className:s},d&&n.createElement("span",{className:a},d),i&&n.createElement("span",{className:r},i),n.createElement("span",null,t),m&&n.createElement("span",{className:a},m),o&&n.createElement("span",{className:r},o)," ")}},36348:(e,t,o)=>{o.d(t,{I:()=>a});var n=o(67294);const r="base_PRYo",a=e=>{let{children:t}=e;return n.createElement("p",{className:r},n.createElement("span",null,t))}},23412:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>C,contentTitle:()=>u,default:()=>x,frontMatter:()=>y,metadata:()=>w,toc:()=>b});var n=o(87462),r=(o(67294),o(3905)),a=o(36348),s=o(70630),m=o(54968),i=o(27988),d=o(97022),l=o(21455),T=o(51885),p=o(28792),c=o(77583);const y={sidebar_position:3},u="Get",w={unversionedId:"command-service/get",id:"command-service/get",title:"Get",description:"Retrieve a single command",source:"@site/docs/command-service/get.mdx",sourceDirName:"command-service",slug:"/command-service/get",permalink:"/docs/command-service/get",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/command-service/get.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apiSidebar",previous:{title:"Create",permalink:"/docs/command-service/create"},next:{title:"Pending",permalink:"/docs/command-service/pending"}},C={},b=[],E={toc:b},k="wrapper";function x(e){let{components:t,...o}=e;return(0,r.kt)(k,(0,n.Z)({},E,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get"},"Get"),(0,r.kt)(s.p,{method:"rpc",name:"Create",mdxType:"ApiMethod"}),(0,r.kt)("p",null,"Retrieve a single command"),(0,r.kt)(s.p,{method:"requests",name:"CommandServiceGetRequest",mdxType:"ApiMethod"}),(0,r.kt)(a.I,{mdxType:"VersionType"},"blockjoy.v1.CommandServiceGetRequest"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)(c.D,{codes:p.q,mdxType:"CustomCodeBlock"}),(0,r.kt)(s.p,{method:"returns",name:"CommandServiceGetResponse",mdxType:"ApiMethod"}),(0,r.kt)(a.I,{mdxType:"VersionType"},"blockjoy.v1.CommandServiceGetResponse"),(0,r.kt)(i.i,{mdxType:"Table"},(0,r.kt)(d.s,{items:["Field","Type","Description"],mdxType:"TableHead"}),(0,r.kt)(l.R,{mdxType:"TableBody"},(0,r.kt)(T.s,{items:["command","Command",""],mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"exit_code",warning:"optional",mdxType:"TableCellWithOption"}),"int (32 bit)","A command may have an exit code."],rowCounter:1,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["id","string","Each command has a unique id that identifies it."],rowCounter:1,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"response",warning:"optional",mdxType:"TableCellWithOption"}),"string","A command may have an outcome message."],rowCounter:1,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["command","[oneof]",""],rowCounter:1,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"host",warningInFront:"oneof",mdxType:"TableCellWithOption"}),"HostCommand",""],rowCounter:2,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["host_id","string","We don\u2019t do this yet, but it is here for forwards compatibility."],rowCounter:3,mdxType:"TableBodyRow"})),(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"node",warningInFront:"oneof",mdxType:"TableCellWithOption"}),"NodeCommand",""],rowCounter:2,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["api_command_id","string",""],rowCounter:3,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["created_at","Timestamp",""],rowCounter:3,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["nanos","int (32 bit)",""],rowCounter:4,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["seconds","int (64 bit)",""],rowCounter:4,mdxType:"TableBodyRow"})),(0,r.kt)(T.s,{items:["host_id","string",""],rowCounter:3,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["node_id","string",""],rowCounter:3,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["command","[oneof]",""],rowCounter:3,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"create",warningInFront:"oneof",mdxType:"TableCellWithOption"}),"NodeCreate",""],rowCounter:4,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["blockchain","string",""],rowCounter:5,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["gateway","string",""],rowCounter:5,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["image","ContainerImage",""],rowCounter:5,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["node_type","NodeType","snake_cased name of the node type"],rowCounter:6,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["NODE_TYPE_UNSPECIFIED","= 0",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_MINER","= 1",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_ETL","= 2",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_VALIDATOR","= 3",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_API","= 4",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_ORACLE","= 5",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_RELAY","= 6",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_EXECUTION","= 7",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_BEACON","= 8",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_MEVBOOST","= 9",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_NODE","= 10",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_FULLNODE","= 11",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_LIGHTNODE","= 12",""],rowCounter:7,mdxType:"TableBodyRow"})),(0,r.kt)(T.s,{items:["node_version","string","semantic version string of the node type version"],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["protocol","string","snake_cased name of the blockchain"],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["status","ContainerImageStatus","Define config status"],rowCounter:6,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["CONTAINER_IMAGE_STATUS_UNSPECIFIED","= 0",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["CONTAINER_IMAGE_STATUS_DEVELOPMENT","= 1",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["CONTAINER_IMAGE_STATUS_UNSTABLE","= 2",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["CONTAINER_IMAGE_STATUS_STABLE","= 3",""],rowCounter:7,mdxType:"TableBodyRow"})),(0,r.kt)(T.s,{items:["ip","string",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["name","string",""],rowCounter:6,mdxType:"TableBodyRow"})),(0,r.kt)(T.s,{items:["ip","string",""],rowCounter:5,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["name","string",""],rowCounter:5,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["node_type","NodeType",""],rowCounter:5,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["NODE_TYPE_UNSPECIFIED","= 0",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_MINER","= 1",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_ETL","= 2",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_VALIDATOR","= 3",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_API","= 4",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_ORACLE","= 5",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_RELAY","= 6",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_EXECUTION","= 7",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_BEACON","= 8",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_MEVBOOST","= 9",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_NODE","= 10",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_FULLNODE","= 11",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_LIGHTNODE","= 12",""],rowCounter:6,mdxType:"TableBodyRow"})),(0,r.kt)(T.s,{items:["properties",(0,r.kt)(m.s,{text:"Parameter",info:"repeated",mdxType:"TableCellWithOption"}),""],rowCounter:5,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["name","string",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["value","string",""],rowCounter:6,mdxType:"TableBodyRow"})),(0,r.kt)(T.s,{items:["rules",(0,r.kt)(m.s,{text:"Rule",info:"repeated",mdxType:"TableCellWithOption"}),""],rowCounter:5,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["action","Action",""],rowCounter:6,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["ACTION_UNSPECIFIED","= 0",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["ACTION_ALLOW","= 1",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["ACTION_DENY","= 2",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["ACTION_REJECT","= 3",""],rowCounter:7,mdxType:"TableBodyRow"})),(0,r.kt)(T.s,{items:["direction","Direction",""],rowCounter:6,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["DIRECTION_UNSPECIFIED","= 0",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["DIRECTION_OUT","= 1",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["DIRECTION_IN","= 2",""],rowCounter:7,mdxType:"TableBodyRow"})),(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"ips",warning:"optional",mdxType:"TableCellWithOption"}),"string",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["name","string",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["ports",(0,r.kt)(m.s,{text:"unsigned int (32 bit)",info:"repeated",mdxType:"TableCellWithOption"}),""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"protocol",warning:"optional",mdxType:"TableCellWithOption"}),"Protocol",""],rowCounter:6,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["PROTOCOL_UNSPECIFIED","= 0",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["PROTOCOL_TCP","= 1",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["PROTOCOL_UDP","= 2",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["PROTOCOL_BOTH","= 3",""],rowCounter:7,mdxType:"TableBodyRow"}))),(0,r.kt)(T.s,{items:["self_update","boolean",""],rowCounter:5,mdxType:"TableBodyRow"})),(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"delete",warningInFront:"oneof",mdxType:"TableCellWithOption"}),"NodeDelete",""],rowCounter:4,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"info_get",warningInFront:"oneof",mdxType:"TableCellWithOption"}),"NodeGet",""],rowCounter:4,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"restart",warningInFront:"oneof",mdxType:"TableCellWithOption"}),"NodeRestart",""],rowCounter:4,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"start",warningInFront:"oneof",mdxType:"TableCellWithOption"}),"NodeStart",""],rowCounter:4,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"stop",warningInFront:"oneof",mdxType:"TableCellWithOption"}),"NodeStop",""],rowCounter:4,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"update",warningInFront:"oneof",mdxType:"TableCellWithOption"}),"NodeUpdate",""],rowCounter:4,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["rules",(0,r.kt)(m.s,{text:"Rule",info:"repeated",mdxType:"TableCellWithOption"}),""],rowCounter:5,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["action","Action",""],rowCounter:6,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["ACTION_UNSPECIFIED","= 0",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["ACTION_ALLOW","= 1",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["ACTION_DENY","= 2",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["ACTION_REJECT","= 3",""],rowCounter:7,mdxType:"TableBodyRow"})),(0,r.kt)(T.s,{items:["direction","Direction",""],rowCounter:6,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["DIRECTION_UNSPECIFIED","= 0",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["DIRECTION_OUT","= 1",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["DIRECTION_IN","= 2",""],rowCounter:7,mdxType:"TableBodyRow"})),(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"ips",warning:"optional",mdxType:"TableCellWithOption"}),"string",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["name","string",""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["ports",(0,r.kt)(m.s,{text:"unsigned int (32 bit)",info:"repeated",mdxType:"TableCellWithOption"}),""],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"protocol",warning:"optional",mdxType:"TableCellWithOption"}),"Protocol",""],rowCounter:6,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["PROTOCOL_UNSPECIFIED","= 0",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["PROTOCOL_TCP","= 1",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["PROTOCOL_UDP","= 2",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["PROTOCOL_BOTH","= 3",""],rowCounter:7,mdxType:"TableBodyRow"}))),(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"self_update",warning:"optional",mdxType:"TableCellWithOption"}),"boolean",""],rowCounter:5,mdxType:"TableBodyRow"})),(0,r.kt)(T.s,{items:[(0,r.kt)(m.s,{text:"upgrade",warningInFront:"oneof",mdxType:"TableCellWithOption"}),"NodeUpgrade","Updates a node to use a new OS-image"],rowCounter:4,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["image","ContainerImage",""],rowCounter:5,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["node_type","NodeType","snake_cased name of the node type"],rowCounter:6,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["NODE_TYPE_UNSPECIFIED","= 0",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_MINER","= 1",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_ETL","= 2",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_VALIDATOR","= 3",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_API","= 4",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_ORACLE","= 5",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_RELAY","= 6",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_EXECUTION","= 7",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_BEACON","= 8",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_MEVBOOST","= 9",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_NODE","= 10",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_FULLNODE","= 11",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["NODE_TYPE_LIGHTNODE","= 12",""],rowCounter:7,mdxType:"TableBodyRow"})),(0,r.kt)(T.s,{items:["node_version","string","semantic version string of the node type version"],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["protocol","string","snake_cased name of the blockchain"],rowCounter:6,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["status","ContainerImageStatus","Define config status"],rowCounter:6,mdxType:"TableBodyRow"},(0,r.kt)(T.s,{items:["CONTAINER_IMAGE_STATUS_UNSPECIFIED","= 0",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["CONTAINER_IMAGE_STATUS_DEVELOPMENT","= 1",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["CONTAINER_IMAGE_STATUS_UNSTABLE","= 2",""],rowCounter:7,mdxType:"TableBodyRow"}),(0,r.kt)(T.s,{items:["CONTAINER_IMAGE_STATUS_STABLE","= 3",""],rowCounter:7,mdxType:"TableBodyRow"})))))))))))}x.isMDXComponent=!0}}]);