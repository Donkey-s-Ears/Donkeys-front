import styled from 'styled-components';

export const MatchingLoadingStyled = styled.div`
  text-align: center;
  margin: auto;
  font-size: 3rem;
`;

export const Bubbles = styled.div`
  width: 100%;
  margin: auto;
  .bubble {
    animation: expand 0.75s ease-in-out infinite;
    border-radius: 2rem;
    display: inline-block;
    transform-origin: center;
    margin: 0 0.3rem;
    width: 0.5rem;
    height: 0.5rem;
    background: #d5d5d5;
    &:nth-child(2) {
      animation-delay: 180ms;
    }
    &:nth-child(3) {
      animation-delay: 360ms;
    }

    @keyframes expand {
      0% {
        transform: scale(1);
      }
      25% {
        transform: scale(1.55);
      }
    }
  }
`;
