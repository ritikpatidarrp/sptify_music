import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  position: fixed;
  grid-template-rows: 100vh 0vh;

  .spotify_body {
    display: grid;
    grid-template-columns: 260px 82vw;
    height: 100%;
    width: 100%;
    background-color: black;
    margin: 0; 
    /* height: 89%; */
    width: 100%;
  }

  .body {
    height: 88vh;
    border-radius: 0.5rem;
    margin: 0.4rem 0.4rem 0.1rem 0rem;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    overflow: auto;
    border-color: white;
    border:solid;
    border-color:#7f7f7f;
  }

  .sidebar {
    height: 87%;
  }

  .spotify_footer {
    background-color: black;
  }

  .body_contents {
    
  }
`;
