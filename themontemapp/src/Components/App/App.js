import React, { Component } from 'react';
import './App.css';

import { getData } from '../../Data/dataStructure'

class App extends Component {
  render() {

    console.log(getData());

    return (
      <div>
        {/* This is the app component¨ */}
        {
          getData().conversation.map((con, i) => {
            return (
              <div key={i}>
                <div>
                  {con.bot.prompts.map(prompt =>
                    <p key={prompt}>{prompt}</p>
                  )}
                </div>
                <div>
                  {con.user.options.map(opt =>
                    <p style={{ textAlign: 'right' }} key={opt.value}>{opt.answer}</p>
                  )}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App;
