import { iconsMap } from './iconsMap';

type CategoryIconProps = {
  type: 'EXPENSE' | 'INCOME';
  category?: string;
  size?: number;
};

export function CategoryIcon({ type, category, size = 44 }: CategoryIconProps) {
  const Icon =
    iconsMap[type][(category as keyof (typeof iconsMap.EXPENSE | typeof iconsMap.INCOME)) ?? 'default'] ??
    iconsMap[type].default;

  return <Icon size={size} />;
}
