"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8973],{15680:(e,t,n)=>{n.d(t,{Z:()=>o});var r,s,a=n(67294);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const o=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",l({width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,r||(r=a.createElement("path",{d:"M9 1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5V4.5a1 1 0 0 1 1-1H9V1Z",fill:"#F8FAF6"})),s||(s=a.createElement("path",{d:"M11.5 5h-5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5Z",fill:"#F8FAF6"})))}},31531:(e,t,n)=>{n.d(t,{p:()=>a});var r=n(67294);const s="base_L3V1",a=e=>{let{method:t,name:n}=e;return r.createElement("h2",{className:s},t&&r.createElement("span",null,t)," ",n&&r.createElement("span",null,n))}},98238:(e,t,n)=>{n.d(t,{D:()=>b});var r=n(67294),s=n(87892);const a="wrapper_d4Gc",l="base_cZP3",o="heading_kxJX",c="select_XVTu",i="buttonWrapper_Ucky",p="button_Pj6S",u="copyButtonSuccess_ASuz",d="copyButtonText_cmI7",m="copyButtonSuccessIcon_tD3P";var v;function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}const h=e=>{let{title:t,titleId:n,...s}=e;return r.createElement("svg",g({width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},s),t?r.createElement("title",{id:n},t):null,v||(v=r.createElement("path",{d:"m3.275 4.461-1.788 1.54 1.788 1.538a.596.596 0 0 1 .21.407.619.619 0 0 1-.132.441.585.585 0 0 1-.396.214.563.563 0 0 1-.425-.14l-2.323-2A.598.598 0 0 1 0 6.001a.617.617 0 0 1 .209-.462l2.323-2a.568.568 0 0 1 .814.08.613.613 0 0 1-.071.842ZM11.79 5.54l-2.323-2a.575.575 0 0 0-.425-.14.567.567 0 0 0-.396.214.607.607 0 0 0-.132.44.615.615 0 0 0 .21.408l1.788 1.54-1.788 1.538a.596.596 0 0 0-.21.407.619.619 0 0 0 .132.441.585.585 0 0 0 .396.214.563.563 0 0 0 .425-.14l2.323-2a.6.6 0 0 0 .209-.46.617.617 0 0 0-.209-.462ZM7.747 1.036a.563.563 0 0 0-.627.159.604.604 0 0 0-.117.2l-3.097 8.8a.618.618 0 0 0 .02.459.588.588 0 0 0 .526.346c.119 0 .235-.038.333-.108a.598.598 0 0 0 .212-.287l3.097-8.8a.618.618 0 0 0-.153-.648.578.578 0 0 0-.194-.12Z",fill:"#F8FAF6"})))};var f=n(15680),S=n(69612);const b=e=>{let{codes:t,defaultLanguage:n="go"}=e;const[v,g]=(0,r.useState)(!1),[b,k]=(0,r.useState)(!0),[y,w]=(0,r.useState)(n),E=(0,r.useMemo)((()=>t?.find((e=>e.language===y))),[t,y]),x=(0,r.useMemo)((()=>t?.map((e=>{let{language:t}=e;return t}))),[t]),D=(0,r.useMemo)((()=>E?.codeShorten&&b?E?.codeShorten:E?.code),[E,b]);return r.createElement("div",{className:a},r.createElement("div",{className:o},r.createElement("select",{className:c,onChange:e=>{var t;(t=e.currentTarget.value,["typescript","javascript","python","go","rust"].includes(t))&&w(e.currentTarget.value)}},x.map((e=>r.createElement("option",{value:e,key:e},e)))),r.createElement("div",{className:i},E?.codeShorten&&r.createElement("button",{className:p,onClick:()=>k(!b)},r.createElement("span",null,b?"Show Full Code":"Show Less Code"),r.createElement(h,null)),r.createElement("button",{onClick:()=>{navigator.clipboard.writeText(D).then((()=>{g(!0),setTimeout((()=>{g(!1)}),1e3)})).catch()},className:v?u:p},r.createElement(S.Z,{className:m}),r.createElement("span",{className:d},r.createElement("span",null,"Copy"),r.createElement(f.Z,null))))),E?r.createElement("div",{className:l},r.createElement(s.dn,{text:D,language:E.language,theme:s.cL,codeBlock:!0})):null)}},27988:(e,t,n)=>{n.d(t,{i:()=>s});var r=n(67294);const s=e=>{let{children:t}=e;return r.createElement("table",null,t)}},21455:(e,t,n)=>{n.d(t,{R:()=>s});var r=n(67294);const s=e=>{let{children:t}=e;return r.createElement("tbody",null,t)}},32275:(e,t,n)=>{n.d(t,{s:()=>p});var r,s=n(67294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const l=e=>{let{title:t,titleId:n,...l}=e;return s.createElement("svg",a({width:12,height:12,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},l),t?s.createElement("title",{id:n},t):null,r||(r=s.createElement("path",{d:"m9.72 5.28-5-5a1 1 0 0 0-1.415 1.415l4.293 4.293-4.293 4.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414Z",fill:"#5F615D"})))},o="cell_xH13",c="cell--active_xKr9",i="cellClickable_VRgO",p=e=>{let{items:t,children:n,rowCounter:r=0}=e;const[a,p]=(0,s.useState)(!1),u=e=>n&&0===e,d=e=>0===e&&n?{paddingLeft:12+20*r+"px"}:0===e?{paddingLeft:36+20*r+"px"}:void 0;return s.createElement(s.Fragment,null,s.createElement("tr",null,t?.map(((e,t)=>s.createElement("td",{className:u(t)?i:void 0,onClick:u(t)?()=>p(!a):void 0,style:d(t),key:t},u(t)?s.createElement("span",{className:a?c:o},s.createElement(l,null),e):e)))),s.createElement(s.Fragment,null,a&&n))}},97022:(e,t,n)=>{n.d(t,{s:()=>s});var r=n(67294);const s=e=>{let{items:t}=e;return r.createElement("thead",null,r.createElement("tr",null,t.map(((e,t)=>r.createElement("th",{key:t},e)))))}},42868:(e,t,n)=>{n.d(t,{s:()=>o});var r=n(67294);const s="info_eCVA",a="warning_Cn6H",l="base_cmOb",o=e=>{let{text:t,info:n,warning:o,infoInFront:c,warningInFront:i}=e;return r.createElement("div",{className:l},i&&r.createElement("span",{className:a},i),c&&r.createElement("span",{className:s},c),r.createElement("span",null,t),o&&r.createElement("span",{className:a},o),n&&r.createElement("span",{className:s},n)," ")}},34695:(e,t,n)=>{n.d(t,{I:()=>a});var r=n(67294);const s="base_PRYo",a=e=>{let{children:t}=e;return r.createElement("p",{className:s},r.createElement("span",null,t))}},22067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var r=n(87462),s=(n(67294),n(3905)),a=n(34695),l=n(31531),o=n(98238);const c=[{code:'package main\n\nimport (\n   "context"\n   "crypto/tls"\n   "crypto/x509"\n   "fmt"\n   v1 "github.com/blockjoy/api/sdk/go/blockjoy/v1" \n   "google.golang.org/grpc"\n   "google.golang.org/grpc/credentials"\n   "log"\n   "time"\n)\n\nconst (\n   hostServiceAddress = "unknown-grpc:443" \n)\n\nfunc main() {\n   ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)\n   defer cancel()\n\n   // Set up a connection to the server.\n   hostServiceConn, err := grpc.DialContext(ctx, hostServiceAddress, getSecureOptions()...) \n   if err != nil {                                                                          \n      log.Fatalf("did not connect: %v", err) \n   } \n   defer hostServiceConn.Close() \n   hostService := v1.NewHostServiceClient(hostServiceConn) \n   r1, _ := hostService.Delete(ctx, &v1.HostServiceDeleteRequest{})\n   fmt.Println(r1)\n}\n\nfunc getSecureOptions() []grpc.DialOption {\n   systemRoots, err := x509.SystemCertPool()\n   if err != nil {\n      log.Fatal(err)\n   }\n   cred := credentials.NewTLS(&tls.Config{\n      RootCAs: systemRoots,\n   })\n   return []grpc.DialOption{grpc.WithTransportCredentials(cred), grpc.WithBlock()}\n}\n',codeShorten:"resp, _ := hostService.Delete(ctx, &v1.HostServiceDeleteRequest{})\nfmt.Println(resp)",language:"go"},{code:'import React, { useEffect, useState } from \'react\'\nimport { grpc } from "@improbable-eng/grpc-web"\nimport { HostServiceClient } from "api/sdk/ts/blockjoy/v1/host_pb_service"\nimport { HostServiceDeleteResponse, HostServiceDeleteRequest } from "api/sdk/ts/blockjoy/v1/host_pb"\n\nvar hostService0 = new HostServiceClient(\'https://unknown-grpc-web\')\nfunction App(){\n    const [response, setResponse] = useState<string>("")\n    useEffect(() => { \n        const hostservicedeleterequest = new HostServiceDeleteRequest()\n        \n        hostService0.delete(hostservicedeleterequest, getMetadata(), (err, value:HostServiceDeleteResponse|null) => {\n            setResponse(JSON.stringify(err ? err : value))\n        })\n    }, [])\n    return <>\n        <ol>\n        {response}\n        </ol>\n    </>\n}\nconst getMetadata = () => {\n    const meta = new grpc.Metadata()\n    return meta\n}\nexport default App;',codeShorten:'const hostservicedeleterequest = new HostServiceDeleteRequest();\n\nservice.delete(hostservicedeleterequest, (err, value:HostServiceDeleteResponse|null) => {\n    const resp = JSON.stringify(err ? err : value);\n    console.log("received ", resp);\n})',language:"typescript"},{code:'import React, { useEffect, useState } from \'react\'\nimport { grpc } from "@improbable-eng/grpc-web"\nimport { HostServiceClient } from "api/sdk/ts/blockjoy/v1/host_pb_service"\nimport { HostServiceDeleteRequest, HostServiceDeleteResponse } from "api/sdk/ts/blockjoy/v1/host_pb"\n\nvar hostService0 = new HostServiceClient(\'https://unknown-grpc-web\')\nfunction App(){\n    const [response, setResponse] = useState("")\n    useEffect(() => { \n        const hostservicedeleterequest = new HostServiceDeleteRequest()\n        \n        hostService0.delete(hostservicedeleterequest, getMetadata(), (err, value) => {\n            setResponse(JSON.stringify(err ? err : value))\n        })\n    }, [])\n    return <>\n        <ol>\n        {response}\n        </ol>\n    </>\n}\nconst getMetadata = () => {\n    const meta = new grpc.Metadata()\n    return meta\n}\nexport default App;',codeShorten:'const hostservicedeleterequest = new HostServiceDeleteRequest();\n\nservice.delete(hostservicedeleterequest, (err, value) => {\n    const resp = JSON.stringify(err ? err : value);\n    console.log("received ", resp);\n})',language:"javascript"},{code:'extern crate api;\nuse tonic::transport::Channel;\n\nuse api::blockjoy::v1::host_service_client::HostServiceClient;\nuse api::blockjoy::v1::HostServiceDeleteRequest;\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n  let channel = Channel::from_static("unknown-grpc")\n    .connect()\n    .await?;\n  let mut client = HostServiceClient::new(channel); \n\n  let request = tonic::Request::new(\n    HostServiceDeleteRequest{\n      id: None\n    });\n// sending request and waiting for response\n  let response = client.delete(request).await?.into_inner();\n  println!("RESPONSE={:?}", response);\n  Ok(())\n}',language:"rust"}];n(42868),n(27988),n(97022),n(21455),n(32275);const i={sidebar_position:3},p="Delete",u={unversionedId:"host-service/delete",id:"host-service/delete",title:"Delete",description:"Delete a single host",source:"@site/docs/host-service/delete.mdx",sourceDirName:"host-service",slug:"/host-service/delete",permalink:"/docs/host-service/delete",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/host-service/delete.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"apiSidebar",previous:{title:"Create",permalink:"/docs/host-service/create"},next:{title:"Get",permalink:"/docs/host-service/get"}},d={},m=[],v={toc:m},g="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(g,(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"delete"},"Delete"),(0,s.kt)(l.p,{method:"rpc",name:"Delete",mdxType:"ApiMethod"}),(0,s.kt)("p",null,"Delete a single host"),(0,s.kt)(l.p,{method:"requests",name:"HostServiceDeleteRequest",mdxType:"ApiMethod"}),(0,s.kt)(a.I,{mdxType:"VersionType"},"blockjoy.v1.HostServiceDeleteRequest"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"id"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)(o.D,{codes:c,mdxType:"CustomCodeBlock"}),(0,s.kt)(l.p,{method:"returns",name:"HostServiceDeleteResponse",mdxType:"ApiMethod"}),(0,s.kt)(a.I,{mdxType:"VersionType"},"blockjoy.v1.HostServiceDeleteResponse"))}h.isMDXComponent=!0}}]);