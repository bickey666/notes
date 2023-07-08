(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{389:function(s,t,a){"use strict";a.r(t);var e=a(7),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ul",[t("li",[t("a",{attrs:{href:"#mysql"}},[s._v("mysql")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#mysqladmin"}},[s._v("mysqladmin")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#mysqlbinlog"}},[s._v("mysqlbinlog")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#mysqldump"}},[s._v("mysqldump")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#mysqlimport%E5%92%8Csource"}},[s._v("mysqlimport和source")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#mysqlshow"}},[s._v("mysqlshow")])])]),s._v(" "),t("h2",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" mysql")]),s._v(" "),t("p",[s._v("该mysql不是指mysql服务，而是指mysql的客户端工具。")]),s._v(" "),t("p",[t("strong",[s._v("语法 ：")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("database"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("连接选项：")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("-u, --user=txt")]),s._v(" "),t("td",[s._v("指定用户名")])]),s._v(" "),t("tr",[t("td",[s._v("-p, --password=txt")]),s._v(" "),t("td",[s._v("指定密码")])]),s._v(" "),t("tr",[t("td",[s._v("-h, --host=txt")]),s._v(" "),t("td",[s._v("指定服务器IP或域名")])]),s._v(" "),t("tr",[t("td",[s._v("-p, --port=#")]),s._v(" "),t("td",[s._v("指定连接端口")])])])]),s._v(" "),t("p",[s._v("示例 ：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("h "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("P "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u root "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p\n\t\nmysql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("h127"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("P3306 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p2143\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 可不加空格")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("执行选项")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("-e, --execute=name")]),s._v(" "),t("td",[s._v("执行SQL语句并退出")])])])]),s._v(" "),t("p",[s._v("此选项可以在Mysql客户端执行SQL语句，而不用连接到MySQL数据库再执行，对于一些批处理脚本，这种方式尤其方便。")]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysql "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p2143")]),s._v(" db01 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"select * from tb_book"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://testingcf.jsdelivr.net/gh/oddfar/static/img/MySQL%E9%AB%98%E7%BA%A7.assets/1555325632715.png",alt:"1555325632715"}})]),s._v(" "),t("h2",{attrs:{id:"mysqladmin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysqladmin"}},[s._v("#")]),s._v(" mysqladmin")]),s._v(" "),t("p",[s._v("mysqladmin 是一个执行管理操作的客户端程序。可以用它来检查服务器的配置和当前状态、创建并删除数据库等。")]),s._v(" "),t("p",[s._v("查看帮助文档指令")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqladmin "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://testingcf.jsdelivr.net/gh/oddfar/static/img/MySQL%E9%AB%98%E7%BA%A7.assets/1555326108697.png",alt:"1555326108697"}})]),s._v(" "),t("p",[s._v("示例 ：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqladmin "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p2143")]),s._v(" create "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test01'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \nmysqladmin "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p2143")]),s._v(" drop "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test01'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmysqladmin "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p2143")]),s._v(" version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"mysqlbinlog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysqlbinlog"}},[s._v("#")]),s._v(" mysqlbinlog")]),s._v(" "),t("p",[s._v("由于服务器生成的二进制日志文件以二进制格式保存，所以如果想要检查这些文本的文本格式，就会使用到mysqlbinlog 日志管理工具。")]),s._v(" "),t("p",[s._v("语法 ：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqlbinlog "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  log-files1 log-files2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("table",[t("thead",[t("tr",[t("th",[s._v("参数选项")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("-d, --database=name")]),s._v(" "),t("td",[s._v("指定数据库名称，只列出指定的数据库相关操作。")])]),s._v(" "),t("tr",[t("td",[s._v("-o, --offset=#")]),s._v(" "),t("td",[s._v("忽略掉日志中的前n行命令。")])]),s._v(" "),t("tr",[t("td",[s._v("-r,--result-file=name")]),s._v(" "),t("td",[s._v("将输出的文本格式日志输出到指定文件。")])]),s._v(" "),t("tr",[t("td",[s._v("-s, --short-form")]),s._v(" "),t("td",[s._v("显示简单格式， 省略掉一些信息。")])]),s._v(" "),t("tr",[t("td",[s._v("--start-datatime=date1  --stop-datetime=date2")]),s._v(" "),t("td",[s._v("指定日期间隔内的所有日志。")])]),s._v(" "),t("tr",[t("td",[s._v("--start-position=pos1 --stop-position=pos2")]),s._v(" "),t("td",[s._v("指定位置间隔内的所有日志。")])])])]),s._v(" "),t("h2",{attrs:{id:"mysqldump"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysqldump"}},[s._v("#")]),s._v(" mysqldump")]),s._v(" "),t("p",[s._v("mysqldump 客户端工具用来备份数据库或在不同数据库之间进行数据迁移。备份内容包含创建表，及插入表的SQL语句。")]),s._v(" "),t("p",[s._v("语法 ：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqldump "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" db_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tables"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nmysqldump "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --database/-B db1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("db2 db3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nmysqldump "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --all-databases/-A\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("strong",[s._v("连接选项")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("-u, --user=name")]),s._v(" "),t("td",[s._v("指定用户名")])]),s._v(" "),t("tr",[t("td",[s._v("-p, --password[=name]")]),s._v(" "),t("td",[s._v("指定密码")])]),s._v(" "),t("tr",[t("td",[s._v("-h, --host=name")]),s._v(" "),t("td",[s._v("指定服务器IP或域名")])]),s._v(" "),t("tr",[t("td",[s._v("-P, --port=#")]),s._v(" "),t("td",[s._v("指定连接端口")])])])]),s._v(" "),t("p",[s._v("​")]),s._v(" "),t("p",[t("strong",[s._v("输出内容选项")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("--add-drop-database")]),s._v(" "),t("td",[s._v("在每个数据库创建语句前加上 Drop database 语句")])]),s._v(" "),t("tr",[t("td",[s._v("--add-drop-table")]),s._v(" "),t("td",[s._v("在每个表创建语句前加上 Drop table 语句 , 默认开启 ; 不开启 (--skip-add-drop-table)")])]),s._v(" "),t("tr",[t("td",[s._v("-n, --no-create-db")]),s._v(" "),t("td",[s._v("不包含数据库的创建语句")])]),s._v(" "),t("tr",[t("td",[s._v("-t, --no-create-info")]),s._v(" "),t("td",[s._v("不包含数据表的创建语句")])]),s._v(" "),t("tr",[t("td",[s._v("-d --no-data")]),s._v(" "),t("td",[s._v("不包含数据")])]),s._v(" "),t("tr",[t("td",[s._v("-T, --tab=name")]),s._v(" "),t("td",[s._v("自动生成两个文件："),t("br"),s._v("一个.sql文件，创建表结构的语句；"),t("br"),s._v("一个.txt文件，数据文件，相当于 select into outfile ；")])])])]),s._v(" "),t("p",[s._v("示例 ：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqldump "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p2143")]),s._v(" db01 tb_book --add-drop-database --add-drop-table "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" a\n\t\nmysqldump "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p2143")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-T")]),s._v(" /tmp "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" city\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"mysqlimport和source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysqlimport和source"}},[s._v("#")]),s._v(" mysqlimport和source")]),s._v(" "),t("p",[s._v("mysqlimport 是客户端数据导入工具，用来导入 mysqldump 加 -T 参数后导出的文本文件。")]),s._v(" "),t("p",[s._v("也就是表的数据内容（txt内容）")]),s._v(" "),t("p",[s._v("语法：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqlimport "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  db_name  textfile1  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("textfile2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqlimport "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p2143")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" /tmp/city.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果需要导入sql文件,可以使用mysql中的source 指令 :")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /root/tb_book.sql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"mysqlshow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysqlshow"}},[s._v("#")]),s._v(" mysqlshow")]),s._v(" "),t("p",[s._v("mysqlshow 客户端对象查找工具，用来很快地查找存在哪些数据库、数据库中的表、表中的列或者索引。")]),s._v(" "),t("p",[s._v("语法：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysqlshow "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("db_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("table_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("col_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("参数：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("--count")]),s._v(" "),t("td",[s._v("显示数据库及表的统计信息（数据库，表 均可以不指定）")])]),s._v(" "),t("tr",[t("td",[s._v("-i")]),s._v(" "),t("td",[s._v("显示指定数据库或者指定表的状态信息")])])])]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询每个数据库的表的数量及表中记录的数量")]),s._v("\nmysqlshow "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p2143")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--count")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询test库中每个表中的字段书，及行数")]),s._v("\nmysqlshow "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p2143")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--count")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询test库中book表的详细情况")]),s._v("\nmysqlshow "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p2143")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" book "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--count")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);