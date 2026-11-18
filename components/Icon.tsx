import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  BadgeCheck,
  Box,
  Building,
  Building2,
  Bus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  CircleCheck,
  CircleHelp,
  Clock,
  Code,
  Coffee,
  CreditCard,
  Database,
  Gauge,
  Headset,
  Layers,
  Mail,
  Menu,
  MapPin,
  Moon,
  Palette,
  Phone,
  Rss,
  Send,
  Share2,
  ShieldCheck,
  SlidersHorizontal,
  Split,
  Star,
  Sun,
  Terminal,
  UserPlus,
  Waypoints,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the icon names used across the site (formerly Material Symbols)
 * to Lucide icon components.
 */
const iconMap: Record<string, LucideIcon> = {
  alt_route: Split,
  apartment: Building,
  arrow_forward: ArrowRight,
  arrow_outward: ArrowUpRight,
  bolt: Zap,
  call: Phone,
  check_circle: CircleCheck,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
  cloud: Box,
  code: Code,
  corporate_fare: Building2,
  database: Database,
  dark_mode: Moon,
  directions_bus: Bus,
  expand_more: ChevronDown,
  group_add: UserPlus,
  help_outline: CircleHelp,
  hub: Waypoints,
  inventory_2: Box,
  layers: Layers,
  local_cafe: Coffee,
  light_mode: Sun,
  location_on: MapPin,
  mail: Mail,
  menu: Menu,
  palette: Palette,
  payments: CreditCard,
  rss_feed: Rss,
  react: Atom,
  schedule: Clock,
  security: ShieldCheck,
  send: Send,
  share: Share2,
  speed: Gauge,
  star: Star,
  support_agent: Headset,
  terminal: Terminal,
  tune: SlidersHorizontal,
  verified: BadgeCheck,
  close: X,
};

type IconProps = {
  name: string;
  className?: string;
};

export default function Icon({ name, className = "" }: IconProps) {
  const sizeMatch = className.match(/text-\[(\d+)px\]/);
  const size = sizeMatch ? Number(sizeMatch[1]) : undefined;
  const LucideComponent = iconMap[name] ?? Circle;

  return (
    <LucideComponent
      aria-hidden="true"
      className={className}
      size={size}
      strokeWidth={1.75}
    />
  );
}
