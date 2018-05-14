export const getData = () => ({
    introConversation: {
        start: {
            type: 'button',
            bot: {
                prompts: ["Hello, i'm Monti 👋", "I can help you find areas in the city that matches your state of mind.", "Shall we begin?"],
                responds: null
            },
            user: {
                options: [
                    {
                        answer: 'Find areas?',
                        value: 1,
                        next: "findAreas",
                    },
                    {
                        answer: 'How do you match?',
                        value: 2,
                        next: "howDoYouMatch",
                    },
                    {
                        answer: 'Lets do this!',
                        value: 3,
                        next: "readyToBegin", 
                    }
                ],
                answer: null
            }
        },
        findAreas: {
            type: 'button',
            bot: {
                prompts: ["I can hear 👂, smell 👃 and see 👀 things people normally cannot in the city.", "Me and my other friends measure this all the time.", "And we use this information to find areas."],
                responds: null
            },
            user: {
                options: [
                    {
                        answer: 'You and your friends?',
                        value: 1,
                        next: "youAndYourFriends",
                    },
                    {
                        answer: 'Sounds cool!',
                        value: 2,
                        next: "readyToBegin", 
                    }
                ]
            }
        },
        youAndYourFriends: {
            type: 'button',
            bot: {
                prompts: ["Well there are sensors like me all over town.", "And we all work together."],
                responds: null
            },
            user: {
                options: [
                    {
                        answer: 'Sounds Cool!',
                        value: 1,
                        next: "readyToBegin",
                    }
                ]
            }
        },
        howDoYouMatch: {
            type: 'button',
            bot: {
                prompts: ["From my information about the city and your answers I can personalise a specific area to you.", "So tell me how you feel and I can help you find solitutude."],
                responds: null
            },
            user: {
                options: [
                    {
                        answer: "Solitude?",
                        value: 1,
                        next: "solitude"
                    }
                ]
            }
        },
        solitude: {
            type: 'button',
            bot: {
                prompts: ["It's a state of mind, where you are able to relax, be creative, …", "Well you just feel content and reflects over issues."],
                responds: ["Okay, I'm gonna ask you a few questions", "When you answer think of how you feel right now 💖"]
            },
            user: {
                options: [
                    {
                        answer: 'Alright, lets do this!',
                        value: 1,
                        next: "readyToBegin",
                    },
                ]
            }
        },
        readyToBegin: {
            type: 'button',
            bot: {
                prompts: ["Okay, I'm gonna ask you a few questions", "When you answer think of how you feel right now 💖"],
                responds: null
            },
            user: {
                options: [
                    {
                        answer: 'I promise 🤞',
                        value: 1,
                        next: "goToConversation",
                    },
                ]
            }
        },
    },
    
    conversation: {
        test: {
            type: 'button',
            bot: {
                prompts: ['How are you doing'],
                responds: 'That sounds something'
            },
            user: {
                options: [
                    {
                        answer: 'Fine',
                        value: 1,
                    },
                    {
                        answer: 'Alright',
                        value: 2,
                    }
                ],
                answer: null
            }
        },
        energy: {
            type: 'slider',
            bot: {
                prompts: ['How much energy do you have to spare?'],
                responds: []
            },
            user: {
                options: [
                    {
                        answer: "I don't feel energetic at all",
                        value: 1
                    },
                    {
                        answer: "I don't feel energetic",
                        value: 2
                    },
                    {
                        answer: 'I feel slightly energetic',
                        value: 3
                    },
                    {
                        answer: 'I feel energetic',
                        value: 4
                    },
                    {
                        answer: 'I feel very energetic',
                        value: 5
                    },
                ],
                answer: {
                    answer: '',
                    value: null
                }
            }
        }
    },
    conversationHistory: [
        {
            time: null,
            day: null,
            conversations: [
                {
                    time: 'hh:mm:ss',
                    date: 'dd-mm-yy',
                    conversation: {

                    }
                }
            ]
        }
    ]
})