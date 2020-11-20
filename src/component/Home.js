import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';

class Home extends Component{
    render(){
        return(
             <Mui.Container fixed style={{ fontFamily:'Times-new-roman' }}>
                 <Mui.Grid container spacing={1}>
                 <Mui.Grid item sm={2}><br/>
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
                 </Mui.Grid>
                 <Mui.Grid item sm={10}>
                 <Mui.Card variant="outlined" style={{ width:1050 }}>
                 <Mui.CardContent >
                     <p style={{ textAlign:'Right' }}>Not logged in <a href="/">Talk</a> <a href="/">Contributions</a> <a href="/">Create Account</a>  <a href="/">Log In</a></p>
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
                         9.);<br/>
                         10.   &#125;<br/>
                         11.   &#125;
                         </h3>
                         </Mui.CardContent>   
                         </Mui.Card> 
                 </Mui.CardContent>   
                 </Mui.Card> 
                 </Mui.Grid>
                 </Mui.Grid>
             </Mui.Container> 
        )
    }
}

export default Home;