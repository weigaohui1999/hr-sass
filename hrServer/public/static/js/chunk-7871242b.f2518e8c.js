(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7871242b"],{"0aac":function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c}));var r=n("b775");function a(e){return Object(r["a"])({url:"/sys/permission",params:e})}function s(e){return Object(r["a"])({url:"/sys/permission",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/sys/permission/".concat(e.id),method:"put",data:e})}function i(e){return Object(r["a"])({url:"/sys/permission/".concat(e),method:"delete"})}function c(e){return Object(r["a"])({url:"/sys/permission/".concat(e)})}},"0ccb":function(e,t,n){var r=n("50c4"),a=n("1148"),s=n("1d80"),l=Math.ceil,i=function(e){return function(t,n,i){var c,o,u=String(s(t)),d=u.length,p=void 0===i?" ":String(i),f=r(n);return f<=d||""==p?u:(c=f-d,o=a.call(p,l(c/p.length)),o.length>c&&(o=o.slice(0,c)),e?u+o:o+u)}};e.exports={start:i(!1),end:i(!0)}},1276:function(e,t,n){"use strict";var r=n("d784"),a=n("44e7"),s=n("825a"),l=n("1d80"),i=n("4840"),c=n("8aa5"),o=n("50c4"),u=n("14c3"),d=n("9263"),p=n("d039"),f=[].push,m=Math.min,b=4294967295,h=!p((function(){return!RegExp(b,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(l(this)),s=void 0===n?b:n>>>0;if(0===s)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,s);var i,c,o,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,h=new RegExp(e.source,p+"g");while(i=d.call(h,r)){if(c=h.lastIndex,c>m&&(u.push(r.slice(m,i.index)),i.length>1&&i.index<r.length&&f.apply(u,i.slice(1)),o=i[0].length,m=c,u.length>=s))break;h.lastIndex===i.index&&h.lastIndex++}return m===r.length?!o&&h.test("")||u.push(""):u.push(r.slice(m)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=l(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,a,n):r.call(String(a),t,n)},function(e,a){var l=n(r,e,this,a,r!==t);if(l.done)return l.value;var d=s(e),p=String(this),f=i(d,RegExp),g=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(h?"y":"g"),w=new f(h?d:"^(?:"+d.source+")",v),x=void 0===a?b:a>>>0;if(0===x)return[];if(0===p.length)return null===u(w,p)?[p]:[];var y=0,O=0,j=[];while(O<p.length){w.lastIndex=h?O:0;var k,D=u(w,h?p:p.slice(O));if(null===D||(k=m(o(w.lastIndex+(h?0:O)),p.length))===y)O=c(p,O,g);else{if(j.push(p.slice(y,O)),j.length===x)return j;for(var C=1;C<=D.length-1;C++)if(j.push(D[C]),j.length===x)return j;O=y=k}}return j.push(p.slice(y)),j}]}),!h)},"4d90":function(e,t,n){"use strict";var r=n("23e7"),a=n("0ccb").start,s=n("9a0c");r({target:"String",proto:!0,forced:s},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},7424:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"setting-container"},[n("div",{staticClass:"app-container"},[n("el-card",[n("el-tabs",[n("el-tab-pane",{attrs:{label:"角色管理"}},[n("el-row",[n("el-button",{attrs:{icon:"el-icon-plus",type:"primary",size:"small"},on:{click:e.addRole}},[e._v("新增角色")])],1),n("el-table",{attrs:{border:"",data:e.list}},[n("el-table-column",{attrs:{label:"序号",align:"center",type:"index",width:"120"}}),n("el-table-column",{attrs:{label:"名称",align:"center",prop:"name",width:"120"}}),n("el-table-column",{attrs:{label:"描述",align:"center",prop:"description"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[n("el-button",{attrs:{type:"success",size:"small"},on:{click:function(t){return e.assignPerm(r.id)}}},[e._v("分配角色")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.editRole(r.id)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.del(r.id)}}},[e._v("删除")])]}}])})],1),n("el-row",{staticStyle:{height:"60px"},attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-pagination",{attrs:{layout:"prev,pager,next","page-size":e.page.pagesize,"current-page":e.page.page,total:e.page.total},on:{"current-change":e.changePage}})],1)],1),n("el-tab-pane",{attrs:{label:"公司管理"}},[n("el-alert",{attrs:{title:"对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改",type:"info","show-icon":"",closable:!1}}),n("el-form",{staticStyle:{"margin-top":"50px"},attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"公司名称"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{disabled:""},model:{value:e.fromDate.name,callback:function(t){e.$set(e.fromDate,"name",t)},expression:"fromDate.name"}})],1),n("el-form-item",{attrs:{label:"公司地址"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{disabled:""},model:{value:e.fromDate.companyAddress,callback:function(t){e.$set(e.fromDate,"companyAddress",t)},expression:"fromDate.companyAddress"}})],1),n("el-form-item",{attrs:{label:"邮箱"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{disabled:""},model:{value:e.fromDate.mailbox,callback:function(t){e.$set(e.fromDate,"mailbox",t)},expression:"fromDate.mailbox"}})],1),n("el-form-item",{attrs:{label:"备注"}},[n("el-input",{staticStyle:{width:"400px"},attrs:{type:"textarea",rows:3,disabled:""},model:{value:e.fromDate.remarks,callback:function(t){e.$set(e.fromDate,"remarks",t)},expression:"fromDate.remarks"}})],1)],1)],1)],1)],1)],1),n("el-dialog",{attrs:{title:"编辑弹层",visible:e.showDialog},on:{close:e.btnCancel}},[n("el-form",{ref:"roleForm",attrs:{model:e.roleForm,rules:e.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[n("el-input",{model:{value:e.roleForm.name,callback:function(t){e.$set(e.roleForm,"name",t)},expression:"roleForm.name"}})],1),n("el-form-item",{attrs:{label:"角色描述"}},[n("el-input",{model:{value:e.roleForm.description,callback:function(t){e.$set(e.roleForm,"description",t)},expression:"roleForm.description"}})],1)],1),n("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{size:"small"},on:{click:e.btnCancel}},[e._v("取消")]),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.btnOK}},[e._v("确定")])],1)],1)],1),n("el-dialog",{attrs:{title:"分配权限",visible:e.showPermDialog},on:{close:e.btnPermCancel}},[n("el-tree",{ref:"permTree",attrs:{data:e.permData,props:e.defaultProps,"show-checkbox":!0,"check-strictly":!0,"default-expand-all":!0,"default-checked-keys":e.selectCheck,"node-key":"id"}}),n("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.btnPermOK}},[e._v("确定")]),n("el-button",{attrs:{size:"small"},on:{click:e.btnPermCancel}},[e._v("取消")])],1)],1)],1)],1)},a=[],s=n("c7eb"),l=n("1da1"),i=n("5530"),c=n("90e7"),o=n("2f62"),u=n("0aac"),d=n("ed08"),p={data:function(){return{list:[],page:{page:1,pagesize:10,total:0},fromDate:{},showDialog:!1,showPermDialog:!1,roleForm:{},defaultProps:{label:"name"},permData:[],selectCheck:[],roleId:null,rules:{name:[{required:!0,message:"角色名称不能为空",trigger:"blur"}]}}},created:function(){this.getRoleList(),this.getCompanyInfo()},computed:Object(i["a"])({},Object(o["c"])(["companyId"])),methods:{getRoleList:function(){var e=this;return Object(l["a"])(Object(s["a"])().mark((function t(){var n,r,a;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["f"])(e.page);case 2:n=t.sent,r=n.total,a=n.rows,e.page.total=r,e.list=a;case 7:case"end":return t.stop()}}),t)})))()},getCompanyInfo:function(){var e=this;return Object(l["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["d"])(e.companyId);case 2:e.fromDate=t.sent;case 3:case"end":return t.stop()}}),t)})))()},del:function(e){var t=this;return Object(l["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$confirm("确定要删除改角色吗？").then((function(){Object(c["c"])(e),t.getRoleList(),t.$message.success("删除角色成功")})).catch((function(e){console.log(e)}));case 2:case"end":return n.stop()}}),n)})))()},changePage:function(e){this.page.page=e,this.getRoleList()},editRole:function(e){var t=this;return Object(l["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["e"])(e);case 2:t.roleForm=n.sent,t.showDialog=!0;case 4:case"end":return n.stop()}}),n)})))()},btnCancel:function(){this.roleForm={},this.$refs.roleForm.resetFields(),this.showDialog=!1},btnOK:function(){var e=this;return Object(l["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.roleForm.validate(function(){var t=Object(l["a"])(Object(s["a"])().mark((function t(n){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=11;break}if(!e.roleForm.id){t.next=6;break}return t.next=4,Object(c["g"])(e.roleForm);case 4:t.next=8;break;case 6:return t.next=8,Object(c["a"])(e.roleForm);case 8:e.getRoleList(),e.$message.success("操作成功"),e.btnCancel();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})))()},addRole:function(){var e=this;return Object(l["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.showDialog=!0;case 1:case"end":return t.stop()}}),t)})))()},assignPerm:function(e){var t=this;return Object(l["a"])(Object(s["a"])().mark((function n(){var r,a;return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.t0=d["a"],n.next=3,Object(u["d"])();case 3:return n.t1=n.sent,t.permData=(0,n.t0)(n.t1,"0"),t.roleId=e,n.next=8,Object(c["e"])(e);case 8:r=n.sent,a=r.permIds,t.selectCheck=a,t.showPermDialog=!0;case 12:case"end":return n.stop()}}),n)})))()},btnPermOK:function(){var e=this;return Object(l["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["b"])({permIds:e.$refs.permTree.getCheckedKeys(),id:e.roleId});case 2:e.$message.success("分配权限成功"),e.showPermDialog=!1;case 4:case"end":return t.stop()}}),t)})))()},btnPermCancel:function(){this.selectCheck=[],this.showPermDialog=!1}}},f=p,m=n("2877"),b=Object(m["a"])(f,r,a,!1,null,null,null);t["default"]=b.exports},"90e7":function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"g",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return u}));var r=n("b775");function a(e){return Object(r["a"])({url:"/sys/role",params:e})}function s(e){return Object(r["a"])({url:"/company/"+e,method:"get"})}function l(e){return Object(r["a"])({url:"/sys/role/"+e,method:"delete"})}function i(e){return Object(r["a"])({url:"/sys/role/"+e.id,method:"put",data:e})}function c(e){return Object(r["a"])({url:"/sys/role/"+e})}function o(e){return Object(r["a"])({url:"/sys/role",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/sys/role/assignPrem",method:"put",data:e})}},"9a0c":function(e,t,n){var r=n("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},ed08:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("53ca"),n("ac1f"),n("00b4"),n("5319"),n("4d63"),n("2c3e"),n("25f0"),n("d3b7"),n("4d90"),n("1276"),n("159b");function r(e,t){var n=[];return e.forEach((function(a){if(a.pid===t){var s=r(e,a.id);s.length&&(a.children=s),n.push(a)}})),n}}}]);