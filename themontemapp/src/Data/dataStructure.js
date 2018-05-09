export const getData = () => ({
    conversation: [
        {
            type: 'button',
            bot: {
                prompts: ['How are you doing', 'And something about Monti', 'somethin more about med'],
                responds: 'That sounds something'
            },
            user: {
                options: [
                    {
                        answer: 'Fine',
                        value: 1
                    },
                    {
                        answer: 'Alright',
                        value: 2
                    }
                ],
                answer: null
            }
        },
        {
            type: 'slider',
            bot: {
                prompts: ['How relaxed do you feel right now?'],
                responds: []
            },
            user: {
                options: [
                    {
                        answer: 'Not relaxed',
                        value: 1
                    },
                    {
                        answer: 'Slightly relaxed',
                        value: 2
                    },
                    {
                        answer: 'Relaxed',
                        value: 3
                    },
                    {
                        answer: 'Very relaxed',
                        value: 4
                    }
                ],
                answer: {
                    answer: '',
                    value: null
                }
            }
        }
    ],
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