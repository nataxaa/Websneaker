import styled from "styled-components";


export const Container = styled.div`

padding-top:3rem ;

div.card-item{
    display:grid ;
    grid-template-columns:1fr 1fr ;
    align-items:center ;
    
    height:fit-content ;
}
div.information{
    background-color:#F3F7F0 ;
    border-radius:10px ;
    box-shadow: 10px 5px 5px black;
    display:flex ;
    flex-direction:column ;
    margin-top:4rem ;
    margin-left:6rem ;
    width:20rem ;
    height: 10rem;
    align-items:center ;
    gap:10px;
    padding:4rem ;
    button{
        padding:10px ;
        border:none ;
        border-radius:10px ;
        cursor: pointer;
        background-color:#7A0000 ;
        color:white ;
    }
    
}

img{
    width:35rem ;
    position:relative ;
    left:4rem ;
}
`