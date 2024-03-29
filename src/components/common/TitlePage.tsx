interface Props {
  title: string
}

function TitlePage({title}: Props) {
  return (
    <h1 className="text-3xl font-bold text-slate-700 mx-4 sm:mx-0 my-4">{title}</h1>
  )
}

export default TitlePage