import styled from "styled-components";


export const Container = styled.div`

    padding-top:10rem ;
    display:grid ;
    grid-template-columns:repeat(3, 1fr) ;
    gap:20px;
    width:80rem ;
    margin:0 auto ;
    
    div.card{
        background-color: #DADDD8 ;
        box-shadow: 5px 5px 5px black;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        padding-bottom:10px ;
        border-radius:10px ;
       
    }
    img{
        width:18rem ;
        height:16rem ;
        
    }
    button{
        padding:10px ;
        background-color:#7A0000 ;
        border-radius:10px ;
        border:none ;
        cursor: pointer;
        transition: 0.1s ;
        position:relative ;

        :hover{
            margin-top:-0.1rem ;
            background-color:#F50000 ;
        }
    }

`