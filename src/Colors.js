import logo from './logo.svg';
import './Colors.css';
import React, {Component} from "react";
import { TrackFeatures } from 'react-spotify-api'

class Colors extends Component {
  constructor(props){
    super(props)

    this.state = {
      hue: "",
      saturation: "",
      lightness: "",
      color: "",
      id: "",
      link: "",
      display: true
    }
  }

  handleLinkChange(e){
    var link = e.target.value;
    this.state.link=link;
  }

  getSpotifyData()
  {
    if (this.state.link!=null){
      if (this.state.link.split("/").length>4){
      
      var songID = this.state.link.split("/")[4];
      songID = songID.split("?")[0];
      
      this.setState({id: songID});
      }
    }

  }

  findColor(features)
 { //fetching from api, based on those values, change state of
  console.log("Find Color");
  console.log(features.data);
  
  if (features.data!== null)
  {

  if (features.data.key !== undefined )
  {

  var songKey = features.data.key;
  var tempo = features.data.tempo;
  var energy = features.data.energy;

  var hue=0;
  var saturation=0;
  var lightness=0;

  //Key
  if(songKey <= 0){
    hue= 0;
  }
  else if(songKey > 0 && songKey <= 1){
    hue= 30;
  }
  else if(songKey > 1 && songKey <= 2){
    hue= 60;
  }
  else if(songKey > 2 && songKey <= 3){
    hue= 90;
  }
  else if(songKey > 3 && songKey <= 4){
    hue= 120;
  }
  else if(songKey > 4 && songKey <= 5){
    hue= 150;
  }
  else if(songKey > 5 && songKey <= 6){
    hue= 180;
  }
  else if(songKey > 6 && songKey <= 7){
    hue= 210;
  }
  else if(songKey > 7 && songKey <= 8){
    hue= 240;
  }
  else if(songKey > 8 && songKey <= 9){
    hue= 270;
  }
  else if(songKey > 9 && songKey <= 10){
    hue= 300;
  }
  else if(songKey > 10 && songKey <= 11){
    hue= 330;
  }
  else if(songKey > 11 && songKey <= 12){
    hue= 360;
  }
  
    //Tempo
  if(tempo > 0 && tempo <= 80){
    saturation= 20;
  }

  else if(tempo > 80 && tempo <= 100){
    saturation= 35;
  } 

  else if(tempo > 100 && tempo <= 150){
    saturation= 40;
  } 

  else if(tempo > 150 && tempo <= 170){
    saturation= 60;
  } 

  else if(tempo > 150 && tempo <= 190){
    saturation= 80;
  }

  else if(tempo > 190 && tempo <= 1000){
    saturation= 100;
  }

  //Energy
  if(energy > 0 && energy <= 0.1){
    lightness= 10;
  }

  else if(energy > 0.1 && energy <= 0.2){
    lightness= 20;
  }

  else if(energy > 0.2 && energy <= 0.3){
    lightness= 30;
  }

  else if(energy > 0.3 && energy <= 0.4){
    lightness= 40;
  }
  else if(energy > 0.4 && energy <= 0.5){
    lightness= 50;
  }
  else if(energy > 0.5 && energy <= 0.6){
    lightness= 60;
  }
  else if(energy > 0.6 && energy <= 0.7){
    lightness= 70;
  }
  else if(energy > 0.7 && energy <= 0.8){
    lightness= 80;
  }
  else if(energy > 0.8 && energy <= 0.9){
    lightness= 90;
  }
  else if(energy > 0.9 && energy <= 1.0){
    lightness= 100;
  }


  this.setState({hue: hue});
  this.setState({saturation: saturation});
  this.setState({lightness: lightness});
  this.setState({color: `hsl(${(hue)}, ${(saturation)}%, ${(lightness)}%)`});
  this.setState({display: false});
  
}
  }
}

goBack = () => {
  this.state.id=null;
  this.state.link=null; 
  this.setState({display: true});
}

  render() {
    return(
    <div className="Colors">
      {this.state.display ?
       <div className="Colors-box"> 
       <p className="p">spotify colors</p>
        <input type="text" id="link" name="link" onChange={(e) => this.handleLinkChange(e)} placeholder="insert a spotify link!"></input> <br/>
         <button onClick={()=>this.getSpotifyData()} class="button">find the color</button> 
        { this.state.id ? <TrackFeatures id={this.state.id}>
          {(features) => (
              this.findColor(features),
              features ? (
               ""                     
              ) : null
          )}
      </TrackFeatures>  : null }  
      </div> : <div className="ColorCreated" style={{backgroundColor: this.state.color}}> <br/>
      
       <p className="p">spotify colors</p>
    
       <p className="p1" >your hue is {this.state.hue}  <br/>
        your saturation is {this.state.saturation}  <br/>
        your lightness is {this.state.lightness}  </p> 

          <button onClick={()=>this.goBack()} class="button">go back</button>
      </div>
      }
    </div>
    )
  }
}

export default Colors;
