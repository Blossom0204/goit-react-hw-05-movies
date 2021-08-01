import styled from '@emotion/styled'

export const TrendTodayTitle = styled.h1`
  font-size: 20px;
  color: #1c0224;
  margin-bottom: 15px;
  text-transform: uppercase;
  text-align: center;
`
export const TrendList = styled.ul`
  display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
`

export const TrendItem = styled.li`
  list-style: none;
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;

    box-shadow: 0px 0px 10px 5px #1c0224;
  }
`

export const MovieTitle = styled.p`
  color: #1c0224;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 16px;
  padding-left: 20px;
`
export const Img = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`
