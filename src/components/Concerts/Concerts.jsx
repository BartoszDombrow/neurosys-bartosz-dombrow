import React from 'react';
import { Content, ListHeader, List, ListElement, ListWrapper, ListItem } from './Concerts.styled';

function Concerts() {
  const listElements = [
    { date: '12.06', city: 'Poznań', place: 'Tama' },
    { date: '15.06', city: 'Gdańsk', place: 'B90' },
    { date: '28.06', city: 'Wrocław', place: 'A2' },
    { date: '3.07', city: 'Katowice', place: 'P23' },
  ];
  return (
    <Content>
      <ListHeader>Koncerty 2022!</ListHeader>
      <List>
        {listElements.map((listElement) => {
          return (
            <ListElement>
              <ListWrapper>
                <ListItem>{listElement.date}</ListItem>
                <ListItem>{listElement.city}</ListItem>
                <ListItem>{listElement.place}</ListItem>
              </ListWrapper>
            </ListElement>
          );
        })}
      </List>
    </Content>
  );
}

export default Concerts;
