"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[87072],{337815:(e,t,i)=>{i.d(t,{YS:()=>l,eF:()=>s,m_:()=>a});var r=i(619937),n=i(67347);function a(e,t,i,n,a){let l=new URLSearchParams,s=null!=e?e:"0";return l.append(r.NR.SOURCE_EVENT_ID,s),l.append(r.NR.DESTINATION,function(e){let t;try{t=decodeURIComponent(e)}catch(i){t=e}t.startsWith("http")?t.startsWith("http://")&&(t=t.replace("http://","https://")):t="https://"+t;try{return new URL(t).origin}catch(r){let i=t.match(/^(https?:\/\/[^\/]+)(\/|$)/);if(i&&i.length>1)return i[1];return e}}(t)||""),l.append(r.NR.EXPIRY,i?r.uV:r.ug),l.append(r.NR.PRIORITY,i?r.NR.CLICK_PRIORITY:r.NR.VIEW_PRIORITY),a&&l.append(r.NR.ADVERTISER_ID,a),n&&l.append(r.NR.CAMPAIGN_ID,n),l.append(r.NR.SOURCE_EVENT_TYPE,i?r.bC:r.Cu),"/attribution_source/?"+l.toString()}async function l(e,t,i,r,l,s,o){let{appType:d,osType:u}=s||{};if(["Pin","pinImpressions"].includes(e)&&t&&r){(0,n.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"start",appType:d,osType:u}});try{var c;if(!(null!==(c=window.document.featurePolicy)&&void 0!==c&&c.allowsFeature("attribution-reporting"))){(0,n.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"skipped",message:"attribution-reporting is not enabled",appType:d,osType:u}});return}let e=a(i,r||"",!1,l,o),t=await window.fetch(e,{keepalive:!0,attributionReporting:{eventSourceEligible:!0,triggerEligible:!1}});if(!t.ok)throw Error("server request failed.");(0,n.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"success",appType:d,osType:u}})}catch(e){(0,n.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"failed",error:e.name,appType:d,osType:u}})}}else(0,n.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"missing_param",appType:d,osType:u}})}function s(e){if(e){let t=e.toLowerCase();if(t.includes("windows"))return"windows xp"===t?1:"windows vista"===t?2:"windows 7"===t?3:"windows 8"===t?4:12;if(t.includes("mac os"))return 5;if(t.includes("android"))return 7;if(t.includes("ios"))return 6;if(t.includes("ubuntu"))return 8;if(t.includes("chromium os"))return 13}return 0}},48714:(e,t,i)=>{i.d(t,{Se:()=>f,iw:()=>w,gV:()=>h,G3:()=>P,Gj:()=>b,Jd:()=>_,$3:()=>g});var r=i(56641),n=i(231486),a=i(226198),l=i(186656),s=i(250059);let o=e=>"string"!=typeof e&&e?e.state:null;var d=i(643913),u=i(547239),c=i(508847),p=i(579164),m=i(333155);let _=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},h=({isOffsiteUrl:e,event:t})=>!e&&(t.metaKey||t.ctrlKey),g=({location:e,pinId:t,surface:i})=>!!i&&!m.ZF.includes(i)||e.pathname.includes(t),f=(e,t)=>{var i,r;let l=Math.round(1e3*Math.random())+"",s=Math.round(1e3*Math.random())+"";n.t8((0,a.GS)(l),s);let o={token:`${l}-${s}`,url:e,...t&&!t.params?t.queryParams:(null==t?void 0:t.params)&&{pin:null!==(i=t.params.pinId)&&void 0!==i?i:void 0,isThirdPartyAd:null!==(r=t.params.isThirdPartyAd)&&void 0!==r?r:void 0,csr:t.params.csrId&&!t.params.pinId?t.params.csrId:void 0,client_tracking_params:t.params.clientTrackingParams,aux_data:t.params.auxData?JSON.stringify(t.params.auxData):void 0}};return`/offsite/?${(0,d.Z)(o)}`},b=(e,t)=>{(0,r.Z)(f(e,t),!0,null==t?void 0:t.features)},w=async({clientTrackingParams:e,href:t,isMounted:i,pinId:r,spamCheckCallback:n})=>{let a=await (0,l.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:r,url:t}});if(!a.resource_response.error&&i){let e=a.resource_response.data||{},{message:t,redirect_status:i,url:r}=e,l=["blocked","suspicious","porn"].includes(i);n({blocked:l,message:t,redirectStatus:i,sanitized_url:r})}},P=({event:e,onHistoryChange:t,href:i,history:n,target:a})=>{let l=(0,s.Z)(i),d=o(i),m=(0,u.Z)(l);m===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===a?(0,r.Z)(l,"blank"===a):n&&m===p.Z.SAME_ORIGIN&&(n.push((0,c.Z)({url:l}),null!=d?d:{}),t&&t({event:e}))}},287072:(e,t,i)=>{i.d(t,{Z:()=>p});var r=i(667294),n=i(616550),a=i(768559),l=i(48714),s=i(188335),o=i(250059),d=i(149230),u=i(108234),c=i(67347);function p(e){var t,i,p;let{externalData:m,href:_,onHistoryChange:h,target:g}=e,[f,b]=(0,r.useState)(null),[w,P]=(0,r.useState)(!1),v=(0,n.useHistory)(),k=(0,n.useLocation)(),I=(0,o.Z)(_),y=(0,d.Z)({url:I}),{showWarning:S}=null!==(t=(0,u.s)())&&void 0!==t?t:{},{pin:A,surface:R}=m||{},x=A?(0,a.Z)({boardUrl:null===(i=A.board)||void 0===i?void 0:i.url,location:k,pinId:A.entityId,pinnerUserName:null===(p=A.pinner)||void 0===p?void 0:p.username,storyPinDataId:A.storyPinDataId,trackingParams:A.trackingParams,trackingParamsMap:A.trackingParamsMap}):null,E=(0,s.Z)();return(0,r.useEffect)(()=>(P(!0),()=>{P(!1)}),[]),(0,r.useEffect)(()=>{y&&A&&null===f&&w&&(!A.promoter||A.isDownstreamPromotion)&&(0,l.$3)({location:k,pinId:A.entityId,surface:R})&&(0,l.iw)({clientTrackingParams:x,isMounted:w,pinId:A.entityId,spamCheckCallback:e=>b(e),href:I})},[x,A,R,I,y,w,k,f]),({event:e})=>{if(!(0,l.gV)({isOffsiteUrl:y,event:e})){if(e.preventDefault(),!_||"string"==typeof _&&_.startsWith("#")){(0,c.nP)("link_navigation_empty_href",{sampleRate:1,tags:{route:k.pathname,href:_}});return}if(y||null!=m&&m.dangerouslyForceOffsiteUrl){var t;E({auxData:null==m?void 0:m.auxData,clientTrackingParams:x,pin:(null==m?void 0:m.pin)&&{attributionSourceId:m.pin.attributionSourceId,campaignId:m.pin.campaignId,isPromoted:m.pin.isPromoted,pinPromotionId:m.pin.pinPromotionId,isThirdPartyAd:m.pin.isThirdPartyAd,advertiserId:m.pin.advertiserId},pinId:null==m?void 0:null===(t=m.pin)||void 0===t?void 0:t.entityId,queryParams:null==m?void 0:m.queryParams,showWarning:S,spamCheck:f,url:I})}else(0,l.G3)({event:e,href:_,history:v,onHistoryChange:h,target:"blank"===g?"blank":null})}}}},188335:(e,t,i)=>{i.d(t,{Z:()=>m});var r=i(983722),n=i(619937),a=i(337815),l=i(366284),s=i(407043),o=i(48714),d=i(43760);let u=(e,t,i)=>{let r=document.createElement("a");r.setAttribute("href",t),r.setAttribute("target","_blank"),r.setAttribute("rel","noopener nofollow noreferrer"),r.style.cursor="pointer",r.style.display="block",r.setAttribute(n.$N.ATTRIBUTION_SOURCE_ID,e),r.setAttribute(n.$N.ATTRIBUTE_DESTINATION,i),r.setAttribute(n.$N.ATTRIBUTE_ON,i),r.click()},c=(e,t,i,r,l)=>{let s=(0,a.m_)(e,i,!0,r,l),o=document.createElement("a");o.setAttribute("href",t),o.setAttribute("target","_blank"),o.setAttribute("rel","noopener nofollow noreferrer"),o.style.cursor="pointer",o.style.display="block",o.setAttribute(n.NR.SOURCE,s),o.click()},p=()=>{let{logContextEvent:e}=(0,s.v)();return({attributionSourceId:t,auxData:i,campaignId:n,clientTrackingParams:a,href:s,isPromoted:d,pinId:p,pinPromotionId:m,isThirdPartyAd:_,advertiserId:h})=>{var g,f,b;if(!d)return!1;let w=(0,r.Z)(),P=(0,o.Se)(s,{params:{pinId:p,csrId:null,clientTrackingParams:a,auxData:i,isThirdPartyAd:_}}),v=null!==(g=null==w?void 0:w.userAgent.browserName)&&void 0!==g?g:"";if((0,l.G6)(v)){let{group:i}=null!==(f=null==w?void 0:w.experimentsClient.checkExperiment("m10n_event_conversion_measurement"))&&void 0!==f?f:{},r=null!=w&&w.userAgent.browserVersion?w.userAgent.browserVersion:"0.0",l=parseFloat(r.split(".")[0]+"."+r.split(".")[1]);if(t&&l>=14.1&&["enabled_safari"].includes(i))return u(t,P,s),e({event_type:101,clientTrackingParams:a,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:n||"",is_pcm:!0,attribution_source_id:t,page_url:s}}),!0}else if((0,l.i7)(v)&&null!==(b=window.document.featurePolicy)&&void 0!==b&&b.allowsFeature("attribution-reporting"))return c(t,P,s,n,h),e({event_type:101,clientTrackingParams:a,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:n||"",is_arapi:!0,attribution_source_id:t,page_url:s}}),!0;return!1}},m=e=>{let t=p();return({auxData:i,clientTrackingParams:r,pin:n,pinId:a,queryParams:l,showWarning:s,spamCheck:u,url:c})=>{if("undefined"!=typeof window&&window.Windows){(0,d.Z)(c,{clientTrackingParams:r,pinId:a,hasPin:!!n,auxData:i,isThirdPartyAd:null==n?void 0:n.isThirdPartyAd});return}if(!n&&!(null!=e&&e.isFromClickthroughLink)){(0,o.Gj)(c,l?{queryParams:l}:{params:{pinId:a}});return}if(null!=u&&u.blocked){null==s||s(u);return}n&&t({attributionSourceId:n.attributionSourceId,auxData:i,campaignId:n.campaignId?String(n.campaignId):null,clientTrackingParams:r,href:c,isPromoted:n.isPromoted,pinId:a,pinPromotionId:n.pinPromotionId?String(n.pinPromotionId):null,isThirdPartyAd:n.isThirdPartyAd,advertiserId:n.advertiserId?n.advertiserId:null})||(0,o.Gj)(c,{params:{clientTrackingParams:r,auxData:i,pinId:a,isThirdPartyAd:null==n?void 0:n.isThirdPartyAd}})}}},250059:(e,t,i)=>{i.d(t,{Z:()=>r});let r=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},508847:(e,t,i)=>{i.d(t,{Z:()=>a});let r=(e,t)=>0===e.lastIndexOf(t,0);var n=i(567831);let a=({url:e})=>{let t=(0,n.Z)("/");return r(e,t)?e.substr(t.length-1):e}},43760:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(186656),n=i(48714);function a(e,t){let{auxData:i,clientTrackingParams:a,hasPin:l,pinId:s,isThirdPartyAd:o}=t||{},d={pin_id:s,check_only:!0,client_tracking_params:l?a:void 0,url:e,aux_data:JSON.stringify(i)};o&&(d.third_party_ad=s,delete d.pin_id),(0,r.Z)({url:"/v3/offsite/",data:d}).then(t=>{if(t&&t.resource_response&&!t.resource_response.error){let{resource_response:e}=t,{redirect_status:i,url:r}=e.data,n=["blocked","suspicious","porn"].includes(i);if(!n){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){let e=new window.Windows.Foundation.Uri(r);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,n.Gj)(e,{params:l?{pinId:s,clientTrackingParams:a,auxData:i,isThirdPartyAd:o}:{pinId:s}})})}},333155:(e,t,i)=>{i.d(t,{UP:()=>s,Wv:()=>n,ZF:()=>r,zI:()=>a,zl:()=>l});let r=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],n=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],a=[...n,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],l=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],s=["BaseBoardPinGrid"]},108234:(e,t,i)=>{i.d(t,{Z:()=>g,s:()=>h});var r=i(667294),n=i(425288),a=i(608575),l=i(883119),s=i(121151),o=i(898781),d=i(349700),u=i(785893);let c=()=>{var e;let t=(0,o.ZP)(),{dismissWarning:i}=null!==(e=h())&&void 0!==e?e:{};return(0,u.jsx)(l.xu,{paddingX:3,children:(0,u.jsx)(l.zx,{fullWidth:!0,color:"red",onClick:i,text:t.bt("Aceptar", "Okay", "Dismiss a modal stating that clicking through to a link has been blocked", undefined, true)})})},p=()=>{let e=(0,o.ZP)();return(0,u.jsx)(l.xv,{inline:!0,weight:"bold",children:(0,u.jsx)(l.rU,{target:"blank",href:"https://policy.pinterest.com/community-guidelines#section-spam",display:"inlineBlock",underline:"hover",children:e.bt("Más información", "Learn more", "Link text leading to policy website", undefined, true)})})},m=({message:e,sanitized_url:t})=>{var i;let r=(0,o.ZP)(),{dismissWarning:n}=null!==(i=h())&&void 0!==i?i:{};return(0,u.jsx)(s.ZP,{accessibilityModalLabel:r.bt("Hemos bloqueado este enlace", "We have blocked this link", "Modal label when clicking a spammy link", undefined, true),onDismiss:n,heading:r.bt("¡Atención!", "Heads up!", "Modal heading when clicking through to a link has been blocked", undefined, true),footer:(0,u.jsx)(c,{}),children:(0,u.jsxs)(l.xu,{padding:6,children:[(0,u.jsx)(l.xv,{children:(0,d.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,u.jsx)(p,{},"learnMoreLink")})}),(0,u.jsxs)(l.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,u.jsx)(l.xu,{marginEnd:3,children:(0,u.jsx)(l.JO,{accessibilityLabel:r.bt("Dirección de enlace bloqueada", "Blocked link address", "Icon label preceding a block url", undefined, true),color:"error",icon:"report",inline:!0,size:24})}),(0,u.jsx)(l.xv,{inline:!0,lineClamp:1,weight:"bold",children:a.parse(t).hostname})]})]})})},{Provider:_,useMaybeHook:h}=(0,n.Z)("SpammyClickthrough");function g({children:e}){let[t,i]=(0,r.useState)(null),n=(0,r.useCallback)(()=>{i(null)},[i]),a=(0,r.useCallback)(e=>{i(e)},[i]),l=(0,r.useMemo)(()=>({dismissWarning:n,showWarning:a}),[n,a]);return(0,u.jsxs)(_,{value:l,children:[t&&(0,u.jsx)(m,{...t}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/87072.es_ES-dbf85b3693c11cef.mjs.map