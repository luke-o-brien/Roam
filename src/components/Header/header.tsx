type headerProps = {
  appTitle: string
}

export const Header: React.FC<headerProps> = ({ appTitle }) => {
  return (
    <p>{appTitle}</p>
  )
}