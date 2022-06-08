import style from "styled-components";

export const Flex = style.div`
    display: flex;
  align-items: center;
  & > div,
  & > ul {
    flex: 1;
  }

  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
