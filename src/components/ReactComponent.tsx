 import * as React from 'react'; // we need this to make JSX compile

type CardProps = {
  title: string,
  paragraph: string
}

export const ReactComponent = ({ title, paragraph }: CardProps) => (
  <>
    <h2>{ title }</h2>
    <p>
      { paragraph }
    </p>
  </>
)

const el = <ReactComponent title="Welcome to TSX!" paragraph="Hi Stan!" />

export default el
