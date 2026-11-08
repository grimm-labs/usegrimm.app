import React from "react";

/**
 * Grimm App icon set.
 *
 * Same design rules as the feature icons in public/icons/features:
 * rounded strokes (2px on a 24px grid), round caps and joins, and one
 * accent element. The main stroke follows `currentColor`, so icons inherit
 * text and hover colors. Pass `duotone` to paint the accent in Grimm green
 * (#01A753) on light backgrounds; on filled buttons leave it off so the
 * whole icon follows the text color.
 *
 * Icons default to 1em, so a text-size class (text-sm, text-lg…) or an
 * explicit w-/h- class sizes them.
 */

export const GRIMM_ACCENT = "#01A753";

export type IconProps = Omit<React.SVGProps<SVGSVGElement>, "children"> & {
  size?: number | string;
  duotone?: boolean;
  title?: string;
};

type StrokeIconRenderer = (accent: string) => React.ReactNode;

function createStrokeIcon(displayName: string, render: StrokeIconRenderer) {
  const Icon = ({
    size = "1em",
    duotone = false,
    title,
    ...props
  }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
      {...props}
    >
      {title && <title>{title}</title>}
      {render(duotone ? GRIMM_ACCENT : "currentColor")}
    </svg>
  );
  Icon.displayName = displayName;
  return Icon;
}

// Brand marks stay faithful to the official logos (single color).
function createBrandIcon(displayName: string, d: string) {
  // Brand marks have no accent element, so no `duotone` prop.
  const Icon = ({ size = "1em", title, ...props }: Omit<IconProps, "duotone">) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
      {...props}
    >
      {title && <title>{title}</title>}
      <path d={d} />
    </svg>
  );
  Icon.displayName = displayName;
  return Icon;
}

/* ----------------------------- Actions ----------------------------- */

export const DownloadIcon = createStrokeIcon("DownloadIcon", (accent) => (
  <>
    <path d="M4 15v2.5A3.5 3.5 0 0 0 7.5 21h9a3.5 3.5 0 0 0 3.5-3.5V15" />
    <path d="M12 3v11.5m-5-5 5 5 5-5" stroke={accent} />
  </>
));

export const RefreshIcon = createStrokeIcon("RefreshIcon", (accent) => (
  <>
    <path d="M20 11a8 8 0 0 0-14.5-4.6L4 8.5" />
    <path d="M4 3.5v5h5" stroke={accent} />
    <path d="M4 13a8 8 0 0 0 14.5 4.6l1.5-2.1" />
    <path d="M20 20.5v-5h-5" stroke={accent} />
  </>
));

export const CloseIcon = createStrokeIcon("CloseIcon", (accent) => (
  <path d="M6 6l12 12M18 6 6 18" stroke={accent} />
));

export const PlusIcon = createStrokeIcon("PlusIcon", (accent) => (
  <>
    <path d="M5 12h14" />
    <path d="M12 5v14" stroke={accent} />
  </>
));

export const MinusIcon = createStrokeIcon("MinusIcon", () => (
  <path d="M5 12h14" />
));

export const CheckIcon = createStrokeIcon("CheckIcon", (accent) => (
  <path d="m5 12.5 4.5 4.5L19 7.5" stroke={accent} />
));

export const MenuIcon = createStrokeIcon("MenuIcon", (accent) => (
  <>
    <path d="M4 6.5h16M4 12h16" />
    <path d="M4 17.5h10" stroke={accent} />
  </>
));

/* ---------------------------- Navigation ---------------------------- */

export const ChevronDownIcon = createStrokeIcon("ChevronDownIcon", () => (
  <path d="m6 9 6 6 6-6" />
));

export const ChevronLeftIcon = createStrokeIcon("ChevronLeftIcon", () => (
  <path d="m15 6-6 6 6 6" />
));

export const ArrowRightIcon = createStrokeIcon("ArrowRightIcon", (accent) => (
  <>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" stroke={accent} />
  </>
));

/* ------------------------------ Objects ----------------------------- */

export const BitcoinIcon = createStrokeIcon("BitcoinIcon", (accent) => (
  <>
    <circle cx="12" cy="12" r="9.25" />
    <path
      d="M9.5 7.5v9m0-9h3.25a2.25 2.25 0 0 1 0 4.5H9.5m0 0h3.75a2.25 2.25 0 0 1 0 4.5H9.5M11 6v1.5m0 9V18"
      stroke={accent}
      strokeWidth={1.75}
    />
  </>
));

export const MailIcon = createStrokeIcon("MailIcon", (accent) => (
  <>
    <rect x="3" y="5" width="18" height="14" rx="3.5" />
    <path d="m4.5 7.5 7.5 5.5 7.5-5.5" stroke={accent} />
  </>
));

export const CalendarIcon = createStrokeIcon("CalendarIcon", (accent) => (
  <>
    <rect x="3.5" y="5" width="17" height="15.5" rx="3.5" />
    <path d="M8 3v4M16 3v4M3.5 10h17" />
    <rect
      x="7"
      y="13"
      width="3.5"
      height="3.5"
      rx="1"
      fill={accent}
      stroke="none"
    />
  </>
));

export const UserIcon = createStrokeIcon("UserIcon", (accent) => (
  <>
    <circle cx="12" cy="8" r="4" stroke={accent} />
    <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
  </>
));

export const WarningIcon = createStrokeIcon("WarningIcon", (accent) => (
  <>
    <path d="M10.27 4.5a2 2 0 0 1 3.46 0l7.36 12.75a2 2 0 0 1-1.73 3H4.64a2 2 0 0 1-1.73-3Z" />
    <path d="M12 9v4.5M12 17h.01" stroke={accent} />
  </>
));

/* ------------------------------ Brands ------------------------------ */

// Paths: Simple Icons (CC0) for GitHub and X, official LinkedIn bug.
export const GithubIcon = createBrandIcon(
  "GithubIcon",
  "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
);

export const XIcon = createBrandIcon(
  "XIcon",
  "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
);

export const LinkedinIcon = createBrandIcon(
  "LinkedinIcon",
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
);
