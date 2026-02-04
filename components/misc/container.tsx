type Props = {
  title?: string;
  children: React.ReactNode;
}

export const Container = ({ title, children }: Props) => {
  return (
    <div>
      {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
      <div className="container bg-surface-950 rounded-xl p-4 border border-primary">
        {children}
      </div>
    </div>
  )
}