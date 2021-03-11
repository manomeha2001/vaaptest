import Head from "./components/head";
import FooterHandler from "./components/footerhandler";
import HomePage from "./components/homepage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Blogdetails from './components/blogdetails'
import Aboutus from "./components/aboutus";
import About from "./components/about-us";
import Projects from "./components/projects";
import abb from './assets/ABB.png';
import alasab from './assets/AlAsab.jpg';
import mott from './assets/Mott.png';
import ramboll from './assets/Ramboll.png';
import siemens from './assets/Siemens.png';
import siemens2 from './assets/AboutBg2.png';
import Clientele from "./components/clientele";





function App() {

  const blogdetails=[

    {
        Id: '1',
        title:'Blog 1',
        summary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae placeat explicabo, ipsa corruptiLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae placeat explicabo, ipsa corrupti',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae placeat explicabo, ipsa corrupti animi corporis accusantium veritatis laudantium nihil soluta consectetur et, cumque similique. At, cum. Illum voluptatem aliquam unde! Mollitia tempore repellendus, aut quibusdam iste laudantium fugit, omnis adipisci possimus ipsum eligendi cumque vero odit deserunt! Fuga rerum deserunt nostrum iste, nobis facilis expedita commodi cupiditate ad a, exercitationem aliquam culpa. Deserunt, facilis. Accusantium molestias alias, dicta temporibus ducimus inventore excepturi doloremque laborum aliquid voluptatibus facere corrupti ut nostrum dignissimos expedita quam sed deserunt consequatur. Tempore eos minima dignissimos nesciunt, eaque modi, ad odio quisquam veniam, cum ab.',
        date:'12/12/2012',
        comments: [
           { 
               name:'Gopalakrishnan',
               body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nam quam sunt iure maiores ipsum! Magnam itaque maiores distinctio! Fugiat?',
              email:'abcdefghijklmn@gmail.com',
              date:'22/12/20'  
             
              },


            {
                name:'Vengsarkar',
                body: 'Hello, my first comment',
                email:'abcdef123@yahoo.com',
                date:'23/12/20'
              }

        ]
    },

    {
        Id: '2',
        title:'Blog 2',
        summary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. BeataeLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae placeat explicabo, ipsa corrupti animi corporis accusantium veritatis laudantium nihil soluta consectetur et, cumque similique. At, cum. Illum voluptatem aliquam unde! Mollitia tempore repellendus, aut quibusdam iste laudantium fugit, omnis adipisci possimus ipsum eligendi cumque vero odit deserunt! Fuga rerum deserunt nostrum iste, nobis facilis expedita commodi cupiditate ad a, exercitationem aliquam culpa. Deserunt, facilis. Accusantium molestias alias, dicta temporibus ducimus inventore excepturi doloremque laborum aliquid voluptatibus facere corrupti ut nostrum dignissimos expedita quam sed deserunt consequatur. Tempore eos minima dignissimos nesciunt, eaque modi, ad odio quisquam veniam, cum ab.',
        date:'12/12/2012',
        comments: [
           { 
               name:'Gopalakrishnan',
               body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nam quam sunt iure maiores ipsum! Magnam itaque maiores distinctio! Fugiat?',
              email:'abcdefghijklmn@gmail.com',
              date:'22/12/20'  
             
              },


            {
                name:'Vengsarkar',
                body: 'Hello, my first comment',
                email:'abcdef123@yahoo.com',
                date:'23/12/20'
              }

        ]
    },

    {
        Id: '3',
        title:'Blog 3',
        summary:'Lorem ipsum dolor sit amet consectetur adipisicing',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae placeat explicabo, ipsa corrupti animi corporis accusantium veritatis laudantium nihil soluta consectetur et, cumque similique. At, cum. Illum voluptatem aliquam unde! Mollitia tempore repellendus, aut quibusdam iste laudantium fugit, omnis adipisci possimus ipsum eligendi cumque vero odit deserunt! Fuga rerum deserunt nostrum iste, nobis facilis expedita commodi cupiditate ad a, exercitationem aliquam culpa. Deserunt, facilis. Accusantium molestias alias, dicta temporibus ducimus inventore excepturi doloremque laborum aliquid voluptatibus facere corrupti ut nostrum dignissimos expedita quam sed deserunt consequatur. Tempore eos minima dignissimos nesciunt, eaque modi, ad odio quisquam veniam, cum ab.',
        date:'12/12/2012',
        comments: [
           { 
               name:'Gopalakrishnan',
               body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nam quam sunt iure maiores ipsum! Magnam itaque maiores distinctio! Fugiat?',
              email:'abcdefghijklmn@gmail.com',
              date:'22/12/20'  
             
              },


            {
                name:'Vengsarkar',
                body: 'Hello, my first comment',
                email:'abcdef123@yahoo.com',
                date:'23/12/20'
              }

        ]
    },


    {
        Id: '4',
        title:'Blog 4',
        summary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae placeat explicabo, ipsa corrupti animiLorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae placeat explicabo, ipsa corrupti animi',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae placeat explicabo, ipsa corrupti animi corporis accusantium veritatis laudantium nihil soluta consectetur et, cumque similique. At, cum. Illum voluptatem aliquam unde! Mollitia tempore repellendus, aut quibusdam iste laudantium fugit, omnis adipisci possimus ipsum eligendi cumque vero odit deserunt! Fuga rerum deserunt nostrum iste, nobis facilis expedita commodi cupiditate ad a, exercitationem aliquam culpa. Deserunt, facilis. Accusantium molestias alias, dicta temporibus ducimus inventore excepturi doloremque laborum aliquid voluptatibus facere corrupti ut nostrum dignissimos expedita quam sed deserunt consequatur. Tempore eos minima dignissimos nesciunt, eaque modi, ad odio quisquam veniam, cum ab.',
        date:'12/12/2012',
        comments: [
           { 
               name:'Gopalakrishnan',
               body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nam quam sunt iure maiores ipsum! Magnam itaque maiores distinctio! Fugiat?',
              email:'abcdefghijklmn@gmail.com',
              date:'22/12/20'  
             
              },


            {
                name:'Vengsarkar',
                body: 'Hello, my first comment',
                email:'abcdef123@yahoo.com',
                date:'23/12/20'
              }

        ]
    },


    {
        Id: '5',
        title:'Blog 5',
        summary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae placeat explicabo.',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae placeat explicabo, ipsa corrupti animi corporis accusantium veritatis laudantium nihil soluta consectetur et, cumque similique. At, cum. Illum voluptatem aliquam unde! Mollitia tempore repellendus, aut quibusdam iste laudantium fugit, omnis adipisci possimus ipsum eligendi cumque vero odit deserunt! Fuga rerum deserunt nostrum iste, nobis facilis expedita commodi cupiditate ad a, exercitationem aliquam culpa. Deserunt, facilis. Accusantium molestias alias, dicta temporibus ducimus inventore excepturi doloremque laborum aliquid voluptatibus facere corrupti ut nostrum dignissimos expedita quam sed deserunt consequatur. Tempore eos minima dignissimos nesciunt, eaque modi, ad odio quisquam veniam, cum ab.',
        date:'12/12/2012',
        comments: [
           { 
               name:'Gopalakrishnan',
               body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nam quam sunt iure maiores ipsum! Magnam itaque maiores distinctio! Fugiat?',
              email:'abcdefghijklmn@gmail.com',
              date:'22/12/20'  
             
              },


            {
                name:'Vengsarkar',
                body: 'Hello, my first comment',
                email:'abcdef123@yahoo.com',
                date:'23/12/20'
              }

        ]
    },
]

const clientlist=[

  {
    name:'ABB',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: abb,
    date: '12/12/12'
  },
  {
    name:'Al Asab',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: alasab,
    date: '12/12/12'
  },
  {
    name:'MOTT MacDonald',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: mott,
    date: '12/12/12'
  },
  {
    name:'Ramball',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: ramboll,
    date: '12/12/12'
  },
  {
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens,
    date: '12/12/12'
  },
  {
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },{
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },

  {
    name:'Siemens',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit veritatis ex dignissimos ad aperiam, optio magnam nulla! Molestias, inventore?',
    image: siemens2,
    date: '12/12/12'
  },

]


  const newsarray=[

    {
        id: '1',
        newstitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem recusandae a id doloribus explicabo, vero qui itaque voluptatibus dolor eius.',
        date: '12/12/2012',
        link: 'None1'

    },
    {
        id: '2',
        newstitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem recusandae a id doloribus explicabo, vero qui itaque voluptatibus dolor eius.',
        date: '12/12/2012',
        link: 'None1'

    },
    {
        id: '3',
        newstitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem recusandae a id doloribus explicabo, vero qui itaque voluptatibus dolor eius.',
        date: '12/12/2012',
        link: 'None'

    },
    {
        id: '4',
        newstitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem recusandae a id doloribus explicabo, vero qui itaque voluptatibus dolor eius. Voluptatem recusandae a id doloribus explicabo, vero qui itaque voluptatibus dolor eius.',
        date: '12/12/2012',
        link: 'None'

    },
    {
        id: '5',
        newstitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem recusandae a id doloribus explicabo, vero qui itaque voluptatibus dolor eius. ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem recusandae a id doloribus explicabo, vero qui itaque voluptatibus dolor eius.',
        date: '12/12/2012',
        link: 'None1'

    },
    {
        id: '6',
        newstitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. .',
        date: '12/12/2012',
        link: 'None'

    },
    {
        id: '7',
        newstitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem recusandae a id doloribus explicabo, vero qui itaque voluptatibus dolor eius. vero qui itaque voluptatibus dolor eius.',
        date: '12/12/2012',
        link: 'None1'

    },
    {
        id: '8',
        newstitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem recusandae a id doloribus explicabo, vero qui itaque voluptatibus dolor eius.',
        date: '12/12/2012',
        link: 'None'

    },
    {
        id: '9',
        newstitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem recusandae a id doloribus explicabo, vero qui itaque voluptatibus dolor eius.',
        date: '12/12/2012',
        link: 'None'

    },    

]

  return (
      <Router>
        <Head/>
            <Route exact path="/">
            <HomePage blogdetails={blogdetails} newsarray={newsarray} clientlist={clientlist}/>
            </Route>
            <Route exact path="/blogs/:id">
              <Blogdetails blogdetails={blogdetails} />
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/projects">
              <Projects/>
            </Route>
            <Route exact path="/clientele">
              <Clientele clientlist={clientlist}/>
            </Route>
        <FooterHandler/>
    </Router>
        

        
        
 
  );
}

export default App;
