import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #1db958;
    gap: 5rem;

    img {
        height: 20vh;
    }

    button {
        padding: 1rem 5rem;
        border-radius: 5rem;
        color: #49f585;
        border: none;
        background-color: #000000;
        font-size: 1.4rem;
        cursor: pointer;
    }
`;
