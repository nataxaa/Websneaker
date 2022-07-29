import styled from "styled-components";


export const Container = styled.div`

    padding-top:10rem ;
    display:grid ;
    grid-template-columns:repeat(3, 1fr) ;
    gap:10px;
    width:80rem ;
    margin:0 auto ;
    
    div.card{
        background-color: #DADDD8 ;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        padding-bottom:10px ;
        border-radius:10px ;
    }
    img{
        width:15rem ;
    }
    button{
        padding:10px ;
        background-color:#7A0000 ;
        border-radius:10px ;
        border:none ;
        cursor: pointer;
        transition: 0.1s ;

        :hover{
            margin-top:-0.1rem ;
            background-color:#F50000 ;
        }
    }

`