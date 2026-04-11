type Props = {
  title?: string;
  children: React.ReactNode;
};

export const Container = ({ title, children }: Props) => {
  return (
    <div>
      {title && <h2 className="text-xl font-mono font-normal mb-2">{title}</h2>}
      <div className="container bg-default rounded-xl p-4 border border-primary">
        {children}
      </div>
    </div>
  );
};
