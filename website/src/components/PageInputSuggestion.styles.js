import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: ${(props) => props.theme.colors.darkGreen};

  @media (max-width: 600px) {
    height: 60px;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 12px;
  border-radius: 8px;
  border: solid 1px ${(props) => props.theme.colors.darkGreen};

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

export const Title = styled.p`
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  font-size: 12px;
  max-height: 48px;
  overflow: hidden;

  @media (max-width: 600px) {
    max-height: 32px;
  }
`;
