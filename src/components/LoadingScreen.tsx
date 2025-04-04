import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const moveToNav = keyframes`
  0% {
    font-size: 3rem;
    transform: translate(0, 0);
    letter-spacing: 2px;
    font-weight: 600;
    color: #64ffda;
  }
  100% {
    font-size: 1.1rem;
    transform: translate(-45vw, -45vh);
    letter-spacing: 0.5px;
    font-weight: 400;
    color: #fff;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    pointer-events: none;
  }
`;

const Container = styled.div<{ isLoading: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #0f172a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${props => !props.isLoading && fadeOut} 0.5s ease-in-out 0.5s forwards;
`;

const Title = styled.h1<{ isLoading: boolean }>`
  position: absolute;
  color: #64ffda;
  font-size: 3rem;
  margin: 0;
  padding: 0;
  font-weight: 600;
  letter-spacing: 2px;
  animation: ${props => !props.isLoading && moveToNav} 0.8s ease-in-out forwards;
  white-space: nowrap;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
`;

const ProgressContainer = styled.div<{ isLoading: boolean }>`
  width: 200px;
  height: 2px;
  background: rgba(100, 255, 218, 0.2);
  border-radius: 4px;
  overflow: hidden;
  opacity: ${props => (props.isLoading ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const progressAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const ProgressBar = styled.div`
  height: 100%;
  background: #64ffda;
  animation: ${progressAnimation} 2s ease-out forwards;
`;

const Subtitle = styled.div<{ isLoading: boolean }>`
  color: rgba(100, 255, 218, 0.8);
  margin-top: 1rem;
  font-size: 1rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  opacity: ${props => (props.isLoading ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) return prev + 1;
        clearInterval(progressInterval);
        return 100;
      });
    }, 20);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <Container isLoading={isLoading}>
      <Title isLoading={isLoading}>Benjamin Kakar</Title>
      <ProgressContainer isLoading={isLoading}>
        <ProgressBar />
      </ProgressContainer>
      <Subtitle isLoading={isLoading}>Loading {progress}%</Subtitle>
    </Container>
  );
};

export default LoadingScreen; 