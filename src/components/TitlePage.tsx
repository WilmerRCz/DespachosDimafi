interface Props {
  title: string
}

function TitlePage({title}: Props) {
  return (
    <h1>{title}</h1>
  )
}

export default TitlePage