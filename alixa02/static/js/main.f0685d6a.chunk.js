(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,a){t.exports=a(53)},29:function(t,e,a){},53:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(21),l=a.n(o),s=(a(29),a(56)),i=a(54),r=a(55),u=a(3),d=a(5),m=a(7),C=a(6),h=a(8),b=function(t){function e(t){return Object(u.a)(this,e),Object(m.a)(this,Object(C.a)(e).call(this,t))}return Object(h.a)(e,t),Object(d.a)(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(t){}},{key:"shouldComponentUpdate",value:function(t,e){}},{key:"componentWillUpdate",value:function(t,e){}},{key:"componentDidUpdate",value:function(t,e){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"About ... "))}}]),e}(n.Component),v=a(11),f=function t(){Object(u.a)(this,t),this.IdContact=0,this.LastNameContact="",this.FirstNameContact="",this.AddressContact="",this.CityContact="",this.ZIPContact="",this.FollowedContact=!1},p=function(t){function e(t){var a;return Object(u.a)(this,e),void 0!==(a=Object(m.a)(this,Object(C.a)(e).call(this,t))).props.contactselected?a.contactselected=a.props.contactselected:a.contactselected=new f,a.state={selectContact:a.contactselected},console.log(a.props.contactselected),a}return Object(h.a)(e,t),Object(d.a)(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(t){this.setState({selectContact:t.contactselected})}},{key:"componentWillUpdate",value:function(t,e){}},{key:"componentDidUpdate",value:function(t,e){}},{key:"componentWillUnmount",value:function(){}},{key:"getFicheDetail",value:function(){return c.a.createElement("div",null,c.a.createElement("h3",null,this.state.selectContact.FirstNameContact," ",this.state.selectContact.LastNameContact),c.a.createElement("h3",null,this.state.selectContact.AddressContact),c.a.createElement("h3",null,this.state.selectContact.ZIPContact," ",this.state.selectContact.CityContact))}},{key:"render",value:function(){return c.a.createElement("div",null,this.getFicheDetail())}}]),e}(n.Component),E=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(m.a)(this,Object(C.a)(e).call(this,t))).tabname={IdContact:1,LastNameContact:2,FirstNameContact:3,AddressContact:4,CityContact:5,ZIPContact:6,FollowedContact:7},a.saisie=function(t){switch(a.contactselected=a.state.contactselected,parseInt(t.target.id)){case a.tabname.IdContact:a.contactselected.IdContact=t.target.value;break;case a.tabname.FirstNameContact:a.contactselected.FirstNameContact=t.target.value;break;case a.tabname.LastNameContact:a.contactselected.LastNameContact=t.target.value;break;case a.tabname.CityContact:a.contactselected.CityContact=t.target.value;break;case a.tabname.AddressContact:a.contactselected.AddressContact=t.target.value;break;case a.tabname.FollowedContact:a.contactselected.FollowedContact=t.target.value}a.setState({contactselected:a.contactselected})},a.submit=function(t){t.preventDefault(!1),0!==a.contactselected.IdContact&&a.props.action(t,a.contactselected)},void 0===t.contact||null===t.contact?a.init():a.contactselected=a.props.contact,a.state={contactselected:a.contactselected},a}return Object(h.a)(e,t),Object(d.a)(e,[{key:"init",value:function(){this.contactselected=new f,this.contactselected.IdContact=0}},{key:"getObjet",value:function(t){switch(parseInt(t)){case this.tabname.IdContact:return this.contactselected.IdContact;case this.tabname.FirstNameContact:return this.contactselected.FirstNameContact;case this.tabname.LastNameContact:return this.contactselected.LastNameContact;case this.tabname.CityContact:return this.contactselected.CityContact;case this.tabname.AddressContact:return this.contactselected.AddressContact;case this.tabname.FollowedContact:return this.contactselected.FollowedContact}}},{key:"getlibelle",value:function(t){switch(parseInt(t)){case this.tabname.IdContact:return"Id";case this.tabname.FirstNameContact:return"Nom";case this.tabname.LastNameContact:return"Pr\xe9nom";case this.tabname.CityContact:return"Ville";case this.tabname.AddressContact:return"Adresse";case this.tabname.FollowedContact:return"Suivi"}}},{key:"getrenderform",value:function(){for(var t=this,e=[],a=1;a<=this.tabname.FollowedContact;a++)e.push(a);return e.map(function(e){return c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{for:e},t.getlibelle(e)),c.a.createElement("input",{onChange:t.saisie,type:"text",value:t.getObjet(e),class:"form-control",id:e,placeholder:"Enter "+t.getlibelle(e)}))})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("form",{name:"monForm",novalidate:!0,onSubmit:this.submit},this.getrenderform(),c.a.createElement("input",{type:"submit",value:"Ok"})))}}]),e}(n.Component),k=a(12),y=a.n(k),j="http://localhost:3000/user/",g=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(m.a)(this,Object(C.a)(e).call(this,t))).bajout=!1,a.maxcontact=10,a.selectedModContact=function(t){a.contactselected=a.tabcontacts.filter(function(e){return e.IdContact==t.target.id})[0],a.setState({selectContact:a.contactselected}),a.bajout=!a.state.bajout,a.bliste=!a.state.bliste,a.setState({bajout:a.bajout,bliste:a.bliste})},a.deleteContact=function(t){var e;e=a.tabcontacts.filter(function(e){return e.IdContact!=t.target.id}),y.a.delete(j+t.target.id).then(function(t){console.log(".. "+t),console.log("... "+t.data)},function(t){return console.log(t)}),a.setState({tabcontacts:e})},a.ajout=function(t){a.bajout=!a.state.bajout,a.bliste=!a.state.bliste,a.setState({bajout:a.bajout,bliste:a.bliste,selectContact:void 0})},a.ajoutC=function(t,e){var n=a.state.tabcontacts;if(a.bajout=!a.state.bajout,a.bliste=!0,void 0!==e&&null!==e){var c={id:parseInt(e.IdContact),LastNameContact:e.LastNameContact,FirstNameContact:e.FirstNameContact,AddressContact:e.AddressContact,CityContact:e.CityContact,ZIPContact:e.ZIPContact,FollowedContact:e.FollowedContact};n.push(e),y.a.post(j,c).then(function(t){console.log(".. "+t),console.log("... "+t.data)},function(t){return console.log(t)})}a.setState({bajout:a.bajout,bliste:a.bliste}),a.reset()},a.modifieC=function(t,e){var n=a.state.tabcontacts;if(console.log(n),a.bajout=!a.state.bajout,a.bliste=!0,void 0!==e&&null!==e){for(var c={id:parseInt(e.IdContact),LastNameContact:e.LastNameContact,FirstNameContact:e.FirstNameContact,AddressContact:e.AddressContact,CityContact:e.CityContact,ZIPContact:e.ZIPContact,FollowedContact:e.FollowedContact},o=0;o<n.length;o++)if(n[o].IdContact===c.id){n[o]=e;break}y.a.put(j+c.id,c).then(function(t){console.log(".. "+t),console.log("... "+t.data)},function(t){return console.log(t)})}a.setState({bajout:a.bajout,bliste:a.bliste,tabcontacts:n})},a.selectedContact=a.selectedContact.bind(Object(v.a)(Object(v.a)(a))),a.state={selectContact:void 0,tabcontacts:[],bajout:!1,bliste:!0},a.getCreateTab(),a}return Object(h.a)(e,t),Object(d.a)(e,[{key:"selectedContact",value:function(t){this.contactselected=this.tabcontacts.filter(function(e){return e.IdContact==t.target.id})[0],this.setState({selectContact:this.contactselected})}},{key:"reset",value:function(){this.contactselected=void 0,this.setState({selectContact:this.contactselected})}},{key:"getFicheDetail",value:function(){return c.a.createElement("div",null,c.a.createElement("h3",null,this.state.selectContact.FirstNameContact," ",this.state.selectContact.LastNameContact),c.a.createElement("h3",null,this.state.selectContact.AddressContact),c.a.createElement("h3",null,this.state.selectContact.ZIPContact," ",this.state.selectContact.CityContact))}},{key:"getCreateTab",value:function(){var t=this;this.tabcontacts=[],y.a.get(j).then(function(e){for(var a=0;a<e.data.length;a++){var n=new f;n.IdContact=parseInt(e.data[a].id),n.AddressContact=e.data[a].AddressContact,n.ZIPContact=e.data[a].ZIPContact,n.CityContact=e.data[a].CityContact,n.LastNameContact=e.data[a].LastNameContact,n.FirstNameContact=e.data[a].FirstNameContact,n.FollowedContact=e.data[a].FollowedContact,t.tabcontacts.push(n)}t.setState({tabcontacts:t.tabcontacts})})}},{key:"getAfficheListe",value:function(){var t=this;return this.state.tabcontacts.map(function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("a",{href:"#",id:e.IdContact,onClick:t.selectedContact},e.IdContact)),c.a.createElement("td",null,e.LastNameContact),c.a.createElement("td",null,e.FirstNameContact),c.a.createElement("td",null,c.a.createElement("a",{href:"#",id:e.IdContact,onClick:t.deleteContact},"DELETE")),c.a.createElement("td",null,c.a.createElement("a",{href:"#",id:e.IdContact,onClick:t.selectedModContact},"Modifier")))})}},{key:"componentWillReceiveProps",value:function(t){}},{key:"render",value:function(){var t=this,e=!1,a=!1;return console.log(this.state.bajout),console.log(this.state.selectContact),this.state.bajout&&void 0!==this.state.selectContact&&(e=!0),this.state.bajout&&void 0===this.state.selectContact&&(a=!0),console.log(a),c.a.createElement("div",null,c.a.createElement("button",{class:"btn btn-success",onClick:function(e){return t.reset()}},"Reset"),"\xa0\xa0\xa0",c.a.createElement("button",{class:"btn btn-success",onClick:this.ajout},"Ajout"),c.a.createElement("div",null,!0===e&&c.a.createElement("div",null,c.a.createElement("h1",null,"Modification"),c.a.createElement(E,{action:this.modifieC,contact:this.state.selectContact}))),c.a.createElement("div",null,!0===a&&c.a.createElement("div",null,c.a.createElement("h1",null,"Ajout"),c.a.createElement(E,{action:this.ajoutC}))),this.state.bliste&&c.a.createElement("table",{class:"table"},c.a.createElement("thead",{class:"thead-dark"},c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"N\xb0 de contact"),c.a.createElement("th",{scope:"col"},"First"),c.a.createElement("th",{scope:"col"},"Last"))),c.a.createElement("tbody",null,this.getAfficheListe())),void 0!==this.state.selectContact&&c.a.createElement("div",{class:"panel panel-default"},c.a.createElement("h2",null,"Fiche S\xe9lectionn\xe9e : "),c.a.createElement(p,{contactselected:this.state.selectContact})))}}]),e}(n.Component),I=function(t){function e(t){return Object(u.a)(this,e),Object(m.a)(this,Object(C.a)(e).call(this,t))}return Object(h.a)(e,t),Object(d.a)(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(t){}},{key:"shouldComponentUpdate",value:function(t,e){}},{key:"componentWillUpdate",value:function(t,e){}},{key:"componentDidUpdate",value:function(t,e){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"HOME "))}}]),e}(n.Component),O=function(t){function e(t){var a;return Object(u.a)(this,e),(a=Object(m.a)(this,Object(C.a)(e).call(this,t))).state={logged:!1},a}return Object(h.a)(e,t),Object(d.a)(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(t){}},{key:"componentWillUpdate",value:function(t,e){}},{key:"componentDidUpdate",value:function(t,e){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var t=this;return console.log(this.state.logged),this.state.logged?c.a.createElement("nav",{class:"navbar navbar-default"},c.a.createElement("div",{class:"container-fluid"},c.a.createElement("ul",{class:"nav navbar-nav"},c.a.createElement("li",{class:"nav-item"},c.a.createElement(i.a,{class:"nav-link",to:"/home"},"Home")),c.a.createElement("li",{class:"nav-item"},c.a.createElement(i.a,{class:"nav-link",to:"/about"},"About")),c.a.createElement("li",{class:"nav-item"},c.a.createElement(i.a,{class:"nav-link",to:"/Contact"},"Mes Contacts"))),c.a.createElement("hr",null),c.a.createElement(r.a,{path:"/home",component:I}),c.a.createElement(r.a,{path:"/about",component:b}),c.a.createElement(r.a,{path:"/Contact",component:g}))):c.a.createElement("input",{type:"checkbox",onChange:function(e){return t.setState({logged:!t.state.logged})}})}}]),e}(n.Component);var F=function(){return c.a.createElement(s.a,null,c.a.createElement("nav",{class:"navbar navbar-default"},c.a.createElement("div",{class:"container-fluid",id:"menu"},c.a.createElement("ul",{class:"nav navbar-nav"},c.a.createElement("li",{class:"nav-item"},c.a.createElement(i.a,{class:"nav-link",to:"/"},"Login"))),c.a.createElement(r.a,{path:"/",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.f0685d6a.chunk.js.map