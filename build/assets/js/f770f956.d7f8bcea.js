"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[u]="string"==typeof e?e:a,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const i={id:"deploy-hello-world-to-glueops",title:'Deploy a "Hello World" Application',type:"tutorial"},l='Deploy a "Hello World" Application',r={unversionedId:"deploy-applications/deploy-hello-world-to-glueops",id:"deploy-applications/deploy-hello-world-to-glueops",title:'Deploy a "Hello World" Application',description:'In this guide, we will walk you through the process of deploying a "Hello World" application onto the GlueOps platform. We\'ll start from scratch and cover each step in detail to ensure you have a smooth deployment experience.',source:"@site/docs/deploy-applications/hello-world.md",sourceDirName:"deploy-applications",slug:"/deploy-applications/deploy-hello-world-to-glueops",permalink:"/docs/deploy-applications/deploy-hello-world-to-glueops",draft:!1,editUrl:"https://github.com/GlueOps/glueops-dev/docs/deploy-applications/hello-world.md",tags:[],version:"current",frontMatter:{id:"deploy-hello-world-to-glueops",title:'Deploy a "Hello World" Application',type:"tutorial"},sidebar:"main",previous:{title:"Deploy Applications",permalink:"/docs/deploy-applications"},next:{title:"Deploy Docusaurus Website on GlueOps",permalink:"/docs/deploy-applications/deploy-docusarus-website-to-glueops"}},p={},s=[{value:"Create a New Repository and set up your application folder",id:"create-a-new-repository-and-set-up-your-application-folder",level:2},{value:"Set Up GitHub Actions for Docker Image Publishing",id:"set-up-github-actions-for-docker-image-publishing",level:2},{value:"Create Dockerfile",id:"create-dockerfile",level:3},{value:"Configure GitHub Token as a Repository Secret",id:"configure-github-token-as-a-repository-secret",level:2},{value:"Configure GitHub Workflows for Each Environment",id:"configure-github-workflows-for-each-environment",level:2},{value:"<code>prod-ci.yaml</code> Environment Sample Configuration:",id:"prod-ciyaml-environment-sample-configuration",level:3},{value:"<code>stage-ci.yaml</code> Environment Sample Configuration:",id:"stage-ciyaml-environment-sample-configuration",level:3},{value:"<code>uat-ci.yaml</code> Environment Sample Configuration:",id:"uat-ciyaml-environment-sample-configuration",level:3},{value:"Deploy the App and Register Environments",id:"deploy-the-app-and-register-environments",level:2},{value:"<code>prod</code> Environment Sample Configuration:",id:"prod-environment-sample-configuration",level:3},{value:"<code>stage</code> Environment Sample Configuration:",id:"stage-environment-sample-configuration",level:3},{value:"<code>uat</code> Environment Sample Configuration:",id:"uat-environment-sample-configuration",level:3},{value:"Add a Simple HTML &quot;Hello World&quot; Code",id:"add-a-simple-html-hello-world-code",level:2},{value:"Trigger the GitHub Action for Docker Image Publishing",id:"trigger-the-github-action-for-docker-image-publishing",level:2},{value:"Deploying to Environments",id:"deploying-to-environments",level:2},{value:"Check application deployed to your Staging Enviroment",id:"check-application-deployed-to-your-staging-enviroment",level:3},{value:"Deploying to <code>prod</code> and <code>uat</code> Environments",id:"deploying-to-prod-and-uat-environments",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-a-hello-world-application"},'Deploy a "Hello World" Application'),(0,a.kt)("p",null,'In this guide, we will walk you through the process of deploying a "Hello World" application onto the GlueOps platform. We\'ll start from scratch and cover each step in detail to ensure you have a smooth deployment experience.'),(0,a.kt)("h2",{id:"create-a-new-repository-and-set-up-your-application-folder"},"Create a New Repository and set up your application folder"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new repository for your application within your organization. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set up the necessary folders and files for your application. You can use the following folder structure:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"demo-app-1\n\u251c\u2500\u2500 .github\n\u2502   \u2514\u2500\u2500 workflows\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 index.html\n")),(0,a.kt)("h2",{id:"set-up-github-actions-for-docker-image-publishing"},"Set Up GitHub Actions for Docker Image Publishing"),(0,a.kt)("p",null,"Now, let's configure GitHub Actions to automatically publish a Docker image of your application. This will allow the GlueOps platform to use the latest version of your app. As a happy path, we have provided this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/build-docker-image-and-push-to-ghcr"},"Custom Action to push Docker images to GitHub Container Registry"),". Here's how you can set it up:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In your newly created repository, navigate to the ",(0,a.kt)("inlineCode",{parentName:"li"},".github/workflows")," folder."),(0,a.kt)("li",{parentName:"ol"},"Create a new file named ",(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.yaml")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"workflows")," folder."),(0,a.kt)("li",{parentName:"ol"},"Copy and paste the following code into ",(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.yaml"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: GlueOps Action\n \non: [push]\n\njobs:\n  build_tag_push_to_ghcr:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Build, Tag and Push Docker Image to GHCR\n        uses: GlueOps/github-actions-build-push-containers@v0.1.2\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"GlueOps only supports container images published to the supported registry.")),(0,a.kt)("h3",{id:"create-dockerfile"},"Create Dockerfile"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," using the template below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"FROM httpd:2.4.57\n\nCOPY index.html /usr/local/apache2/htdocs/index.html\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Change ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," to the correct path of your index file.")),(0,a.kt)("h2",{id:"configure-github-token-as-a-repository-secret"},"Configure GitHub Token as a Repository Secret"),(0,a.kt)("p",null,"To enable GitHub Actions to notify our Argo CD of code changes, we need to configure a GitHub token as a repository secret. Here's how you can set it up:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To get your token secret, go to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/settings/tokens"},"https://github.com/settings/tokens")," and click on ",(0,a.kt)("strong",{parentName:"li"},"Generate new token(classic)."))),(0,a.kt)("img",{width:"927",alt:"Screenshot 2023-07-28 at 02 51 03",src:"https://github.com/GlueOps/glueops-dev/assets/39309699/158bbb62-6710-4933-b076-1efb8d6bdc02"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the onscreen information to generate your token. The only scope required is the ",(0,a.kt)("strong",{parentName:"p"},"repo")," scope. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Generate token")," and copy your token."))),(0,a.kt)("img",{width:"869",alt:"Screenshot 2023-07-28 at 02 55 12",src:"https://github.com/GlueOps/glueops-dev/assets/39309699/a7bca229-ed48-4679-ba45-6a863977820c"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Go to your repository and navigate to ",(0,a.kt)("strong",{parentName:"p"},"Settings > Security > Secrets and Variables > Actions"),"."),(0,a.kt)("img",{width:"422",alt:"Screenshot 2023-07-28 at 02 47 16",src:"https://github.com/GlueOps/glueops-dev/assets/39309699/f3468172-98cb-4b4f-a2fe-42e1006d772c"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"New repository secret")," to create a new token."))),(0,a.kt)("img",{width:"798",alt:"Screenshot 2023-08-03 at 01 34 34",src:"https://github.com/venkata-tenant-test-1/python-app/assets/39309699/393ab91d-e0fb-4fe9-9e88-792de3ec43b0"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add your ",(0,a.kt)("strong",{parentName:"li"},"secret name")," and place your copied token in the secret input field and click ",(0,a.kt)("strong",{parentName:"li"},"Add secret"),". Below is the repository secret used for this example")),(0,a.kt)("img",{width:"795",alt:"Screenshot 2023-08-03 at 01 37 10",src:"https://github.com/venkata-tenant-test-1/python-app/assets/39309699/f2c1b85e-5431-452f-a238-14a35ef2e74b"}),(0,a.kt)("h2",{id:"configure-github-workflows-for-each-environment"},"Configure GitHub Workflows for Each Environment"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows")," directory of your application repository, we will add GitHub Actions workflow files for our environment: ",(0,a.kt)("inlineCode",{parentName:"p"},"prod-ci.yaml"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"stage-ci.yaml"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"uat-ci.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 .github\n\u2502   \u2514\u2500\u2500 workflows\n\u2502       \u251c\u2500\u2500 ghcr.yaml\n\u2502       \u251c\u2500\u2500 prod-ci.yaml\n\u2502       \u251c\u2500\u2500 stage-ci.yaml\n\u2502       \u2514\u2500\u2500 uat-ci.yaml\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 index.html\n")),(0,a.kt)("p",null,"Each workflow file uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"GlueOps/github-workflows/.github/workflows/argocd-tags-ci.yml")," action to notify Argo CD about the new image tags and initiate the deployment process."),(0,a.kt)("h3",{id:"prod-ciyaml-environment-sample-configuration"},(0,a.kt)("inlineCode",{parentName:"h3"},"prod-ci.yaml")," Environment Sample Configuration:"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"prod-ci.yaml")," file add the following content:"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"GH_TOKEN")," with your secret name.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# .github/workflows/prod-ci.yaml\n\nname: ArgoCD - Prod Tags CI\n\non:\n  release:\n    types:\n      - created\njobs:\n  update-tags:\n    uses: GlueOps/github-workflows/.github/workflows/argocd-tags-ci.yml@main\n    secrets:\n      GH_TOKEN: ${{ secrets.GH_TOKEN }}\n    with:\n      STACK_REPO: 'deployment-configurations'\n      ENV: 'prod'\n      CREATE_PR: true\n")),(0,a.kt)("h3",{id:"stage-ciyaml-environment-sample-configuration"},(0,a.kt)("inlineCode",{parentName:"h3"},"stage-ci.yaml")," Environment Sample Configuration:"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"stage-ci.yaml")," file add the following content:"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"GH_TOKEN")," with your secret name.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# .github/workflows/stage-ci.yaml\n\nname: ArgoCD - Staging Tags CI\n\non:\n  pull_request:\n    types:\n      - closed\njobs:\n  update-tags:\n    uses: GlueOps/github-workflows/.github/workflows/argocd-tags-ci.yml@main\n    if: github.event.pull_request.merged == true\n    secrets:\n      GH_TOKEN: ${{ secrets.GH_TOKEN }}\n    with:\n      STACK_REPO: 'deployment-configurations'\n      ENV: 'stage'\n      CREATE_PR: false\n")),(0,a.kt)("h3",{id:"uat-ciyaml-environment-sample-configuration"},(0,a.kt)("inlineCode",{parentName:"h3"},"uat-ci.yaml")," Environment Sample Configuration:"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"uat-ci.yaml")," file add the following content: "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"GH_TOKEN")," with your secret name.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# .github/workflows/uat-ci.yaml\n\nname: ArgoCD - QA Tags CI\n\non:\n  release:\n    types:\n      - created\njobs:\n  update-tags:\n    uses: GlueOps/github-workflows/.github/workflows/argocd-tags-ci.yml@main\n    secrets:\n      GH_TOKEN: ${{ secrets.GH_TOKEN }}\n    with:\n      STACK_REPO: 'deployment-configurations'\n      ENV: 'uat'\n      CREATE_PR: true\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"GH_TOKEN")," with the correct secret name if you used a different name for the GitHub token secret.")),(0,a.kt)("h2",{id:"deploy-the-app-and-register-environments"},"Deploy the App and Register Environments"),(0,a.kt)("p",null,"Next, deploy the app and register the specified environments (prod, stage, uat) inside the GlueOps Argo CD. Here's what you need to do:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/GlueOps/deployment-configurations"},"deployment-configurations")," repository."),(0,a.kt)("li",{parentName:"ol"},"Inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"app")," directory, duplicate one of the example demo apps and rename it to your application's name."),(0,a.kt)("li",{parentName:"ol"},"Your application directory should have the following structure:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 demo-app-1\n\u251c\u2500\u2500 base\n\u2502   \u2514\u2500\u2500 base-values.yaml\n\u251c\u2500\u2500 envs\n\u2502   \u251c\u2500\u2500 previews\n\u2502   \u251c\u2500\u2500 prod\n\u2502   \u251c\u2500\u2500 stage\n\u2502   \u2514\u2500\u2500 uat\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"base-values.yaml")," file inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"base")," directory, update the information to fit your application. For example, the ",(0,a.kt)("inlineCode",{parentName:"li"},"base-values.yaml")," might look like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"image:\n  registry: ghcr.io\n  repository: venkata-tenant-test-1/demo-app-1\n  port: 80\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"venkata-tenant-test-1/demo-app-1")," with your organization and repository name."),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Update the ",(0,a.kt)("inlineCode",{parentName:"li"},"values.yaml")," file in the ",(0,a.kt)("inlineCode",{parentName:"li"},"prod"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"stage"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"uat")," folders accordingly. Change the image tag, hostnames, and other necessary details to match your application and GlueOps configuration.")),(0,a.kt)("h3",{id:"prod-environment-sample-configuration"},(0,a.kt)("inlineCode",{parentName:"h3"},"prod")," Environment Sample Configuration:"),(0,a.kt)("p",null,"Create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"envs/prod")," folder and add the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# envs/prod/values.yaml\n\nimage:\n  tag: 'v0.2.0'\n\ningress:\n  enabled: true\n  ingressClassName: public\n  annotations:\n    cert-manager.io/cluster-issuer: letsencrypt\n  tls:\n    - secretName: demo-app-1-prod.yolo.venkatamutyala.com\n      hosts:\n        - demo-app-1-prod.yolo.venkatamutyala.com\n  entries:\n    - name: public\n      hosts:\n        - hostname: demo-app-1-prod.apps.test-80-np.venkata.onglueops.rocks\n        - hostname: demo-app-1-prod.yolo.venkatamutyala.com\n")),(0,a.kt)("h3",{id:"stage-environment-sample-configuration"},(0,a.kt)("inlineCode",{parentName:"h3"},"stage")," Environment Sample Configuration:"),(0,a.kt)("p",null,"Create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"envs/stage")," folder and add the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# envs/stage/values.yaml\n\nimage:\n  tag: 'latest'\n\ningress:\n  enabled: true\n  ingressClassName: public\n  annotations:\n    cert-manager.io/cluster-issuer: letsencrypt\n  tls:\n    - secretName: demo-app-1-stage.yolo.venkatamutyala.com\n      hosts:\n        - demo-app-1-stage.yolo.venkatamutyala.com\n  entries:\n    - name: public\n      hosts:\n        - hostname: demo-app-1-stage.apps.test-80-np.venkata.onglueops.rocks\n        - hostname: demo-app-1-stage.yolo.venkatamutyala.com\n")),(0,a.kt)("h3",{id:"uat-environment-sample-configuration"},(0,a.kt)("inlineCode",{parentName:"h3"},"uat")," Environment Sample Configuration:"),(0,a.kt)("p",null,"Create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"envs/uat")," folder and add the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# envs/uat/values.yaml\n\nimage:\n  tag: 'v0.1.0'\n\ningress:\n  enabled: true\n  ingressClassName: public\n  annotations:\n    cert-manager.io/cluster-issuer: letsencrypt\n  tls:\n    - secretName: demo-app-1-uat.yolo.venkatamutyala.com\n      hosts:\n        - demo-app-1-uat.yolo.venkatamutyala.com\n  entries:\n    - name: public\n      hosts:\n        - hostname: demo-app-1-uat.apps.test-80-np.venkata.onglueops.rocks\n        - hostname: demo-app-1-uat.yolo.venkatamutyala.com\n")),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"Replace the placeholders as follows:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"demo-app-1")," with your actual repository name."),(0,a.kt)("li",{parentName:"ul"},"Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"venkatamutyala.com")," with your actual hosting name."),(0,a.kt)("li",{parentName:"ul"},"Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"test-80-np.venkata.onglueops.rocks")," with the name of your GlueOps cluster provided by GlueOps."))),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Save and commit your changes to the deployment repository.")),(0,a.kt)("h2",{id:"add-a-simple-html-hello-world-code"},'Add a Simple HTML "Hello World" Code'),(0,a.kt)("p",null,"Go back to your application repository and edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),' file. Add a simple "Hello World" HTML code, like this:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n <head>\n </head>\n <body>\n   <h1>Hello World from demo-app-1<h1>\n </body>\n</html>\n")),(0,a.kt)("p",null,"Save the file and commit your changes."),(0,a.kt)("h2",{id:"trigger-the-github-action-for-docker-image-publishing"},"Trigger the GitHub Action for Docker Image Publishing"),(0,a.kt)("p",null,"Create a pull request (PR) to trigger the GitHub Action you set up for publishing the Docker image based on the latest code changes. The platform will automatically spin up a new environment and deploy the application."),(0,a.kt)("p",null,"To view the app click on the preview URL. You can check the status of the deployment on Argos CD, which will show metrics, logs, and more. The QR code will also lead you to the preview URL."),(0,a.kt)("img",{width:"420",alt:"Screenshot 2023-07-28 at 12 53 14",src:"https://github.com/GlueOps/glueops-dev/assets/39309699/9661e169-6eee-4bec-a5ee-145751e40b6f"}),(0,a.kt)("h2",{id:"deploying-to-environments"},"Deploying to Environments"),(0,a.kt)("h3",{id:"check-application-deployed-to-your-staging-enviroment"},"Check application deployed to your Staging Enviroment"),(0,a.kt)("p",null,"The staging enviroment is automatically deployed, to check your application:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"envs/stage")," directory within the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/GlueOps/deployment-configurations"},"deployment-configurations")," repository.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"stage")," folder, you will find the configuration for the staging environment. Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"hostname")," entry to check your application deployed to the staging environment."))),(0,a.kt)("h3",{id:"deploying-to-prod-and-uat-environments"},"Deploying to ",(0,a.kt)("inlineCode",{parentName:"h3"},"prod")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"uat")," Environments"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To deploy your application to the prod and UAT environments, you need to create a release in your application's repository (e.g., v0.1.0, v1.0.0, etc.). This release will mark the specific version of your application that you want to deploy to these environments.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Upon creating the release, GitHub will automatically generate pull requests into the deployment-configurations repository. These pull requests will contain the necessary changes for the prod and UAT environments, located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"envs/prod")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"envs/uat")," directories, respectively."))),(0,a.kt)("img",{width:"362",alt:"Screenshot 2023-07-28 at 13 19 12",src:"https://github.com/GlueOps/glueops-dev/assets/39309699/5bc936a8-adcd-40f4-bdc8-ff8b3290ce0d"}),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Review and merge the pull requests in the deployment-configurations repository. This will trigger the deployment process to both the ",(0,a.kt)("inlineCode",{parentName:"p"},"prod")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"uat")," environments.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once the deployment process is completed, your application will be accessible in both the ",(0,a.kt)("inlineCode",{parentName:"p"},"prod")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"uat")," environments hostnames "))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,'Congratulations! You have successfully deployed a basic "Hello World" application onto the GlueOps platform.'))}m.isMDXComponent=!0}}]);