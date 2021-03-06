import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person'; 
import SearchIcon from '@material-ui/icons/Search';


class Home extends Component{
    render(){
        return(
             <Mui.Container fixed style={{ fontFamily:'Times-new-roman' }}>
                 <Mui.Grid container spacing={1}>
                 <Mui.Grid item sm={2}><br/>
                 <div > 
                 <Mui.Card variant="outlined" style={{ width:250 , color:'gray'}}>
                 <Mui.CardContent>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/wiki.jpeg" width="150"/><br/><br/><br/>
                     <p>
                         <a href="/" >Main Page</a><br/>
                         <a href="/">Contents</a> <br/>  
                         <a href="/">Current Events</a> <br/>
                         <a href="/">Random Article</a><br/>
                         <a href="/">About Wikipedia</a><br/>
                         <a href="/">Contact Us</a><br/>
                         <a href="/">Donate</a><br/><br/>
                         contribute<hr/>
                         <a href="/">Help</a><br/>
                         <a href="/">Learn to edit</a><br/>
                         <a href="/">Community portal</a><br/>
                         <a href="/">Recents changes</a><br/>
                         <a href="/">Upload file</a><br/><br/>
                         Tools<hr/>
                         <a href="/">What links here</a><br/>
                         <a href="/">Related changes</a><br/>
                         <a href="/">Special pages</a> <br/>
                         <a href="/">Permanent link</a><br/>
                         <a href="/">Page information</a><br/>
                         <a href="/">Cite this page</a><br/>
                         <a href="/">Wikidata item</a><br/><br/>
                         Print/exports<hr/>
                         <a href="/">Download as PDF</a> <br/>
                         <a href="/">Printable version</a> <br/><br/>
                         Languages<hr/>
                         <a href="/">العربية</a><br/>
                         <a href="/">Deutsch</a><br/>
                         <a href="/">Español</a> <br/>
                         <a href="/">Français</a><br/>
                         <a href="/">हिन्दी</a><br/>
                         <a href="/">日本語</a><br/>
                         <a href="/">Português</a><br/>
                         <a href="/">Русский</a><br/>
                         <a href="/">中文</a><br/>   
                         <button >21 more</button>                      
                     </p>      
                 </Mui.CardContent>
                 </Mui.Card>
                 </div>        
                 </Mui.Grid>
                 <Mui.Grid item sm={10}>
                 <Mui.Card variant="outlined" style={{ width:1050 }}>
                 <Mui.CardContent >                     
                     <p style={{ textAlign:'Right' }}>
                     <PersonIcon/>Not logged in&nbsp; 
                     <a href="/">Talk</a>&nbsp;
                     <a href="/">Contributions</a>&nbsp;
                     <a href="/">Create Account</a>&nbsp;
                     <a href="/">Log In</a></p>
                     <Mui.Button variant="contained" >Article</Mui.Button>
                     <Mui.Button variant="contained" >Talk</Mui.Button>
                     <SearchIcon style={{ float:'right', height:30 }}/>
                        <input type="text"  style={{ width:200,height:30 ,float:'right' }}
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                     <Mui.Button variant="contained" style={{ float:'right' }}>View history</Mui.Button>
                     <Mui.Button variant="contained" style={{ float:'right'}}>edit</Mui.Button>
                     <Mui.Button variant="contained" style={{ float:'right'}}>React</Mui.Button>
                     <hr/><h1>React (web framework)</h1><hr/>
                     <p style={{ fontWeight:50 }}>From Wikipedia, the free encyclopedia</p>
                     <p>React (also known as React.js or ReactJS) is an <a href="/">open-source</a>,  <a href="/">front end</a>,<a href="/"> JavaScript library</a> for building <a href="/">user interfaces</a> or UI components. It is maintained by <a href="/">Facebook</a> and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.Redux and React Router are respective examples of such libraries.</p>
                         <Mui.Card variant="outlined" align='left' style={{ width:250 }}>
                         <Mui.CardContent >
                         <Mui.Typography  variant="p" gutterBottom style={{ fontWeight:700 }}>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contents [<a href="/">Hide</a>]
                         </Mui.Typography><br/><br/>
                         <Mui.Typography  variant="p">
                         1 <a href="/" >Basic Usage</a><br/>
                         2 <a href="/">Notables Features</a> <br/>  
                         &nbsp;&nbsp;&nbsp;2.1 <a href="/">Components</a> <br/>
                         &nbsp;&nbsp;&nbsp;2.2 <a href="/">Functional components</a><br/>
                         &nbsp;&nbsp;&nbsp;2.3 <a href="/">Class-based components</a><br/>
                         &nbsp;&nbsp;&nbsp;2.4 <a href="/">Virtual DOM</a><br/>
                         &nbsp;&nbsp;&nbsp;2.5 <a href="/">Lifecycle methods</a><br/>
                         &nbsp;&nbsp;&nbsp;2.6 <a href="/">JSX</a><br/>
                         &nbsp;&nbsp;&nbsp;2.7 <a href="/">Architecture beyond HTML</a><br/>
                         &nbsp;&nbsp;&nbsp;2.8 <a href="/">React hooks</a><br/>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.8.1 <a href="/">Rules of hooks</a><br/>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.8.2 <a href="/">Custom hooks</a><br/>
                         3 <a href="/">Common Idioms</a><br/>
                         &nbsp;&nbsp;&nbsp;3.1 <a href="/">Use of the Flux architecture</a><br/>
                         4 <a href="/">Future development</a> <br/>
                         5 <a href="/">History</a><br/>
                         6 <a href="/">Licensing</a><br/>
                         7 <a href="/">See Also</a><br/>
                         8 <a href="/">References</a><br/>
                         9 <a href="/">	External links</a>
                         </Mui.Typography>
                         </Mui.CardContent>
                         </Mui.Card><br/><br/>
                         <p><strong>Basic Usage</strong> [ <a href="/">edit</a> ]</p><hr/>
                         <p>The following is a rudimentary example of React usage in HTML with JSX and JavaScript.</p>
                         <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent>
                             <h3>
                         1.  &lt;div id="myReactApp"&gt;&lt;/div&gt;<br/>
                         2.  &lt;script type="text/babel"&gt;<br/>
                         3.  function Greeter(props) <br/>
                         4.  return &lt;h1&gt;&lt;/h1&gt;<br/>
                         5.  var App = &lt;Greeter greeting="Hello World!" /&gt;;<br/>
                         6.  ReactDOM.render(App, document.getElementById('myReactApp'));<br/>
                         7.  &lt;/script&gt;
                         </h3>
                         </Mui.CardContent>   
                         </Mui.Card> 
                         <p>The Greeter function is a React component that accepts a property greeting. The variable App is an instance of the Greeter component where the greeting property is set to 'Hello World!'. The ReactDOM.render method then renders our Greeter component inside the DOM element with id myReactApp.
                         <br/><br/>When displayed in a web browser the result will be.</p>
                         <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent>
                             <h3>
                             1. &lt;div id="myReactApp"&gt;<br/>
                             2. &lt;h1&gt;Hello World!&lt;/h1&gt;<br/>
                             3. &lt;/div&gt;
                             </h3>
                         </Mui.CardContent>   
                         </Mui.Card>   
                         <p><strong>Notable features</strong> [<a href="/">edit</a>]</p><hr/> 
                         <p><strong>Component</strong> [<a href="/">edit</a>]</p>
                         <p>React code is made of entities called components. Components can be rendered to a particular element in the DOM using the React DOM library. When rendering a component, one can pass in values that are known as "props":</p> 
                         <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent>
                         <h3>ReactDOM.render(&lt;Greeter greeting="Hello World!" /&gt;, document.getElementById('myReactApp'));</h3>
                         </Mui.CardContent>   
                         </Mui.Card>   
                         <p>The two primary ways of declaring components in React is via functional components and class-based components.</p> 
                         <p><strong>Functional components</strong> [<a href="/">edit</a>]</p>
                         <p>Functional components are declared with a function that then returns some JSX.</p>                         
                         <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent>
                         <h3>const Greeting = (props) =&gt; &lt;div&gt;Hello, &#123;props.name!&#125;&lt;/div&gt;;</h3>
                         </Mui.CardContent>   
                         </Mui.Card>    
                         <p><strong>Class-based components</strong> [<a href="/">edit</a>]</p>  
                         <p>Class-based components are declared using <a href="/">ES6</a> classes.</p> 
                         <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent><h3>
                         class ParentComponent extends React.Component &#123;<br/>
                                 state = &#123; color: 'green' &#125;<br/>
                                 render() &#123;<br/>
                                 return (<br/>
                                 &lt;ChildComponent color=&#123;this.state.color&#125; /&gt;<br/>
                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    );<br/>
                                &nbsp;&nbsp;&nbsp; &#125;<br/>
                         &#125;
                         </h3>
                         </Mui.CardContent>   
                         </Mui.Card> 
                         <p><strong>Virtual DOM</strong> [<a href="/">edit</a>]</p>
                         <p>Another notable feature is the use of a virtual <a href="/">Document Object Model</a>, or virtual DOM. React creates an <a href="/">in-memory</a> data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently. This process is called <strong>reconciliation</strong>. This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change. This selective rendering provides a major performance boost. It saves the effort of recalculating the CSS style, layout for the page and rendering for the entire page.</p>  
                         <p><strong>Lifecycle methods</strong> [<a href="/">edit</a>]</p>
                         <p>Lifecycle methods use a form of <a href="/">hooking</a> that allows the execution of code at set points during a component's lifetime.</p>
                         <ul>
                             <li>shouldComponentUpdate allows the developer to prevent unnecessary re-rendering of a component by returning false if a render is not required.</li>
                             <li>componentDidMount is called once the component has "mounted" (the component has been created in the user interface, often by associating it with a <a href="/">DOM</a> node). This is commonly used to trigger data loading from a remote source via an <a href="/">API</a>.</li>
                             <li>componentWillUnmount is called immediately before the component is torn down or "unmounted". This is commonly used to clear resource-demanding dependencies to the component that will not simply be removed with the unmounting of the component (e.g., removing any setInterval() instances that are related to the component, or an "eventListener" set on the "document" because of the presence of the component)</li>
                             <li>render is the most important lifecycle method and the only required one in any component. It is usually called every time the component's state is updated, which should be reflected in the user interface.</li>
                         </ul>
                         <p><strong>JSX</strong> [<a href="/">edit</a>]</p>
                         <p>JSX, or JavaScript <a href="/">XML</a>, is an extension to the JavaScript language syntax. Similar in appearance to HTML, JSX provides a way to structure component rendering using syntax familiar to many developers. React components are typically written using JSX, although they do not have to be (components may also be written in pure JavaScript). JSX is similar to another extension syntax created by Facebook for <a href="/">PHP</a> called <a href="/">XHP</a>.</p><br/>
                         <p>An example of JSX code:</p>
                         <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent><h3>
                         1. class App extends React.Component &#123;<br/>
                         2.&nbsp;&nbsp;&nbsp;&nbsp;render() &#123;<br/>
                         3.&nbsp;&nbsp;&nbsp;return (<br/>
                         4.&nbsp;&nbsp;&nbsp;&lt;div&gt;<br/>
                         5.&nbsp;&nbsp;&nbsp;&lt;p&gt;Header&lt;/p&gt;<br/>
                         6.&nbsp;&nbsp;&nbsp;&lt;p&gt;Content&lt;/p&gt;<br/>
                         7.&nbsp;&nbsp;&nbsp;&lt;p&gt;Footer&lt;/p&gt;<br/>
                         8.&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br/>
                         9.&nbsp;&nbsp;&nbsp;);<br/>
                         10. &nbsp;&nbsp;  &#125;<br/>
                         11.   &#125;
                         </h3>
                         </Mui.CardContent>   
                         </Mui.Card>
                         <p><strong>Nested elements</strong></p> 
                         <p>Multiple elements on the same level need to be wrapped in a single React element such as the &lt;div&gt; element shown above, a fragment delineated by &lt;Fragment&gt; or in its shorthand form &lt;&gt;, or returned as an array</p><br/>
                         <p><strong>Attributes</strong></p>
                         <p>JSX provides a range of element attributes designed to mirror those provided by HTML. Custom attributes can also be passed to the component.[16] All attributes will be received by the component as props.</p><br/>
                         <p><strong>JavaScript expressions</strong></p>
                         <p>JavaScript <a href='/'>expressions</a> (but not <a href="/">statements</a>) can be used inside JSX with curly brackets &#123;&#125;:</p>
                         <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent><h3>
                             &lt;h1&gt;&#123;10+1&#125;&lt;/h1&gt;
                             </h3>
                         </Mui.CardContent>   
                         </Mui.Card>    
                         <p>The example above will render</p>
                         <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent><h3>
                         &lt;h1&gt;11&lt;/h1&gt;
                         </h3></Mui.CardContent>   
                         </Mui.Card>
                         <p><strong>Conditional statements</strong></p>    
                         <p><a href="/">If–else statements</a> cannot be used inside JSX but conditional expressions can be used instead. The example below will render &#123; i === 1 ? 'true' : 'false' &#125; as the string 'true' because i is equal to 1.</p>
                         <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent><h3>
                         1. class App extends React.Component &#123;<br/>
                         2.  &nbsp; render() &#123;<br/>
                         3.   &nbsp;    const i = 1;<br/>
                         4.  &nbsp;&nbsp;     return (<br/>
                         5.  &nbsp;&nbsp;&nbsp;     &lt;div&gt;<br/>
                         6.   &nbsp;&nbsp;&nbsp;        &lt;h1&gt;&#123; i === 1 ? 'true' : 'false' &#125;&lt;/h1&gt;<br/>
                         7.  &nbsp;&nbsp;&nbsp;    &lt;/div&gt;<br/>
                         8.  &nbsp;&nbsp;&nbsp;     );<br/>
                         9.  &nbsp;&nbsp;    &#125;<br/>
                         10. &nbsp;   &#125;
                         </h3>
                         </Mui.CardContent>   
                         </Mui.Card> 
                         <p>The above will render:</p>
                         <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent><h3>
                         &lt;div&gt;
                            &lt;h1&gt;true&lt;/h1&gt;
                         &lt;/div&gt;
                         </h3>
                         </Mui.CardContent>   
                         </Mui.Card>
                         <p>Functions and JSX can be used in conditionals:</p>
                         <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent><h3>
                         class App extends React.Component &#123;<br/>
                            render() &#123;<br/>
                                const sections = [1, 2, 3];<br/>
                                return (<br/>
                                &lt;div&gt;<br/>
                                    &lt;sections.length &gt; 0 && sections.map(n =&gt; (<br/>
                                        /* 'key' is used by react to keep track of list items and their changes */
                                        /* Each 'key' must be unique */<br/>
                                        &lt;div key= &#123;"section-" + n&#125;&gt;Section &#123;n&#125;&lt;/div&gt;<br/>
                                    )) &#125;<br/>
                                &lt;/div&gt;<br/>
                                );<br/>
                              &#125;<br/>
                            &#125;
                         </h3>
                         </Mui.CardContent>   
                         </Mui.Card>
                         <p>The above will render:</p>
                         <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent><h3>
                         &lt;div&gt;<br/>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Section 1&lt;/div&gt;<brb/>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Section 2&lt;/div&gt;<br/>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Section 3&lt;/div&gt;<br/>
                         &lt;/div&gt;                        
                         </h3>
                         </Mui.CardContent>   
                         </Mui.Card>
                         <p>Code written in JSX requires conversion with a tool such as <a href="/">Babel</a> before it can be understood by web browsers.This processing is generally performed during a <a href="/">software build</a> process before the application is <a href="/">deployed</a>.</p>
                         <p><strong>Architecture beyond HTML</strong>[<a href="">edit</a>]</p>
                         <p>The basic architecture of React applies beyond rendering HTML in the browser. For example, Facebook has dynamic charts that render to &lt;canvas&gt; tags, and Netflix and <a href="/">PayPal</a> use universal loading to render identical HTML on both the server and client.</p>
                         <p><strong>React hooks</strong>[<a href="">edit</a>]</p>
                         <p>Hooks are functions that let developers "hook into" React state and lifecycle features from function components.[21] They make code readable and easily understandable. Hooks don’t work inside classes — they let you use React without classes<br/>
                         React provides a few built-in Hooks like useState,[23] useContext, useReducer and useEffect[24] to name a few. They are all stated in the Hooks API Reference.[25] useState and useEffect, which are the most used, are for controlling states and side effects respectively in React Components.</p>
                         <p><strong>Rules of hooks</strong>[<a href="">edit</a>]</p>
                         <p>There are also rules of hooks[26] which must be followed before they can be used.</p>
                         <p>1. Hooks should only be called at the top level (not inside loops or if statements).</p>
                         <p>2. Hooks should only be called from React function components, not normal functions or class components</p>
                         <p><strong>Custom hooks</strong>[<a href="">edit</a>]</p>
                         <p>Building your own hooks[27] which are called custom hooks lets you extract component logic into reusable functions. A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. The rules of hooks also apply to them i.e, custom hooks should be written in compliance with the rules enforced by React or else there will be high chance of breaking the code's integrity. Check the following link to learn the <a href="/">rules for creating the custom hooks</a>.</p>
                         <h3>Common idioms [<a href="/" variant='p'>edit</a>]</h3><hr/>
                         <p>React does not attempt to provide a complete "application library". It is designed specifically for building user interfaces[3] and therefore does not include many of the tools some developers might consider necessary to build an application. This allows the choice of whichever libraries the developer prefers to accomplish tasks such as performing network access or local data storage. Common patterns of usage have emerged as the library matures.</p>
                         <p><strong>Use of the Flux architecture</strong>[<a href="">edit</a>]</p>
                         <p>To support React's concept of unidirectional data flow (which might be contrasted with AngularJS's bidirectional flow), the Flux architecture represents an alternative to the popular model-view-controller architecture. Flux features actions which are sent through a central dispatcher to a store, and changes to the store are propagated back to the view.[28] When used with React, this propagation is accomplished through component properties.<br/>
                         Flux can be considered a variant of the observer pattern.<br/>
                         A React component under the Flux architecture should not directly modify any props passed to it, but should be passed callback functions that create actions which are sent by the dispatcher to modify the store. The action is an object whose responsibility is to describe what has taken place: for example, an action describing one user "following" another might contain a user id, a target user id, and the type USER_FOLLOWED_ANOTHER_USER.[30] The stores, which can be thought of as models, can alter themselves in response to actions received from the dispatcher.<br/>
                         This pattern is sometimes expressed as "properties flow down, actions flow up". Many implementations of Flux have been created since its inception, perhaps the most well-known being Redux, which features a single store, often called a single source of truth.</p>
                         <h3>Future development [<a href="/" variant='p'>edit</a>]</h3><hr/>
                         <p>Project status can be tracked via the core team discussion forum.[32] However, major changes to React go through the Future of React repository issues and pull requests.[33][34] This enables the React community to provide feedback on new potential features, experimental APIs and JavaScript syntax improvements.</p>
                         <h3>History [<a href="/" variant='p'>edit</a>]</h3><hr/>
                         <p>React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype of React called "FaxJS".[35][36] He was influenced by XHP, an HTML component library for PHP. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012.[37] It was open-sourced at JSConf US in May 2013.[36]<br/>
                         React Native, which enables native Android, iOS, and UWP development with React, was announced at Facebook's React Conf in February 2015 and open-sourced in March 2015.<br/>
                         On April 18, 2017, Facebook announced React Fiber, a new core algorithm of React library for building user interfaces.[38] React Fiber was to become the foundation of any future improvements and feature development of the React library.<br/>
                         On September 26, 2017, React 16.0 was released to the public.<br/>
                         On February 16, 2019, React 16.8 was released to the public.[41] The release introduced React Hooks.[42]<br/>
                         On August 10, 2020, the React team announced the first release candidate for React v17.0, notable as the first major release without major changes to the React developer-facing API.[43]</p>
                         <table border='2'>
                        <caption>Versions
                        </caption>
                        <tbody><tr>
                        <th>Version
                        </th>
                        <th>Release Date
                        </th>
                        <th>Changes
                        </th></tr>
                        <tr>
                        <td>0.3.0
                        </td>
                        <td>29 May 2013
                        </td>
                        <td>Initial Public Release
                        </td></tr>
                        <tr>
                        <td>0.4.0
                        </td>
                        <td>20 July 2013
                        </td>
                        <td>Support for comment nodes &lt;div&gt;{/* */}&lt;/div&gt;, Improved server-side rendering APIs, Removed React.autoBind, Support for the key prop, Improvements to forms, Fixed bugs.
                        </td></tr>
                        <tr>
                        <td>0.5.0
                        </td>
                        <td>20 October 2013
                        </td>
                        <td>Improve Memory usage, Support for Selection and Composition events, Support for getInitialState and getDefaultProps in mixins, Added React.version and React.isValidClass, Improved compatibility for Windows.
                        </td></tr>
                        <tr>
                        <td>0.8.0
                        </td>
                        <td>20 December 2013
                        </td>
                        <td>Added support for rows &amp; cols, defer &amp; async, loop for &lt;audio&gt; &amp; &lt;video&gt;, autoCorrect attributes. Added onContextMenu events, Upgraded jstransform and esprima-fb tools, Upgraded browserify.
                        </td></tr>
                        <tr>
                        <td>0.9.0
                        </td>
                        <td>20 February 2014
                        </td>
                        <td>Added support for crossOrigin, download and hrefLang, mediaGroup and muted, sandbox, seamless, and srcDoc, scope attributes, Added any, arrayOf, component, oneOfType, renderable, shape to React.PropTypes, Added support for onMouseOver and onMouseOut event, Added support for onLoad and onError on &lt;img&gt; elements.
                        </td></tr>
                        <tr>
                        <td>0.10.0
                        </td>
                        <td>21 March 2014
                        </td>
                        <td>Added support for srcSet and textAnchor attributes, add update function for immutable data, Ensure all void elements don't insert a closing tag.
                        </td></tr>
                        <tr>
                        <td>0.11.0
                        </td>
                        <td>17 July 2014
                        </td>
                        <td>Improved SVG support, Normalized e.view event, Update $apply command, Added support for namespaces, Added new transformWithDetails API, includes pre-built packages under dist/, MyComponent() now returns a descriptor, not an instance.
                        </td></tr>
                        <tr>
                        <td>0.12.0
                        </td>
                        <td>21 November 2014
                        </td>
                        <td>Added new features Spread operator (&#123;...&125;) introduced to deprecate this.transferPropsTo, Added support for acceptCharset, classID, manifest HTML attributes, React.addons.batchedUpdates added to API, @jsx React.DOM no longer required, Fixed issues with CSS Transitions.
                        </td></tr>
                        <tr>
                        <td>0.13.0
                        </td>
                        <td>10 March 2015
                        </td>
                        <td>Deprecated patterns that warned in 0.12 no longer work, ref resolution order has changed, Removed properties this._pendingState and this._rootNodeID, Support ES6 classes, Added API React.findDOMNode(component), Support for iterators and immutable-js sequences, Added new features React.addons.createFragment, deprecated React.addons.classSet.
                        </td></tr>
                        <tr>
                        <td>0.14.1
                        </td>
                        <td>29 October 2015
                        </td>
                        <td>Added support for srcLang, default, kind attributes, and color attribute, Ensured legacy .props access on DOM nodes, Fixed scryRenderedDOMComponentsWithClass, Added react-dom.js.
                        </td></tr>
                        <tr>
                        <td>15.0.0
                        </td>
                        <td>07 April 2016
                        </td>
                        <td>Initial render now uses document.createElement instead of generating HTML, No more extra &lt;span&gt;s, Improved SVG support, ReactPerf.getLastMeasurements() is opaque, New deprecations introduced with a warning, Fixed multiple small memory leaks, React DOM now supports the cite and profile HTML attributes and cssFloat, gridRow and gridColumn CSS properties.
                        </td></tr>
                        <tr>
                        <td>15.1.0
                        </td>
                        <td>20 May 2016
                        </td>
                        <td>Fix a batching bug, Ensure use of the latest object-assign, Fix regression, Remove use of merge utility, Renamed some modules.
                        </td></tr>
                        <tr>
                        <td>15.2.0
                        </td>
                        <td>01 July 2016
                        </td>
                        <td>Include component stack information, Stop validating props at mount time, Add React.PropTypes.symbol, Add onLoad handling to &lt;link&gt; and onError handling to &lt;source&gt; element, Add isRunning() API, Fix performance regression.
                        </td></tr>
                        <tr>
                        <td>15.3.0
                        </td>
                        <td>30 July 2016
                        </td>
                        <td>Add React.PureComponent, Fix issue with nested server rendering, Add xmlns, xmlnsXlink to support SVG attributes and referrerPolicy to HTML attributes, updates React Perf Add-on, Fixed issue with ref.
                        </td></tr>
                        <tr>
                        <td>15.3.1
                        </td>
                        <td>19 August 2016
                        </td>
                        <td>Improve performance of development builds, Cleanup internal hooks, Upgrade fbjs, Improve startup time of React, Fix memory leak in server rendering, fix React Test Renderer, Change trackedTouchCount invariant into a console.error.
                        </td></tr>
                        <tr>
                        <td>15.4.0
                        </td>
                        <td>16 November 2016
                        </td>
                        <td>React package and browser build no longer includes React DOM, Improved development performance, Fixed occasional test failures, update batchedUpdates API, React Perf, and ReactTestRenderer.create().
                        </td></tr>
                        <tr>
                        <td>15.4.1
                        </td>
                        <td>23 November 2016
                        </td>
                        <td>Restructure variable assignment, Fixed event handling, Fixed compatibility of browser build with AMD environments.
                        </td></tr>
                        <tr>
                        <td>15.4.2
                        </td>
                        <td>06 January 2017
                        </td>
                        <td>Fixed build issues, Added missing package dependencies, Improved error messages.
                        </td></tr>
                        <tr>
                        <td>15.5.0
                        </td>
                        <td>07 April 2017
                        </td>
                        <td>Added react-dom/test-utils, Removed peerDependencies, Fixed issue with Closure Compiler, Added a deprecation warning for React.createClass and React.PropTypes, Fixed Chrome bug.
                        </td></tr>
                        <tr>
                        <td>15.5.4
                        </td>
                        <td>11 April 2017
                        </td>
                        <td>Fix compatibility with Enzyme by exposing batchedUpdates on shallow renderer, Update version of prop-types, Fix react-addons-create-fragment package to include loose-envify transform.
                        </td></tr>
                        <tr>
                        <td>15.6.0
                        </td>
                        <td>13 June 2017
                        </td>
                        <td>Add support for CSS variables in style attribute and Grid style properties, Fix AMD support for addons depending on react, Remove unnecessary dependency, Add a deprecation warning for React.createClass and React.DOM factory helpers.
                        </td></tr>
                        <tr>
                        <td>16.0.0
                        </td>
                        <td>26 September 2017
                        </td>
                        <td>Improved error handling with introduction of "error boundaries", React DOM allows passing non-standard attributes, Minor changes to setState behavior, remove react-with-addons.js build, Add React.createClass as create-react-class, React.PropTypes as prop-types, React.DOM as react-dom-factories, changes to the behavior of scheduling and lifecycle methods.
                        </td></tr>
                        <tr>
                        <td>16.1.0
                        </td>
                        <td>9 November 2017
                        </td>
                        <td>Discontinuing Bower Releases, Fix an accidental extra global variable in the UMD builds, Fix onMouseEnter and onMouseLeave firing, Fix &lt;textarea&gt; placeholder, Remove unused code, Add a missing package.json dependency, Add support for React DevTools.
                        </td></tr>
                        <tr>
                        <td>16.3.0
                        </td>
                        <td>29 March 2018
                        </td>
                        <td>Add a new officially supported context API, Add new packagePrevent an infinite loop when attempting to render portals with SSR, Fix an issue with this.state, Fix an IE/Edge issue.
                        </td></tr>
                        <tr>
                        <td>16.3.1
                        </td>
                        <td>03 April 2018
                        </td>
                        <td>Prefix private API, Fix performance regression and error handling bugs in development mode, Add peer dependency, Fix a false positive warning in IE11 when using Fragment.
                        </td></tr>
                        <tr>
                        <td>16.3.2
                        </td>
                        <td>16 April 2018
                        </td>
                        <td>Fix an IE crash, Fix labels in User Timing measurements, Add a UMD build, Improve performance of unstable_observedBits API with nesting.
                        </td></tr>
                        <tr>
                        <td>16.4.0
                        </td>
                        <td>24 May 2018
                        </td>
                        <td>Add support for Pointer Events specification, Add the ability to specify propTypes, Fix reading context, Fix the getDerivedStateFromProps() support, Fix a testInstance.parent crash, Add React.unstable_Profiler component for measuring performance, Change internal event names.
                        </td></tr>
                        <tr>
                        <td>16.5.0
                        </td>
                        <td>05 September 2018
                        </td>
                        <td>Add support for React DevTools Profiler, Handle errors in more edge cases gracefully, Add react-dom/profiling, Add onAuxClick event for browsers, Add movementX and movementY fields to mouse events, Add tangentialPressure and twist fields to pointer event.
                        </td></tr>
                        <tr>
                        <td>16.6.0
                        </td>
                        <td>23 October 2018
                        </td>
                        <td>Add support for contextType, Support priority levels, continuations, and wrapped callbacks, Improve the fallback mechanism, Fix gray overlay on iOS Safari, Add React.lazy() for code splitting components.
                        </td></tr>
                        <tr>
                        <td>16.7.0
                        </td>
                        <td>20 December 2018
                        </td>
                        <td>Fix performance of React.lazy for lazily-loaded components, Clear fields on unmount to avoid memory leaks, Fix bug with SSR, Fix a performance regression.
                        </td></tr>
                        <tr>
                        <td>16.8.0
                        </td>
                        <td>06 February 2019
                        </td>
                        <td>Add Hooks, Add ReactTestRenderer.act() and ReactTestUtils.act() for batching updates, Support synchronous thenables passed to React.lazy(), Improve useReducer Hook lazy initialization API.
                        </td></tr>
                        <tr>
                        <td>16.8.6
                        </td>
                        <td>27 March 2019
                        </td>
                        <td>Fix an incorrect bailout in useReducer(), Fix iframe warnings in Safari DevTools, Warn if contextType is set to Context.Consumer instead of Context, Warn if contextType is set to invalid values.
                        </td></tr>
                        <tr>
                        <td>16.9.0
                        </td>
                        <td>9 August 2019
                        </td>
                        <td>Add &lt;React.Profiler&gt; API for gathering performance measurements programmatically. Remove unstable_ConcurrentMode in favor of unstable_createRoot
                        </td></tr>
                        <tr>
                        <td>16.10.0
                        </td>
                        <td>27 September 2019
                        </td>
                        <td>Fix edge case where a hook update wasn't being memoized. Fix heuristic for determining when to hydrate, so we don't incorrectly hydrate during an update. Clear additional fiber fields during unmount to save memory. Fix bug with required text fields in Firefox. Prefer Object.is instead of inline polyfill, when available. Fix bug when mixing Suspense and error handling.
                        </td></tr>
                        <tr>
                        <td>16.10.1
                        </td>
                        <td>28 September 2019
                        </td>
                        <td>Fix regression in Next.js apps by allowing Suspense mismatch during hydration to silently proceed
                        </td></tr>
                        <tr>
                        <td>16.10.2
                        </td>
                        <td>3 October 2019
                        </td>
                        <td>Fix regression in react-native-web by restoring order of arguments in event plugin extractors
                        </td></tr>
                        <tr>
                        <td>16.11.0
                        </td>
                        <td>22 October 2019
                        </td>
                        <td>Fix mouseenter handlers from firing twice inside nested React containers. Remove unstable_createRoot and unstable_createSyncRoot experimental APIs. (These are available in the Experimental channel as createRoot and createSyncRoot.)
                        </td></tr>
                        <tr>
                        <td>16.12.0
                        </td>
                        <td>14 November 2019
                        </td>
                        <td>React DOM - Fix passive effects (<code>useEffect</code>) not being fired in a multi-root app.
                        <p>React Is - Fix <code>lazy</code> and <code>memo</code> types considered elements instead of components
                        </p>
                        </td></tr>
                        <tr>
                        <td>16.13.0
                        </td>
                        <td>26 February 2020
                        </td>
                        <td>Features added in React Concurrent mode.
                        <p>Fix regressions in React core library and React Dom.
                        </p>
                        </td>
                        <td>
                        </td></tr>
                        <tr>
                        <td>16.13.1
                        </td>
                        <td>19 March 2020
                        </td>
                        <td>Fix bug in legacy mode Suspense.
                        <p>Revert warning for cross-component updates that happen inside class render lifecycles 
                        </p>
                        </td>
                        <td>
                        </td></tr>
                        <tr>
                        <td>16.14.0
                        </td>
                        <td>14 October 2020
                        </td>
                        <td>Add support for the new JSX transform.
                        </td>
                        <td>
                        </td></tr>
                        <tr>
                        <td>17.0.0
                        </td>
                        <td>20 October 2020
                        </td>
                        <td>"No New Features" enables gradual React updates from older versions.
                        <p>Add new JSX Transform, Changes to Event Delegation
                        </p>
                        </td></tr></tbody></table>
                        <h3><strong>Licensing</strong> [<a href="/">edit</a>]</h3><hr/>
                        <p>The initial public release of React in May 2013 used the <a href="">Apache License</a> 2.0. In October 2014, React 0.12.0 replaced this with the <a href="">3-clause BSD license</a> and added a separate PATENTS text file that permits usage of any Facebook patents related to the software:</p>
                        <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent><p>
                         The license granted hereunder will terminate, automatically and without notice, for anyone that makes any claim (including by filing any lawsuit, assertion or other action) alleging (a) direct, indirect, or contributory infringement or inducement to infringe any patent: (i) by Facebook or any of its subsidiaries or affiliates, whether or not such claim is related to the Software, (ii) by any party if such claim arises in whole or in part from any software, product or service of Facebook or any of its subsidiaries or affiliates, whether or not such claim is related to the Software, or (iii) by any party relating to the Software; or (b) that any right in any patent claim of Facebook is invalid or unenforceable.
                         </p>
                         </Mui.CardContent>   
                         </Mui.Card> 
                         <p>This unconventional clause caused some controversy and debate in the React user community, because it could be interpreted to empower Facebook to revoke the license in many scenarios, for example, if Facebook sues the licensee prompting them to take "other action" by publishing the action on a blog or elsewhere. Many expressed concerns that Facebook could unfairly exploit the termination clause or that integrating React into a product might complicate a startup company's future acquisition.[45]</p><br/>
                         <p>Based on community feedback, Facebook updated the patent grant in April 2015 to be less ambiguous and more permissive:[46]</p>                        
                         <Mui.Card variant="outlined" style={{ width:1000 }}>
                         <Mui.CardContent><p>
                         The license granted hereunder will terminate, automatically and without notice, if you (or any of your subsidiaries, corporate affiliates or agents) initiate directly or indirectly, or take a direct financial interest in, any Patent Assertion: (i) against Facebook or any of its subsidiaries or corporate affiliates, (ii) against any party if such Patent Assertion arises in whole or in part from any software, technology, product or service of Facebook or any of its subsidiaries or corporate affiliates, or (iii) against any party relating to the Software. [...] A "Patent Assertion" is any lawsuit or other action alleging direct, indirect, or contributory infringement or inducement to infringe any patent, including a cross-claim or counterclaim.[47]
                         </p>
                         </Mui.CardContent>   
                         </Mui.Card> 
                         <p>The <a href="">Apache Software Foundation</a> considered this licensing arrangement to be incompatible with its licensing policies, as it "passes along risk to downstream consumers of our software imbalanced in favor of the licensor, not the licensee, thereby violating our Apache legal policy of being a universal donor", and "are not a subset of those found in the [Apache License 2.0], and they cannot be sublicensed as [Apache License 2.0]".[48] In August 2017, Facebook dismissed the Apache Foundation's downstream concerns and refused to reconsider their license.[49][50] The following month, <a href="">WordPress</a> decided to switch its Gutenberg and Calypso projects away from React.</p>
                         <p>On September 23, 2017, Facebook announced that the following week, it would re-license Flow, <a href="">Jest</a>, React, and Immutable.js under a standard <a href="">MIT License</a>; the company stated that React was "the foundation of a broad ecosystem of open source software for the web", and that they did not want to "hold back forward progress for nontechnical reasons".<br/></p>
                         <p>On September 26, 2017, React 16.0.0 was released with the MIT license.[53] The MIT license change has also been backported to the 15.x release line with React 15.6.2.[54]</p>
                         <h3><strong>See also</strong> [<a href="/">edit</a>]</h3><hr/>
                         <ul>
                             <li><a href="" style={{ textDecoration:'none' }}>React Native</a></li>
                             <li><a href="" style={{ textDecoration:'none' }}>Angular JS</a></li>
                             <li><a href="" style={{ textDecoration:'none' }}>Angular</a></li>
                             <li><a href="" style={{ textDecoration:'none' }}>Backbone.js</a></li>
                             <li><a href="" style={{ textDecoration:'none' }}>Ember.js</a></li>
                             <li><a href="" style={{ textDecoration:'none' }}>Svelte</a></li>
                             <li><a href="" style={{ textDecoration:'none' }}>Vue.js</a></li>
                             <li><a href="" style={{ textDecoration:'none' }}>Comparison of JavaScript libraries</a></li>
                             <li><a href="" style={{ textDecoration:'none' }}>Web Component</a></li>
                         </ul>
                         <h3><strong>References</strong> [<a href="/">edit</a>]</h3><hr/>
                         <Mui.Grid container spacing={1}>
                         <Mui.Grid item xs={6}>
                         <Mui.Paper>xs=6</Mui.Paper>
                         </Mui.Grid>
                         <Mui.Grid item xs={6}>
                         <Mui.Paper>xs=6</Mui.Paper>
                         </Mui.Grid>  
                         </Mui.Grid>
                 </Mui.CardContent>   
                 </Mui.Card> 
                 </Mui.Grid>
                 </Mui.Grid>
             </Mui.Container> 
        )
    }
}

export default Home;