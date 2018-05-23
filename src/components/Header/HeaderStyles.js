import Styled from 'styled-components';

const drawerWidth = 240;


const styles = theme => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    position: 'fixed',
  },
  fullWidthAppBar: {
    width: `calc(100% - ${theme.spacing.unit * 7}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});


export const Brand = Styled.div`
  color: #ffffff !important;
  margin-left: 12px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
  line-height: 60px;
  text-transform: uppercase;

  & a {
    color: #ffffff !important;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 3px;
    line-height: 60px;
    text-transform: uppercase;
    float: left;
    text-decoration: none;
    background-color: transparent;
  }
`;

export default styles;