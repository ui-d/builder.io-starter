import { Builder } from '@builder.io/react'

export default function Hero(props: { text: string }) {
    let text = props?.text

    return (
        <div className="hero">
        <h1>{text}</h1>
        </div>
    )
}

Builder.registerComponent(Hero, {
    name: 'Hero',
    inputs: [
        {
            name: 'text',
            type: 'string',
            defaultValue: 'Hello World',
            required: true,
        },
    ],
})