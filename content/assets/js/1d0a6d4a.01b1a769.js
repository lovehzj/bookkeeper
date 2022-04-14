"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[7345],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,m=d["".concat(p,".").concat(u)]||d[u]||k[u]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},571:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return k}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"dcos",title:"Deploying BookKeeper on DC/OS"},p=void 0,s={unversionedId:"deployment/dcos",id:"version-4.5.1/deployment/dcos",title:"Deploying BookKeeper on DC/OS",description:"DC/OS (the DataCenter Operating System) is a distributed operating system used for deploying and managing applications and systems on Apache Mesos. DC/OS is an open-source tool created and maintained by Mesosphere.",source:"@site/versioned_docs/version-4.5.1/deployment/dcos.md",sourceDirName:"deployment",slug:"/deployment/dcos",permalink:"/docs/4.5.1/deployment/dcos",tags:[],version:"4.5.1",frontMatter:{id:"dcos",title:"Deploying BookKeeper on DC/OS"},sidebar:"version-4.5.1/docsSidebar",previous:{title:"Manual deployment",permalink:"/docs/4.5.1/deployment/manual"},next:{title:"Deploying BookKeeper on Kubernetes",permalink:"/docs/4.5.1/deployment/kubernetes"}},c={},k=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing BookKeeper",id:"installing-bookkeeper",level:2},{value:"Services",id:"services",level:3},{value:"Tasks",id:"tasks",level:3},{value:"Scaling BookKeeper",id:"scaling-bookkeeper",level:2},{value:"ZooKeeper Exhibitor",id:"zookeeper-exhibitor",level:2},{value:"Client connections",id:"client-connections",level:2},{value:"Configuring BookKeeper",id:"configuring-bookkeeper",level:2},{value:"Available parameters",id:"available-parameters",level:3},{value:"Example JSON configuration",id:"example-json-configuration",level:3},{value:"Uninstalling BookKeeper",id:"uninstalling-bookkeeper",level:2}],d={toc:k};function u(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dcos.io/"},"DC/OS")," (the ",(0,r.kt)("strong",null,"D"),"ata",(0,r.kt)("strong",null,"C"),"enter ",(0,r.kt)("strong",null,"O"),"perating ",(0,r.kt)("strong",null,"S"),"ystem) is a distributed operating system used for deploying and managing applications and systems on ",(0,r.kt)("a",{parentName:"p",href:"http://mesos.apache.org/"},"Apache Mesos"),". DC/OS is an open-source tool created and maintained by ",(0,r.kt)("a",{parentName:"p",href:"https://mesosphere.com/"},"Mesosphere"),"."),(0,r.kt)("p",null,"BookKeeper is available as a ",(0,r.kt)("a",{parentName:"p",href:"http://universe.dcos.io/#/package/bookkeeper/version/latest"},"DC/OS package")," from the ",(0,r.kt)("a",{parentName:"p",href:"http://universe.dcos.io/#/packages"},"Mesosphere DC/OS Universe"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"In order to run BookKeeper on DC/OS, you will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DC/OS version ",(0,r.kt)("a",{parentName:"li",href:"https://dcos.io/docs/1.8/"},"1.8")," or higher"),(0,r.kt)("li",{parentName:"ul"},"A DC/OS cluster with at least three nodes"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://dcos.io/docs/1.8/usage/cli/install/"},"DC/OS CLI tool")," installed")),(0,r.kt)("p",null,"Each node in your DC/OS-managed Mesos cluster must have at least:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 CPU"),(0,r.kt)("li",{parentName:"ul"},"1 GB of memory"),(0,r.kt)("li",{parentName:"ul"},"10 GB of total persistent disk storage")),(0,r.kt)("h2",{id:"installing-bookkeeper"},"Installing BookKeeper"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ dcos package install bookkeeper --yes\n")),(0,r.kt)("p",null,"This command will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the ",(0,r.kt)("inlineCode",{parentName:"li"},"bookkeeper")," subcommand for the ",(0,r.kt)("inlineCode",{parentName:"li"},"dcos")," CLI tool"),(0,r.kt)("li",{parentName:"ul"},"Start a single bookie on the Mesos cluster with the ",(0,r.kt)("a",{parentName:"li",href:"../reference/config"},"default configuration"))),(0,r.kt)("p",null,"The bookie that is automatically started up uses the host mode of the network and by default exports the service at ",(0,r.kt)("inlineCode",{parentName:"p"},"agent_ip:3181"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you run ",(0,r.kt)("inlineCode",{parentName:"p"},"dcos package install bookkeeper")," without setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"--yes")," flag, the install will run in interactive mode. For more information on the ",(0,r.kt)("inlineCode",{parentName:"p"},"package install")," command, see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mesosphere.com/latest/cli/command-reference/dcos-package/dcos-package-install/"},"DC/OS docs"),".")),(0,r.kt)("h3",{id:"services"},"Services"),(0,r.kt)("p",null,"To watch BookKeeper start up, click on the ",(0,r.kt)("strong",{parentName:"p"},"Services")," tab in the DC/OS ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mesosphere.com/latest/gui/"},"user interface")," and you should see the ",(0,r.kt)("inlineCode",{parentName:"p"},"bookkeeper")," package listed:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"DC/OS services",src:n(5467).Z,width:"1417",height:"698"})),(0,r.kt)("h3",{id:"tasks"},"Tasks"),(0,r.kt)("p",null,"To see which tasks have started, click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"bookkeeper")," service and you'll see an interface that looks like this;"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"DC/OS tasks",src:n(4501).Z,width:"1421",height:"698"})),(0,r.kt)("h2",{id:"scaling-bookkeeper"},"Scaling BookKeeper"),(0,r.kt)("p",null,"Once the first bookie has started up, you can click on the ",(0,r.kt)("strong",{parentName:"p"},"Scale")," tab to scale up your BookKeeper ensemble by adding more bookies (or scale down the ensemble by removing bookies)."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"DC/OS scale",src:n(5349).Z,width:"1424",height:"629"})),(0,r.kt)("h2",{id:"zookeeper-exhibitor"},"ZooKeeper Exhibitor"),(0,r.kt)("p",null,"ZooKeeper contains the information for all bookies in the ensemble. When deployed on DC/OS, BookKeeper uses a ZooKeeper instance provided by DC/OS. You can access a visual UI for ZooKeeper using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/soabase/exhibitor/wiki"},"Exhibitor"),", which is available at ",(0,r.kt)("a",{parentName:"p",href:"http://master.dcos/exhibitor"},"http://master.dcos/exhibitor"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"ZooKeeper Exhibitor",src:n(129).Z,width:"1430",height:"696"})),(0,r.kt)("p",null,"You should see a listing of IP/host information for all bookies under the ",(0,r.kt)("inlineCode",{parentName:"p"},"messaging/bookkeeper/ledgers/available")," node."),(0,r.kt)("h2",{id:"client-connections"},"Client connections"),(0,r.kt)("p",null,"To connect to bookies running on DC/OS using clients running within your Mesos cluster, you need to specify the ZooKeeper connection string for DC/OS's ZooKeeper cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"master.mesos:2181\n")),(0,r.kt)("p",null,"This is the ",(0,r.kt)("em",{parentName:"p"},"only")," ZooKeeper host/port you need to include in your connection string. Here's an example using the ",(0,r.kt)("a",{parentName:"p",href:"../api/ledger-api#the-java-ledger-api-client"},"Java client"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookKeeper bkClient = new BookKeeper("master.mesos:2181");\n')),(0,r.kt)("p",null,"If you're connecting using a client running outside your Mesos cluster, you need to supply the public-facing connection string for your DC/OS ZooKeeper cluster."),(0,r.kt)("h2",{id:"configuring-bookkeeper"},"Configuring BookKeeper"),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"bookkeeper")," package will start up a BookKeeper ensemble consisting of one bookie with one CPU, 1 GB of memory, and a 70 MB persistent volume."),(0,r.kt)("p",null,"You can supply a non-default configuration when installing the package using a JSON file. Here's an example command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ dcos package install bookkeeper \\\n  --options=/path/to/config.json\n")),(0,r.kt)("p",null,"You can then fetch the current configuration for BookKeeper at any time using the ",(0,r.kt)("inlineCode",{parentName:"p"},"package describe")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ dcos package describe bookkeeper \\\n  --config\n")),(0,r.kt)("h3",{id:"available-parameters"},"Available parameters"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Not all ",(0,r.kt)("a",{parentName:"p",href:"../reference/config"},"configurable parameters")," for BookKeeper are available for BookKeeper on DC/OS. Only the parameters show in the table below are available.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Param"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name of the DC/OS service."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bookkeeper"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cpus")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of CPU shares to allocate to each bookie. The minimum is 1."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"instances")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of bookies top run. The minimum is 1."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mem")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The memory, in MB, to allocate to each BookKeeper task"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1024.0")," (1 GB)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"volume_size")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The persistent volume size, in MB"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"70"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"zk_client")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The connection string for the ZooKeeper client instance"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"master.mesos:2181"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"service_port")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The BookKeeper export service port, using ",(0,r.kt)("inlineCode",{parentName:"td"},"PORT0")," in Marathon"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"3181"))))),(0,r.kt)("h3",{id:"example-json-configuration"},"Example JSON configuration"),(0,r.kt)("p",null,"Here's an example JSON configuration object for BookKeeper on DC/OS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "instances": 5,\n  "cpus": 3,\n  "mem": 2048.0,\n  "volume_size": 250\n}\n')),(0,r.kt)("p",null,"If that configuration were stored in a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"bk-config.json"),", you could apply that configuration upon installating the BookKeeper package using this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ dcos package install bookkeeper \\\n  --options=./bk-config.json\n")),(0,r.kt)("h2",{id:"uninstalling-bookkeeper"},"Uninstalling BookKeeper"),(0,r.kt)("p",null,"You can shut down and uninstall the ",(0,r.kt)("inlineCode",{parentName:"p"},"bookkeeper")," from DC/OS at any time using the ",(0,r.kt)("inlineCode",{parentName:"p"},"package uninstall")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ dcos package uninstall bookkeeper\nUninstalled package [bookkeeper] version [4.5.1]\nThank you for using bookkeeper.\n")))}u.isMDXComponent=!0},129:function(e,t,n){t.Z=n.p+"assets/images/exhibitor-eede8fff1c0896ef5d6f0e1d255d53af.png"},5349:function(e,t,n){t.Z=n.p+"assets/images/scale-29ec846d6d2a7c51aa22aebe15d47df3.png"},5467:function(e,t,n){t.Z=n.p+"assets/images/services-ee0f43398af0fef15f72e8068fc4c4cb.png"},4501:function(e,t,n){t.Z=n.p+"assets/images/tasks-219e78a657d13d4cac3e29a590ef3257.png"}}]);