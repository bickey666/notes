(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{437:function(s,t,a){"use strict";a.r(t);var e=a(7),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ul",[t("li",[t("a",{attrs:{href:"#%E4%BB%80%E4%B9%88%E6%98%AF-dockerfile"}},[s._v("什么是 DockerFile")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#dockerfile-%E6%9E%84%E5%BB%BA%E8%BF%87%E7%A8%8B"}},[s._v("DockerFile 构建过程")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#dockerfile-%E6%8C%87%E4%BB%A4"}},[s._v("DockerFile 指令")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#cmd-%E5%92%8C-entrypoint-%E7%9A%84%E5%8C%BA%E5%88%AB"}},[s._v("CMD 和 ENTRYPOINT 的区别")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%AE%9E%E6%88%98%E6%B5%8B%E8%AF%95"}},[s._v("实战测试")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#centos"}},[s._v("CentOS")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#tomcat"}},[s._v("Tomcat")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#spingboot"}},[s._v("SpingBoot")])])])])]),s._v(" "),t("p",[s._v("大家想想，Nginx，tomcat，mysql 这些镜像都是哪里来的？官方能写，我们不能写吗？")]),s._v(" "),t("p",[s._v("我们要研究自己如何做一个镜像，而且我们写的微服务项目以及 springboot 打包上云部署，Docker就是最方便的。")]),s._v(" "),t("p",[s._v("微服务打包成镜像，任何装了Docker的地方，都可以下载使用，极其的方便。")]),s._v(" "),t("p",[s._v("流程：开发应用=>DockerFile=>打包为镜像=>上传到仓库（私有仓库，公有仓库）=> 下载镜像 => 启动 运行。")]),s._v(" "),t("p",[s._v("还可以方便移植！")]),s._v(" "),t("h2",{attrs:{id:"什么是-dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-dockerfile"}},[s._v("#")]),s._v(" 什么是 DockerFile")]),s._v(" "),t("p",[s._v("dockerfile是用来构建Docker镜像的构建文件，是由一系列命令和参数构成的脚本")]),s._v(" "),t("p",[s._v("构建步骤：")]),s._v(" "),t("p",[s._v("1、编写DockerFile文件")]),s._v(" "),t("p",[s._v("2、docker build 构建镜像")]),s._v(" "),t("p",[s._v("3、docker run")]),s._v(" "),t("p",[s._v("查看之前拉取的 centos ：https://hub.docker.com/_/centos")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://testingcf.jsdelivr.net/gh/oddfar/static/img/Docker.assets/14.Docker-DockerFile.assets/image-20210606163702268.png",alt:"image-20210606163702268"}})]),s._v(" "),t("p",[s._v("查看"),t("code",[s._v("Dockerfile")]),s._v(" 文件")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://testingcf.jsdelivr.net/gh/oddfar/static/img/Docker.assets/14.Docker-DockerFile.assets/image-20210606163720066.png",alt:"image-20210606163720066"}})]),s._v(" "),t("h2",{attrs:{id:"dockerfile-构建过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-构建过程"}},[s._v("#")]),s._v(" DockerFile 构建过程")]),s._v(" "),t("p",[t("strong",[s._v("基础知识：")])]),s._v(" "),t("p",[s._v("1、每条保留字指令都必须为大写字母且后面要跟随至少一个参数")]),s._v(" "),t("p",[s._v("2、指令按照从上到下，顺序执行")]),s._v(" "),t("p",[s._v("3、# 表示注释")]),s._v(" "),t("p",[s._v("4、每条指令都会创建一个新的镜像层，并对镜像进行提交")]),s._v(" "),t("p",[t("strong",[s._v("流程：")])]),s._v(" "),t("p",[s._v("1、docker从基础镜像运行一个容器")]),s._v(" "),t("p",[s._v("2、执行一条指令并对容器做出修改")]),s._v(" "),t("p",[s._v("3、执行类似 docker commit 的操作提交一个新的镜像层")]),s._v(" "),t("p",[s._v("4、Docker再基于刚提交的镜像运行一个新容器")]),s._v(" "),t("p",[s._v("5、执行dockerfile中的下一条指令直到所有指令都执行完成！")]),s._v(" "),t("p",[t("strong",[s._v("说明：")])]),s._v(" "),t("p",[s._v("从应用软件的角度来看，DockerFile，docker镜像 与 docker容器 分别代表软件的三个不同阶段。")]),s._v(" "),t("ul",[t("li",[s._v("DockerFile 是软件的原材料 （代码）")]),s._v(" "),t("li",[s._v("Docker 镜像则是软件的交付品 （.apk）")]),s._v(" "),t("li",[s._v("Docker 容器则是软件的运行状态 （客户下载安装执行）")])]),s._v(" "),t("p",[s._v("DockerFile 面向开发，Docker镜像成为交付标准，Docker容器则涉及部署与运维，三者缺一不可！")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://testingcf.jsdelivr.net/gh/oddfar/static/img/Docker.assets/14.Docker-DockerFile.assets/img_72.png",alt:"img_72"}})]),s._v(" "),t("p",[s._v("DockerFile：需要定义一个DockerFile，DockerFile定义了进程需要的一切东西。DockerFile涉及的内容 包括执行代码或者是文件、环境变量、依赖包、运行时环境、动态链接库、操作系统的发行版、服务进 程和内核进程（当引用进行需要和系统服务和内核进程打交道，这时需要考虑如何设计 namespace的权 限控制）等等。")]),s._v(" "),t("p",[s._v("Docker镜像：在DockerFile 定义了一个文件之后，Docker build 时会产生一个Docker镜像，当运行 Docker 镜像时，会真正开始提供服务；")]),s._v(" "),t("p",[s._v("Docker容器：容器是直接提供服务的。")]),s._v(" "),t("h2",{attrs:{id:"dockerfile-指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-指令"}},[s._v("#")]),s._v(" DockerFile 指令")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("关键字")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("FROM")]),s._v(" "),t("td",[s._v("基础镜像，当前新镜像是基于哪个镜像的")])]),s._v(" "),t("tr",[t("td",[s._v("MAINTAINER")]),s._v(" "),t("td",[s._v("镜像维护者的姓名混合邮箱地址")])]),s._v(" "),t("tr",[t("td",[s._v("RUN")]),s._v(" "),t("td",[s._v("容器构建时需要运行的命令")])]),s._v(" "),t("tr",[t("td",[s._v("EXPOSE")]),s._v(" "),t("td",[s._v("当前容器对外保留出的端口")])]),s._v(" "),t("tr",[t("td",[s._v("WORKDIR")]),s._v(" "),t("td",[s._v("指定在创建容器后，终端默认登录的进来工作目录，一个落脚点")])]),s._v(" "),t("tr",[t("td",[s._v("ENV")]),s._v(" "),t("td",[s._v("用来在构建镜像过程中设置环境变量")])]),s._v(" "),t("tr",[t("td",[s._v("ADD")]),s._v(" "),t("td",[s._v("将宿主机目录下的文件拷贝进镜像且ADD命令会自动处理URL和解压tar压缩包")])]),s._v(" "),t("tr",[t("td",[s._v("COPY")]),s._v(" "),t("td",[s._v("类似ADD，拷贝文件和目录到镜像中！")])]),s._v(" "),t("tr",[t("td",[s._v("VOLUME")]),s._v(" "),t("td",[s._v("容器数据卷，用于数据保存和持久化工作")])]),s._v(" "),t("tr",[t("td",[s._v("CMD")]),s._v(" "),t("td",[s._v("指定一个容器启动时要运行的命令，dockerFile中可以有多个CMD指令，但只有最后一个生效！")])]),s._v(" "),t("tr",[t("td",[s._v("ENTRYPOINT")]),s._v(" "),t("td",[s._v("指定一个容器启动时要运行的命令！和CMD一样")])]),s._v(" "),t("tr",[t("td",[s._v("ONBUILD")]),s._v(" "),t("td",[s._v("当构建一个被继承的DockerFile时运行命令，父镜像在被子镜像继承后，父镜像的 ONBUILD被触发")])])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://testingcf.jsdelivr.net/gh/oddfar/static/img/Docker.assets/14.Docker-DockerFile.assets/img_74.png",alt:"img_74"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://testingcf.jsdelivr.net/gh/oddfar/static/img/Docker.assets/14.Docker-DockerFile.assets/img_75.png",alt:"img_75"}})]),s._v(" "),t("h2",{attrs:{id:"cmd-和-entrypoint-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmd-和-entrypoint-的区别"}},[s._v("#")]),s._v(" CMD 和 ENTRYPOINT 的区别")]),s._v(" "),t("p",[s._v("我们之前说过，两个命令都是指定一个容器启动时要运行的命令")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("CMD")]),s._v(" "),t("p",[s._v("Dockerfile 中可以有多个CMD 指令，但只有最后一个生效，CMD 会被 docker run 之后的参数替换！")])]),s._v(" "),t("li",[t("p",[s._v("ENTRYPOINT")]),s._v(" "),t("p",[s._v("docker run 之后的参数会被当做参数传递给 ENTRYPOINT，之后形成新的命令组合！")])])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("测试 CMD 命令")])]),s._v(" "),t("p",[s._v("1、编写文件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos dockerfile-test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim dockerfile-cmd-test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos dockerfile-test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat dockerfile-cmd-test")]),s._v("\nFROM centos \nCMD "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ls"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-a"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("2、构建并运行")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" dockerfile-cmd-test "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" cmdtest "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run cmdtest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://testingcf.jsdelivr.net/gh/oddfar/static/img/Docker.assets/14.Docker-DockerFile.assets/image-20210606171411821.png",alt:"image-20210606171411821"}})]),s._v(" "),t("p",[s._v("3、如果我们希望用 -l 列表展示信息，我们就需要加上 -l参数")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos dockerfile-test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  docker run cmdtest -l")]),s._v("\ndocker: Error response from daemon: OCI runtime create failed: container_linux.go:380: starting container process caused: exec: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-l"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" executable "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" not found "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" unknown.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("问题：我们可以看到可执行文件找不到的报错，executable file not found。")]),s._v(" "),t("p",[s._v("之前我们说过，跟在镜像名后面的是 command，运行时会替换 CMD 的默认值。")]),s._v(" "),t("p",[s._v("因此这里的 "),t("code",[s._v("-l")]),s._v(" 替换了原来的 CMD，而不是添加在原来的 "),t("code",[s._v("ls -a")]),s._v(" 后面。")]),s._v(" "),t("p",[s._v("而 -l 根本不是命令，所以自然找不到。")]),s._v(" "),t("p",[s._v("那么如果我们希望加入 "),t("code",[s._v("-l")]),s._v("这参数，我们就必须重新完整的输入这个命令：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run cmdtest "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-al")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("测试 ENTRYPOINT 命令")])]),s._v(" "),t("p",[s._v("1、编写文件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos dockerfile-test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim dockerfile-entrypoint-test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos dockerfile-test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat dockerfile-entrypoint-test")]),s._v("\nFROM centos\nENTRYPOINT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ls"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-a"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("2、构建并运行")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" dockerfile-entrypoint-test "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" entrypointtest "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run entrypointtest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("3、测试 -l 参数，发现可以直接使用，这里就是一种追加")]),s._v(" "),t("p",[s._v("我们可以明显的知道 CMD 和 ENTRYPOINT 的区别了")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run entrypointtest "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://testingcf.jsdelivr.net/gh/oddfar/static/img/Docker.assets/14.Docker-DockerFile.assets/image-20210606171953764.png",alt:"image-20210606171953764"}})]),s._v(" "),t("h2",{attrs:{id:"实战测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实战测试"}},[s._v("#")]),s._v(" 实战测试")]),s._v(" "),t("h3",{attrs:{id:"centos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos"}},[s._v("#")]),s._v(" CentOS")]),s._v(" "),t("p",[s._v("官方默认的 CentOS 的情况不支持 "),t("code",[s._v("vim")]),s._v(" 和 "),t("code",[s._v("ifconfig")]),s._v(" 指令")]),s._v(" "),t("p",[s._v("我们自己构建一个支持这些指令的镜像")]),s._v(" "),t("p",[t("strong",[s._v("1、编写文件")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos home"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd dockerfile-test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos dockerfile-test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nmy-centos\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos dockerfile-test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat my-centos")]),s._v("\nFROM centos\nMAINTAINER zhiyuan"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("oddfar@163.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nENV MYPATH /usr/local\nWORKDIR "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYPATH")]),s._v("\n\nRUN yum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("\nRUN yum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" net-tools\n\n\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n\nCMD "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYPATH")]),s._v("\nCMD "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"----end-----"')]),s._v("\nCMD /bin/bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[t("strong",[s._v("2、构建")])]),s._v(" "),t("p",[s._v("命令最后有一个 "),t("code",[s._v(".")]),s._v(" 表示当前目录")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" my-centos "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" mycentos:1.1 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("成功后：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://testingcf.jsdelivr.net/gh/oddfar/static/img/Docker.assets/14.Docker-DockerFile.assets/image-20210606165936963.png",alt:"image-20210606165936963"}})]),s._v(" "),t("p",[t("strong",[s._v("3、运行")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" mycentos:1.1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("测试后，可以看到，我们自己的新镜像已经支持 vim 和 ifconfig的命令了")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("列出镜像的变更历史：")]),s._v(" "),t("p",[t("code",[s._v("docker history 镜像名\\镜像id")])])])]),s._v(" "),t("h3",{attrs:{id:"tomcat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[s._v("#")]),s._v(" Tomcat")]),s._v(" "),t("p",[s._v("步骤：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("将 JDK 和 tomcat 安装的压缩包拷贝"),t("code",[s._v("/home/build")]),s._v(" 目录下")]),s._v(" "),t("p",[s._v("下载地址：")]),s._v(" "),t("p",[s._v("链接：https://pan.baidu.com/s/1QZEmvAgyh4-8DbebVz7koQ")]),s._v(" "),t("p",[s._v("提取码：spfo")])]),s._v(" "),t("li",[t("p",[s._v("新建一个 read.txt 文件")])]),s._v(" "),t("li",[t("p",[s._v("新建一个 Dockerfile 文件")])])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos home"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd build")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos build"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\napache-tomcat-9.0.46.tar.gz  Dockerfile  jdk-8u11-linux-x64.tar.gz  read.txt  tomcat\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("Dockerfile  内容")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("FROM centos\n\nMAINTAINER zhiyuan"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("test@qq.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#把宿主机当前上下文的read.txt拷贝到容器/usr/local/路径下")]),s._v("\nCOPY read.txt /usr/local/cincontainer.txt\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#把java与tomcat添加到容器中")]),s._v("\nADD jdk-8u11-linux-x64.tar.gz /usr/local/\nADD apache-tomcat-9.0.46.tar.gz /usr/local/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装vim编辑器")]),s._v("\nRUN yum "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#变量")]),s._v("\nENV MYPATH /usr/local\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置工作访问时候的WORKDIR路径，登录落脚点")]),s._v("\nWORKDIR "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYPATH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置java与tomcat环境变量")]),s._v("\nENV JAVA_HOME /usr/local/jdk1.8.0_11\nENV CLASSPATH "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/dt.jar:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/tools.jar\nENV CATALINA_HOME /usr/local/apache-tomcat-9.0.46\nENV CATALINA_BASE /usr/local/apache-tomcat-9.0.46\nENV "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_HOME")]),s._v("/lib:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CATALINA_HOME")]),s._v("/bin\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#容器运行时监听的端口")]),s._v("\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动时运行tomcat")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# ENTRYPOINT ["/usr/local/apache-tomcat-9.0.46/bin/startup.sh" ]')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# CMD ["/usr/local/apache-tomcat-9.0.46/bin/catalina.sh","run"]')]),s._v("\nCMD /usr/local/apache-tomcat-9.0.46/bin/startup.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v(" /usr/local/apache-tomcat-9.0.46/bin/logs/catalina.out\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("p",[t("strong",[s._v("构建镜像：")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" diytomcat "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在此目录下默认构建 "),t("code",[s._v("Dockerfile")]),s._v(" 文件，所以不需要带上文件名")]),s._v(" "),t("p",[t("strong",[s._v("启动：")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v(":8080 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" mydiytomcat "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/build/tomcat/test:/usr/local/apache-tomcat-9.0.46/webapps/test "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/build/tomcat/logs/:/usr/local/apache-tomcat-9.0.46/logs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--privileged")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true diytomcat\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("备注：Docker挂载主机目录Docker访问出现cannot open directory Permission denied")]),s._v(" "),t("p",[s._v("解决办法：在挂载目录后多加一个--privileged=true参数即可")]),s._v(" "),t("p",[t("strong",[s._v("写个测试网站扔到test目录：")])]),s._v(" "),t("p",[s._v("web.xml")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("web-app")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("xmlns")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://xmlns.jcp.org/xml/ns/javaee"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("xmlns:")]),s._v("xsi")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://www.w3.org/2001/XMLSchema-instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("xsi:")]),s._v("schemaLocation")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://xmlns.jcp.org/xml/ns/javaee\n                      http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("4.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("metadata-complete")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("true"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("display-name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("Test"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("display-name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("web-app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("a.jsp")]),s._v(" "),t("div",{staticClass:"language-jsp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<%@ page language="java" contentType="text/html; charset=UTF-8"\n    pageEncoding="UTF-8"%>\n<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title>测试</title>\n</head>\n<body>\n\tHello World!<br/>\n\t<% System.out.println("-------my docker tomcat-------");%>\n</body>\n</html>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("strong",[s._v("查看日志：")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos tomcat"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd logs")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos logs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat catalina.out")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://testingcf.jsdelivr.net/gh/oddfar/static/img/Docker.assets/14.Docker-DockerFile.assets/image-20210606174533465.png",alt:"image-20210606174533465"}})]),s._v(" "),t("h3",{attrs:{id:"spingboot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spingboot"}},[s._v("#")]),s._v(" SpingBoot")]),s._v(" "),t("p",[s._v("1、使用 IDEA 构建一个 SpringBoot 项目")]),s._v(" "),t("p",[s._v("2、编写 Controller")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@RestController")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HelloController")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@GetMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hello")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello,world"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("打包成 jar 包")]),s._v(" "),t("p",[s._v("3、构建镜像")]),s._v(" "),t("p",[s._v("将打包好的 jar 包拷贝到 Dockerfile 同级目录，编写 Dockerfile文件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("FROM java:8\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务器只有dockerfile和jar在同级目录")]),s._v("\nCOPY *.jar /app.jar\n\nCMD "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--server.port=8080"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定容器内要暴露的端口")]),s._v("\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n\nENTRYPOINT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"java"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-jar"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/app.jar"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("构建运行")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建镜像")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" idea-ks "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" idea-ks idea-ks\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("最后测试访问")])])}),[],!1,null,null,null);t.default=n.exports}}]);