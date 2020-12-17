(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(130)),o={title:"Send Emails",slug:"/emails/send-emails"},c={unversionedId:"12_Emails/3_Send Emails",id:"12_Emails/3_Send Emails",isDocsHomePage:!1,title:"Send Emails",description:"The Symfony Boilerplate provides the abstract class CreateEmail.",source:"@site/docs/12_Emails/3_Send Emails.md",slug:"/emails/send-emails",permalink:"/symfony-boilerplate/docs/emails/send-emails",editUrl:"https://github.com/thecodingmachine/symfony-boilerplate/docs/docs/12_Emails/3_Send Emails.md",version:"current",sidebar:"docs",previous:{title:"Configuration",permalink:"/symfony-boilerplate/docs/emails/configuration"},next:{title:"Templates",permalink:"/symfony-boilerplate/docs/emails/templates"}},s=[],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Symfony Boilerplate provides the abstract class ",Object(i.b)("inlineCode",{parentName:"p"},"CreateEmail"),".\nThis class has a method ",Object(i.b)("inlineCode",{parentName:"p"},"create"),", which takes the following arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/UseCase/CreateEmail.php"',title:'"src/api/src/UseCase/CreateEmail.php"'}),"protected function create(User $user, string $subjectId, string $template, array $context): TemplatedEmail\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A recipient - an instance of ",Object(i.b)("inlineCode",{parentName:"li"},"User"),"."),Object(i.b)("li",{parentName:"ul"},"A translation key for the email's subject (see ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/i18n/api"}),"i18n")," guide for more details)."),Object(i.b)("li",{parentName:"ul"},"A template's path (more on that in the next chapter)."),Object(i.b)("li",{parentName:"ul"},"The template's context (i.e., the data of the template).")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","This class does only create an ",Object(i.b)("inlineCode",{parentName:"p"},"Email")," object (it does not send it.)."))),Object(i.b)("p",null,"You should extend this class to create your emails, for instance:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/UseCase/Foo/CreateFooEmail.php"',title:'"src/api/src/UseCase/Foo/CreateFooEmail.php"'}),"final class CreateFooEmail extends CreateEmail\n{\n    public function createEmail(\n        User $user,\n        string $foo,\n        string $bar\n    ): TemplatedEmail {\n        return $this->create(\n            $user,\n            'foo.subject',\n            'emails/foo.html.twig', # Don't forget to prefix the path with \"emails/\".\n            [\n                'foo' => $foo,\n                'bar' => $bar,\n            ]\n        );\n    }\n}\n")),Object(i.b)("p",null,"In the use case sending this email, you can inject both the previous class and the ",Object(i.b)("inlineCode",{parentName:"p"},"MailerInterface"),", i.e.:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/UseCase/Foo/DoFoo.php"',title:'"src/api/src/UseCase/Foo/DoFoo.php"'}),"private MailerInterface $mailer;\nprivate CreateFooEmail $createFooEmail;\n\npublic function __construct(\n    MailerInterface $mailer,\n    CreateFooEmail $createFooEmail\n) {\n    $this->mailer = $mailer;\n    $this->createFooEmail = $createFooEmail;\n}\n")),Object(i.b)("p",null,"You can then use them as below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/UseCase/Foo/DoFoo.php"',title:'"src/api/src/UseCase/Foo/DoFoo.php"'}),"$email = $this->createFooEmail->createEmail($user, $foo, $bar);\n$this->mailer->send($email);\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","Always put your classes extending ",Object(i.b)("inlineCode",{parentName:"p"},"CreateEmail")," on the same level as the use case requiring it."))))}p.isMDXComponent=!0},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,u=m["".concat(o,".").concat(d)]||m[d]||b[d]||i;return a?r.a.createElement(u,c(c({ref:t},l),{},{components:a})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);