import Styled from 'styled-components';


export const FormDialogStyles = {
  flex: {
    flex: 1,
  },
  gridContainer: {
    padding: '8%  10%'
  },
  dialogContainer: {
    background: 'rgb(245, 245, 245)',
  },
  fieldArrayItem: {
    padding: '1% 5%',
    margin: '1% 0',
    background: 'aliceblue',
  },
  removeButton: {
    marginTop: '3.8%'
  },
  danger: {
    color: 'red'
  }
};

export const Card = Styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  border: none;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1)
`;


export const Page = Styled.div`
  width: 100%;
  height: 100%;
`;

