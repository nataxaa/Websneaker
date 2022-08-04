import styled from "styled-components";


export const Container = styled.div`

display:flex ;
flex-direction:column ;
align-items:center ;
margin: 0 auto ;

h1{
    margin-bottom:12px ;
}

img{
    width:7rem ;
    padding-left:2rem ;
}
div.produto{
    background-color:#FF570A ;
    border-radius:10px ;
    width:40rem ;
    height:6rem ;
    margin-bottom:10px ;
    display:grid ;
    grid-template-columns:repeat(4, 1fr) ;
    align-items:center ;
    span.name{
        padding-left:2rem ;
    }
    span.price{
        padding-left:3rem ;
    }
}

strong{
    position:relative ;
    left:12rem ;
}
button{
    position:relative ;
    left:12rem ;
    margin-top:10px ;
    padding:10px;
    border-radius:10px ;
    border:none ;
    cursor: pointer;
    background-color:#FF570A ;
    transition:0.4s ;
    :hover{
        opacity:0.8 ;
        top:-2px ;
    }
}

`