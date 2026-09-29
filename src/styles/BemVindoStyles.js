import styled from "styled-components";

export const Card = styled.div`
    
    background: #FFF;
    border-radius: 10px;
    padding: 20px 30px;
    margin: 10px 0;
    width: 100%;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
    transition: transform 0.2 ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.10); 
    }
`;

export const GreetingText = styled.h2`
    color: #2C3E50;
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 15px;

    span {
        color: #3498DB;
        font-weight: 700;
    }

`;

export const Divider = styled.hr`
    border: none;
    height: 3px;
    background: linear-gradient(to right, #3498DB, #2ECC71);
    border-radius: 2px;
`