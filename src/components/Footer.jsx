import styled from "@emotion/styled";

const FooterSection = styled("div")`
  background-color: #000;
  box-sizing: border-box;
  padding: 5vh;
  text-align: center;
  color: #fff;
  & img {
    max-width: 300px;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5vh;
    gap: 2vw;

    > a {
      color: #fff;
    }
  }
`;

export const Footer = () => {
  return (
    <FooterSection>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWoAAABCCAYAAAB+UJwMAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMNK/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqhGJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQY+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I37Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADgGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkU0NzYyMzcxNzYzMTExRTlCOTIzRUI4QTI2QjA5MzRFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ1QzAxQTA0QzNDNjExRTk4RDFCRUIxNkY2RUI4MEZCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ1QzAxQTAzQzNDNjExRTk4RDFCRUIxNkY2RUI4MEZCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU2MDk2NjYzLWRkMmItNDk0NS1iYTMzLTNjMjM1ODg1NzVmNiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjRlNjdiYjdlLWFiZWEtY2M0Yy04YzJiLTc0MmMxNTY1NjliYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFj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"
        alt=""
      />
      <div>
        <span>All rights belong to their respective owners</span>
        <a href="https://genshin.hoyoverse.com/en/home">Official Website</a>
        <a href="https://genshin.dev">Database used</a>
      </div>
      <a href="https://www.hoyoverse.com/en-us">
        <img
          src="https://www.hoyoverse.com/_nuxt/img/logo-light.3def3bc.png"
          alt=""
        />
      </a>
    </FooterSection>
  );
};
