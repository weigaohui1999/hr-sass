(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-769c80ce"],{"0ccb":function(e,t,n){var r=n("50c4"),a=n("1148"),o=n("1d80"),i=Math.ceil,s=function(e){return function(t,n,s){var c,u,l=String(o(t)),d=l.length,p=void 0===s?" ":String(s),f=r(n);return f<=d||""==p?l:(c=f-d,u=a.call(p,i(c/p.length)),u.length>c&&(u=u.slice(0,c)),e?l+u:u+l)}};e.exports={start:s(!1),end:s(!0)}},1276:function(e,t,n){"use strict";var r=n("d784"),a=n("44e7"),o=n("825a"),i=n("1d80"),s=n("4840"),c=n("8aa5"),u=n("50c4"),l=n("14c3"),d=n("9263"),p=n("d039"),f=[].push,m=Math.min,h=4294967295,b=!p((function(){return!RegExp(h,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(i(this)),o=void 0===n?h:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,o);var s,c,u,l=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,b=new RegExp(e.source,p+"g");while(s=d.call(b,r)){if(c=b.lastIndex,c>m&&(l.push(r.slice(m,s.index)),s.length>1&&s.index<r.length&&f.apply(l,s.slice(1)),u=s[0].length,m=c,l.length>=o))break;b.lastIndex===s.index&&b.lastIndex++}return m===r.length?!u&&b.test("")||l.push(""):l.push(r.slice(m)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=i(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,a,n):r.call(String(a),t,n)},function(e,a){var i=n(r,e,this,a,r!==t);if(i.done)return i.value;var d=o(e),p=String(this),f=s(d,RegExp),g=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(b?"y":"g"),w=new f(b?d:"^(?:"+d.source+")",v),D=void 0===a?h:a>>>0;if(0===D)return[];if(0===p.length)return null===l(w,p)?[p]:[];var j=0,O=0,y=[];while(O<p.length){w.lastIndex=b?O:0;var x,k=l(w,b?p:p.slice(O));if(null===k||(x=m(u(w.lastIndex+(b?0:O)),p.length))===j)O=c(p,O,g);else{if(y.push(p.slice(j,O)),y.length===D)return y;for(var _=1;_<=k.length-1;_++)if(y.push(k[_]),y.length===D)return y;O=j=x}}return y.push(p.slice(j)),y}]}),!b)},"1eef":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return s}));var r=n("b775");function a(){return Object(r["a"])({url:"/company/department",method:"get"})}function o(e){return Object(r["a"])({url:"/company/department",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/company/department/".concat(e)})}function s(e){return Object(r["a"])({url:"/company/department/".concat(e.id),method:"put",data:e})}},"4d90":function(e,t,n){"use strict";var r=n("23e7"),a=n("0ccb").start,o=n("9a0c");r({target:"String",proto:!0,forced:o},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"638d":function(e,t,n){},"8f00":function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"g",(function(){return l})),n.d(t,"k",(function(){return d})),n.d(t,"f",(function(){return p})),n.d(t,"j",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n("b775");function a(){return Object(r["a"])({url:"/sys/user/simple"})}function o(e){return Object(r["a"])({url:"/sys/user",params:e})}function i(e){return Object(r["a"])({url:"/sys/user/".concat(e),method:"delete"})}function s(e){return Object(r["a"])({method:"post",url:"/sys/user",data:e})}function c(e){return Object(r["a"])({url:"/sys/user/batch",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/sys/user/".concat(e.id),method:"put",data:e})}function l(e){return Object(r["a"])({url:"/employees/".concat(e,"/personalInfo")})}function d(e){return Object(r["a"])({url:"/employees/".concat(e.userId,"/personalInfo"),method:"put",data:e})}function p(e){return Object(r["a"])({url:"/employees/".concat(e,"/jobs")})}function f(e){return Object(r["a"])({url:"/employees/".concat(e.userId,"/jobs"),method:"put",data:e})}function m(e){return Object(r["a"])({url:"/sys/user/assignRoles",data:e,method:"put"})}},"9a0c":function(e,t,n){var r=n("342f");e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},b6c9:function(e,t,n){"use strict";n("638d")},ed08:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("53ca"),n("ac1f"),n("00b4"),n("5319"),n("4d63"),n("2c3e"),n("25f0"),n("d3b7"),n("4d90"),n("1276"),n("159b");function r(e,t){var n=[];return e.forEach((function(a){if(a.pid===t){var o=r(e,a.id);o.length&&(a.children=o),n.push(a)}})),n}},fb3b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dashboard-container"},[n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"tree-card"},[n("tree-tools",{attrs:{"tree-node":e.company,"is-root":!0}}),n("el-tree",{attrs:{data:e.departs,"default-expand-all":!0,props:e.defaultProps},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.data;return n("tree-tools",{attrs:{"tree-node":r},on:{delDepts:e.getDepartments,addDepts:e.addDepts,editDepts:e.editDepts}})}}])})],1)],1),n("add-dept",{ref:"addDept",attrs:{"show-dialog":e.showDialog,"tree-node":e.node},on:{"update:showDialog":function(t){e.showDialog=t},"update:show-dialog":function(t){e.showDialog=t},addDepts:e.getDepartments}})],1)},a=[],o=n("c7eb"),i=n("1da1"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticStyle:{height:"40px",width:"100%"},attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("el-col",[n("span",[e._v(e._s(e.treeNode.name))])]),n("el-col",{attrs:{span:4}},[n("el-row",{attrs:{type:"flex",justify:"end"}},[n("el-col",[e._v(e._s(e.treeNode.manager))]),n("el-col",[n("el-dropdown",{on:{command:e.operateDepts}},[n("span",[e._v(" 操作"),n("i",{staticClass:"el-icon-arrow-down"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"add"}},[e._v("添加子部门")]),e.isRoot?e._e():n("el-dropdown-item",{attrs:{command:"edit"}},[e._v("编辑部门")]),e.isRoot?e._e():n("el-dropdown-item",{attrs:{command:"del"}},[e._v("删除部门")])],1)],1)],1)],1)],1)],1)},c=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:e.showTitle,visible:e.showDialog,"close-on-click-modal":""},on:{close:e.btnCancel}},[n("el-form",{ref:"deptForm",attrs:{model:e.formData,rules:e.rules,"label-width":"120px"}},[n("el-form-item",{attrs:{label:"部门名称",prop:"name"}},[n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-50个字符"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),n("el-form-item",{attrs:{label:"部门编码",prop:"code"}},[n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-50个字符"},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}})],1),n("el-form-item",{attrs:{label:"部门负责人",prop:"manager"}},[n("el-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择"},on:{focus:e.getEmployeeSimple},model:{value:e.formData.manager,callback:function(t){e.$set(e.formData,"manager",t)},expression:"formData.manager"}},e._l(e.peoples,(function(e){return n("el-option",{key:e.id,attrs:{label:e.username,value:e.username}})})),1)],1),n("el-form-item",{attrs:{label:"部门介绍",prop:"introduce"}},[n("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-300个字符",type:"textarea",rows:3},model:{value:e.formData.introduce,callback:function(t){e.$set(e.formData,"introduce",t)},expression:"formData.introduce"}})],1)],1),n("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.btnOk}},[e._v("确定")]),n("el-button",{attrs:{size:"small"},on:{click:e.btnCancel}},[e._v("取消")])],1)],1)],1)},l=[],d=n("5530"),p=(n("d3b7"),n("4de4"),n("b0c0"),n("1eef")),f=n("8f00"),m={name:"AddDept",props:{showDialog:{type:Boolean,default:!1},treeNode:{type:Object,default:null}},data:function(){var e=this,t=function(){var t=Object(i["a"])(Object(o["a"])().mark((function t(n,r,a){var i,s,c;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["c"])();case 2:i=t.sent,s=i.depts,c=!1,e.formData.id?s.filter((function(t){return t.pid===e.treeNode.id&&t.id!==e.treeNode.id})).some((function(e){return e.name===r})):c=s.filter((function(t){return t.pid===e.treeNode.id})).some((function(e){return e.name===r})),c?a(new Error("同级部门已经存在这个".concat(r,"部门"))):a();case 7:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),n=function(){var t=Object(i["a"])(Object(o["a"])().mark((function t(n,r,a){var i,s,c;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["c"])();case 2:i=t.sent,s=i.depts,c=!1,c=e.formData.id?s.filter((function(t){return t.pid!==e.treeNode.id})).some((function(e){return e.code===r&&r})):s.some((function(e){return e.code===r&&r})),c?a(new Error("组织架构中已经有部门使用".concat(r,"编码"))):a();case 7:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();return{formData:{name:"",code:"",manager:"",introduce:""},rules:{name:[{required:!0,message:"部门名称不能为空",trigger:"blur"},{min:1,max:50,message:"部门名称要求1-50个字符",trigger:"blur"},{trigger:"blur",validator:t}],code:[{required:!0,message:"部门编码不能为空",trigger:"blur"},{min:1,max:50,message:"部门编码要求1-50个字符",trigger:"blur"},{trigger:"blur",validator:n}],manager:[{required:!0,message:"部门负责人不能为空",trigger:"blur"}],introduce:[{required:!0,message:"部门介绍不能为空",trigger:"blur"},{trigger:"blur",min:1,max:300,message:"部门介绍要求1-50个字符"}]},peoples:[]}},computed:{showTitle:function(){return this.formData.id?"编辑部门":"新增子部门"}},methods:{getEmployeeSimple:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["e"])();case 2:e.peoples=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getDepartDetail:function(e){var t=this;return Object(i["a"])(Object(o["a"])().mark((function n(){return Object(o["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(p["b"])(e);case 2:t.formData=n.sent;case 3:case"end":return n.stop()}}),n)})))()},btnOk:function(){var e=this;this.$refs.deptForm.validate(function(){var t=Object(i["a"])(Object(o["a"])().mark((function t(n){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=8;break}if(!e.formData.id){t.next=6;break}return t.next=4,Object(p["d"])(e.formData);case 4:t.next=8;break;case 6:return t.next=8,Object(p["a"])(Object(d["a"])(Object(d["a"])({},formData),{},{pid:e.treeNode.id}));case 8:e.$emit("addDepts"),e.$emit("update:showDialog",!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},btnCancel:function(){this.formData={name:"",code:"",manager:"",introduce:""},this.$refs.deptForm.resetFields(),this.$emit("update:showDialog",!1)}}},h=m,b=n("2877"),g=Object(b["a"])(h,u,l,!1,null,"5578d82c",null),v=g.exports,w={components:{AddDept:v},props:{treeNode:{type:Object,required:!0},isRoot:{type:Boolean,default:!1}},methods:{operateDepts:function(e){var t=this;"add"===e?this.$emit("addDepts",this.treeNode):"edit"===e?this.$emit("editDepts",this.treeNode):"del"===e&&this.$confirm("您是否要删除此部门吗？").then((function(){return delDepartments(t.treeNode.id)})).then((function(){t.$emit("delDepts"),t.$message.success("删除成功")}))}}},D=w,j=Object(b["a"])(D,s,c,!1,null,null,null),O=j.exports,y=n("ed08"),x={components:{TreeTools:O,addDept:v},data:function(){return{company:{},departs:[],defaultProps:{label:"name"},showDialog:!1,node:{},loading:!1}},created:function(){this.getDepartments()},methods:{getDepartments:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,Object(p["c"])().then((function(t){e.company={name:t.companyName,manager:"负责人",id:""},e.departs=t.depts,Object(y["tranListTreeData"])(t.depts,"")}));case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},addDepts:function(e){this.showDialog=!0,this.node=e},editDepts:function(e){this.showDialog=!0,this.node=e,this.$refs.addDept.getDepartDetail(e.id)}}},k=x,_=(n("b6c9"),Object(b["a"])(k,r,a,!1,null,"107db879",null));t["default"]=_.exports}}]);