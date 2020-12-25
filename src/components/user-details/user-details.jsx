import React from "react";
import UserInfo from "../user-info/user-info";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import logo from '../../assets/image 2.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '600px'
  },
}));

const UserDetailsComponent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const user = {
    name: 'Pasha',
    email: 'pasha@email.com',
    logo: logo
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <UserInfo user={user} />
      <AppBar position="static">
        <Tabs className="app-bar" value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h2>Some title</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptate reprehenderit quod harum officia tenetur deleniti esse repellat recusandae qui nihil provident, at aliquid voluptas nisi temporibus a libero reiciendis.
        </TabPanel>
      <TabPanel value={value} index={1}>
        <h2>Some title</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sunt minus cupiditate, voluptatibus ab esse fugiat optio inventore dolorum enim maiores dolore consequuntur voluptates voluptatum ipsum. Voluptatum architecto animi ullam!
        </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>Some title</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus ipsum veritatis rerum quo pariatur maxime harum delectus fugit, tempora quibusdam facere autem, commodi laudantium enim aperiam eius voluptas exercitationem.
        </TabPanel>
    </div>
  );
};

export default UserDetailsComponent;
