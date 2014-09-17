var XTemplateRuntime=function(){var n;return n=function(n){var t,e,r,i,a;return t=function(n){function t(){var n="";for(var t in r)n+=t+"|";return n=n.slice(0,-1),a=new RegExp(n,"g")}var e,r={"&":"&amp;",">":"&gt;","<":"&lt;","`":"&#x60;","/":"&#x2F;",'"':"&quot;","'":"&#x27;"},i=/[&<>"'`]/,a=t(),o=/\\?\{([^{}]+)\}/g,f="undefined"!=typeof global?global:window,c=Object.prototype.toString;return n=e={isArray:Array.isArray||function(n){return c.call(n)},keys:Object.keys||function(n){var t,e=[];for(t in n)n.hasOwnProperty(t)&&e.push(t);return e},each:function(n,t,r){if(n){var i,a,o,f=0,c=n&&n.length,u=void 0===c||"[object Function]"===Object.prototype.toString.call(n);if(r=r||null,u)for(o=e.keys(n);f<o.length&&(i=o[f],t.call(r,n[i],i,n)!==!1);f++);else for(a=n[0];c>f&&t.call(r,a,f,n)!==!1;a=n[++f]);}return n},mix:function(n,t){for(var e in t)n[e]=t[e];return n},globalEval:function(n){f.execScript?f.execScript(n):!function(n){f.eval.call(f,n)}(n)},substitute:function(n,t,e){return"string"==typeof n&&t?n.replace(e||o,function(n,e){return"\\"===n.charAt(0)?n.slice(1):void 0===t[e]?"":t[e]}):n},escapeHtml:function(n){return n=""+n,i.test(n)?(n+"").replace(a,function(n){return r[n]}):n},log:function(){"undefined"!=typeof console&&console.log.apply(console,arguments)}}}(),e=function(n){function t(n){this.data=void 0!==n?n:{},this.root=this,this.parent=void 0,this.affix=void 0}return t.prototype={isScope:1,setParent:function(n){this.parent=n,this.root=n.root},set:function(n,t){this.affix||(this.affix={}),this.affix[n]=t},setData:function(n){this.data=n},getData:function(){return this.data},mix:function(n){var t=this.affix;t||(t=this.affix={});for(var e in n)t[e]=n[e]},get:function(n){var t,e=this.data,r=this.affix;return t=r&&r[n],void 0!==t?t:(void 0!==e&&null!==e&&(t=e[n]),void 0!==t?t:"this"===n?e:"root"===n?this.root.data:t)},resolve:function(n,t){var e,r=this;if(!t&&1===n.length){if(e=r.get(n[0]),void 0!==e)return e;t=1}var i,a=n.length,o=r;if(a&&"root"===n[0])n.shift(),o=o.root,a--;else if(t)for(;o&&t--;)o=o.parent;if(!o)return void 0;if(!a)return o.data;var f=n[0];do e=o.get(f);while(void 0===e&&(o=o.parent));if(e&&o){for(i=1;e&&a>i;i++)e=e[n[i]];return e}return void 0}},n=t}(),r=function(n){function e(n,t){this.list=n,this.init(),this.next=t,this.ready=!1}function r(n,t){var r=this;r.config=t,r.head=new e(r),r.callback=n,this.init()}var i=t;return e.prototype={constructor:e,isBuffer:1,init:function(){this.data=""},append:function(n){return this.data+=n,this},write:function(n){return null!=n&&this.append(n),this},writeEscaped:function(n){return null!=n&&this.append(i.escapeHtml(n)),this},async:function(n){var t=this,r=t.list,i=new e(r,t.next),a=new e(r,i);return t.next=a,t.ready=!0,n(a),i},error:function(n){var t=this.list.callback;t&&(t(n,void 0),this.list.callback=null)},end:function(){var n=this;return n.list.callback&&(n.ready=!0,n.list.flush()),n}},r.prototype={constructor:r,init:function(){this.data=""},append:function(n){this.data+=n},end:function(){this.callback(null,this.data)},flush:function(){for(var n=this,t=n.head;t;){if(!t.ready)return;this.append(t.data),t=t.next,n.head=t}n.end()}},r.Buffer=e,n=r}(),i=function(n){var r=e,i=t,a={range:function(n,t){var e=t.params,r=e[0],i=e[1],a=e[2];a?(r>i&&a>0||i>r&&0>a)&&(a=-a):a=r>i?-1:1;for(var o=[],f=r;i>r?i>f:f>i;f+=a)o.push(f);return o},foreach:function(n,t,e){var i,a,o,f,c=t.params,u=c[0],s=c[2]||"xindex",l=c[1];if(u)for(i=u.length,f=0;i>f;f++)a=new r(u[f]),o=a.affix={xcount:i,xindex:f},"xindex"!==s&&(o[s]=f,delete o.xindex),l&&(o[l]=u[f]),a.setParent(n),e=t.fn(a,e);return e},forin:function(n,t,e){var i,a,o,f=t.params,c=f[0],u=f[2]||"xindex",s=f[1];if(c)for(o in c)i=new r(c[o]),a=i.affix={},a[u]=o,s&&(a[s]=c[o]),i.setParent(n),e=t.fn(i,e);return e},each:function(n,t,e){var r=t.params,o=r[0];return o?i.isArray(o)?a.foreach(n,t,e):a.forin(n,t,e):e},"with":function(n,t,e){var i=t.params,a=i[0];if(a){var o=new r(a);o.setParent(n),e=t.fn(o,e)}return e},"if":function(n,t,e){var r=t.params,i=r[0];if(i){var a=t.fn;a&&(e=a(n,e))}else{var o=!1,f=t.elseIfs,c=t.inverse;if(f)for(var u=0,s=f.length;s>u;u++){var l=f[u];if(o=l.test(n)){e=l.fn(n,e);break}}!o&&c&&(e=c(n,e))}return e},set:function(n,t,e){return n.mix(t.hash),e},include:function(n,t,e){var i,a,o=t.params,f=o.length;for(a=n,t.hash&&(a=new r(t.hash),a.setParent(n)),i=0;f>i;i++)e=this.root.include(o[i],this,a,t,e);return e},parse:function(n,t,e){return a.include.call(this,new r,t,e)},extend:function(n,t,e){return this.runtime.extendTplName=t.params[0],e},block:function(n,t,e){var r,i=this,a=i.runtime,o=t.params,f=o[0];2===o.length&&(r=o[0],f=o[1]);var c,u=a.blocks=a.blocks||{},s=u[f],l={fn:t.fn,type:r};if(s){if(s.type)if("append"===s.type)l.next=s,u[f]=l;else if("prepend"===s.type){var d;for(c=s;c&&"prepend"===c.type;)d=c,c=c.next;l.next=c,d.next=l}}else u[f]=l;if(!a.extendTplName)for(c=u[f];c;)c.fn&&(e=c.fn.call(i,n,e)),c=c.next;return e},macro:function(n,t,e){var i=t.hash,a=t.params,o=a[0],f=a.slice(1),c=this,u=c.runtime,s=u.macros=u.macros||{};if(t.fn)s[o]={paramNames:f,hash:i,fn:t.fn};else{var l,d=s[o],h=d.hash||{};if(!d||!(l=d.paramNames)){var p="in file: "+c.name+" can not find macro: "+name+'" at line '+c.pos.line+", col "+c.pos.col;throw new Error(p)}for(var v=0,m=l.length;m>v;v++){var x=l[v];h[x]=f[v]}if(i)for(var g in i)h[g]=i[g];var y=new r(h);e=d.fn.call(c,y,e)}return e}};return a["debugger"]=function(){},n=a}(),a=function(n){function a(n,t,e){var r=e[0],i=n&&n[r]||t&&t[r]||d[r];if(1===e.length)return i;if(i)for(var a=e.length,o=1;a>o&&(i=i[e[o]],i);o++);return i}function o(n,t){var e=n.split("/"),r=t.split("/");e.pop();for(var i=0,a=r.length;a>i;i++){var o=r[i];"."===o||(".."===o?e.pop():e.push(o))}return e.join("/")}function f(n,t,e){e=n.fn(t,e);var r=n.runtime,i=r.extendTplName;return i&&(r.extendTplName=null,e=n.root.include(i,n,t,null,e)),e.end()}function c(n,t,e,r,i,o){var f,c,u,s;if(o||(s=a(n.runtime.commands,n.root.config.commands,i)),s)return s.call(n,t,e,r);if(f="in file: "+n.name+" can not call: "+i.join(".")+'" at line '+n.pos.line+", col "+n.pos.col,c=t.resolve(i.slice(0,-1),o),u=c[i[i.length-1]])return u.apply(c,e.params);if(f)throw new Error(f);return r}function u(n,t){var e=this;e.fn=n,t=e.config=t||{},t.loader=t.loader||u.loader,this.subNameResolveCache={}}var s=t,l=i,d={},h=e,p=r,v={callFn:c,callCommand:function(n,t,e,r,i){return c(n,t,e,r,i)}},m={cache:{},load:function(n,t){var e=n.name,r=this.cache;return r[e]?t(void 0,r[e]):(require([e],function(n){r[e]=n,t(void 0,n)},function(){var e='template "'+n.name+'" does not exist';s.log(e,"error"),t(e)}),void 0)}};return s.mix(u,{loader:m,version:"1.4.1",nativeCommands:l,utils:v,util:s,addCommand:function(n,t){d[n]=t},removeCommand:function(n){delete d[n]}}),u.prototype={constructor:u,Scope:h,nativeCommands:l,utils:v,removeCommand:function(n){var t=this.config;t.commands&&delete t.commands[n]},addCommand:function(n,t){var e=this.config;e.commands=e.commands||{},e.commands[n]=t},resolve:function(n,t){if("."!==n.charAt(0))return n;if(!t){var e="parent template does not have name for relative sub tpl name: "+n;throw new Error(e)}var r=t+"_ks_"+n,i=this.subNameResolveCache;return i[r]?i[r]:n=i[r]=o(t,n)},include:function(n,t,e,r,i){var a=this,o=t.name,c=a.resolve(n,o);return i.async(function(i){a.config.loader.load({root:a,parentName:o,originalName:n,name:c,scope:e,option:r},function(n,a){n?i.error(n):"string"==typeof a?(r&&r.escaped?i.writeEscaped(a):i.append(a),i.end()):f({root:t.root,fn:a,name:c,runtime:t.runtime},e,i)})})},render:function(n,t,e){var r="",i=this,a=i.fn;"function"==typeof t&&(e=t,t=null),t=t||{},e=e||function(n,t){if(n)throw n instanceof Error||(n=new Error(n)),n;r=t};var o=i.config.name;!o&&a.TPL_NAME&&(o=a.TPL_NAME);var c=new h(n),s=new u.LinkedBuffer(e,i.config).head;return f({name:o,fn:a,runtime:{commands:t.commands},root:i},c,s),r}},u.Scope=h,u.LinkedBuffer=p,n=u}(),n=a}()}();