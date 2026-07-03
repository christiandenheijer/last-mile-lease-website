import {
  Layers,
  Wrench,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  Users,
  Ban,
  MapPinOff,
  TrendingUp,
  Leaf,
  Zap,
  Navigation,
  Package,
  Landmark,
  UtensilsCrossed,
  Settings2,
  ShoppingBag,
  HeartPulse,
  Building2,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Layers,
  Wrench,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  Users,
  Ban,
  MapPinOff,
  TrendingUp,
  Leaf,
  Zap,
  Navigation,
  Package,
  Landmark,
  UtensilsCrossed,
  Settings2,
  ShoppingBag,
  HeartPulse,
  Building2,
};

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Layers;
  return <Icon className={className} />;
}
