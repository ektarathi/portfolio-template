import { styled } from "@mui/system";

export const Container = styled("div")((props: any) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "1280px",
  width: "100%",
  margin: "0 auto",
  padding: "1.5rem 0",
  position: "relative",
  animation: "header 500ms ease-in-out",

  [props.theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

export const Logo = styled("div")((props: any) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  "& .MuiSvgIcon-root": {
    width: '2em',
    height: '2em',
  }
}));

export const LogoIcon = styled("div")((props: any) => ({
  color: "#01be96",
  fontSize: "1.8rem",
  marginTop: 20,
}));

export const Nav = styled("ul")<{ bar: boolean }>`
list-style-type: none;
display: block;
  @media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #01be96;
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props: any) => (props.bar ? "100vh" : 0)};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 100;
  }
  li {
    margin-left: 1rem;
    float: left;
    a {
      color: #fff;
      text-decoration: none;
      font-weight: 400;
      position: relative;
      :before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #fff;
        transform: scale(0);
        transform-origin: right;
        transition: transform 400ms ease-in-out;
      }
      :hover:before {
        transform: scale(1);
        transform-origin: left;
      }
      :hover {
        opacity: 0.7;
      }
    }
  }
`;
