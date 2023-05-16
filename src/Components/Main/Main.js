import React from "react";
import * as S from "./Main_styled.js";
import fotoprincipal from "../../Assets/fotoprincipal.png";
export default function Main() {
  return (
    // <>
    //   <S.Div>
    //     <h1>
    //       Ser em construção... Você sa<a href="">Bia</a>?
    //     </h1>
    //   </S.Div>
    // </>

    <S.BoxMain>
      {/* <S.Paragraph>
        <p>Olá! Me chamo Bianca e sou Desenvoldedora front-end.</p>
      </S.Paragraph> */}
      <S.Div>
        <S.MainTitle>
          Ser em construção... Você sa
          <a class="aTwo" href="">
            Bia?
          </a>
          {/* abrir uma busca nesse Bia (ou é melhor um button? penando nas rotas, pode ser mais fácil...) de variedade de coisas e imagens correspondentes */}
        </S.MainTitle>
        {/* <h2></h2> */}
      </S.Div>
      {/* <S.Paragraph>
        <p>Olá! Me chamo Bianca e sou Desenvoldedora front-end.</p>
      </S.Paragraph> */}
      <S.Div2>
        <img src={fotoprincipal} alt="MyInicialPhoto" />
      </S.Div2>
      {/* <img src="./Assets/fotoprincipal.jpeg" alt="" /> */}
    </S.BoxMain>
  );
}
