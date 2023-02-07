interface Props {
  title: string
}

function TitlePage({title}: Props) {
  return (
    <h1 className="text-3xl font-bold">{title}</h1>
  )
}

export default TitlePage