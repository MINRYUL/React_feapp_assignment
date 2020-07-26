import React from "react";

const API_WEATHER = 'http://localhost:8888/weather-service/weathers'

class Weather extends React.Component{
  state = {
    weather : [],
    main : [],
  }
  componentDidMount() {
      const { cityName } = this.props.match.params;
      const api = `${API_WEATHER}?cityName=${cityName}`;

      const weatherInfo = fetch(api)
        .then(res => res.json())
        .then(data => {
          this.setState({
            weathers: data.weather[0].main,
            detail: data.weather[0].description,
            temp: data.main.temp,
          });
        })
        .catch(function(err) {
          console.error(err);
       });
  }
  render(){
    const { cityName } = this.props.match.params;
    const weatherGet = this.state;
    return(
      <div>
        <h2>{cityName}</h2>
        <h3>weather : {weatherGet.weathers}</h3>
        <h3>description : {weatherGet.detail}</h3>
        <h3>temp : {weatherGet.temp}</h3>
      </div>
     );
  }
}
export default Weather;
