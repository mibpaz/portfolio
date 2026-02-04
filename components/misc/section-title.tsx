import { TablerIcon } from "@tabler/icons-react";

type Props = {
  title: string;
  description: string;
  icon: TablerIcon;
}

export const SectionTitle = ({ title, description, icon: Icon }: Props) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="w-12 h-12 bg-surface-900 rounded-lg border border-primary flex items-center justify-center shadow-base shadow-primary-900">
        <Icon size={28} stroke={1.5} color="var(--color-primary)" />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-primary-500">{description}</p>
      </div>
    </div>
  )
}