import styled from "styled-components";

export const Container = styled.div`

    padding-top:3rem ;
    background-color:#0A0A0A ;
    height:596px ;
    
    h1{
        display:flex ;
        justify-content:center ;
        margin-top:3rem ;
        color:white ;
    }

    .link-icon{
        position:relative ;
        top:10px ;
    }

    div{
        align-items:center ;
        justify-content:center ;
        display:flex ;
        margin-top:8rem ;
        ul{
            display:flex ;
            flex-direction:row ;
            list-style:none ;
            gap:4rem;
            li{
                font-size:6rem ;
                background-color:#FF570A ;
                padding:10px 10px 5px 10px ;
                border-radius:10px ;
                a{
                    color:black ;
                }
            }
        }
    }

`