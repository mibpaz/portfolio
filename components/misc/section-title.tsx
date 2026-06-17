import { TablerIcon } from "@tabler/icons-react";

type Props = {
  title: string;
  description: string;
  icon: TablerIcon;
};

export const SectionTitle = ({ title, description, icon: Icon }: Props) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="w-12 h-12 bg-default/25 backdrop-blur-sm backdrop-brightness-150 rounded-lg border border-primary/20 flex items-center justify-center shadow-base">
        <Icon
          size={28}
          fill="var(--color-primary-900)"
          stroke={1.5}
          color="var(--color-primary)"
        />
      </div>
      <div>
        <h1 className="text-lg sm:text-xl font-mono font-normal">{title}</h1>
        <p className="text-primary text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};
