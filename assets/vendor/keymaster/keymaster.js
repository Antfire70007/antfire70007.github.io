!function(n){for(var c={},u={16:!1,18:!1,17:!1,91:!1},t="all",a={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},o={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},s=function(e){return o[e]||e.toUpperCase().charCodeAt(0)},d=[],p=1;p<20;p++)o["f"+p]=111+p;function h(e,n){for(var t=e.length;t--;)if(e[t]===n)return t;return-1}var g={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};function r(e){var n,t,o,r,i,l=e.keyCode;if(-1==h(d,l)&&d.push(l),(l=93!=l&&224!=l?l:91)in u)for(t in u[l]=!0,a)a[t]==l&&(y[t]=!0);else{var f=e;for(p in u)u[p]=f[g[p]];if(y.filter.call(this,e)&&l in c)for(i=v(),o=0;o<c[l].length;o++)if((n=c[l][o]).scope==i||"all"==n.scope){for(t in r=0<n.mods.length,u)(!u[t]&&-1<h(n.mods,+t)||u[t]&&-1==h(n.mods,+t))&&(r=!1);(0!=n.mods.length||u[16]||u[18]||u[17]||u[91])&&!r||!1===n.method(e,n)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble)&&(e.cancelBubble=!0)}}}function y(e,n,t){var o,r=k(e);void 0===t&&(t=n,n="all");for(var i=0;i<r.length;i++)o=[],1<(e=r[i].split("+")).length&&(o=m(e),e=[e[e.length-1]]),e=e[0],(e=s(e))in c||(c[e]=[]),c[e].push({shortcut:r[i],scope:n,method:t,key:r[i],mods:o})}for(p in a)y[p]=!1;function v(){return t||"all"}function k(e){return""==(e=(e=e.replace(/\s/g,"")).split(","))[e.length-1]&&(e[e.length-2]+=","),e}function m(e){for(var n=e.slice(0,e.length-1),t=0;t<n.length;t++)n[t]=a[n[t]];return n}function e(e,n,t){e.addEventListener?e.addEventListener(n,t,!1):e.attachEvent&&e.attachEvent("on"+n,function(){t(window.event)})}e(document,"keydown",function(e){r(e)}),e(document,"keyup",function(e){var n,t=e.keyCode;if(0<=(e=h(d,t))&&d.splice(e,1),(t=93!=t&&224!=t?t:91)in u)for(n in u[t]=!1,a)a[n]==t&&(y[n]=!1)}),e(window,"focus",function(){for(p in u)u[p]=!1;for(p in a)y[p]=!1});var i=n.key;n.key=y,n.key.setScope=function(e){t=e||"all"},n.key.getScope=v,n.key.deleteScope=function(e){var n,t,o;for(n in c)for(t=c[n],o=0;o<t.length;)t[o].scope===e?t.splice(o,1):o++},n.key.filter=function(e){return!("INPUT"==(e=(e.target||e.srcElement).tagName)||"SELECT"==e||"TEXTAREA"==e)},n.key.isPressed=function(e){return"string"==typeof e&&(e=s(e)),-1!=h(d,e)},n.key.getPressedKeyCodes=function(){return d.slice(0)},n.key.noConflict=function(){var e=n.key;return n.key=i,e},n.key.unbind=function(e,n){for(var t,o,r,i=[],l=k(e),f=0;f<l.length;f++){if(1<(t=l[f].split("+")).length&&(i=m(t),e=t[t.length-1]),e=s(e),void 0===n&&(n=v()),!c[e])return;for(o=0;o<c[e].length;o++)(r=c[e][o]).scope===n&&function(e,n){if(e.length==n.length){for(var t=0;t<e.length;t++)if(e[t]!==n[t])return;return 1}}(r.mods,i)&&(c[e][o]={})}},"undefined"!=typeof module&&(module.exports=y)}(this);