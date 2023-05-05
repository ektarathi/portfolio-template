import { styled } from "@mui/system";

export const StyledWrapper = styled("div")((props: any) => ({
    position: 'relative',
}));

export const StyledButton = styled("div")((props: any) => ({
    width: '2rem',
    height: '2rem',
    cursor: 'pointer',
    color: '#01be96',
    border: 'none',
    position: 'absolute',
    top: '45%',
    right: '-1rem',
}));