import React from 'react'
import ReactDOM from 'react-dom'
import {Link, Route, Router, hashHistory} from 'react-router'
import navstyle from './components/maincss.js'
import Song from './components/Song.js'
import Playlist from './components/Playlist.js'
import Songsearch from './components/Songsearch.js'
import $ from 'jquery'

let App = React.createClass({
  getIntialState(){
    return ({song:'', songData: 0})
  },



  handleChange(event){
  event.preventDefault()
  var name = event.target.value
  // console.log(name)
  // this.finalChange(name)
    this.setState({song:name})
 },


 finalData(result){
    this.setState({song:'', songData:result})
    console.log(result.tracks.items)
 },


  getSong(event){
    event.preventDefault()
    // console.log(this.state.song)
    // var that = this
    $.ajax({
      url:'https://api.spotify.com/v1/search?q=' + this.state.song + '&type=track&market=US',
      success:function print(data){
        var result = data
        this.finalData(result)
        // console.log(result)
      }.bind(this)
      

    })

  },


  render(){

    // pic
    // song title
    // artist
    return (

        <div>
          <form>
            <input id= 'butt' type="text"  name = 'input'  onChange={this.handleChange}/> 
            <input type="submit" name='submit'  onClick={this.getSong} /> 

          </form>
                   
        </div>
          
    )
  }
})



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}/>
  </Router>,  
  document.getElementById('root')

)