import styled from 'styled-components';

export const Header = styled.header`
    display: flex; 
    width: 100%;
    min-height: 100px;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.textColor};
    box-shadow: 0px 0px 5px ${props => props.theme.accentColor1},
            0px 0px 10px blue,
            0px 0px 5px ${props => props.theme.accentColor1};
    
    background-color: ${props => props.theme.backgroundColor}; 
    top: 0;
    position: sticky;
    overflow: hidden;
    z-index: 50;
    @media (max-width: 768px) and (min-width: 576px)  { 
        min-height: 60px;
    }
    @media (max-width: 576px)  {s
        min-height: 60px;
    }
    
`;

export const Content = styled.div`
    display: flex;
    align-items: center; 
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    background-color: ${props => props.theme.backgroundColor};
    box-sizing: border-box;
    
    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  {     
        width: 100%;
    }
    @media (min-width: 350px) and (max-width: 576px)  {   
        width: 100%;
    }
`;

export const Logo = styled.div`
    display: flex;
`;

export const Img = styled.img`
    display: flex;
    height: 150px;   
`;
export const Name = styled.span`
    display: flex;
    align-items: center;
    font-size: ${props => props.theme.textSizeTextL};
    font-weight: 500;
    font-family: Comic Sans MS;
    letter-spacing: 1px;
    margin-left: 22%;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const Buttons = styled.div`
   text-align: right;
   margin-left: auto;
`;



