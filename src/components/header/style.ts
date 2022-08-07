import styled from 'styled-components'

export const Container = styled.header`


width:100% ;
;
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
    
    top: -10px ;
    left:7rem ;
    background:none ;
    height:48px ;
    cursor: pointer;
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

span{
    
    background-color:#FEF6C9 ;
    color:black ;
    padding:0.3px 3px ;
    border-radius:70px ;
    font-size:10px ;
}

`