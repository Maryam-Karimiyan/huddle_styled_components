import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        background: ${({theme})=>theme.colors.body};
        color: hsl(192,100%,9%);
        margin: 0;
        font-size: 1.15em;
    }
    p{
        opacity: 0.6;
        line-height: 1.5;
    }
    img{

        max-width: 100%
    }
    
`
 
