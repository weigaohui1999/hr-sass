(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25ac24a3"],{"01f5":function(e,t,a){"use strict";t["a"]={hireType:[{id:1,value:"正式"},{id:2,value:"非正式"}],subjection:[{id:"1",value:"总部"},{id:"2",value:"分城市"}],workingState:[{id:"1",value:"在职"},{id:"2",value:"离职"}],leaveType:[{id:"1",value:"主动离职"},{id:"2",value:"被动离职"},{id:"3",value:"退休"}],attritionMonth:[{id:"1",value:"离职日本月"},{id:"2",value:"离职日次月"}],informaltype:[{id:"2",value:"实习"},{id:"3",value:"劳务"},{id:"4",value:"顾问"},{id:"5",value:"返聘"},{id:"6",value:"外包"}],highestDegree:[{id:"1",value:"初中"},{id:"2",value:"高中"},{id:"3",value:"中专"},{id:"4",value:"大专"},{id:"5",value:"本科"},{id:"6",value:"硕士"},{id:"7",value:"博士"},{id:"8",value:"其他"}],isOverseas:[{id:"1",value:"中国大陆"},{id:"2",value:"港澳台国外"}],gender:[{id:"1",value:"男"},{id:"2",value:"女"}],maritaStatus:[{id:"1",value:"未婚"},{id:"2",value:"已婚"},{id:"3",value:"离异"}],animalSymbol:[{id:"1",value:"鼠"},{id:"2",value:"牛"},{id:"3",value:"虎"},{id:"4",value:"兔"},{id:"5",value:"龙"},{id:"6",value:"蛇"},{id:"7",value:"马"},{id:"8",value:"羊"},{id:"9",value:"猴"},{id:"10",value:"鸡"},{id:"11",value:"狗"},{id:"12",value:"猪"}],constellation:[{code:1,value:"水瓶座"},{code:2,value:"双鱼座"},{code:3,value:"白羊座"},{code:4,value:"金牛座"},{code:5,value:"双子座"},{code:6,value:"巨蟹座"},{code:7,value:"狮子座"},{code:8,value:"处女座"},{code:9,value:"天秤座"},{code:10,value:"天蝎座"},{code:11,value:"射手座"},{code:12,value:"摩羯座"}],bloodType:[{id:"1",value:"A型"},{id:"2",value:"B型"},{id:"3",value:"O型"},{id:"4",value:"AB型"}],educationType:[{id:"1",value:"统招"},{id:"2",value:"自考"},{id:"3",value:"成考"}],positiveType:[{id:"1",value:"已转正"},{id:"2",value:"未转正"}],contractPeriod:[{id:"1",value:"6月"},{id:"2",value:"12月"},{id:"3",value:"24月"},{id:"4",value:"36月"},{id:"5",value:"其他"}],renewalCount:[{id:1,value:"0次"},{id:2,value:"1次"},{id:3,value:"2次"},{id:4,value:"3次"},{id:5,value:"4次或以上"}],resumeSource:[{id:"1",value:"智联招聘"},{id:"2",value:"拉勾网"},{id:"3",value:"前程无忧"},{id:"4",value:"猎聘网"},{id:"5",value:"校园宣讲"},{id:"6",value:"猎头"},{id:"7",value:"内部推荐"}],hireSourceType:[{id:"1",value:"社招"},{id:"2",value:"校招"}],departments:[{id:"1",value:"总裁办"},{id:"2",value:"研究院"}],stausInfos:[{id:"1",value:"在职"},{id:"2",value:"入职"},{id:"3",value:"离职"}]}},"3b33":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-container"},[a("div",{staticClass:"app-container"},[a("el-card",[a("el-tabs",[a("el-tab-pane",{attrs:{label:"登录账户设置"}},[a("el-form",{ref:"userInfo",staticStyle:{"margin-left":"120px","margin-top":"30px"},attrs:{"label-width":"120px",model:e.userInfo,rules:e.rules}},[a("el-form-item",{attrs:{label:"姓名:"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:e.userInfo.username,callback:function(t){e.$set(e.userInfo,"username",t)},expression:"userInfo.username"}})],1),a("el-form-item",{attrs:{label:"密码:"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{type:"password"},model:{value:e.userInfo.password2,callback:function(t){e.$set(e.userInfo,"password2",t)},expression:"userInfo.password2"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.saveUser}},[e._v("更新")])],1)],1)],1),a("el-tab-pane",{attrs:{label:"个人详情"}},[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-tooltip",{attrs:{content:"打印个人基本信息"}},[a("router-link",{attrs:{to:"/employees/print/"+e.userId+"?type=personal"}},[a("i",{staticClass:"el-icon-printer"})])],1)],1),a(e.UserInfo,{tag:"component"})],1),a("el-tab-pane",{attrs:{label:"岗位信息"}},[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-tooltip",{attrs:{content:"打印岗位信息"}},[a("router-link",{attrs:{to:"/employees/print/"+e.userId+"?type=job"}},[a("i",{staticClass:"el-icon-printer"})])],1)],1),a(e.JobInfo,{tag:"component"})],1)],1)],1)],1)])},l=[],o=a("5530"),n=a("c7eb"),i=a("1da1"),s=a("c24f"),c=a("8f00"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-info"},[a("el-form",{attrs:{"label-width":"220px"}},[a("el-row",{staticClass:"inline-info"},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"工号"}},[a("el-input",{staticClass:"inputW",model:{value:e.userInfo.workNumber,callback:function(t){e.$set(e.userInfo,"workNumber",t)},expression:"userInfo.workNumber"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"入职时间"}},[a("el-date-picker",{staticClass:"inputW",attrs:{type:"date","value-format":"YYYY-MM-DD"},model:{value:e.userInfo.timeOfEntry,callback:function(t){e.$set(e.userInfo,"timeOfEntry",t)},expression:"userInfo.timeOfEntry"}})],1)],1)],1),a("el-row",{staticClass:"inline-info"},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{staticClass:"inputW",model:{value:e.userInfo.username,callback:function(t){e.$set(e.userInfo,"username",t)},expression:"userInfo.username"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"部门"}},[a("el-input",{staticClass:"inputW",model:{value:e.userInfo.departmentName,callback:function(t){e.$set(e.userInfo,"departmentName",t)},expression:"userInfo.departmentName"}})],1)],1)],1),a("el-row",{staticClass:"inline-info"},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手机"}},[a("el-input",{model:{value:e.userInfo.mobile,callback:function(t){e.$set(e.userInfo,"mobile",t)},expression:"userInfo.mobile"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"聘用形式"}},[a("el-select",{staticClass:"inputW",model:{value:e.userInfo.formOfEmployment,callback:function(t){e.$set(e.userInfo,"formOfEmployment",t)},expression:"userInfo.formOfEmployment"}},e._l(e.EmployeeEnum.hireType,(function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})})),1)],1)],1)],1),a("el-row",{staticClass:"inline-info"},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"员工头像"}},[a("image-upload",{ref:"staffPhoto"})],1)],1)],1),a("el-row",{staticClass:"inline-info",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:12}},[a("el-button",{attrs:{type:"primary"},on:{click:e.saveUser}},[e._v("保存更新")]),a("el-button",{on:{click:function(t){return e.$router.back()}}},[e._v("返回")])],1)],1)],1),a("el-form",{attrs:{"label-width":"220px"}},[a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("基础信息")]),a("el-form-item",{attrs:{label:"最高学历"}},[a("el-select",{staticClass:"inputW2",model:{value:e.formData.theHighestDegreeOfEducation,callback:function(t){e.$set(e.formData,"theHighestDegreeOfEducation",t)},expression:"formData.theHighestDegreeOfEducation"}},e._l(e.EmployeeEnum.highestDegree,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"员工照片"}},[a("image-upload",{ref:"myStaffPhoto"})],1),a("el-form-item",{attrs:{label:"国家/地区"}},[a("el-select",{staticClass:"inputW2",model:{value:e.formData.nationalArea,callback:function(t){e.$set(e.formData,"nationalArea",t)},expression:"formData.nationalArea"}},e._l(e.EmployeeEnum.isOverseas,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"护照号"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"正规护照格式"},model:{value:e.formData.passportNo,callback:function(t){e.$set(e.formData,"passportNo",t)},expression:"formData.passportNo"}})],1),a("el-form-item",{attrs:{label:"身份证号"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"正规身份证格式"},model:{value:e.formData.idNumber,callback:function(t){e.$set(e.formData,"idNumber",t)},expression:"formData.idNumber"}})],1),a("el-form-item",{attrs:{label:"籍贯"}},[a("el-input",{staticClass:"inputW5",attrs:{placeholder:"籍贯地址"},model:{value:e.formData.nativePlace,callback:function(t){e.$set(e.formData,"nativePlace",t)},expression:"formData.nativePlace"}})],1),a("el-form-item",{attrs:{label:"民族"}},[a("el-input",{staticClass:"inputW2",attrs:{placeholder:"请输入民族"},model:{value:e.formData.nation,callback:function(t){e.$set(e.formData,"nation",t)},expression:"formData.nation"}})],1),a("el-form-item",{attrs:{label:"婚姻状况"}},[a("el-select",{staticClass:"inputW2",model:{value:e.formData.maritalStatus,callback:function(t){e.$set(e.formData,"maritalStatus",t)},expression:"formData.maritalStatus"}},e._l(e.EmployeeEnum.maritaStatus,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"生日"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"示例 0323"},model:{value:e.formData.birthday,callback:function(t){e.$set(e.formData,"birthday",t)},expression:"formData.birthday"}})],1),a("el-form-item",{attrs:{label:"年龄"}},[a("el-input",{staticClass:"inputW2",attrs:{type:"number"},model:{value:e.formData.age,callback:function(t){e.$set(e.formData,"age",t)},expression:"formData.age"}})],1),a("el-form-item",{attrs:{label:"星座"}},[a("el-select",{staticClass:"inputW2",model:{value:e.formData.constellation,callback:function(t){e.$set(e.formData,"constellation",t)},expression:"formData.constellation"}},e._l(e.EmployeeEnum.constellation,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"血型"}},[a("el-select",{staticClass:"inputW2",model:{value:e.formData.bloodType,callback:function(t){e.$set(e.formData,"bloodType",t)},expression:"formData.bloodType"}},e._l(e.EmployeeEnum.bloodType,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"户籍所在地"}},[a("el-input",{staticClass:"inputW5",model:{value:e.formData.domicile,callback:function(t){e.$set(e.formData,"domicile",t)},expression:"formData.domicile"}})],1),a("el-form-item",{attrs:{label:"政治面貌"}},[a("el-input",{staticClass:"inputW2",model:{value:e.formData.politicalOutlook,callback:function(t){e.$set(e.formData,"politicalOutlook",t)},expression:"formData.politicalOutlook"}})],1),a("el-form-item",{attrs:{label:"入党时间"}},[a("el-date-picker",{staticClass:"inputW",attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.formData.timeToJoinTheParty,callback:function(t){e.$set(e.formData,"timeToJoinTheParty",t)},expression:"formData.timeToJoinTheParty"}})],1),a("el-form-item",{attrs:{label:"存档机构"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.archivingOrganization,callback:function(t){e.$set(e.formData,"archivingOrganization",t)},expression:"formData.archivingOrganization"}})],1),a("el-form-item",{attrs:{label:"子女状态"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.stateOfChildren,callback:function(t){e.$set(e.formData,"stateOfChildren",t)},expression:"formData.stateOfChildren"}})],1),a("el-form-item",{attrs:{label:"子女有无商业险"}},[a("el-radio-group",{model:{value:e.formData.doChildrenHaveCommercialInsurance,callback:function(t){e.$set(e.formData,"doChildrenHaveCommercialInsurance",t)},expression:"formData.doChildrenHaveCommercialInsurance"}},[a("el-radio",{attrs:{label:"1"}},[e._v("有")]),a("el-radio",{attrs:{label:"2"}},[e._v("无")])],1)],1),a("el-form-item",{attrs:{label:"有无违法违纪状态"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.isThereAnyViolationOfLawOrDiscipline,callback:function(t){e.$set(e.formData,"isThereAnyViolationOfLawOrDiscipline",t)},expression:"formData.isThereAnyViolationOfLawOrDiscipline"}})],1),a("el-form-item",{attrs:{label:"有无重大病史"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.areThereAnyMajorMedicalHistories,callback:function(t){e.$set(e.formData,"areThereAnyMajorMedicalHistories",t)},expression:"formData.areThereAnyMajorMedicalHistories"}})],1)],1),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("通讯信息")]),a("el-form-item",{attrs:{label:"QQ"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.qq,callback:function(t){e.$set(e.formData,"qq",t)},expression:"formData.qq"}})],1),a("el-form-item",{attrs:{label:"微信"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.wechat,callback:function(t){e.$set(e.formData,"wechat",t)},expression:"formData.wechat"}})],1),a("el-form-item",{attrs:{label:"现居住地"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.placeOfResidence,callback:function(t){e.$set(e.formData,"placeOfResidence",t)},expression:"formData.placeOfResidence"}})],1),a("el-form-item",{attrs:{label:"通讯地址"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.formData.postalAddress,callback:function(t){e.$set(e.formData,"postalAddress",t)},expression:"formData.postalAddress"}})],1),a("el-form-item",{attrs:{label:"联系手机"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"11位字符",maxlength:"11"},nativeOn:{change:function(t){return e.handlePhone(2)}},model:{value:e.formData.contactTheMobilePhone,callback:function(t){e.$set(e.formData,"contactTheMobilePhone",t)},expression:"formData.contactTheMobilePhone"}})],1),a("el-form-item",{attrs:{label:"个人邮箱"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入",type:"mail"},model:{value:e.formData.personalMailbox,callback:function(t){e.$set(e.formData,"personalMailbox",t)},expression:"formData.personalMailbox"}})],1),a("el-form-item",{attrs:{label:"紧急联系人"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.emergencyContact,callback:function(t){e.$set(e.formData,"emergencyContact",t)},expression:"formData.emergencyContact"}})],1),a("el-form-item",{attrs:{label:"紧急联系电话"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"11位字符"},model:{value:e.formData.emergencyContactNumber,callback:function(t){e.$set(e.formData,"emergencyContactNumber",t)},expression:"formData.emergencyContactNumber"}})],1)],1),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("账号信息")]),a("el-form-item",{attrs:{label:"社保电脑号"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.socialSecurityComputerNumber,callback:function(t){e.$set(e.formData,"socialSecurityComputerNumber",t)},expression:"formData.socialSecurityComputerNumber"}})],1),a("el-form-item",{attrs:{label:"公积金账号"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.providentFundAccount,callback:function(t){e.$set(e.formData,"providentFundAccount",t)},expression:"formData.providentFundAccount"}})],1),a("el-form-item",{attrs:{label:"银行卡号"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.bankCardNumber,callback:function(t){e.$set(e.formData,"bankCardNumber",t)},expression:"formData.bankCardNumber"}})],1),a("el-form-item",{attrs:{label:"开户行"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.openingBank,callback:function(t){e.$set(e.formData,"openingBank",t)},expression:"formData.openingBank"}})],1)],1),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("教育信息")]),a("el-form-item",{attrs:{label:"学历类型"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.educationalType,callback:function(t){e.$set(e.formData,"educationalType",t)},expression:"formData.educationalType"}},e._l(e.EmployeeEnum.educationType,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"毕业学校"}},[a("el-input",{staticClass:"inputW2",attrs:{placeholder:"请输入"},model:{value:e.formData.graduateSchool,callback:function(t){e.$set(e.formData,"graduateSchool",t)},expression:"formData.graduateSchool"}})],1),a("el-form-item",{attrs:{label:"入学时间"}},[a("el-date-picker",{staticClass:"inputW",attrs:{type:"data",placeholder:"请输入时间","value-format":"yyyy-MM-dd"},model:{value:e.formData.enrolmentTime,callback:function(t){e.$set(e.formData,"enrolmentTime",t)},expression:"formData.enrolmentTime"}})],1),a("el-form-item",{attrs:{label:"毕业时间"}},[a("el-date-picker",{staticClass:"inputW",attrs:{type:"data",placeholder:"请输入时间","value-format":"yyyy-MM-dd"},model:{value:e.formData.graduationTime,callback:function(t){e.$set(e.formData,"graduationTime",t)},expression:"formData.graduationTime"}})],1),a("el-form-item",{attrs:{label:"专业"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.major,callback:function(t){e.$set(e.formData,"major",t)},expression:"formData.major"}})],1)],1),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("从业信息")]),a("el-form-item",{attrs:{label:"上家公司"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.homeCompany,callback:function(t){e.$set(e.formData,"homeCompany",t)},expression:"formData.homeCompany"}})],1),a("el-form-item",{attrs:{label:"职称"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}})],1),a("el-form-item",{attrs:{label:"有无竞业限制"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入"},model:{value:e.formData.isThereAnyCompetitionRestriction,callback:function(t){e.$set(e.formData,"isThereAnyCompetitionRestriction",t)},expression:"formData.isThereAnyCompetitionRestriction"}})],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{type:"textarea",placeholder:"请输入备注"},model:{value:e.formData.remarks,callback:function(t){e.$set(e.formData,"remarks",t)},expression:"formData.remarks"}})],1),a("el-row",{staticClass:"inline-info",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:12}},[a("el-button",{attrs:{type:"primary"},on:{click:e.savePersonal}},[e._v("保存更新")]),a("el-button",{on:{click:function(t){return e.$router.back()}}},[e._v("返回")])],1)],1)],1)])],1)},m=[],f=(a("498a"),a("d3b7"),a("01f5")),d={data:function(){return{userId:this.$route.params.id,EmployeeEnum:f["a"],userInfo:{},formData:{userId:"",username:"",sex:"",mobile:"",companyId:"",departmentName:"",dateOfBirth:"",timeOfEntry:"",theHighestDegreeOfEducation:"",nationalArea:"",passportNo:"",idNumber:"",idCardPhotoPositive:"",idCardPhotoBack:"",nativePlace:"",nation:"",englishName:"",maritalStatus:"",staffPhoto:"",birthday:"",zodiac:"",age:"",constellation:"",bloodType:"",domicile:"",politicalOutlook:"",timeToJoinTheParty:"",archivingOrganization:"",stateOfChildren:"",doChildrenHaveCommercialInsurance:"1",isThereAnyViolationOfLawOrDiscipline:"",areThereAnyMajorMedicalHistories:"",qq:"",wechat:"",residenceCardCity:"",dateOfResidencePermit:"",residencePermitDeadline:"",placeOfResidence:"",postalAddress:"",contactTheMobilePhone:"",personalMailbox:"",emergencyContact:"",emergencyContactNumber:"",socialSecurityComputerNumber:"",providentFundAccount:"",bankCardNumber:"",openingBank:"",educationalType:"",graduateSchool:"",enrolmentTime:"",graduationTime:"",major:"",graduationCertificate:"",certificateOfAcademicDegree:"",homeCompany:"",title:"",resume:"",isThereAnyCompetitionRestriction:"",proofOfDepartureOfFormerCompany:"",remarks:""}}},created:function(){this.getPersonalDetail(),this.getUserDetailById()},methods:{getPersonalDetail:function(){var e=this;return Object(i["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["g"])(e.userId);case 2:e.formData=t.sent,e.formData.staffPhoto&&e.formData.staffPhoto.trim()&&(e.$refs.myStaffPhoto.fileList=[{uri:e.formData.staffPhoto,upload:!0}]);case 4:case"end":return t.stop()}}),t)})))()},getUserDetailById:function(){var e=this;return Object(i["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])(e.userId);case 2:e.userInfo=t.sent,e.userInfo.staffPhoto&&e.userInfo.staffPhoto.trim()&&(e.$refs.staffPhoto.fileList=[{uri:e.userInfo.staffPhoto,upload:!0}]);case 4:case"end":return t.stop()}}),t)})))()},savePersonal:function(){var e=this;return Object(i["a"])(Object(n["a"])().mark((function t(){var a;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.$refs.myStaffPhoto.fileList,!a.some((function(e){return!e.upload}))){t.next=4;break}return e.$message.warning("您当前还有图片没有上传完成！"),t.abrupt("return");case 4:return t.next=6,Object(c["k"])(Object(o["a"])(Object(o["a"])({},e.formData),{},{staffPhoto:a&&a.length?a[0].url:""}));case 6:e.$message.success("保存基础信息成功");case 7:case"end":return t.stop()}}),t)})))()},saveUser:function(){var e=this;return Object(i["a"])(Object(n["a"])().mark((function t(){var a;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.$refs.staffPhoto.fileList,!a.some((function(e){return!e.upload}))){t.next=4;break}return e.$message.warning("您当前还有图片没有上传完成！"),t.abrupt("return");case 4:return t.next=6,Object(c["i"])(Object(o["a"])(Object(o["a"])({},e.userInfo),{},{staffPhoto:a&&a.length?a[0].url:""}));case 6:e.$message.success("保存基本信息成功");case 7:case"end":return t.stop()}}),t)})))()}}},p=d,b=a("2877"),v=Object(b["a"])(p,u,m,!1,null,"67fddf22",null),h=v.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"job-info"},[a("el-form",{attrs:{"label-width":"220px"}},[a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("基础信息")]),a("el-form-item",{attrs:{label:"岗位"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.post,callback:function(t){e.$set(e.formData,"post",t)},expression:"formData.post"}})],1),a("el-form-item",{attrs:{label:"转正状态"}},[a("el-select",{attrs:{placeholder:"请选择",disabled:""},model:{value:e.formData.stateOfCorrection,callback:function(t){e.$set(e.formData,"stateOfCorrection",t)},expression:"formData.stateOfCorrection"}},e._l(e.EmployeeEnum.stateOfCorrection,(function(e){return a("el-option",{key:e.value,attrs:{value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"职级"}},[a("el-input",{staticClass:"inputW",model:{value:e.formData.rank,callback:function(t){e.$set(e.formData,"rank",t)},expression:"formData.rank"}})],1),a("el-form-item",{attrs:{label:"转正评价"}},[a("el-input",{attrs:{type:"textarea",placeholder:"1-300位字符"},model:{value:e.formData.correctionEvaluation,callback:function(t){e.$set(e.formData,"correctionEvaluation",t)},expression:"formData.correctionEvaluation"}})],1),a("el-form-item",{attrs:{label:"汇报对象"}},[a("el-select",{staticClass:"inputW",attrs:{filterable:"",placeholder:"请选择"},model:{value:e.formData.reportId,callback:function(t){e.$set(e.formData,"reportId",t)},expression:"formData.reportId"}},e._l(e.depts,(function(e){return a("el-option",{key:e.id,attrs:{label:e.username,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"HRBP"}},[a("el-select",{staticClass:"inputW",attrs:{filterable:"",placeholder:"请选择"},model:{value:e.formData.hrbp,callback:function(t){e.$set(e.formData,"hrbp",t)},expression:"formData.hrbp"}},e._l(e.depts,(function(e){return a("el-option",{key:e.id,staticClass:"inputW",attrs:{label:e.username,value:e.id}})})),1)],1),a("el-form-item",{staticClass:"formInfo",attrs:{label:"调整司龄(天)："}},[a("el-input",{staticClass:"inputW",attrs:{type:"number",placeholder:"请输入"},model:{value:e.formData.adjustmentAgedays,callback:function(t){e.$set(e.formData,"adjustmentAgedays",t)},expression:"formData.adjustmentAgedays"}})],1),a("el-form-item",{attrs:{label:"首次参加工作时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.formData.workingTimeForTheFirstTime,callback:function(t){e.$set(e.formData,"workingTimeForTheFirstTime",t)},expression:"formData.workingTimeForTheFirstTime"}})],1),a("el-form-item",{attrs:{label:"调整工龄"}},[a("el-input",{staticClass:"inputW",attrs:{placeholder:"0.00年",disabled:""},model:{value:e.formData.adjustmentOfLengthOfService,callback:function(t){e.$set(e.formData,"adjustmentOfLengthOfService",t)},expression:"formData.adjustmentOfLengthOfService"}})],1)],1),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("合同信息")]),a("el-form-item",{staticClass:"formInfo",attrs:{label:"首次合同开始时间："}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.formData.initialContractStartTime,callback:function(t){e.$set(e.formData,"initialContractStartTime",t)},expression:"formData.initialContractStartTime"}})],1),a("el-form-item",{attrs:{label:"首次合同结束时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.formData.firstContractTerminationTime,callback:function(t){e.$set(e.formData,"firstContractTerminationTime",t)},expression:"formData.firstContractTerminationTime"}})],1),a("el-form-item",{attrs:{label:"现合同开始时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.formData.currentContractStartTime,callback:function(t){e.$set(e.formData,"currentContractStartTime",t)},expression:"formData.currentContractStartTime"}})],1),a("el-form-item",{attrs:{label:"现合同结束时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:e.formData.closingTimeOfCurrentContract,callback:function(t){e.$set(e.formData,"closingTimeOfCurrentContract",t)},expression:"formData.closingTimeOfCurrentContract\t"}})],1),a("el-form-item",{attrs:{label:"合同期限"}},[a("el-select",{staticClass:"filter-item",model:{value:e.formData.contractPeriod,callback:function(t){e.$set(e.formData,"contractPeriod",t)},expression:"formData.contractPeriod"}},e._l(e.EmployeeEnum.contractPeriod,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"续签次数"}},[a("el-select",{staticClass:"filter-item",model:{value:e.formData.renewalNumber,callback:function(t){e.$set(e.formData,"renewalNumber",t)},expression:"formData.renewalNumber"}},e._l(e.EmployeeEnum.renewalCount,(function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})})),1)],1)],1),a("div",{staticClass:"block"},[a("div",{staticClass:"title"},[e._v("招聘信息")]),a("el-form-item",{attrs:{label:"其他招聘渠道"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.otherRecruitmentChannels,callback:function(t){e.$set(e.formData,"otherRecruitmentChannels",t)},expression:"formData.otherRecruitmentChannels"}},e._l(e.EmployeeEnum.resumeSource,(function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"招聘渠道"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.recruitmentChannels,callback:function(t){e.$set(e.formData,"recruitmentChannels",t)},expression:"formData.recruitmentChannels"}},e._l(e.EmployeeEnum.resumeSource,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"社招/校招"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.socialRecruitment,callback:function(t){e.$set(e.formData,"socialRecruitment",t)},expression:"formData.socialRecruitment"}},e._l(e.EmployeeEnum.hireSourceType,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"推荐企业/人"}},[a("el-input",{staticClass:"infoPosition inputW",attrs:{placeholder:"请输入"},model:{value:e.formData.recommenderBusinessPeople,callback:function(t){e.$set(e.formData,"recommenderBusinessPeople",t)},expression:"formData.recommenderBusinessPeople"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.saveJob}},[e._v("保存更新")]),a("el-button",{on:{click:function(t){return e.$router.back()}}},[e._v("返回")])],1)],1)],1)},y=[],k={data:function(){return{userId:this.$route.params.id,depts:[],EmployeeEnum:f["a"],formData:{adjustmentAgedays:"",adjustmentOfLengthOfService:"",closingTimeOfCurrentContract:"",companyId:"",contractDocuments:"",contractPeriod:"",correctionEvaluation:"",currentContractStartTime:"",firstContractTerminationTime:"",hrbp:"",initialContractStartTime:"",otherRecruitmentChannels:"",post:"",rank:null,recommenderBusinessPeople:"",recruitmentChannels:"",renewalNumber:"",reportId:"",reportName:null,socialRecruitment:"",stateOfCorrection:"",taxableCity:"",userId:"",workMailbox:"",workingCity:"",workingTimeForTheFirstTime:""}}},created:function(){this.getJobDetail(),this.getEmployeeSimple()},methods:{getJobDetail:function(){var e=this;return Object(i["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["f"])(e.userId);case 2:e.formData=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getEmployeeSimple:function(){var e=this;return Object(i["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["e"])();case 2:e.depts=t.sent;case 3:case"end":return t.stop()}}),t)})))()},saveJob:function(){var e=this;return Object(i["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["j"])(e.formData);case 2:e.$message.success("保存岗位信息成功");case 3:case"end":return t.stop()}}),t)})))()}}},C=k,O=Object(b["a"])(C,D,y,!1,null,"1ea59500",null),x=O.exports,g={name:"Detail",components:{UserInfo:h,JobInfo:x},data:function(){return{UserInfo:"UserInfo",JobInfo:"JobInfo",userId:this.$route.params.id,userInfo:{username:"",password2:""},rules:{username:[{required:!0,message:"姓名不能为空",trigger:"blur"}],password2:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:9,message:"密码长度6-9位",trigger:"blur"}]}}},created:function(){this.getUserDetailById()},methods:{getUserDetailById:function(){var e=this;return Object(i["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])(e.userId);case 2:e.userInfo=t.sent;case 3:case"end":return t.stop()}}),t)})))()},saveUser:function(){var e=this;this.$refs.userInfo.validate().then(Object(i["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["i"])(Object(o["a"])(Object(o["a"])({},e.userInfo),{},{password:e.userInfo.password2}));case 2:e.$message.success("保存成功");case 3:case"end":return t.stop()}}),t)}))))}}},$=g,j=Object(b["a"])($,r,l,!1,null,"46209cce",null);t["default"]=j.exports},"8f00":function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"h",(function(){return s})),a.d(t,"i",(function(){return c})),a.d(t,"g",(function(){return u})),a.d(t,"k",(function(){return m})),a.d(t,"f",(function(){return f})),a.d(t,"j",(function(){return d})),a.d(t,"b",(function(){return p}));var r=a("b775");function l(){return Object(r["a"])({url:"/sys/user/simple"})}function o(e){return Object(r["a"])({url:"/sys/user",params:e})}function n(e){return Object(r["a"])({url:"/sys/user/".concat(e),method:"delete"})}function i(e){return Object(r["a"])({method:"post",url:"/sys/user",data:e})}function s(e){return Object(r["a"])({url:"/sys/user/batch",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/sys/user/".concat(e.id),method:"put",data:e})}function u(e){return Object(r["a"])({url:"/employees/".concat(e,"/personalInfo")})}function m(e){return Object(r["a"])({url:"/employees/".concat(e.userId,"/personalInfo"),method:"put",data:e})}function f(e){return Object(r["a"])({url:"/employees/".concat(e,"/jobs")})}function d(e){return Object(r["a"])({url:"/employees/".concat(e.userId,"/jobs"),method:"put",data:e})}function p(e){return Object(r["a"])({url:"/sys/user/assignRoles",data:e,method:"put"})}}}]);