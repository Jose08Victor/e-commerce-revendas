import banner_avon from "../../assets/banner-avon2.jpg";
import { Banner, Main, Ul, CategoryField, TitleOneContainer, TitleOne, TitleTwo, TitleTwoContainer, Section } from "./styles";
import naturaIcon from "../../assets/naturaIcon.png";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";

export const Home = () => {
  const adminContext = useContext( AdminContext );
    if ( !adminContext ) throw new Error( 'useContext deve ser usado dentro de um AdminContextProvider' );

    const { theme, setTheme } = adminContext;


  return (
    <Main>
      <Ul>
        <li onClick={() => setTheme("avonColor")} className={theme === "avonColor" ? "active" : ""} >Produtos Avon</li>

        <li onClick={() => setTheme("naturaColor")} className={theme === "naturaColor" ? "active" : ""}>Produtos Natura</li>
      </Ul>

      <CategoryField>
        <li>Perfumes</li>
        <li>Perfumes</li>
        <li>Perfumes</li>
        <li>Perfumes</li>
        <li>Perfumes</li>
        <li>Perfumes</li>
        <li>Perfumes</li>
        <li>Perfumes</li>
        <li>Perfumes</li>
      </CategoryField>

      <Banner src={ banner_avon } alt="" />

      <TitleOneContainer>
        <TitleOne>Avon / Perfumes :</TitleOne>

        <TitleTwoContainer>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="40" viewBox="0 0 236 195" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0,195) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <path d="M480 1886 c-72 -16 -156 -44 -202 -67 -29 -15 -37 -25 -40 -51 -2
-26 -10 -36 -35 -48 -18 -9 -40 -25 -49 -38 -9 -14 -26 -22 -43 -22 -17 0 -31
-7 -35 -16 -10 -25 -7 -1537 3 -1553 7 -12 57 -13 297 -7 336 7 684 7 802 0
46 -3 88 -2 95 3 7 6 217 6 506 0 271 -4 499 -6 507 -3 12 5 14 126 12 788
l-3 783 -33 3 c-24 2 -36 10 -42 26 -7 18 -26 29 -82 46 -149 46 -245 60 -406
60 -172 0 -285 -18 -441 -70 -49 -17 -96 -30 -104 -30 -8 0 -61 26 -118 58
-232 129 -424 174 -589 138z m294 -61 c96 -25 233 -87 334 -151 l52 -34 0
-725 c0 -641 -2 -725 -15 -725 -8 0 -61 18 -118 41 -139 55 -206 75 -315 94
-86 15 -104 15 -235 -1 -78 -9 -153 -17 -167 -18 l-25 -1 -3 727 c-2 639 0
728 13 742 8 8 55 27 103 41 48 15 92 28 97 30 6 2 49 4 96 4 62 1 114 -6 183
-24z m1111 -85 c101 -13 206 -36 248 -54 l37 -15 0 -730 c0 -401 -4 -732 -9
-735 -4 -3 -23 -1 -42 4 -149 43 -428 55 -594 26 -74 -13 -189 -42 -297 -73
-17 -5 -18 35 -18 735 l0 740 43 20 c77 36 213 69 342 85 61 8 222 6 290 -3z
m-1645 -776 c5 -701 5 -709 25 -708 11 1 63 7 115 14 158 21 277 23 366 6 100
-19 187 -48 182 -61 -4 -12 -17 -12 -133 3 -126 17 -313 15 -449 -4 -64 -9
-123 -13 -131 -10 -13 5 -15 101 -15 734 0 401 3 732 7 736 26 25 28 -27 33
-710z m-90 634 c-1 -218 13 -1444 16 -1447 3 -3 30 0 62 7 114 25 361 35 524
23 139 -10 182 -20 165 -37 -8 -8 -763 -28 -782 -20 -13 5 -15 98 -15 744 0
406 3 742 7 745 13 14 23 7 23 -15z m2108 -727 c2 -660 0 -742 -13 -747 -18
-7 -866 14 -874 21 -12 13 21 25 114 42 153 27 424 25 570 -6 61 -13 121 -24
135 -25 l25 -1 2 720 c2 396 5 726 8 733 3 8 11 12 18 9 9 -3 13 -163 15 -746z"/>
              <path d="M530 1709 c-117 -26 -150 -39 -150 -59 0 -26 15 -25 120 1 152 39
305 10 493 -91 63 -34 76 -38 86 -26 15 17 -23 48 -114 94 -157 78 -316 107
-435 81z"/>
              <path d="M540 1566 c-125 -22 -161 -36 -158 -60 3 -24 8 -24 108 4 121 34 226
26 365 -30 61 -24 131 -56 156 -72 53 -32 65 -34 73 -13 11 31 -129 109 -268
149 -110 32 -184 38 -276 22z"/>
              <path d="M509 1411 c-97 -21 -129 -35 -129 -56 0 -19 8 -19 100 1 101 21 220
21 300 1 36 -10 116 -43 179 -73 91 -46 115 -54 122 -43 29 45 -257 172 -411
183 -53 4 -100 0 -161 -13z"/>
              <path d="M475 1261 c-81 -20 -95 -27 -95 -46 0 -25 19 -26 92 -3 114 34 227
31 348 -11 52 -18 126 -50 163 -72 80 -45 100 -49 95 -16 -2 17 -27 34 -113
77 -60 30 -140 63 -177 73 -84 22 -219 21 -313 -2z"/>
              <path d="M495 1115 c-83 -18 -115 -32 -115 -49 0 -24 14 -26 62 -11 93 27 196
37 267 25 74 -13 247 -78 303 -115 40 -27 63 -31 73 -15 17 28 -137 113 -280
155 -99 28 -210 32 -310 10z"/>
              <path d="M470 967 c-71 -18 -85 -25 -85 -42 0 -24 22 -24 110 -1 77 20 200 20
279 1 33 -9 112 -41 174 -71 106 -53 148 -62 136 -31 -12 33 -194 121 -314
152 -82 21 -199 18 -300 -8z"/>
              <path d="M470 821 c-76 -24 -90 -31 -90 -46 0 -26 20 -26 78 -4 46 19 77 23
162 23 98 0 112 -2 205 -38 55 -21 132 -55 172 -77 59 -32 73 -36 83 -25 16
20 -12 43 -104 89 -139 69 -219 90 -341 93 -83 2 -124 -2 -165 -15z"/>
              <path d="M452 671 c-72 -21 -77 -24 -68 -47 4 -11 13 -14 29 -10 12 3 61 14
110 23 76 15 97 15 165 4 100 -17 176 -42 291 -97 73 -36 96 -43 102 -33 23
38 -128 115 -317 163 -83 21 -231 20 -312 -3z"/>
              <path d="M458 522 c-77 -21 -83 -25 -74 -48 5 -13 13 -15 39 -9 204 46 375 24
564 -74 58 -30 80 -37 90 -29 19 15 -4 38 -75 76 -158 83 -404 121 -544 84z"/>
              <path d="M1541 1610 c-60 -9 -82 -23 -64 -41 9 -9 40 -9 120 -1 69 7 137 8
188 2 116 -13 135 -12 135 5 0 8 -9 19 -21 25 -26 14 -287 22 -358 10z"/>
              <path d="M1535 1430 c-108 -16 -219 -53 -223 -74 -5 -22 -1 -22 163 15 83 19
129 23 270 22 116 0 191 -5 235 -16 52 -12 68 -13 78 -3 17 17 2 29 -53 46
-50 15 -388 22 -470 10z"/>
              <path d="M1551 1289 c-129 -16 -241 -51 -241 -73 0 -25 14 -26 81 -6 166 51
380 64 555 34 104 -18 138 -14 112 12 -35 36 -337 55 -507 33z"/>
              <path d="M1498 1140 c-121 -25 -188 -49 -188 -66 0 -17 31 -18 80 -4 65 20
285 50 355 49 39 0 123 -8 188 -18 93 -13 120 -14 128 -5 45 54 -363 86 -563
44z"/>
              <path d="M1518 1000 c-130 -22 -208 -47 -208 -66 0 -23 23 -26 71 -10 108 37
204 50 359 50 116 0 175 -4 233 -18 58 -14 82 -15 90 -7 22 22 -17 39 -126 55
-137 20 -283 19 -419 -4z"/>
              <path d="M1572 870 c-95 -13 -235 -50 -252 -66 -23 -23 1 -40 37 -25 115 47
445 67 605 36 74 -14 108 -12 108 5 0 14 -19 22 -84 37 -76 17 -329 25 -414
13z"/>
              <path d="M1640 734 c-155 -14 -330 -56 -330 -81 0 -24 26 -25 97 -4 37 12 127
29 199 38 124 16 137 16 265 -1 167 -23 191 -24 196 -9 6 17 -26 31 -98 42
-77 11 -266 20 -329 15z"/>
              <path d="M1595 588 c-118 -13 -266 -51 -279 -70 -16 -26 1 -33 47 -20 135 39
184 45 372 46 114 0 216 -5 254 -13 47 -9 66 -9 75 -1 19 20 -19 36 -111 48
-130 17 -268 21 -358 10z"/>
              <path d="M1565 433 c-57 -9 -202 -42 -229 -52 -14 -6 -26 -18 -26 -27 0 -19
14 -18 165 16 117 25 352 30 470 10 102 -18 110 -18 110 4 0 31 -86 46 -285
51 -96 2 -188 1 -205 -2z"/>
            </g>
          </svg>

          <TitleTwo>Ver Revistas</TitleTwo>
        </TitleTwoContainer>
      </TitleOneContainer>

      <Section>
        <ul>
          <li>
            <img src={ naturaIcon } alt="" />

            <h3>Lorem ipsum dolor sit amet.</h3>

            <div>
              <p>R$ 240,00</p>

              <span>R$20 de desconto no pix</span>
            </div>

            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
              <g transform="translate(440,1620) scale(0.1,-0.1)"
                fill="#fff" stroke="none">
                <path d="M5236 12429 c-273 -39 -529 -120 -780 -246 -316 -158 -558 -343 -792
-604 -311 -348 -506 -719 -618 -1181 -53 -215 -58 -283 -63 -745 l-5 -433
-1038 0 -1039 0 -5 -52 c-3 -29 -10 -154 -16 -278 -6 -124 -15 -317 -20 -430
-6 -113 -17 -353 -25 -535 -8 -181 -17 -375 -20 -430 -3 -55 -12 -248 -20
-430 -8 -181 -20 -424 -25 -540 -6 -115 -21 -457 -35 -760 -29 -626 -40 -877
-55 -1155 -18 -348 -40 -788 -55 -1125 -8 -181 -20 -420 -25 -530 -53 -1075
-55 -1148 -22 -1278 44 -176 131 -333 263 -472 86 -90 186 -158 315 -215 184
-81 -75 -74 2857 -77 1529 -2 2617 0 2615 6 -1 4 -37 36 -79 69 -94 74 -399
379 -459 459 -25 32 -62 79 -83 106 l-39 47 -2206 0 c-1298 0 -2233 4 -2271
10 -114 16 -201 98 -236 224 -15 51 -16 77 -6 225 17 249 53 1005 146 3036 8
182 20 425 25 540 6 116 21 458 35 760 14 303 32 687 40 855 8 168 19 409 25
535 15 336 40 728 45 734 3 3 323 5 710 6 l705 2 0 -436 c0 -240 4 -462 10
-495 18 -114 87 -206 190 -255 47 -22 68 -26 150 -26 83 0 102 3 150 27 75 37
127 91 164 168 l31 65 5 472 5 472 1953 4 1952 4 0 -406 c0 -460 7 -556 43
-627 57 -112 161 -177 293 -182 160 -7 275 68 337 219 21 52 22 70 27 523 l5
468 670 2 670 1 16 -320 c66 -1276 72 -1366 91 -1376 10 -5 79 -32 154 -59
140 -52 348 -146 466 -212 37 -21 70 -38 72 -38 3 0 3 12 1 28 -3 15 -9 113
-15 217 -20 393 -100 1860 -115 2114 -8 145 -15 282 -15 303 l0 38 -999 0
-998 0 -6 378 c-6 402 -17 539 -63 760 -29 142 -68 280 -115 402 -47 123 -184
390 -260 506 -196 297 -473 573 -765 764 -123 80 -360 202 -489 253 -146 57
-402 121 -605 152 -153 22 -582 19 -754 -6z m714 -690 c166 -28 227 -45 369
-101 332 -130 568 -295 796 -555 228 -260 382 -588 451 -958 13 -70 18 -178
23 -488 3 -218 5 -402 3 -407 -3 -7 -678 -10 -1958 -10 l-1954 0 0 376 c0 287
4 402 15 483 51 351 166 624 385 916 85 112 288 311 400 392 198 142 466 266
706 327 213 53 538 64 764 25z"/>
                <path d="M8607 5903 c-69 -23 -138 -89 -171 -162 l-27 -60 1 -538 c0 -296 -3
-699 -6 -895 l-7 -358 -906 -2 -906 -3 -40 -22 c-50 -26 -121 -102 -141 -148
-21 -50 -18 -180 5 -230 26 -57 85 -113 150 -144 l56 -26 891 -3 891 -3 6
-201 c4 -111 4 -472 1 -803 -3 -341 -2 -643 3 -701 14 -152 62 -233 169 -285
63 -31 189 -33 244 -4 62 32 105 72 136 127 l29 53 3 908 3 907 862 0 c657 0
876 3 923 13 119 25 200 96 224 198 16 64 8 164 -15 209 -29 58 -95 118 -153
140 -51 19 -79 20 -947 20 l-895 0 -2 908 -3 907 -23 45 c-70 134 -222 199
-355 153z"/>
              </g>
            </svg>
          </li>

          <li>
            <img src={ naturaIcon } alt="" />

            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>

            <div>
              <p>R$ 240,00</p>

              <span>R$20 de desconto no pix</span>
            </div>

            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
              <g transform="translate(440,1620) scale(0.1,-0.1)"
                fill="#fff" stroke="none">
                <path d="M5236 12429 c-273 -39 -529 -120 -780 -246 -316 -158 -558 -343 -792
-604 -311 -348 -506 -719 -618 -1181 -53 -215 -58 -283 -63 -745 l-5 -433
-1038 0 -1039 0 -5 -52 c-3 -29 -10 -154 -16 -278 -6 -124 -15 -317 -20 -430
-6 -113 -17 -353 -25 -535 -8 -181 -17 -375 -20 -430 -3 -55 -12 -248 -20
-430 -8 -181 -20 -424 -25 -540 -6 -115 -21 -457 -35 -760 -29 -626 -40 -877
-55 -1155 -18 -348 -40 -788 -55 -1125 -8 -181 -20 -420 -25 -530 -53 -1075
-55 -1148 -22 -1278 44 -176 131 -333 263 -472 86 -90 186 -158 315 -215 184
-81 -75 -74 2857 -77 1529 -2 2617 0 2615 6 -1 4 -37 36 -79 69 -94 74 -399
379 -459 459 -25 32 -62 79 -83 106 l-39 47 -2206 0 c-1298 0 -2233 4 -2271
10 -114 16 -201 98 -236 224 -15 51 -16 77 -6 225 17 249 53 1005 146 3036 8
182 20 425 25 540 6 116 21 458 35 760 14 303 32 687 40 855 8 168 19 409 25
535 15 336 40 728 45 734 3 3 323 5 710 6 l705 2 0 -436 c0 -240 4 -462 10
-495 18 -114 87 -206 190 -255 47 -22 68 -26 150 -26 83 0 102 3 150 27 75 37
127 91 164 168 l31 65 5 472 5 472 1953 4 1952 4 0 -406 c0 -460 7 -556 43
-627 57 -112 161 -177 293 -182 160 -7 275 68 337 219 21 52 22 70 27 523 l5
468 670 2 670 1 16 -320 c66 -1276 72 -1366 91 -1376 10 -5 79 -32 154 -59
140 -52 348 -146 466 -212 37 -21 70 -38 72 -38 3 0 3 12 1 28 -3 15 -9 113
-15 217 -20 393 -100 1860 -115 2114 -8 145 -15 282 -15 303 l0 38 -999 0
-998 0 -6 378 c-6 402 -17 539 -63 760 -29 142 -68 280 -115 402 -47 123 -184
390 -260 506 -196 297 -473 573 -765 764 -123 80 -360 202 -489 253 -146 57
-402 121 -605 152 -153 22 -582 19 -754 -6z m714 -690 c166 -28 227 -45 369
-101 332 -130 568 -295 796 -555 228 -260 382 -588 451 -958 13 -70 18 -178
23 -488 3 -218 5 -402 3 -407 -3 -7 -678 -10 -1958 -10 l-1954 0 0 376 c0 287
4 402 15 483 51 351 166 624 385 916 85 112 288 311 400 392 198 142 466 266
706 327 213 53 538 64 764 25z"/>
                <path d="M8607 5903 c-69 -23 -138 -89 -171 -162 l-27 -60 1 -538 c0 -296 -3
-699 -6 -895 l-7 -358 -906 -2 -906 -3 -40 -22 c-50 -26 -121 -102 -141 -148
-21 -50 -18 -180 5 -230 26 -57 85 -113 150 -144 l56 -26 891 -3 891 -3 6
-201 c4 -111 4 -472 1 -803 -3 -341 -2 -643 3 -701 14 -152 62 -233 169 -285
63 -31 189 -33 244 -4 62 32 105 72 136 127 l29 53 3 908 3 907 862 0 c657 0
876 3 923 13 119 25 200 96 224 198 16 64 8 164 -15 209 -29 58 -95 118 -153
140 -51 19 -79 20 -947 20 l-895 0 -2 908 -3 907 -23 45 c-70 134 -222 199
-355 153z"/>
              </g>
            </svg>
          </li>

          <li>
            <img src={ naturaIcon } alt="" />

            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque enim earum jas.</h3>

            <div>
              <p>R$ 240,00</p>

              <span>R$20 de desconto no pix</span>
            </div>

            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000">
              <g transform="translate(440,1620) scale(0.1,-0.1)"
                fill="#fff" stroke="none">
                <path d="M5236 12429 c-273 -39 -529 -120 -780 -246 -316 -158 -558 -343 -792
-604 -311 -348 -506 -719 -618 -1181 -53 -215 -58 -283 -63 -745 l-5 -433
-1038 0 -1039 0 -5 -52 c-3 -29 -10 -154 -16 -278 -6 -124 -15 -317 -20 -430
-6 -113 -17 -353 -25 -535 -8 -181 -17 -375 -20 -430 -3 -55 -12 -248 -20
-430 -8 -181 -20 -424 -25 -540 -6 -115 -21 -457 -35 -760 -29 -626 -40 -877
-55 -1155 -18 -348 -40 -788 -55 -1125 -8 -181 -20 -420 -25 -530 -53 -1075
-55 -1148 -22 -1278 44 -176 131 -333 263 -472 86 -90 186 -158 315 -215 184
-81 -75 -74 2857 -77 1529 -2 2617 0 2615 6 -1 4 -37 36 -79 69 -94 74 -399
379 -459 459 -25 32 -62 79 -83 106 l-39 47 -2206 0 c-1298 0 -2233 4 -2271
10 -114 16 -201 98 -236 224 -15 51 -16 77 -6 225 17 249 53 1005 146 3036 8
182 20 425 25 540 6 116 21 458 35 760 14 303 32 687 40 855 8 168 19 409 25
535 15 336 40 728 45 734 3 3 323 5 710 6 l705 2 0 -436 c0 -240 4 -462 10
-495 18 -114 87 -206 190 -255 47 -22 68 -26 150 -26 83 0 102 3 150 27 75 37
127 91 164 168 l31 65 5 472 5 472 1953 4 1952 4 0 -406 c0 -460 7 -556 43
-627 57 -112 161 -177 293 -182 160 -7 275 68 337 219 21 52 22 70 27 523 l5
468 670 2 670 1 16 -320 c66 -1276 72 -1366 91 -1376 10 -5 79 -32 154 -59
140 -52 348 -146 466 -212 37 -21 70 -38 72 -38 3 0 3 12 1 28 -3 15 -9 113
-15 217 -20 393 -100 1860 -115 2114 -8 145 -15 282 -15 303 l0 38 -999 0
-998 0 -6 378 c-6 402 -17 539 -63 760 -29 142 -68 280 -115 402 -47 123 -184
390 -260 506 -196 297 -473 573 -765 764 -123 80 -360 202 -489 253 -146 57
-402 121 -605 152 -153 22 -582 19 -754 -6z m714 -690 c166 -28 227 -45 369
-101 332 -130 568 -295 796 -555 228 -260 382 -588 451 -958 13 -70 18 -178
23 -488 3 -218 5 -402 3 -407 -3 -7 -678 -10 -1958 -10 l-1954 0 0 376 c0 287
4 402 15 483 51 351 166 624 385 916 85 112 288 311 400 392 198 142 466 266
706 327 213 53 538 64 764 25z"/>
                <path d="M8607 5903 c-69 -23 -138 -89 -171 -162 l-27 -60 1 -538 c0 -296 -3
-699 -6 -895 l-7 -358 -906 -2 -906 -3 -40 -22 c-50 -26 -121 -102 -141 -148
-21 -50 -18 -180 5 -230 26 -57 85 -113 150 -144 l56 -26 891 -3 891 -3 6
-201 c4 -111 4 -472 1 -803 -3 -341 -2 -643 3 -701 14 -152 62 -233 169 -285
63 -31 189 -33 244 -4 62 32 105 72 136 127 l29 53 3 908 3 907 862 0 c657 0
876 3 923 13 119 25 200 96 224 198 16 64 8 164 -15 209 -29 58 -95 118 -153
140 -51 19 -79 20 -947 20 l-895 0 -2 908 -3 907 -23 45 c-70 134 -222 199
-355 153z"/>
              </g>
            </svg>
          </li>
        </ul>
      </Section>
    </Main>
  )
}