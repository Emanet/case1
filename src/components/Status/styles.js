import styled from "styled-components";


export const UptimeStatus = styled.div`
display: inline-block;
background-color: ${props => props.isOk ? 'green' : 'yellow'};
width: 1em;
height:5em;
margin:5px;
text-align: center;
`
export const StyledBox = styled.div`
border-style:solid;
width: 50%;
margin: 0 auto;
display:flex;
overflow:auto;
`
export const StyledH = styled.h2`
width: 50%;
margin: auto;
margin-top: 1em;
margin-bottom: 1em;
`
export const StyledTitle = styled.span`
display: flex;
height: 5em;
justify-content: center;
align-items: center;
background-color: #5765f2;
font-family: "Comic Sans MS", cursive, sans-serif;
font-size: 40px;
letter-spacing: 0px;
word-spacing: 2px;
color: white;
font-weight: 700;
text-decoration: none solid rgb(68, 68, 68);
font-style: italic;
font-variant: normal;
text-transform: none;
`
