import styled from 'styled-components';
import Button from "@/components/common/Button/Button";

export const Details = styled.section`
    display: flex; 
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.backgroundColor};
    transition: 0.1s;
    position: relative;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    padding: 0px 20px;
    margin: 0px 0px;
    box-sizing: border-box;
    z-index: 1;
    @media (min-width: 1200px){
        width: 1200px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 100%;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  { 
        padding: 0px 20px;   
        margin: 0px 0px;
        width: 100%;
    }
    @media (max-width: 576px)  {
        padding: 0px 20px;
        margin: 0px 0px;
        width: 100%;
    }
`;
export const ContentTitle = styled.span`
    letter-spacing: 1px;
    font-weight: 500;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    margin: 50px 0px;
    align-items: center;
    box-sizing: border-box;
    font-size: ${props => props.theme.textSizeTitle};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle500};
    }
    & a{
        font-family: Roboto;
        font-size:  ${props => props.theme.textSizeTitle};
        font-weight: 500;
        letter-spacing: 1px;
        transition: 0.3s;
        &:hover{
            transition: 0.3s;
            color: ${props => props.theme.accentColor1};
        }
    }
`;

export const Data = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr 3fr ;
    grid-gap: 20px;
    border-top: 1px solid ${props => props.theme.accentColor1};
    border-bottom: 1px solid ${props => props.theme.accentColor1};
    padding: 20px 0px;
    box-sizing: border-box; 
    @media (min-width: 1200px){   
    }
    @media (max-width: 1200px) and (min-width: 992px)  {     
    }
    @media (max-width: 992px) and (min-width: 768px)  {     
    }
    @media (max-width: 768px) and (min-width: 576px)  {    
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr;
    }
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 600px;
    object-fit: cover;
    opacity: 0.3;
`;

export const Image = styled.div`
    display: flex;
    @media (min-width: 577px) {
        width: 100%;;
    }
    height: 100%;
    flex-direction: column;
`;
export const Img = styled.img`  
@media (min-width: 577px) {
    width: 100%;;
}
    aspect-ratio: 1/1/5;
    display: flex;
    object-fit: cover;
    box-sizing: border-box;
    transition: 0.5s;
    box-shadow:  0px 0px 5px 0px ${props=>props.theme.shadowColor};
    margin: 0px 0px 20px 0px;
`;

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }

`;

export const Button1 = styled.a`
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    color:white;
    border: 0px;
    border-radius: ${props => props.theme.borderRadius};
    font-size: ${props=>props.theme.textSizeTextM};
    &:hover{
        opacity: 0.9;
    }
`;


export const Description = styled.div`
    display: grid;
    align-items: flex-start;
    align-self: flex-start;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    width: 100%;
`;

export const Title = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTitle};
    letter-spacing: 1px;
    font-weight: 500;
`;

export const Year = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};


`;
export const DescriptionFull = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTextM};
    line-height: 25px;
    letter-spacing: 1px;

`;
export const Genres = styled.div`
    display: grid;
    font-size: ${props=> props.theme.textSizeTextM};
    grid-template-columns: repeat(5,1fr);
    grid-gap:10px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
`;

export const Statistic = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap:20px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr 1fr  1fr 1fr;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 1fr  ;
    }
`;
export const TorrentsTitle = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};
`;

export const Torrents = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
`;

export const CommentsTitle = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};
`;

export const CommentsBlock = styled.div`
    display: grid;
    grid-gap: 20px;
    border: 1px solid ${props => props.theme.shadowColor};
    box-shadow: 0px 0px 2px 0px ${props=>props.theme.shadowColor};
    background-color: ${props => props.theme.backgroundColor};
    border-radius: ${props => props.theme.borderRadius};
    outline: none;
    max-width: 100%;
`;

export const InputComment = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${props => props.theme.shadowColor};
    box-shadow: 0px 0px 2px 0px ${props=>props.theme.shadowColor};
    border-radius: ${props => props.theme.borderRadius};
    outline: none;
    color: ${props=> props.theme.textColor};
    background-color: ${props => props.theme.backgroundColor};
    overflow-wrap: break-word;
`;

export const Comments = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    grid-area: third-block;
`;


export const OneComment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 1%;
    font-size: ${props=> props.theme.textSizeTextM};
    color: ${props=> props.theme.textColor};
`;

export const AddCommentButton = styled(Button1)`
    background-color:${props=>props.theme.accentColor1};
    width: 35%;
`;


export const OneCommentText = styled.span`
    display: block;
    word-wrap: break-word; /* Для поддержки старых браузеров */
    overflow-wrap: break-word; /* Для современных браузеров */

`;

export const YouTubeTrailer = styled.iframe`
    width: 560px;
    height: 315px;
    border: 0;
    allow: accelerometer;
    allow: autoplay;
    allow: clipboard-write;
    allow: encrypted-media;
    allow: gyroscope;
    allow: picture-in-picture;
    allow: web-share;
    allow: fullscreen;
`;

export const DeleteCommentButton = styled(Button)`
    background-color: rgb(180,0,0);
    color: white;
    width: 50%;
    margin-left: auto;
    `;

export const SecondPart = styled.div`
    display: grid;
    grid-template-areas:
    'first-block second-block second-block'
    'third-block third-block third-block';
    grid-gap: 1em;
`;

export const YTdiv = styled.div`
grid-area: first-block;
`;

export const DownloadsDiv = styled.div`
grid-area: second-block;
`;