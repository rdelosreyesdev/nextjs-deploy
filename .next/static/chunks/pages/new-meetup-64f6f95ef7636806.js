(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37],{1662:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new-meetup",function(){return r(3466)}])},2281:function(e,t,r){"use strict";var n=r(5893),s=r(6099),i=r.n(s);t.Z=function(e){return(0,n.jsx)("div",{className:i().card,children:e.children})}},3466:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(5893),s=r(7294),i=r(2281),c=r(5074),u=r.n(c),o=function(e){let t=(0,s.useRef)(),r=(0,s.useRef)(),c=(0,s.useRef)(),o=(0,s.useRef)();return(0,n.jsx)(i.Z,{children:(0,n.jsxs)("form",{className:u().form,onSubmit:function(n){n.preventDefault();let s=t.current.value,i=r.current.value,u=c.current.value,l=o.current.value;e.onAddMeetup({title:s,image:i,address:u,description:l})},children:[(0,n.jsxs)("div",{className:u().control,children:[(0,n.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),(0,n.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),(0,n.jsxs)("div",{className:u().control,children:[(0,n.jsx)("label",{htmlFor:"image",children:"Meetup Image"}),(0,n.jsx)("input",{type:"url",required:!0,id:"image",ref:r})]}),(0,n.jsxs)("div",{className:u().control,children:[(0,n.jsx)("label",{htmlFor:"address",children:"Address"}),(0,n.jsx)("input",{type:"text",required:!0,id:"address",ref:c})]}),(0,n.jsxs)("div",{className:u().control,children:[(0,n.jsx)("label",{htmlFor:"description",children:"Description"}),(0,n.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:o})]}),(0,n.jsx)("div",{className:u().actions,children:(0,n.jsx)("button",{children:"Add Meetup"})})]})})},l=r(1163);let d=()=>{let e=(0,l.useRouter)(),t=async t=>{let r=await fetch("/api/new-meetup",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});await r.json(),e.replace("/")};return(0,n.jsx)(o,{onAddMeetup:t})};var a=d},5074:function(e){e.exports={form:"NewMeetupForm_form__dA95d",control:"NewMeetupForm_control__jRNhP",actions:"NewMeetupForm_actions__2fkck"}},6099:function(e){e.exports={card:"Card_card__73YTa"}},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1662)}),_N_E=e.O()}]);