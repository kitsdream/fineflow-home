import{_ as a,o as e,c as t,R as r}from"./chunks/framework.RoIOfAwu.js";const _=JSON.parse('{"title":"基本操作","description":"","frontmatter":{},"headers":[],"relativePath":"base.md","filePath":"base.md"}'),o={name:"base.md"},i=r('<h1 id="基本操作" tabindex="-1">基本操作 <a class="header-anchor" href="#基本操作" aria-label="Permalink to &quot;基本操作&quot;">​</a></h1><h2 id="启动软件" tabindex="-1">启动软件 <a class="header-anchor" href="#启动软件" aria-label="Permalink to &quot;启动软件&quot;">​</a></h2><ol><li><p>双击fineflow-api.exe</p></li><li><p>双击fineflow.exe启动客户端或打开http://127.0.0.1:8081访问web端。</p></li></ol><h2 id="流程编辑" tabindex="-1">流程编辑 <a class="header-anchor" href="#流程编辑" aria-label="Permalink to &quot;流程编辑&quot;">​</a></h2><p>首先，打开fineflow页面。</p><h2 id="添加节点" tabindex="-1">添加节点 <a class="header-anchor" href="#添加节点" aria-label="Permalink to &quot;添加节点&quot;">​</a></h2><p>然后左侧是节点面板，这里我们依次点击：数字模块-&gt;基础运算，然后鼠标点住“加法”直接拖拽到右侧流程图区域，即可添加节点。 同样的，再添加一个减法节点。</p><h2 id="连接节点" tabindex="-1">连接节点 <a class="header-anchor" href="#连接节点" aria-label="Permalink to &quot;连接节点&quot;">​</a></h2><p>将鼠标放在加法节点的输出一端口，按下鼠标然后移动鼠标到减法节点的输入一，松开鼠标即可完成节点的端口连接，这两个端口你可以想像成两个口，通过edge(边)或者水管连接到一起，这样输出的数据能直接到到下一个节点的输入。</p><h2 id="流程执行" tabindex="-1">流程执行 <a class="header-anchor" href="#流程执行" aria-label="Permalink to &quot;流程执行&quot;">​</a></h2><p>现在我们连接两个节点后，就形成了一个工作流，点击右上角的“运行”按钮，即可执行工作流。 但现在执行工作流会出现错误，因为每一个节点都有必填参数，只有必填参数填写完成或者该参数对应的端口被连接后才能执行该节点。 所以我们先填写两个未连接的值。</p><h2 id="参数填写" tabindex="-1">参数填写 <a class="header-anchor" href="#参数填写" aria-label="Permalink to &quot;参数填写&quot;">​</a></h2><p>参数可以直接在节点参数框上配置也可以单击节点后，从右边出现的弹窗填写。 点击运行，可以看到节点右上角的点变绿了，说明执行正常。</p><h2 id="删除连线-管道" tabindex="-1">删除连线（管道） <a class="header-anchor" href="#删除连线-管道" aria-label="Permalink to &quot;删除连线（管道）&quot;">​</a></h2><p>右键某一根线会出现线菜单，点击删除即可删除连线。</p><h2 id="删除节点" tabindex="-1">删除节点 <a class="header-anchor" href="#删除节点" aria-label="Permalink to &quot;删除节点&quot;">​</a></h2><p>右键点击节点会出现节点菜单，点击删除按钮即可删除节点。</p><h2 id="保存工作流" tabindex="-1">保存工作流 <a class="header-anchor" href="#保存工作流" aria-label="Permalink to &quot;保存工作流&quot;">​</a></h2><p>点击上方保存按钮，如果是第一次保存该工作流，它会出现弹窗，依次选择好模块、分类，然后输入要保存的工作流名称，点击保存即可，后续点击保存则会自动保存在该工作流里。</p><h2 id="加载工作流" tabindex="-1">加载工作流 <a class="header-anchor" href="#加载工作流" aria-label="Permalink to &quot;加载工作流&quot;">​</a></h2><p>点击上方工作流按钮，左侧会出现工作流管理面板，找到想要打开的工作流，然后点击右键，点击“打开”即可。</p><h2 id="管理节点后端服务" tabindex="-1">管理节点后端服务 <a class="header-anchor" href="#管理节点后端服务" aria-label="Permalink to &quot;管理节点后端服务&quot;">​</a></h2><p>在左侧节点管理面板底部，点击服务管理，在此处添加、编辑后端服务地址即可，添加成功后，点击“开启”按钮，系统会自动连接至该后端，并加载该后端的节点。</p>',23),h=[i];function l(n,d,s,c,p,b){return e(),t("div",null,h)}const f=a(o,[["render",l]]);export{_ as __pageData,f as default};
