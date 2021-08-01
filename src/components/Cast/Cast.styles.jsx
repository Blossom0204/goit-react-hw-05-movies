import styled from '@emotion/styled'

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin: -10px;
  padding: 15px 0 0 0;
`

export const CastItem = styled.li`
  margin: 10px;
  width: 120px;
  padding: 5px;
  border-radius: 5px;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100px;
  height: 150px;
  margin-left: 5px;
  border-radius: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.05);
    cursor: zoom-in;
    cursor: pointer;
  }
`

export const CastName = styled.p``

export const CastCharacter = styled.p`
  font-size: 12px;
`
