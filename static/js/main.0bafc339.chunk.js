(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(51)},29:function(e,t,a){},30:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),o=a.n(r),l=(a(29),a(5)),i=a(6),m=a(9),s=a(7),u=a(10),v=a(8),h=a(11),p=(a(30),function(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-content"},c.a.createElement(v.b,{to:"/"},c.a.createElement("h1",null,"See the most popular movies"))))}),d=a(15),g="https://api.themoviedb.org/3/",f="f98dc1d273be0526711770a13fba0bdc",E="http://image.tmdb.org/t/p/",b=(a(39),function(e){var t=e.image,a=e.title,n=e.text;return c.a.createElement("div",{className:"movieimage",style:{background:"linear-gradient(to bottom, rgba(0,0,0,0)\n      39%,rgba(0,0,0,0)\n      41%,rgba(0,0,0,0.65)\n      100%),\n      url('".concat(t,"'), #1c1c1c")}},c.a.createElement("div",{className:"movieimage-content"},c.a.createElement("div",{className:"movieimage-text"},c.a.createElement("h1",null,a),c.a.createElement("p",null,n))))}),N=(a(40),function(e){var t=e.header,a=e.loading,n=e.children;return c.a.createElement("div",{className:"grid"},t&&!a?c.a.createElement("h1",null,t):null,c.a.createElement("div",{className:"grid-content"},n.map(function(e,t){return c.a.createElement("div",{key:t,className:"grid-element"},e)})))}),k=(a(41),function(e){var t=e.text,a=e.onClick;return c.a.createElement("div",{className:"loadmorebtn",onClick:a},c.a.createElement("p",null,t))}),y=(a(42),function(e){var t=e.image,a=e.movieId,n=e.movieName,r=e.clickable;return c.a.createElement("div",{className:"moviethumb"},r?c.a.createElement(v.b,{to:{pathname:"/".concat(a),movieName:"".concat(n)}},c.a.createElement("img",{className:"clickable",src:t,alt:"moviethumb"})):c.a.createElement("img",{src:t,alt:"moviethumb"}))}),j=(a(43),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.timeout=null,a.doSearch=function(e){var t=a.props.callback;a.setState({value:e.target.value}),clearTimeout(a.timeout),a.timeout=setTimeout(function(){t(a.state.value)},500)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.value;return c.a.createElement("div",{className:"searchbar"},c.a.createElement("div",{className:"searchbar-content"},c.a.createElement("input",{type:"text",className:"searchbar-input",placeholder:"Search",onChange:this.doSearch,value:e})))}}]),t}(n.Component)),O=(a(44),function(){return c.a.createElement("div",{className:"loader"})}),I=(a(45),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={movies:[],movieImage:null,loading:!1,currentPage:0,totalPages:0,searchTerm:""},a.searchItems=function(e){var t="";a.setState({movies:[],loading:!0,searchTerm:e}),t=""===e?"".concat(g,"movie/popular?api_key=").concat(f,"&language=en-US&page=1"):"".concat(g,"search/movie?api_key=").concat(f,"&language=en-US&query=").concat(e),a.fetchItems(t)},a.loadMoreItems=function(){var e=a.state,t=e.searchTerm,n=e.currentPage,c="";a.setState({loading:!0}),c=""===t?"".concat(g,"movie/popular?api_key=").concat(f,"&language=en-US&page=").concat(n+1):"".concat(g,"search/movie?api_key=").concat(f,"&language=en-US&query=").concat(t,"&page=").concat(n+1),a.fetchItems(c)},a.fetchItems=function(e){var t=a.state,n=t.movies,c=t.movieImage;fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({movies:[].concat(Object(d.a)(n),Object(d.a)(e.results)),movieImage:c||e.results[0],loading:!1,currentPage:e.page,totalPages:e.total_pages})})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({loading:!0});var e="".concat(g,"movie/popular?api_key=").concat(f,"&language=en-US&page=1");this.fetchItems(e)}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.movieImage,n=e.loading,r=e.currentPage,o=e.totalPages,l=e.searchTerm;return c.a.createElement("div",{className:"home"},a?c.a.createElement("div",null,c.a.createElement(b,{image:"".concat(E).concat("w1280").concat(a.backdrop_path),title:a.original_title,text:a.overview}),c.a.createElement(j,{callback:this.searchItems})):null,c.a.createElement("div",{className:"home-grid"},c.a.createElement(N,{header:l?"Search Result":"Popular Movies",loading:n},t.map(function(e,t){return c.a.createElement(y,{key:t,clickable:!0,image:e.poster_path?"".concat(E).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})})),n?c.a.createElement(O,null):null,r<=o&&!n?c.a.createElement(k,{text:"Load More",onClick:this.loadMoreItems}):null))}}]),t}(n.Component)),S=a(23),_=(a(46),function(e){var t=e.movie;return c.a.createElement("div",{className:"navigation"},c.a.createElement("div",{className:"navigation-content"},c.a.createElement(v.b,{to:"/"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null,"/"),c.a.createElement("p",null,t)))}),w=(a(47),function(e){var t=e.movie,a=e.directors;return c.a.createElement("div",{className:"movieinfo",style:{background:t.backdrop_path?"url('".concat(E).concat("w1280").concat(t.backdrop_path,"')"):"#000"}},c.a.createElement("div",{className:"movieinfo-content"},c.a.createElement("div",{className:"movieinfo-thumb"},c.a.createElement(y,{image:t.poster_path?"".concat(E).concat("w500").concat(t.poster_path):"./images/no_image.jpg",clickable:!1})),c.a.createElement("div",{className:"movieinfo-text"},c.a.createElement("h1",null,t.title),c.a.createElement("h3",null,"PLOT"),c.a.createElement("p",null,t.overview),c.a.createElement("h3",null,"IMDB RATING"),c.a.createElement("div",{className:"rating"},c.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*t.vote_average}),c.a.createElement("p",{className:"score"},t.vote_average)),a.length>1?c.a.createElement("h3",null,"DIRECTORS"):c.a.createElement("h3",null,"DIRECTOR"),a.map(function(e,t){return c.a.createElement("p",{key:t,className:"director"},e.name)}))))}),x=(a(48),function(e){var t=e.actor;return c.a.createElement("div",{className:"actor"},c.a.createElement("img",{src:t.profile_path?"".concat(E).concat("w154").concat(t.profile_path):"./images/no_image.jpg",alt:"actorthumb"}),c.a.createElement("span",{className:"actor-name"},t.name),c.a.createElement("span",{className:"actor-character"},t.character))}),T=(a(49),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={movie:null,actors:null,directors:[],loading:!1},a.fetchItems=function(e){var t=a.props.match.params.movieId;fetch(e).then(function(e){return e.json()}).then(function(e){e.status_code?a.setState({loading:!1}):a.setState({movie:e},function(){var e="".concat(g,"movie/").concat(t,"/credits?api_key=").concat(f);fetch(e).then(function(e){return e.json()}).then(function(e){var n=e.crew.filter(function(e){return"Director"===e.job});a.setState({actors:e.cast,directors:n,loading:!1},function(){localStorage.setItem("".concat(t),JSON.stringify(a.state))})})})}).catch(function(e){return console.error("Error:",e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movieId;if(localStorage.getItem("".concat(e))){var t=JSON.parse(localStorage.getItem("".concat(e)));this.setState(Object(S.a)({},t))}else{this.setState({loading:!0});var a="".concat(g,"movie/").concat(e,"?api_key=").concat(f,"&language=en-US");this.fetchItems(a)}}},{key:"render",value:function(){var e=this.props.location.movieName,t=this.state,a=t.movie,n=t.directors,r=t.actors,o=t.loading;return c.a.createElement("div",{className:"movie"},a?c.a.createElement("div",null,c.a.createElement(_,{movie:e}),c.a.createElement(w,{movie:a,directors:n})):null,r?c.a.createElement("div",{className:"movie-grid"},c.a.createElement(N,{header:"Actors"},r.map(function(e,t){return c.a.createElement(x,{key:t,actor:e})}))):null,r||o?null:c.a.createElement("h1",null,"No movie found"),o?c.a.createElement(O,null):null)}}]),t}(n.Component)),C=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"404. This page doesn't exist"))},P=(a(50),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(v.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null),c.a.createElement(h.c,null,c.a.createElement(h.a,{path:"/",component:I,exact:!0}),c.a.createElement(h.a,{path:"/:movieId",component:T,exact:!0}),c.a.createElement(h.a,{component:C}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.0bafc339.chunk.js.map