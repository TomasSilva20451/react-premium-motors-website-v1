import styled from 'styled-components'
import FeaturePic from '../../images/featured3.jpg'

export const FeatureContainer = styled.div`
background:linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)),url(${FeaturePic});
height:100vh;
max-height:600px;
background-position:center;
background-size:cover;
display:flex;
justify-content:center;
align-items: center;
color:#fff;
text-align:center;
padding:0 1rem;


h1{
    font-size:clamp(3rem, 5vw, 5rem);
    margin-top: -178px;
    translate: 257px;
}

p{
    margin-bottom:1rem;
    font-size:clamp(1rem, 3vw, 2rem);
    margin-top: 19px;
    translate: -248px;
}
`

export const FeatureButton = styled.button`
    font-size: 1.4rem;
    padding:0.6rem 3rem;
    border:none;
    background:#e31837;
    color:#fff;
    transition:0.2s ease-out;
    margin-top: 145px;
    translate: -501px;

    &:hover{
        color:#000;
        background: #ffc500;
        transition:0.2s ease-out;
        cursor:pointer;
        margin-top: 145px;
        translate: -501px;
    }

`;