(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1464:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(261)}])},9369:function(e,t,n){"use strict";var a=n(5893),i=n(7294),o=n(2236);function s(e){let{n:t}=e,{number:n}=(0,o.q_)({from:{number:0},number:t,delay:200,config:{mass:1,tension:20,friction:10}});return(0,a.jsx)(o.q.p,{className:"nx-text-xs",children:n.to(e=>e.toFixed(0))})}let r={logo:(0,a.jsx)(function(){return(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,a.jsx)("img",{style:{borderRadius:"5px",marginRight:"10px"},width:50,src:"/scaffold_logo.png"}),(0,a.jsx)("h1",{style:{fontWeight:"bold",color:"#F76E57"},children:"Scala Fullstack Scaffold"})]})},{}),project:{link:"https://github.com/do4-2022/scala-fullstack-scaffold"},banner:{text:(0,a.jsxs)("a",{href:"https://github.com/do4-2022/scala-fullstack-scaffold/issues/new?title=Feedback%20for%20%E2%80%9Cscala-fullstack-scaffold%E2%80%9D&labels=feedback",target:"_blank",children:[(0,a.jsx)("strong",{children:"Scala Fullstack Scaffold's documentation is under construction."})," Give us your feedback →"]})},navbar:{extraContent:(0,a.jsx)(function(){let[e,t]=(0,i.useState)(0);return(0,i.useEffect)(()=>{fetch("https://api.github.com/repos/do4-2022/scala-fullstack-scaffold").then(e=>e.json()).then(e=>t(e.stargazers_count))},[]),(0,a.jsxs)("a",{style:{display:"flex",justifyContent:"center",alignItems:"center"},href:"https://github.com/do4-2022/scala-fullstack-scaffold",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)("div",{style:{borderRadius:"5px 0 0 5px",display:"flex",justifyContent:"center",alignItems:"center"},className:"nx-border nx-border-gray-300 dark:nx-border-gray-600 nx-py-1 nx-px-2",children:(0,a.jsx)("p",{className:"nx-text-xs",children:"⭐ Star"})}),(0,a.jsx)("div",{style:{borderRadius:"0 5px 5px 0",borderLeft:"none",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"},className:"nx-border nx-border-gray-300 dark:nx-border-gray-600 nx-py-1 nx-px-2",children:(0,a.jsx)(s,{n:e})})]})},{})},docsRepositoryBase:"https://github.com/do4-2022/scala-fullstack-scaffold",editLink:{text:"Edit this page on GitHub →"},footer:{text:"MIT 2023 \xa9 Scala Fullstack Scaffold maintainers."}};t.Z=r},261:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var a=n(5893),i=n(2673),o=n(1712),s=n(9369);n(9966);var r=n(1151),c=n(5675),l=n.n(c),d={src:"/scala-fullstack-scaffold.g8/_next/static/media/scalajs_frontend_view.f3b8c7e2.png",height:475,width:588,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAVFBMVEX////+///9/f36+vr5+fn4+Pj49/f39/f39vb29vb19vb09fX09fT09PT18/Pz8/Py8vLx8PDw8PDv7+/u7u7u7e3w7Ozt7e3w6+vs7Ozr6+vn2Nhg9mTUAAAAOElEQVR42gVACxZAIBCcYo1iW4R+979nDxrrGP+hCAwpbSshPMU5LIjCnd4L8nN/JZcXellvZjoBOxsCVDNojigAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6};let u={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)},pageOpts:{filePath:"pages/index.mdx",route:"/",headings:[{depth:1,value:"A TODO Application",id:"a-todo-application"},{depth:2,value:"Features",id:"features"},{depth:2,value:"A Scaffolding project",id:"a-scaffolding-project"},{depth:2,value:"What to do next ?",id:"what-to-do-next-"}],pageMap:[{kind:"Meta",data:{index:"Introduction",requirements:"Requirements",quick_start:"Quick Start",about:{title:"About",type:"page"}}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"quick_start",route:"/quick_start",frontMatter:{title:"Getting started with Scala Fullstack Scaffold",description:"Ready to dive into a Scala Fullstack Architecture ? You are at the right place"}},{kind:"MdxPage",name:"requirements",route:"/requirements"}],flexsearch:{codeblocks:!0},title:"A TODO Application"},pageNextRoute:"/",nextraLayout:o.ZP,themeConfig:s.Z};function p(e){let t=Object.assign({h1:"h1",p:"p",em:"em",a:"a",h2:"h2",ol:"ol",li:"li",code:"code",ul:"ul"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"A TODO Application"}),"\n",(0,a.jsx)(t.p,{children:"This scaffolding project expose a typical architecture for a TODO Fullstack application would consist of both front-end and back-end components."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(l(),{alt:"Scala JS Frontend Application",placeholder:"blur",src:d}),"\n",(0,a.jsx)(t.em,{children:"The Frontend view of the ScalaJS Fullstack Frontend application"})]}),"\n",(0,a.jsxs)(t.p,{children:["This projects aims to provide a fullstack ",(0,a.jsx)(t.em,{children:"Scala Web Application"}),"\nusing ",(0,a.jsx)(t.a,{href:"https://www.scala-js.org/",children:"ScalaJS"}),", ",(0,a.jsx)(t.a,{href:"https://zio.dev/guides/quickstarts/restful-webservice/",children:"Zio"}),", and a way to persist information in at least one database management system."]}),"\n",(0,a.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,a.jsx)(t.p,{children:"\uD83D\uDE80 Discover the amazing features of our TODO Application! \uD83C\uDF1F"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Easy project setup with a ready-to-use Frontend and Backend application. Get started in no time! \uD83D\uDE0E"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"2️. Choose your favorite database with just one click: Postgres or MongoDB. It's all about flexibility! \uD83D\uDDC3️"}),"\n",(0,a.jsx)(t.p,{children:"3️. Seamlessly deploy your project using Docker. It's smooth sailing all the way! \uD83D\uDC33"}),"\n",(0,a.jsx)(t.p,{children:"Don't miss out on this opportunity to build your dream full-stack application with ScalaJS and Zio. Get productive and unleash your creativity today! \uD83D\uDCAA\uD83D\uDD25"}),"\n",(0,a.jsx)(t.h2,{id:"a-scaffolding-project",children:"A Scaffolding project"}),"\n",(0,a.jsxs)(t.p,{children:["In computer science, ",(0,a.jsx)(t.code,{children:"scaffolding"})," refers to a technique or practice used in software development to provide a temporary\nframework or support structure for building applications.\nIt is a process of creating a ",(0,a.jsx)(t.em,{children:"basic structure"})," or ",(0,a.jsx)(t.em,{children:"skeleton code"}),"\nthat helps developers quickly set up the foundation of an application\nor system before adding specific functionalities."]}),"\n",(0,a.jsxs)(t.p,{children:["Scaffolding typically involves generating or auto-generating code, ",(0,a.jsx)(t.em,{children:"templates"}),", or frameworks\nthat provide a starting point for development.\nThis can include boilerplate code, directory structures,"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"models, user interfaces, or other components that are commonly needed in an application.\nThe purpose is to streamline the development process,\nreduce repetitive tasks, and accelerate the initial setup of a project."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Scaffolding tools or frameworks are often used in web development,\nwhere they can generate basic code templates for creating models, views,\ncontrollers, database migrations, and other components of a web application.\nThese tools enable developers to quickly establish a project's structure and focus on implementing the specific business logic or features without starting from scratch."}),"\n",(0,a.jsx)(t.p,{children:"Scaffolding can be particularly useful in rapid prototyping,\nwhere speed is prioritized over fine-grained customization.\nOnce the scaffolding is in place, developers can modify or\nextend the generated code to meet the specific requirements of the application."}),"\n",(0,a.jsx)(t.h2,{id:"what-to-do-next-",children:"What to do next ?"}),"\n",(0,a.jsxs)(t.p,{children:["You can dive into the structure of the application in the ",(0,a.jsx)(t.a,{href:"/about",children:"about section"}),"."]})]})}var h=(0,i.j)(u)}},function(e){e.O(0,[774,314,888,179],function(){return e(e.s=1464)}),_N_E=e.O()}]);