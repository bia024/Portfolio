import React from "react";
import * as S from "./Header_style.js";

export default function Header() {
  return (
    <S.Container>
      <S.NavHeader>
        {/* <img
          src="https://lh3.googleusercontent.com/a/AGNmyxb_ZLDMYLH78g668jN1h8YExxig_uEd_R4sUT_s=s288"
          alt="My photo"
        /> */}
        <ul>
          <li>
            <a href="li">Home</a>
          </li>
          <li>
            <a href="li">About </a>
          </li>
          <li>
            <a href="li">Skills</a>
          </li>
          <li>
            <a href="li">Projects</a>
          </li>
          <li>
            <a href="li">Contacts</a>
          </li>
        </ul>
      </S.NavHeader>
      {/* <img src="" alt=" fto" /> */}
    </S.Container>
  );
}
