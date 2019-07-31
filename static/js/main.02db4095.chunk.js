(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(18)},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),l=n(8),i=n.n(l),r=(n(16),n(17),n(6)),c=n(9),d=n(1),s=n(2),u=n(4),m=n(3),f=n(5),p=function(t){function e(){var t,n;Object(d.a)(this,e);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.handleInput=function(t){var e=t.target.value;n.setState({title:e})},n.handleSubmit=function(t){t.preventDefault(),n.state.title&&(n.props.addNewTodo(n.state.title),n.setState({title:""}))},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state.title;return a.a.createElement("form",{onSubmit:this.handleSubmit,onBlur:this.handleSubmit},a.a.createElement("input",{name:"todo",value:t,onChange:this.handleInput,className:"new-todo",placeholder:"What needs to be done?"}))}}]),e}(a.a.Component),h=function(t){var e=t.toggleAll;return a.a.createElement("div",null,a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:e}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"))},g=function(t){function e(){var t,n;Object(d.a)(this,e);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(a)))).state={isEditing:!1,title:n.props.todo.title},n.startEdit=function(){n.setState({isEditing:!0})},n.editTitle=function(t){var e=t.target.value;n.setState({title:e})},n.handleSubmit=function(t){t.preventDefault(),n.state.title&&(n.props.editTodo(n.state.title,n.props.todo.id),n.setState({isEditing:!1}))},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props,e=t.deleteItem,n=t.todo,o=t.toggleChecked,l=this.state,i=l.isEditing,r=l.title;return a.a.createElement("li",{className:n.completed?"completed":""},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",id:n.id,checked:n.completed,onChange:function(){return o(n.id)}}),i?a.a.createElement("form",{onSubmit:this.handleSubmit,onBlur:this.handleSubmit},a.a.createElement("input",{onChange:this.editTitle,value:r,className:"new-todo",type:"text",autoFocus:!0})):a.a.createElement(a.a.Fragment,null,a.a.createElement("label",{onDoubleClick:this.startEdit},n.title),a.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return e(n.id)}}))))}}]),e}(a.a.Component),b=function(t){var e=t.todoList,n=t.filterByButton,o=t.toggleChecked,l=t.deleteItem,i=t.editTodo;return a.a.createElement("ul",{className:"todo-list"},e.filter(function(t){return e=t,"Completed"===n?e.completed:"Active"===n?!e.completed:e;var e}).map(function(t){return a.a.createElement(g,{key:t.id,todo:t,toggleChecked:o,deleteItem:l,editTodo:i})}))},E=function(t){function e(){var t,n;Object(d.a)(this,e);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(a)))).state={idForButton:1},n.filterByAndToggleCSS=function(t,e){n.setState({idForButton:t}),n.props.handleFilter(e)},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{href:"#/",className:1===this.state.idForButton&&"selected",onClick:function(){return t.filterByAndToggleCSS(1,"All")}},"All")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/active",className:2===this.state.idForButton&&"selected",onClick:function(){return t.filterByAndToggleCSS(2,"Active")}},"Active")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/completed",className:3===this.state.idForButton&&"selected",onClick:function(){return t.filterByAndToggleCSS(3,"Completed")}},"Completed")))}}]),e}(a.a.Component),v=function(t){var e=t.todoList,n=t.deleteAllCompletedTodos;return a.a.createElement("button",{type:"button",className:"clear-completed",style:{display:"block"},onClick:n},e.some(function(t){return!0===t.completed})&&"Clear Completed")},y=function(t){function e(){var t,n;Object(d.a)(this,e);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(u.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(a)))).state={todoList:[],filterByButton:"",count:1},n.addNewTodo=function(t){var e={title:t,id:n.state.count,completed:!1};n.setState(function(t){return{todoList:[].concat(Object(c.a)(t.todoList),[e]),count:t.count+1}})},n.editTodo=function(t,e){n.setState(function(n){return{todoList:n.todoList.map(function(n){return n.id===e?Object(r.a)({},n,{title:t}):n})}})},n.countUncompletedTodos=function(){return n.state.todoList.filter(function(t){return!t.completed}).length},n.deleteAllCompletedTodos=function(){n.setState(function(t){return{todoList:t.todoList.filter(function(t){return!t.completed})}})},n.deleteItem=function(t){n.setState(function(e){return{todoList:e.todoList.filter(function(e){return e.id!==t})}})},n.handleFilter=function(t){n.setState({filterByButton:t})},n.toggleAll=function(){n.setState(function(t){var e=t.todoList.every(function(t){return t.completed});return{todoList:t.todoList.map(function(t){return Object(r.a)({},t,{completed:!e})})}})},n.toggleChecked=function(t){n.setState(function(e){return{todoList:e.todoList.map(function(e){return e.id===t?Object(r.a)({},e,{completed:!e.completed}):e})}})},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state,e=t.todoList,n=t.filterByButton,o=this.countUncompletedTodos();return a.a.createElement("section",{className:"todoapp"},a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement(p,{addNewTodo:this.addNewTodo})),a.a.createElement("section",{className:"main",style:{display:"block"}},a.a.createElement(h,{toggleAll:this.toggleAll}),a.a.createElement(b,{filterByButton:n,todoList:e,toggleChecked:this.toggleChecked,deleteItem:this.deleteItem,editTodo:this.editTodo})),a.a.createElement("footer",{className:"footer",style:{display:"block"}},a.a.createElement("span",{className:"todo-count"},o," items left"),a.a.createElement(E,{handleFilter:this.handleFilter}),a.a.createElement(v,{todoList:e,deleteAllCompletedTodos:this.deleteAllCompletedTodos})))}}]),e}(o.Component);i.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.02db4095.chunk.js.map