import { Fragment } from "react";

interface Props {
  steps: string[];
  variant: "beacon" | "lantern";
}

const themes = {
  beacon: {
    labelColor: "rgba(255,255,255,0.25)",
    arrowColor: "rgba(255,255,255,0.12)",
  },
  lantern: {
    labelColor: "#fbbf24", // amber-400
    arrowColor: "#fde68a", // amber-200
  },
};

function Arrow({ color }: { color: string }) {
  return (
    <svg width="32" height="10" viewBox="0 0 32 10" fill="none" aria-hidden="true">
      <path
        d="M0 5H25M21 2L27 5L21 8"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function StepFlow({ steps, variant }: Props) {
  const { labelColor, arrowColor } = themes[variant];
  return (
    <>
      {steps.map((step, i) => (
        <Fragment key={step}>
          <span
            className="text-[10px] font-bold uppercase tracking-[0.15em]"
            style={{ color: labelColor }}
          >
            {step}
          </span>
          {i < steps.length - 1 && <Arrow color={arrowColor} />}
        </Fragment>
      ))}
    </>
  );
}
