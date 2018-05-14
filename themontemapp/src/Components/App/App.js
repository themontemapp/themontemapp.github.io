import React, { Component } from 'react';
import './App.css';
import Slider from '../Slider/Slider';
import ChatBubble from '../ChatBubble/ChatBubble';
import { getData } from '../../Data/dataStructure';
import { Battery } from '../Slider/Slider';

class App extends Component {

  state = {
    data: null
  }

  componentWillMount() {
    this.setState({
      data: getData()
    })
  }

  updateValue = (value, answer) => {
    console.log(value);

    let newData = this.state.data;

    newData.conversation.energy.user.answer.value = value;
    newData.conversation.energy.user.answer.answer = answer;

    this.setState({
      data: newData
    })
  }

  render() {
    const { data } = this.state;
    const { conversation } = data;

    return (
      <div>
        {
          conversation.energy.bot.prompts.map((prompt, i) =>
            <ChatBubble
              chatbubbleContent={prompt}
              sender='monti'
              first={i === 0}
              last={conversation.energy.bot.prompts.length - 1 === i}
              key={i}
            />
          )
        }
        {
          conversation.energy.user.answer.answer &&
          <ChatBubble
            chatbubbleContent={conversation.energy.user.answer.answer}
            sender='user'
            first
          >
            <Battery sliderState={conversation.energy.user.answer.value * 1000} />
          </ChatBubble>
        }
        <div className='dock-slider'>
          <Slider sliderData={conversation.energy} updateValue={this.updateValue} />
        </div>
      </div>
    )
  }
}

export default App;