export const getData = () => ({
    introConversation: {
        start: {
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
        }
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