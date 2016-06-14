import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';

import {
  GiftedMessenger,
  Actions,
  Avatar,
  Bubble,
  BubbleText,
  Composer,
  Day,
  InputToolbar,
  Location,
  Message,
  Send,
  Time,
  DefaultStyles,
} from './react-native-gifted-messenger/GiftedMessenger';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
      ],
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        messages: [
          {key: Math.round(Math.random() * 100000), user: {
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
            id: 1,
          }, position: 'left', text: 'Hi avatar', time: new Date(Date.UTC(2016, 5, 14, 17, 30, 0))},

          {key: Math.round(Math.random() * 100000), user: {
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
            id: 1,
          }, position: 'left', text: 'See you soon', time: new Date(Date.UTC(2016, 5, 13, 17, 30, 0))},


          // {key: Math.round(Math.random() * 100000), user: {
          //   name: 'Farid Safi',
          //   id: 2,
          // }, position: 'right', location: {longitude: -122.04120235, latitude: 37.33756603}, time: new Date(Date.UTC(2016, 5, 11, 17, 10, 0))},

          {
            key: Math.round(Math.random() * 100000),
            user: {
              name: 'Farid Safi',
              id: 2,
            },
            position: 'right',
            time: new Date(Date.UTC(2016, 5, 12, 17, 0, 0)),
            text: 'Some text',
            renderCustomView: (message) => {
              return (
                <View
                  style={{
                    position: 'absolute',
                    left: -10,
                    top: 8,
                    backgroundColor: 'green',
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                  }}
                />
              );
            },
          },

          {key: Math.round(Math.random() * 100000), user: {
            name: 'Club Mate',
            id: 3,
          }, position: 'left', text: 'Where are you?', time: new Date(Date.UTC(2016, 5, 12, 17, 0, 0))},


          {key: Math.round(Math.random() * 100000), position: 'left', text: 'Message', time: new Date(Date.UTC(2016, 5, 11, 17, 0, 0))},
          {key: Math.round(Math.random() * 100000), position: 'left', text: 'Message', time: new Date(Date.UTC(2016, 5, 10, 17, 0, 0))},
          {key: Math.round(Math.random() * 100000), position: 'left', text: 'Message', time: new Date(Date.UTC(2016, 5, 9, 17, 0, 0))},
          {key: Math.round(Math.random() * 100000), position: 'left', text: 'Message', time: new Date(Date.UTC(2016, 5, 8, 17, 0, 0))},
          {key: Math.round(Math.random() * 100000), position: 'left', text: '1 june', time: new Date(Date.UTC(2016, 5, 7, 17, 0, 0))},
          {key: Math.round(Math.random() * 100000), position: 'left', text: '20 may', time: new Date(Date.UTC(2016, 4, 20, 17, 0, 0))},
          {key: Math.round(Math.random() * 100000), position: 'left', text: 'Oldest Message', time: new Date(Date.UTC(2016, 4, 1, 17, 0, 0))},
        ]
      });
    }, 0); // simulating network

  }

  componentDidMount() {
    // setTimeout(() => {
    //   const messages = this.state.messages.slice(0);
    //   messages.shift();
    //
    //   this.setState({
    //     messages: messages,
    //   })
    // }, 2000);

    //
    // setTimeout(() => {
    //   this.setState({
    //     messages: GiftedMessenger.append(this.state.messages, {
    //       text: 'Hello Farid',
    //       time: new Date(),
    //       user: {
    //         id: 1,
    //         name: 'React Native',
    //         avatar: 'https://facebook.github.io/react/img/logo_og.png',
    //       },
    //       key: Math.round(Math.random() * 100000),
    //     }),
    //   });
    // }, 2000);
  }

  render() {
    return (
      <GiftedMessenger
        locale={'fr'}
        customStyles={DefaultStyles}

        messages={this.state.messages}
        onSend={this.onSend.bind(this)}

        renderActions={(props) => {
          // icon={() => {
          //   return (
          //     <Image
          //       style={{
          //         width: 20,
          //         height: 20,
          //       }}
          //       source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          //     />
          //   );
          // }}
          return (
            <Actions
              {...props}
            />
          );
        }}
        renderAvatar={(props) => {
          return (
            <Avatar {...props} onPress={(user) => {
              console.log(user);
            }}/>
          );
        }}
        renderBubble={(props) => {
          return (
            <Bubble {...props}/>
          );
        }}
        renderBubbleText={(props) => {
          return (
            <BubbleText {...props}/>
          );
        }}
        renderComposer={(props) => {
          return (
            <Composer {...props}/>
          );
        }}
        renderDay={(props) => {
          return (
            <Day {...props}/>
          );
        }}
        renderInputToolbar={(props) => {
          return (
            <InputToolbar {...props}/>
          );
        }}
        renderLocation={(props) => {
          return (
            <Location {...props}/>
          );
        }}
        renderMessage={(props) => {
          return (
            <Message {...props}/>
          );
        }}
        renderSend={(props) => {
          return (
            <Send {...props}/>
          );
        }}
        renderTime={(props) => {
          return (
            <Time {...props}/>
          );
        }}


      />
    );
  }

  onSend(message) {
    this.setState({
      messages: GiftedMessenger.append(this.state.messages, {
        ...message,
        time: new Date(),
        user: {
          id: 2,
          name: 'Farid Safi',
          // avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
        key: Math.round(Math.random() * 100000),
      }),
    });
  }
}

export default App;