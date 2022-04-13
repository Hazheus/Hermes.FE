import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --highlight: #e20e8d;
        --background: #2f3640;
        --white: #dcdde1;        
        --nav-size: 5rem;        
        --nav-top-size: 3rem; 
    }

    * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
    }    

    body {
        height: 100%;
        width: 100%;
        background-color: var(--background);
        color: var(--white);
        text-align: center;
        font-family:'Courier New', Courier, monospace;    
        overflow-x: hidden;
        overflow-y: hidden;
            
        nav {
            width: var(--nav-size);
            height: 100%;    
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;    
            overflow-x: hidden;
            /* padding-top: 20px;        */
            box-shadow: 3px 0px 10px 1px #14171b;                
        }

        section {           
            margin-left: var(--nav-size);
            position: fixed;
            height: 100%;
            width: -webkit-fill-available;            
            padding: 25px;
            overflow-x: hidden;
            overflow-y: hidden;
        }

        @media (max-width: 40.625rem) {
            nav {
                width: 100%;
                height: var(--nav-top-size);
                padding-left: 20px;
                box-shadow: 0px 3px 10px 1px #14171b;     
                overflow-y: hidden;           
            }

            section {           
                margin-top: var(--nav-size);
                margin-left: 0px;
                width:  100%;
                height: 100% auto;
                overflow-x: hidden;
            }
        }
    }    
`;

export default GlobalStyles;