(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(7),i=(a(0),a(130)),r={title:"Models",slug:"/validation/models"},l={unversionedId:"10_Validation/2_Models",id:"10_Validation/2_Models",isDocsHomePage:!1,title:"Models",description:"Most of the time, you want to validate a model's data.",source:"@site/docs/10_Validation/2_Models.md",slug:"/validation/models",permalink:"/symfony-boilerplate/docs/validation/models",editUrl:"https://github.com/thecodingmachine/symfony-boilerplate/docs/docs/10_Validation/2_Models.md",version:"current",sidebar:"docs",previous:{title:"Overview",permalink:"/symfony-boilerplate/docs/validation"},next:{title:"Use Cases",permalink:"/symfony-boilerplate/docs/validation/use-cases"}},s=[{value:"TDBM Models",id:"tdbm-models",children:[{value:"Migrations",id:"migrations",children:[]},{value:"PHP Classes",id:"php-classes",children:[]},{value:"Annotations",id:"annotations",children:[]},{value:"DAOs",id:"daos",children:[]}]},{value:"Storable Models",id:"storable-models",children:[{value:"PHP Class",id:"php-class",children:[]},{value:"Storage",id:"storage",children:[]}]},{value:"Proxy Models",id:"proxy-models",children:[]}],c={rightToc:s};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Most of the time, you want to validate a model's data."),Object(i.b)("p",null,"In the Symfony Boilerplate, we distinguish three kinds of models:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/thecodingmachine/tdbm"}),"TDBM")," models for business data."),Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"Storable")," models for uploads."),Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"Proxy")," models for data that do not fit in previous scenarios.")),Object(i.b)("h2",{id:"tdbm-models"},"TDBM Models"),Object(i.b)("h3",{id:"migrations"},"Migrations"),Object(i.b)("p",null,"The first stone for validating your ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thecodingmachine/tdbm"}),"TDBM")," models occurs in\nthe Doctrine migrations."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/database/doctrine-migrations"}),"Database")," chapter for more details about Doctrine migrations."))),Object(i.b)("p",null,"For instance, let's take a look at the Doctrine migration for the ",Object(i.b)("inlineCode",{parentName:"p"},"users")," table:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"public function up(Schema $schema): void\n{\n    $db = new TdbmFluidSchema($schema);\n    \n    $db->table('users')\n        ->column('id')->guid()->primaryKey()->comment('@UUID')->graphqlField()\n        ->column('first_name')->string(255)->notNull()->graphqlField()\n        ->column('last_name')->string(255)->notNull()->graphqlField()\n        ->column('email')->string(255)->notNull()->unique()->graphqlField()\n        ->column('password')->string(255)->null()->default(null);\n}\n")),Object(i.b)("p",null,"Here we are already defining rules:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Scalar values (string, int, etc.)."),Object(i.b)("li",{parentName:"ul"},"Nullable or not."),Object(i.b)("li",{parentName:"ul"},"Default values."),Object(i.b)("li",{parentName:"ul"},"Unique values."),Object(i.b)("li",{parentName:"ul"},"GraphQL fields (i.e., values available in the GraphQL API).")),Object(i.b)("h3",{id:"php-classes"},"PHP Classes"),Object(i.b)("p",null,"Of course, most of these rules are not user-friendly nor developer-friendly as they occur on the database level."),Object(i.b)("p",null,"Yet, after applying this migration, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thecodingmachine/tdbm"}),"TDBM")," is able to generate two PHP classes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BaseUser"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"User")," that extends ",Object(i.b)("inlineCode",{parentName:"li"},"BaseUser"),".")),Object(i.b)("p",null,"Let's take a look at the constructor's signature from the ",Object(i.b)("inlineCode",{parentName:"p"},"BaseUser")," class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/Domain/Model/Generated/BaseUser.php"',title:'"src/api/src/Domain/Model/Generated/BaseUser.php"'}),"public function __construct(string $firstName, string $lastName, string $email, string $locale, string $role);\n")),Object(i.b)("p",null,"Here we can see that non-nullable properties are ",Object(i.b)("strong",{parentName:"p"},"mandatory"),". Also, all the properties have an ",Object(i.b)("strong",{parentName:"p"},"explicit type"),"."),Object(i.b)("p",null,"For getters and setters, it works the same:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/Domain/Model/Generated/BaseUser.php"',title:'"src/api/src/Domain/Model/Generated/BaseUser.php"'}),"public function getFirstName(): string;\npublic function setFirstName(string $firstName): void;\n")),Object(i.b)("p",null,"Overall, it greatly improves the developer experience as you cannot put a wrong type nor miss a mandatory property when\ncreating/updating an instance of a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thecodingmachine/tdbm"}),"TDBM")," model. \ud83d\ude09"),Object(i.b)("h3",{id:"annotations"},"Annotations"),Object(i.b)("p",null,"That being said, it's still not enough. For instance, how to make sure a value is unique? Or a string is not superior to\n256 characters?"),Object(i.b)("p",null,"You could let the database tell you about these issues, but that's usually done in a non developer-friendly way."),Object(i.b)("p",null,"Thankfully, the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://symfony.com/doc/current/validation.html"}),"Symfony Validation")," bundle provides most of the rules\n(aka constraints) you may want to apply to a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thecodingmachine/tdbm"}),"TDBM")," model's property."),Object(i.b)("p",null,"You may also add your own rules."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://symfony.com/doc/current/validation.html#constraints"}),"Constraints")," chapter of the official\ndocumentation for the list of available rules."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","The folder ",Object(i.b)("em",{parentName:"p"},"src/api/src/Domain/Constraint")," contains our custom-made constraints."))),Object(i.b)("p",null,"As we cannot modify the ",Object(i.b)("inlineCode",{parentName:"p"},"BaseUser")," class, we have to override the getters in the ",Object(i.b)("inlineCode",{parentName:"p"},"User")," class."),Object(i.b)("p",null,"For instance, let's take a look at the ",Object(i.b)("inlineCode",{parentName:"p"},"email")," property getter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/Domain/Model/User.php"',title:'"src/api/src/Domain/Model/User.php"'}),'use Symfony\\Component\\Validator\\Constraints as Assert;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\n\n/**\n * @Field\n * @Assert\\NotBlank(message="not_blank")\n * @Assert\\Length(max=255, maxMessage="max_length_255")\n * @Assert\\Email(message="invalid_email")\n */\npublic function getEmail(): string\n{\n    return parent::getEmail();\n}\n')),Object(i.b)("p",null,"In addition to type hint (non-nullable string), we add three rules:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The email cannot be blank."),Object(i.b)("li",{parentName:"ol"},"The email cannot have a length superior to 255 characters."),Object(i.b)("li",{parentName:"ol"},"The email has to be valid.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","The message attribute contains a translation key. See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/i18n/api"}),"i18n")," chapter for more\ndetails."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","Don't forget to add the ",Object(i.b)("inlineCode",{parentName:"p"},"@Field")," annotation if the property should be available in GraphQL. Indeed,\nwhen overriding a getter, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphqlite.thecodingmachine.io/"}),"GraphQLite")," does not parse anymore the annotation\nfrom the parent getter."))),Object(i.b)("p",null,"You may also add a validation annotation to the class itself:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/Domain/Model/User.php"',title:'"src/api/src/Domain/Model/User.php"'}),'use App\\Domain\\Constraint as DomainAssert;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/*\n * @Type\n * @DomainAssert\\Unicity(table="users", column="email", message="user.email_not_unique")\n */\nclass User extends BaseUser {}\n')),Object(i.b)("p",null,"In this scenario, we use our custom-made ",Object(i.b)("inlineCode",{parentName:"p"},"Unicity")," constraint that verify if a value does not already exist in the\ndatabase."),Object(i.b)("h3",{id:"daos"},"DAOs"),Object(i.b)("p",null,"In addition to the model classes, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thecodingmachine/tdbm"}),"TDBM")," also generates the DAO classes."),Object(i.b)("p",null,"Like the models, there are two of them:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BaseUserDao"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"UserDao")," that extends ",Object(i.b)("inlineCode",{parentName:"li"},"BaseDao"),".")),Object(i.b)("p",null,"In the later, we have to inject a ",Object(i.b)("inlineCode",{parentName:"p"},"ValidatorInterface"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/Domain/Dao/UserDao.php"',title:'"src/api/src/Domain/Dao/UserDao.php"'}),"use Symfony\\Component\\Validator\\Validator\\ValidatorInterface;\nuse TheCodingMachine\\TDBM\\TDBMService;\n\nclass UserDao extends BaseUserDao\n{\n    private ValidatorInterface $validator;\n\n    public function __construct(TDBMService $tdbmService, ValidatorInterface $validator)\n    {\n        $this->validator = $validator;\n        parent::__construct($tdbmService);\n    }\n}\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ValidatorInterface")," provides the method ",Object(i.b)("inlineCode",{parentName:"p"},"validate")," that returns the list of all violations according to the model\nconstraints:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"/** User $user */\n$violations = $this->validator->validate($user);\n")),Object(i.b)("p",null,"By convention, it's great to add a ",Object(i.b)("inlineCode",{parentName:"p"},"validate")," method in your DAOs:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/Domain/Dao/UserDao.php"',title:'"src/api/src/Domain/Dao/UserDao.php"'}),"use App\\Domain\\Throwable\\InvalidModel;\n\n/**\n * @throws InvalidModel\n */\npublic function validate(User $user): void\n{\n    $violations = $this->validator->validate($user);\n    InvalidModel::throwException($violations);\n}\n")),Object(i.b)("p",null,"This method throws an exception if there are any violations in the model."),Object(i.b)("p",null,"Last but not least, you should override the ",Object(i.b)("inlineCode",{parentName:"p"},"save")," method from the base DAO:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/Domain/Dao/UserDao.php"',title:'"src/api/src/Domain/Dao/UserDao.php"'}),"/**\n * @throws InvalidModel\n */\npublic function save(User $user): void\n{\n    $this->validate($user);\n    parent::save($user);\n}\n")),Object(i.b)("p",null,"This approach has two HUGE benefits:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"You centralize the action of validating at one place."),Object(i.b)("li",{parentName:"ol"},"You ",Object(i.b)("strong",{parentName:"li"},"always")," validate a model before saving it in the database.")),Object(i.b)("h2",{id:"storable-models"},"Storable Models"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/files/uploads"}),"Uploads")," chapter for more details about uploads storage."))),Object(i.b)("h3",{id:"php-class"},"PHP Class"),Object(i.b)("p",null,"A storable is a wrapper around an upload. You may want to validate its extension, size, etc."),Object(i.b)("p",null,"You have to extend the ",Object(i.b)("inlineCode",{parentName:"p"},"Storable")," class with a custom class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/Domain/Model/Storable/MyStorable.php"',title:'"src/api/src/Domain/Model/Storable/MyStorable.php"'}),"final class MyStorable extends Storable {}\n")),Object(i.b)("p",null,"Here you may override or add custom getters."),Object(i.b)("p",null,"Indeed, like the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/thecodingmachine/tdbm"}),"TDBM")," models, a storable\nmay uses Symfony Validation annotations. \ud83d\ude09"),Object(i.b)("p",null,"For instance, let's say you want to validate the upload's extension:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/Domain/Model/Storable/MyStorable.php"',title:'"src/api/src/Domain/Model/Storable/MyStorable.php"'}),'use Symfony\\Component\\Validator\\Constraints as Assert;\n\n/**\n * @Assert\\Choice({"png", "jpg"}, message="my_storable.invalid_extensions")\n */\npublic function getExtension(): string\n{\n    return parent::getExtension();\n}\n')),Object(i.b)("h3",{id:"storage"},"Storage"),Object(i.b)("p",null,"A storage is like a DAO but for storables."),Object(i.b)("p",null,"It provides methods for validating one or more storables:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/Domain/Storage/Storage.php"',title:'"src/api/src/Domain/Storage/Storage.php"'}),"use App\\Domain\\Throwable\\InvalidStorable;\n\n/**\n * @param Storable[] $storables\n *\n * @throws InvalidStorable\n */\npublic function validateAll(array $storables): void;\n\n/**\n * @throws InvalidStorable\n */\npublic function validate(Storable $storable): void;\n")),Object(i.b)("p",null,"Like the ",Object(i.b)("inlineCode",{parentName:"p"},"save")," method from a ",Object(i.b)("inlineCode",{parentName:"p"},"DAO"),", its ",Object(i.b)("inlineCode",{parentName:"p"},"write")," and ",Object(i.b)("inlineCode",{parentName:"p"},"writeAll")," methods also call the validation methods:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/Domain/Storage/Storage.php"',title:'"src/api/src/Domain/Storage/Storage.php"'}),"use App\\Domain\\Throwable\\InvalidStorable;\n\n/**\n * @param Storable[] $storables\n *\n * @return string[]\n *\n * @throws InvalidStorable\n */\npublic function writeAll(array $storables): array;\n\n/**\n * @throws InvalidStorable\n */\npublic function write(Storable $storable): string;\n")),Object(i.b)("h2",{id:"proxy-models"},"Proxy Models"),Object(i.b)("p",null,"Proxy models are PHP classes that does not reflect a database's table nor an upload."),Object(i.b)("p",null,"In other words, they are plain old PHP objects."),Object(i.b)("p",null,"However, you may use Symfony Validation annotations on these models getters and validate them\nusing the ",Object(i.b)("inlineCode",{parentName:"p"},"ValidatorInterface")," and ",Object(i.b)("inlineCode",{parentName:"p"},"InvalidModel")," classes. \ud83d\ude09"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\ud83d\udce3","\xa0","\xa0","Don't forget to add the ",Object(i.b)("inlineCode",{parentName:"p"},"@Type")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@Field")," annotations if the model should be available in GraphQL."))))}b.isMDXComponent=!0},130:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,h=p["".concat(r,".").concat(m)]||p[m]||d[m]||i;return a?o.a.createElement(h,l(l({ref:t},c),{},{components:a})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);