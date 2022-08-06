import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

:root{
  --color-produto-page: #280112;
}

*{
  margin:0 ;
  padding:0 ;
  font-family:Poppins, sans-serif ;
}

.link{
  text-decoration:none ;
  color:white ;
}
.link-produto{
  text-decoration:none ;
  color:black ;
  transition:0.2s ;
  :hover{
    margin-top:-0.3rem ;
  }
}

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
     .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: #090A0C;
    padding: 3rem;
    position: relative;
    border-radius: 10px;
    color:white ;
    }

`