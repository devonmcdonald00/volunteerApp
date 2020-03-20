import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {MuiThemeProvider, Box, AppBar, MenuItem, Paper, TextField, Drawer, Button, Typography, Toolbar, Tooltip } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles.js';




class App extends Component {
  
  state = {
    buttonPressed : 0,
    screen : "home",
  }


  constructor(props){
    super(props);
    this.doSomething = this.doSomething.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.drawerClose = this.drawerClose.bind(this);

  }

  
  componentWillMount = async () =>{
    //Put async awaits in here
    try{
      console.log("\nOpening App\n");
    }
    catch(err){
      console.log("\nThere was an error: ", err, "\n");
    }
  }

  doSomething(){
    console.log("Shell");
  }
  
  handleToggle = () => this.setState({ open: !this.state.open });

  drawerClose(newScreen){
    this.setState({
      open:false,
      screen: newScreen,
    });
  }
  
  render(){
    document.body.style = 'background:#CFEAC3';
    if(this.state.screen == "volunteer"){
      return (
        <div className = "App">
           <MuiThemeProvider>
          <div style = {styles.AppBarStyle}>
              <AppBar  title = "Material-UI" >
                <Toolbar style = {styles.ToolbarStyle}>
                  <IconButton  edge = "start" color="inherit" style = {styles.IconStyle} aria-label="menu" marginRight = {200}>
                    <MenuIcon onClick = {this.handleToggle}/>
                  </IconButton>
                  Volunteer Webpage
                </Toolbar>
              </AppBar>
            </div>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <div>
              <Drawer
                docked = {false}
                width = {300}
                open = {this.state.open}
                onRequestChange = {(open) => this.setState({open})}
              >

                <Paper style={{ height: 90, width: 300, background: '#0B458A' }}>
                  <Typography style = {{color : "white", display : 'flex', justifyContent : 'center', marginTop : 35, fontFamily : 'sans-serif', fontWeight : "fontWeightBold", }}>
                    Select an option
                  </Typography>
                </Paper>
                <MenuItem onClick={() => this.drawerClose("home")} style = {{color : '#0B458A', fontFamily : 'sans-serif'}}>Go To Home</MenuItem>
                <MenuItem onClick={() => this.drawerClose("posting")} style = {{color : '#0B458A', fontFamily : 'sans-serif'}}>Post Volunteering Event</MenuItem>
                <div className = "overlay" onClick = {() => this.drawerClose("home")} ></div>
              </Drawer>
              </div>
            </MuiThemeProvider>
            <br></br><br></br><br></br><br></br>
            <header>
              This is the volunteer page
            </header>
        </div>
      );
    }
    else if(this.state.screen == "posting"){
      return (
        <div className = "App">
           <MuiThemeProvider>
          <div style = {styles.AppBarStyle}>
              <AppBar  title = "Material-UI" >
                <Toolbar style = {styles.ToolbarStyle}>
                  <IconButton  edge = "start" color="inherit" style = {styles.IconStyle} aria-label="menu" marginRight = {200}>
                    <MenuIcon onClick = {this.handleToggle}/>
                  </IconButton>
                  Volunteer Webpage
                </Toolbar>
              </AppBar>
            </div>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <div>
              <Drawer
                docked = {false}
                width = {300}
                open = {this.state.open}
                onRequestChange = {(open) => this.setState({open})}
              >

                <Paper style={{ height: 90, width: 300, background: '#0B458A' }}>
                  <Typography style = {{color : "white", display : 'flex', justifyContent : 'center', marginTop : 35, fontFamily : 'sans-serif', fontWeight : "fontWeightBold", }}>
                    Select an option
                  </Typography>
                </Paper>
                <MenuItem onClick={() => this.drawerClose("home")} style = {{color : '#0B458A', fontFamily : 'sans-serif'}}>Go To Home</MenuItem>
                <MenuItem onClick={() => this.drawerClose("volunteer")} style = {{color : '#0B458A', fontFamily : 'sans-serif'}}>Browse Volunteering Events</MenuItem>
                <div className = "overlay" onClick = {() => this.drawerClose("posting")} ></div>
              </Drawer>
              </div>
            </MuiThemeProvider>
            <br></br><br></br><br></br><br></br>
            <header>
              This is the posting page
            </header>
        </div>
      );
    }
    else{
      return (
        <div className = "App">
           <MuiThemeProvider>
          <div style = {styles.AppBarStyle}>
              <AppBar  title = "Material-UI" >
                <Toolbar style = {styles.ToolbarStyle}>
                  <IconButton  edge = "start" color="inherit" style = {styles.IconStyle} aria-label="menu" marginRight = {200}>
                    <MenuIcon onClick = {this.handleToggle}/>
                  </IconButton>
                  Volunteer Webpage
                </Toolbar>
              </AppBar>
            </div>
          </MuiThemeProvider>
          <MuiThemeProvider>
            <div>
              <Drawer
                docked = {false}
                width = {300}
                open = {this.state.open}
                onRequestChange = {(open) => this.setState({open})}
              >

                <Paper style={{ height: 90, width: 300, background: '#0B458A' }}>
                  <Typography style = {{color : "white", display : 'flex', justifyContent : 'center', marginTop : 35, fontFamily : 'sans-serif', fontWeight : "fontWeightBold", }}>
                    Select an option
                  </Typography>
                </Paper>
                <MenuItem onClick={() => this.drawerClose("volunteer")} style = {{color : '#0B458A', fontFamily : 'sans-serif'}}>Browse Volunteering Events</MenuItem>
                <MenuItem onClick={() => this.drawerClose("posting")} style = {{color : '#0B458A', fontFamily : 'sans-serif'}}>Post Volunteering Event</MenuItem>
                <div className = "overlay" onClick = {() => this.drawerClose("posting")} ></div>
              </Drawer>
              </div>
            </MuiThemeProvider>
            <br></br><br></br><br></br><br></br>
            <header>
              This is the home page
            </header>
        </div>
      );
    }

  } 
  
}

export default App;