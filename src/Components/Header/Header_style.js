import styled from "styled-components";

export const NavHeader = styled.nav`
  border: solid transparent;
  /* transparent ? */
  /* border-left-width: 15vw; */
  /* img{
  width: 10vw;
}*/
  /* width: 70vw; ia deixar assim p colocar uma fotodo -lado, eu acho.-ms-layout-grid.. ou meu hamburguer p mais curiosidades extras*/
  width: 100%;
  /* //p justify cotent funcionar */
  height: 10vh;
  /* background-color: #2f15ed; cor primaria */
  background-color: #170b95;
  display: flex;
  justify-content: center;
  /* margin: 0;
  padding: 0;
  box-sizing: border-box; */
  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    /* width: 70vw;
    font-size: 2em; */
    width: 70vw;

    /* align-items: center; */
  }
  li {
    /* align-items: center; */
    /* width: 70vw; */
    font-size: 1.8rem;
    display: flex;
    align-items: center;
  }
  a {
    color: #65da96;
    /* color: #ffa501; or pink */
    /* list-style: none; */
    text-decoration: none;
    /* text-align: center; */
    font-family: "Sedgwick Ave Display", sans-serif;

    /* font-style: italic; */
    /* transition: transform 1s;
   transform: translateX(0) scale(0.5);
   a:hover,
    a:focus {
  background: red;
  transform: translateX(10px) scale(1.2);
  
 transition: background 1s;
  a:hover,
  a:focus:{
 background: orange;
  } */
  }
  a:hover {
    color: pink;
    /* color: pink; */
    /* rgb funciona? */
    /* background-color: purple; */
    border: 1px solid pink;
    transform: scale(1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
    /* transition: left 10s; */
  }
`;

export const Container = styled.div`
  background-color: #0c0569;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* border-color: blue; */
  /* position: relative; */
`;
