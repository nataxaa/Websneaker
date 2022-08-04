import styled from 'styled-components'

export const Container = styled.header`


width:100% ;
background-color: var(--color-header);
position:fixed ;
display:flex ;
justify-content:space-around ;
align-items:center ;
color:white ;
ul{
    display:flex ;
    list-style:none ;
    gap:1rem;
    position:relative ;
    top:1rem ;
    padding-bottom:10px ;
}
button{
    position:relative ;
    top:4rem ;
    left:8rem ;
    padding:12px ;
    border-radius:30px ;
    height:48px ;
    cursor: pointer;
    background-color:#FF570A ;
    border:none ;
    color:white ;
    :hover{
        
        opacity:0.8 ;
    }
}
.icon-shop{
    font-size:24px ;
    top:-1px ;
    right:2px ;
    position:relative ;
}


`