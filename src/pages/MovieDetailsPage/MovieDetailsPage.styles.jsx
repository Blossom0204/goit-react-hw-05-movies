import styled from '@emotion/styled/'

export const MovieInfo = styled.div`
  display: flex;
  padding-bottom: 30px;
  padding-top: 30px;
`

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const MovieImg = styled.img`
  border-radius: 10px;
`
export const MovieTitle = styled.h1`
  color: rgb(28, 2, 36);
  font-size: 30px;
  margin-bottom: 15px;
`
export const MovieYear = styled.p`
  margin-bottom: 10px;
`
export const MovieScore = styled.p`
  margin-bottom: 10px;
`

export const Overview = styled.h2`
  color: rgb(28, 2, 36);
  margin-bottom: 15px;
`

export const TextOverview = styled.p`
  margin-bottom: 10px;
`

export const MovieGenres = styled.h2`
  color: rgb(28, 2, 36);
  margin-bottom: 15px;
`

export const ListGenres = styled.ul``

export const Item = styled.li``

export const ListInfo = styled.ul`
  border-bottom: 1px solid #2a363b;
  padding-bottom: 30px;
`
export const Link = styled.link``
export const BtnWrap = styled.button`
  width: 100px;
  margin-right: 20px;
  background-color: #ebedf32c;
  color: rgb(34, 4, 43);
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #1f3d9e30;
  box-shadow: 0 12px 16px 0 #278cbb3d, 0 17px 50px 0 #1f3d9e30;
  &:hover {
    border-radius: 4px;
    background-color: #020c2b2c;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 12px 16px 0 #278cbb3d, 0 17px 50px 0 #1f3d9e30;
  }
`

export const BtnGoBack = styled.button`
  background-color: #ebedf32c;
  text-decoration: none;
  color: rgb(34, 4, 43);
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid #1f3d9e30;
  box-shadow: 0 12px 16px 0 #278cbb3d, 0 17px 50px 0 #1f3d9e30;
  &:hover {
    border-radius: 4px;
    background-color: #020c2b2c;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 12px 16px 0 #278cbb3d, 0 17px 50px 0 #1f3d9e30;
  }
`
