import styled from '@emotion/styled'

export const Nav = styled.nav`
  & > a {
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 500;
    color: #360542;
    font-size: 18px;
    &:hover {
      color: #8f0688;
      text-shadow: 1px 1px 2px #fff, 0 0 10px rgb(128, 6, 121);
    }
  }
`
