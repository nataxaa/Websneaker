import styled from "styled-components";


export const Container = styled.div`

    padding-top:3rem ;
    display:grid ;
    grid-template-columns:repeat(3, 1fr) ;
    gap:20px;
    width:100% ;
    height:598px ;
    margin:0 auto ;
    background-color:var(--color-produto-page) ;

    div.Cards{
        display:flex ;
        justify-content:center ;
        margin-left:6rem ;
        margin-top:8rem ;
        height:min-content ;
        gap:1rem;
    }
    
    div.card{
        background-color: #FF570A ;
        box-shadow: 5px 5px 5px black;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        padding-bottom:10px ;
        border-radius:10px ;
        width:24rem ;
        height:20rem ;
    }
    img{
        width:15rem ;
        height:14rem ;
        padding-top:1rem ;
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